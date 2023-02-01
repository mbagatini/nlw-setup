import { Router } from 'express';
import WebPush from 'web-push';
import { z } from 'zod';

export const notificationsRoutes = Router();

/**
 * 	VAPID keys should be generated only once.
	console.log(WebPush.generateVAPIDKeys())

	publicKey: 'BH_auqEhhrpn9BuVAM1Vo8qGPiQmMIZK7ao5g8gV5dMifiywpacf66tb8Fv9qNc5Y6Bb9iq3cfWvDIKcxqScKxo',
	privateKey: 'dxUXac1TfrIH-FljqOvoqJKWDJoz64NLxJ7EGROTX68'
*/

const vapidKeys = {
	publicKey: 'BH_auqEhhrpn9BuVAM1Vo8qGPiQmMIZK7ao5g8gV5dMifiywpacf66tb8Fv9qNc5Y6Bb9iq3cfWvDIKcxqScKxo',
	privateKey: 'dxUXac1TfrIH-FljqOvoqJKWDJoz64NLxJ7EGROTX68'
};

WebPush.setVapidDetails(
	'http://localhost:3333',
	vapidKeys.publicKey,
	vapidKeys.privateKey
);

notificationsRoutes.get('/public_key', (request, response) => {
	response.json({ public_key: vapidKeys.publicKey });
});

notificationsRoutes.post('/register', (request, response) => {
	// console.log(request.body);

	// next: save the subscription to the user
	// const getSubscriptionBody = z.object({
	// 	subscription: z.object({
	// 		endpoint: z.string(),
	// 		keys: z.object({
	// 			p256dh: z.string(),
	// 			auth: z.string(),
	// 		})
	// 	})
	// });

	response.status(201).send();
})

notificationsRoutes.post('/send', (request, response, next) => {
	const getSubscriptionBody = z.object({
		subscription: z.object({
			endpoint: z.string(),
			keys: z.object({
				p256dh: z.string(),
				auth: z.string(),
			})
		})
	});

	try {
		const { subscription } = getSubscriptionBody.parse(request.body);

		setTimeout(async () => {
			WebPush.sendNotification(subscription, 'My beatiful message ihuuu')
				.then(() => {
					response.status(201).send();
				})
				.catch(error => {
					console.error
					if (error.statusCode === 406) {
						response.status(500).send('Excessive notifications sent. Please try again in some minutes.');
					} else {
						response.status(500).send('Problem sending notifications.')
					}
				})
		}, 1500);
	} catch (error) {
		next(error);
	}
})

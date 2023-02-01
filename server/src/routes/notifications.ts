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

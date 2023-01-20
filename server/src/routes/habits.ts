import { Router } from 'express';

import { prisma } from '../services/prisma';

export const habitsRoutes = Router();

habitsRoutes.get('/', async (request, response) => {
	const habits = await prisma.habit.findMany({
		include: {
			weekdays: { select: { weekday: true } }
		}
	});

	response.json(habits);
});

	return response.json(habits);
});
import { Router } from 'express';

import { prisma } from '../services/prisma';

export const habitsRoutes = Router();

habitsRoutes.get('/', async (request, response) => {
	const habits = await prisma.habit.findMany();

	return response.json(habits);
});
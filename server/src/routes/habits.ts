import dayjs from 'dayjs';
import { Router } from 'express';
import { z } from "zod";

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

habitsRoutes.post('/', async (request, response, next) => {
	const habitBody = z.object({
		title: z.string(),
		weekdays: z.array(z.number().min(0).max(6))
	});

	try {
		const { title, weekdays } = habitBody.parse(request.body);

		// Create a date with the first hour (00:00:00)
		const today = dayjs().startOf('day').toDate();

		await prisma.habit.create({
			data: {
				title,
				created_at: today,
				weekdays: {
					create: weekdays.map((weekday: number) => { return { weekday } })
				}
			}
		});

		return response.status(201).send();
	} catch (error) {
		return next(error);
	}
});
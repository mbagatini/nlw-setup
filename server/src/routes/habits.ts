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

habitsRoutes.get('/day', async (request, response, next) => {
	const getDayParams = z.object({
		date: z.coerce.date()
	});

	try {
		const { date } = getDayParams.parse(request.query);
		const localeDate = dayjs(date).startOf('day');
		const weekday = dayjs(localeDate).day();

		// Habits of the weekday
		const habits = await prisma.habit.findMany({
			where: {
				created_at: {
					lte: date
				},
				weekdays: {
					some: { weekday }
				}
			}
		});

		// Completed habits
		const day = await prisma.day.findFirst({
			where: {
				date: localeDate.toDate()
			},
			include: {
				dayHabits: {}
			}
		});

		const completedHabits = day?.dayHabits?.map(dayHabit => dayHabit.habit_id);

		response.json({
			target: habits,
			completed: completedHabits
		});
	} catch (error) {
		next(error);
	}
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

		response.status(201).send();
	} catch (error) {
		next(error);
	}
});

habitsRoutes.patch('/:id/toggle', async (req, res, next) => {
	const routeParams = z.object({
		id: z.string().uuid(),
	});

	try {
		const { id } = routeParams.parse(req.params);

		const habit = await prisma.habit.findUnique({
			where: { id }
		});

		if (!habit) {
			return res.status(404).send('Habit not found');
		}

		// Check day is created
		const today = dayjs().startOf('day').toDate();

		let day = await prisma.day.findUnique({
			where: { date: today }
		});

		if (!day) {
			day = await prisma.day.create({
				data: {
					date: today
				}
			});
		}

		// Toggle the habit completion
		const dayHabitExists = await prisma.dayHabit.findUnique({
			where: {
				day_id_habit_id: {
					day_id: day.id,
					habit_id: id
				}
			}
		});

		if (dayHabitExists) {
			await prisma.dayHabit.delete({
				where: {
					id: dayHabitExists.id
				}
			})
		} else {
			await prisma.dayHabit.create({
				data: {
					habit_id: id,
					day_id: day.id
				}
			});
		}

		res.status(201).send();
	} catch (error) {
		next(error);
	}
})
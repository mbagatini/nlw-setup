import * as Popover from '@radix-ui/react-popover';
import * as Progress from '@radix-ui/react-progress';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { Checkbox } from './Checkbox';
import { api } from '../lib/api';
import dayjs from 'dayjs';

type SummaryHabits = {
	date: Date;
	amount: number;
	completed: number;
}

type Habit = {
	id: string;
	title: string;
	created_at: string;
}

type DayHabits = {
	target: Habit[]
	completed: string[]
}

interface HabitDayProps {
	data: SummaryHabits;
}

export function HabitDay({ data: day }: HabitDayProps) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [dayHabits, setDayHabits] = useState<DayHabits>({} as DayHabits);

	const completedPercentage = day.amount == 0 ? 0 : Math.round((day.completed / day.amount) * 100);

	const formattedDate = dayjs(day.date).format('DD/MM');
	const weekdayDescription = dayjs(day.date).format('dddd');

	useEffect(() => {
		if (modalIsOpen) {
			api.get('/habits/day', {
				params: {
					date: day.date.toISOString()
				}
			}).then(response => {
				setDayHabits(response.data);
			})
		}

	}, [modalIsOpen])

	return (
		<Popover.Root onOpenChange={status => setModalIsOpen(status)}>
			<Popover.Trigger
				className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
					'bg-violet-900 border-violet-700': completedPercentage >= 1 && completedPercentage < 20,
					'bg-violet-800 border-violet-600': completedPercentage >= 20 && completedPercentage < 40,
					'bg-violet-700 border-violet-500': completedPercentage >= 40 && completedPercentage < 60,
					'bg-violet-600 border-violet-500': completedPercentage >= 60 && completedPercentage < 80,
					'bg-violet-500 border-violet-400': completedPercentage >= 80
				})}
			/>
			<Popover.Portal>
				<Popover.Content sideOffset={5} className="min-w-[320px] bg-zinc-900 rounded-2xl p-6 text-white flex flex-col">
					<span className='text-zinc-400 font-semibold'>{weekdayDescription}</span>
					<span className='font-extrabold text-3xl leading-tight mt-2 mb-4'>{formattedDate}</span>

					<Progress.Root className="h-3 bg-zinc-700 rounded-xl mb-6">
						<Progress.Indicator className="h-3 w-3/4 bg-violet-600 rounded-xl"
							aria-label='Progresso dos hábitos completados no dia'
							style={{ width: `${completedPercentage}%` }}
						/>
					</Progress.Root>

					{dayHabits.target && (
						<div className='flex flex-col gap-3'>
							{dayHabits.target.map(habit => {
								const habitCompleted = dayHabits.completed && dayHabits.completed.includes(habit.id);

								return <Checkbox
									key={habit.id}
									title={habit.title}
									checked={!!habitCompleted}
									titleStyle="font-semibold text-xl leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400"
								/>
							})}
						</div>
					)}

					<Popover.Arrow height={8} width={16} className="fill-zinc-900" />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root >
	)
}
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { useState } from 'react';

import dayjs from 'dayjs';
import { HabitsList } from './HabitsList';
import { Progressbar } from './Progressbar';

type SummaryHabits = {
	date: Date;
	amount: number;
	defaultCompleted: number;
}

interface HabitDayProps {
	data: SummaryHabits;
}

export function HabitDay({ data: day }: HabitDayProps) {
	const [habitsCompletedAmount, setHabitsCompletedAmount] = useState(day.defaultCompleted);

	const formattedDate = dayjs(day.date).format('DD/MM');
	const weekdayDescription = dayjs(day.date).format('dddd');

	const completedPercentage = day.amount == 0 ? 0 : Math.round((habitsCompletedAmount / day.amount) * 100);

	function handleCompletedChange(completed: number) {
		setHabitsCompletedAmount(completed);
	}

	return (
		<Popover.Root>
			<Popover.Trigger
				className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background", {
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

					<Progressbar percentage={completedPercentage} />

					<HabitsList date={day.date} handleCompletedChange={handleCompletedChange} />

					<Popover.Arrow height={8} width={16} className="fill-zinc-900" />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root >
	)
}
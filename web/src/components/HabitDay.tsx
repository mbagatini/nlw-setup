import * as Popover from '@radix-ui/react-popover';
import * as Progress from '@radix-ui/react-progress';
import clsx from 'clsx';
import { useState } from 'react';

import { Checkbox } from './Checkbox';

interface HabitProps {
	amount: number;
	completed: number;
}

interface HabitDayProps {
	data: HabitProps;
}

export function HabitDay({ data }: HabitDayProps) {
	const completedPercentage = Math.round((data.completed / data.amount) * 100);
	const [progress, setProgress] = useState(completedPercentage);

	const checkboxClass = "font-semibold text-xl leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400";

	return (
		<Popover.Root>
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
					<span className='text-zinc-400 font-semibold'>terça-feira</span>
					<span className='font-extrabold text-3xl leading-tight mt-2 mb-4'>03/01</span>

					<Progress.Root className="h-3 bg-zinc-700 rounded-xl mb-6">
						<Progress.Indicator className="h-3 w-3/4 bg-violet-600 rounded-xl"
							aria-label='Progresso dos hábitos completados no dia'
							style={{ width: `${progress}%` }}
						/>
					</Progress.Root>

					<div className='flex flex-col gap-3'>
						<Checkbox title="minha atividade" className={checkboxClass} />
						<Checkbox title="minha atividade" className={checkboxClass} />
						<Checkbox title="minha atividade" className={checkboxClass} />
					</div>

					<Popover.Arrow height={8} width={16} className="fill-zinc-900" />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root >
	)
}
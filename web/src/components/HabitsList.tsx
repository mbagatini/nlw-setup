import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { api } from "../lib/api";
import { Checkbox } from "./Checkbox";

type Habit = {
	id: string;
	title: string;
	created_at: string;
}

type DayHabits = {
	target: Habit[]
	completed: string[]
}

interface HabitsListProps {
	date: Date;
	handleCompletedChange: (completed: number) => void;
}

export function HabitsList({ date, handleCompletedChange }: HabitsListProps) {
	const [dayHabits, setDayHabits] = useState<DayHabits>({} as DayHabits);

	const today = dayjs().startOf('day');
	const isPastDate = dayjs(date).isBefore(today);

	function handleToggleHabit(checked: boolean, habitId: string) {
		api.patch(`/habits/${habitId}/toggle`).then((response) => {
			let updatedHabits = { ...dayHabits };

			if (checked) {
				updatedHabits.completed.push(habitId);
			} else {
				updatedHabits.completed = dayHabits.completed.filter(id => id !== habitId);
			}

			setDayHabits(updatedHabits);
			handleCompletedChange(updatedHabits.completed.length);
		})
	}

	useEffect(() => {
		api.get('/habits/day', {
			params: {
				date: date.toISOString()
			}
		}).then(response => {
			setDayHabits(response.data);
		})

	}, [])

	return (
		<div className='flex flex-col gap-3'>
			{dayHabits.target && dayHabits.target.map(habit => {
				const habitCompleted = dayHabits.completed && dayHabits.completed.includes(habit.id);

				return <Checkbox
					key={habit.id}
					title={habit.title}
					defaultChecked={!!habitCompleted}
					disabled={isPastDate}
					onCheckedChange={checked => handleToggleHabit(!!checked, habit.id)}
					titleStyle="font-semibold text-xl leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400"
				/>
			})}
		</div>
	)
}
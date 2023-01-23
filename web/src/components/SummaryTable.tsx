import { generateDatesFromYearBeginning } from "../utils/date-functions";
import { HabitDay } from "./HabitDay";

export function SummaryTable() {
	const weekdays: string[] = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
	const dates = generateDatesFromYearBeginning();

	// Calculates the empty boxes in summary
	const minimumSummaryDatesAmount = 18 * 7;
	const datesToFillAmount = minimumSummaryDatesAmount - dates.length;

	return (
		<div className="w-full flex gap-4">
			<div className="grid grid-rows-7 gap-3">
				{
					weekdays.map((weekday, i) =>
						<div key={weekday + '-' + i} className='text-zinc-400 font-bold text-xl flex items-center justify-center h-10 w-10'>
							{weekday}
						</div>
					)
				}
			</div>

			<div className="grid grid-rows-7 grid-flow-col gap-3">
				{dates.map(date => (
					<HabitDay key={date.toString()} />
				))}

				{datesToFillAmount > 0 && Array.from({ length: datesToFillAmount }).map((value, i) =>
					<div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
				)}
			</div>
		</div>
	)
}
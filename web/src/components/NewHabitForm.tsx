import * as Dialog from '@radix-ui/react-dialog';
import { Check, X } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { Checkbox } from './Checkbox';

export function NewHabitForm() {
	const [title, setTitle] = useState("");
	const [weekdays, setWeekdays] = useState<string[]>([]);

	function handleWeekdaysChange(checked: boolean, value: string) {
		if (checked === true) {
			setWeekdays([...weekdays, value]);
		} else {
			const updatedWeekdays = weekdays.filter(w => w !== value);
			setWeekdays(updatedWeekdays);
		}
	}

	function handleHabitSubmition(e: FormEvent) {
		e.preventDefault();
	}

	return (
		<>
			<Dialog.Title className="text-white font-extrabold text-3xl leading-tight pb-6">Criar hábito</Dialog.Title>

			<form onSubmit={handleHabitSubmition} className='text-white w-full'>
				<fieldset className='flex flex-col gap-3 mb-4'>
					<label className="font-semibold" htmlFor="title">
						Qual seu comprometimento?
					</label>
					<input className="p-4 bg-zinc-800 rounded-lg placeholder:text-zinc-400"
						id="title"
						placeholder="Acordar antes das 07:00"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</fieldset>

				<fieldset className='flex flex-col gap-2'>
					<label className="font-semibold mb-3">
						Qual a recorrência?
					</label>

					<Checkbox title="Segunda-feira" onCheckedChange={isChecked => handleWeekdaysChange(isChecked === true, "1")} />
					<Checkbox title="Terça-feira" onCheckedChange={isChecked => handleWeekdaysChange(isChecked === true, "2")} />
					<Checkbox title="Quarta-feira" onCheckedChange={isChecked => handleWeekdaysChange(isChecked === true, "3")} />
					<Checkbox title="Quinta-feira" onCheckedChange={isChecked => handleWeekdaysChange(isChecked === true, "4")} />
					<Checkbox title="Sexta-feira" onCheckedChange={isChecked => handleWeekdaysChange(isChecked === true, "5")} />
					<Checkbox title="Sábado" onCheckedChange={isChecked => handleWeekdaysChange(isChecked === true, "6")} />
					<Checkbox title="Domingo" onCheckedChange={isChecked => handleWeekdaysChange(isChecked === true, "0")} />
				</fieldset>

				<button type='submit' className="w-full p-4 mt-6 rounded-lg flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 font-semibold ">
					<Check size={24} />
					Confirmar
				</button>
			</form>

			<Dialog.Close className='absolute top-6 right-6 text-zinc-400 hover:text-zinc-200'>
				<X size={24} aria-label="Close" />
			</Dialog.Close>
		</>
	)
}
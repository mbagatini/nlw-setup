import * as Dialog from '@radix-ui/react-dialog';
import { Check, X } from 'phosphor-react';
import { useState } from 'react';

import { Checkbox } from './Checkbox';

export function NewHabitForm() {
	const [title, setTitle] = useState("");

	return (
		<>
			<Dialog.Title className="text-white font-extrabold text-3xl leading-tight pb-6">Criar hábito</Dialog.Title>

			<form className='text-white w-full'>
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

					<Checkbox title="Segunda-feira" />
					<Checkbox title="Terça-feira" />
					<Checkbox title="Quarta-feira" />
					<Checkbox title="Quinta-feira" />
					<Checkbox title="Sexta-feira" />
					<Checkbox title="Sábado" />
					<Checkbox title="Domingo" />
				</fieldset>

				<Dialog.Close asChild>
					<button className="w-full p-4 mt-6 rounded-lg flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 font-semibold ">
						<Check size={24} />
						Confirmar
					</button>
				</Dialog.Close>
			</form>

			<Dialog.Close asChild className='absolute top-6 right-6 text-zinc-400 hover:text-zinc-200'>
				<X size={24} aria-label="Close" />
			</Dialog.Close>
		</>
	)
}
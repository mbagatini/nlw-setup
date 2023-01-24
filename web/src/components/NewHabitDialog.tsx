import * as Dialog from '@radix-ui/react-dialog';
import { Check, X } from 'phosphor-react';

export function NewHabitDialog() {
	return (
		<>
			<Dialog.Title className="text-white font-extrabold text-2xl pb-6">Criar hábito</Dialog.Title>

			<fieldset className='flex flex-col gap-3 mb-4'>
				<label className="text-white font-semibold" htmlFor="title">
					Qual seu comprometimento?
				</label>
				<input className="w-full h-14 p-4 bg-zinc-800 rounded-lg text-white placeholder:text-zinc-400"
					id="title"
					placeholder="Acordar antes das 07:00" />
			</fieldset>

			<fieldset className='flex flex-col '>
				<label className="text-white font-semibold" htmlFor="name">
					Qual a recorrência?
				</label>
			</fieldset>

			<Dialog.Close asChild>
				<button className="w-full h-14 mt-6 rounded-lg bg-green-600 text-white font-semibold flex items-center justify-center">
					Confirmar
				</button>
			</Dialog.Close>

			<Dialog.Close asChild className='absolute top-6 right-6 text-zinc-400 hover:text-zinc-200'>
				<X size={24} aria-label="Close" />
			</Dialog.Close>
		</>
	)
}
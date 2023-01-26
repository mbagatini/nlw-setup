import { Plus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../assets/logo.svg';
import { NewHabitForm } from './NewHabitForm';

export function Header() {
	return (
		<div className='w-full max-w-3xl flex justify-between items-center mx-auto'>
			<img src={logoImg} alt="Logotipo" />

			<Dialog.Root>
				<Dialog.Trigger asChild>
					<button type='button' className='border border-violet-500 rounded-lg px-6 py-4 font-semibold flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background'>
						<Plus size={20} className="text-violet-500" />
						Novo hábito
					</button>
				</Dialog.Trigger>

				<Dialog.Portal>
					<Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
					<Dialog.Content className="absolute bg-zinc-900 p-10 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<NewHabitForm />
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div >
	)
}
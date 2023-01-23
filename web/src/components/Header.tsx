import { Plus } from 'phosphor-react';

import logoImg from '../assets/logo.svg';

export function Header() {
	return (
		<div className='w-full max-w-3xl flex justify-between items-center mx-auto'>
			<img src={logoImg} alt="Logotipo" />
			<button type='button' className='border border-violet-500 rounded-lg px-6 py-4 font-semibold flex items-center gap-3 hover:border-violet-300'>
				<Plus size={20} className="text-violet-500" />
				Novo hábito
			</button>
		</div>
	)
}
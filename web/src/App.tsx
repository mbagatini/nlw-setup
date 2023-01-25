import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import { api } from './lib/api';

import './lib/dayjs.ts';
import './styles/global.css';

type SummaryHabits = {
	id: string,
	date: string,
	amount: number,
	completed: number
}

export function App() {
	const [summary, setSummary] = useState<SummaryHabits[]>([]);

	useEffect(() => {
		api.get('/habits/summary').then(response => {
			setSummary(response.data);
		});
	}, []);

	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<div className='w-full max-w-5xl px-6 flex flex-col gap-16 text-white'>
				<Header />
				<SummaryTable data={summary} />
			</div>
		</div>
	)
}

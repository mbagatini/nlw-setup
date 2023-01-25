
import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';

import './lib/dayjs.ts';
import './styles/global.css';

export function App() {
	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<div className='w-full max-w-5xl px-6 flex flex-col gap-16 text-white'>
				<Header />
				<SummaryTable />
			</div>
		</div>
	)
}

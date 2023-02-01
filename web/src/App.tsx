
import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';

import './lib/dayjs.ts';
import './styles/global.css';

// Register service worker
if ("serviceWorker" in navigator) {
	try {
		navigator.serviceWorker.register("/service-worker.js").then(registration => {
			if (registration.installing) {
				console.log("Service worker installing");
			} else if (registration.waiting) {
				console.log("Service worker installed");
			} else if (registration.active) {
				console.log("Service worker active");
			}
		})
	} catch (error) {
		console.error(`Registration failed with ${error}`);
	}
}

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

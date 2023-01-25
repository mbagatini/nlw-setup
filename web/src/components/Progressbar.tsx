import * as Progress from "@radix-ui/react-progress";

interface ProgressbarProps {
	percentage: number;
}

export function Progressbar({ percentage }: ProgressbarProps) {
	return (
		<Progress.Root className="h-3 bg-zinc-700 rounded-xl mb-6">
			<Progress.Indicator className="h-3 w-3/4 bg-violet-600 rounded-xl"
				aria-label='Progresso dos hábitos completados no dia'
				style={{ width: `${percentage}%` }}
			/>
		</Progress.Root>
	)
}
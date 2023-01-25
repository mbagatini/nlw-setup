import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface CheckboxProps extends CheckboxPrimitive.CheckboxIndicatorProps {
	title: string;
}

export function Checkbox({ title, ...rest }: CheckboxProps) {
	return (
		<CheckboxPrimitive.Root className="flex gap-3 items-center group">
			<div className="w-8 h-8 border-2 border-zinc-800 rounded-lg flex items-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-none text-white"
			>
				<CheckboxPrimitive.Indicator className="p-1.5">
					<Check size={20} />
				</CheckboxPrimitive.Indicator>
			</div>
			<span className={`text-white ${rest.className}`}>{title}</span>
		</CheckboxPrimitive.Root >
	)
}
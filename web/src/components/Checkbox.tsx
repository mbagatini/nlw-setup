import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface Teste extends CheckboxPrimitive.CheckboxProps {
	title: string;
	titleStyle?: string;
}

export function Checkbox({ title, titleStyle, ...rest }: Teste) {
	return (
		<CheckboxPrimitive.Root className="flex gap-3 items-center group" {...rest}>
			<div className="w-8 h-8 border-2 border-zinc-800 rounded-lg flex items-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-none text-white"
			>
				<CheckboxPrimitive.Indicator className="p-1.5">
					<Check size={20} />
				</CheckboxPrimitive.Indicator>
			</div>
			<span className={`text-white ${titleStyle}`}>{title}</span>
		</CheckboxPrimitive.Root >
	)
}

import {
	FormControl,
	FormField,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomInputProps } from "@/types";




const CustomInput = ({ form, name, label, type }: CustomInputProps) => {
	return (
		<FormField
			control={form}
			name={name}
			render={({ field }) => (
				<div className="form-item">
					<FormLabel className="form-label">{label}</FormLabel>
					<div className="flex w-full flex-col">
						<FormControl>
							<Input
								placeholder={`Enter your ${label}`}
								className="input-class"
								type={type}
								{...field}
							/>
						</FormControl>
						<FormMessage className="form-message mt-2" />
					</div>
				</div>
			)}
		/>
	);
};

export default CustomInput;

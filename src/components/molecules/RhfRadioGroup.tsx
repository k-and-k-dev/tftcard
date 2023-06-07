// react-hook-form
import { useController } from "react-hook-form";
import type { FieldValues, UseControllerProps } from "react-hook-form";
// components
import { RadioGroup, RadioGroupProps } from "../atoms/RadioGroup";

export type RhfRadioGroupProps<T extends FieldValues> = RadioGroupProps & UseControllerProps<T>;

export const RhfRadioGroup = <T extends FieldValues>(props: RhfRadioGroupProps<T>): JSX.Element => {
    const { name, control, ...rest } = props;
    const {
        field: { ref, ...restControllerProps },
    } = useController<T>({ name, control });

    return <RadioGroup inputRef={ref} row={true} {...restControllerProps} {...rest} />;
};

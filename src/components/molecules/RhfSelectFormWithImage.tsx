// react-hook-form
import { useController } from "react-hook-form";
import type { FieldValues, UseControllerProps } from "react-hook-form";
// components
import { SelectFormProps, SelectFormWithImage } from "../atoms/SelectFormWithImage";

export type RhfSelectFormProps<T extends FieldValues> = Omit<SelectFormProps, "selectedValue"> & UseControllerProps<T>;

export const RhfSelectFormWithImage = <T extends FieldValues>(props: RhfSelectFormProps<T>): JSX.Element => {
    const { name, control } = props;
    const {
        field: { ref, onChange, value: selectedValue, ...rest },
        fieldState: { error },
    } = useController<T>({ name, control });

    return (
        <SelectFormWithImage
            inputRef={ref}
            onChange={(e) => onChange(e)}
            {...rest}
            {...props}
            selectedValue={selectedValue}
            errorMessage={(error && error.message) || props.errorMessage}
            MenuProps={{ disableScrollLock: true }}
        />
    );
};

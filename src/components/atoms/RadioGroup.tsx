// mui
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    Radio,
    RadioGroup as MuiRadioGroup,
    RadioGroupProps as MuiRadioGroupProps,
} from "@mui/material";

type RadioProps = {
    value: string;
    label: string;
};

export type RadioGroupProps = MuiRadioGroupProps & {
    inputRef?: MuiRadioGroupProps["ref"];
    errorMessage?: string;
    radioPropsList: RadioProps[];
};

export const RadioGroup: React.FC<RadioGroupProps> = ({ inputRef, radioPropsList, errorMessage, ...rest }) => {
    return (
        <>
            <FormControl error={!!errorMessage}>
                <MuiRadioGroup ref={inputRef} {...rest}>
                    {radioPropsList.map((el) => (
                        <FormControlLabel key={el.value} value={el.value} label={el.label} control={<Radio />} />
                    ))}
                </MuiRadioGroup>
            </FormControl>
            {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </>
    );
};

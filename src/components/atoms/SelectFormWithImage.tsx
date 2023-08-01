// next.js
import Image from "next/image";
// mui
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import type { SelectProps as MuiSelectProps } from "@mui/material";
import { CreateTacticianImagePath } from "../organisms/ImageWithText";

type SelectProps = {
    label: string;
    value: string;
};

export type SelectFormProps = MuiSelectProps & {
    inputRef?: MuiSelectProps["ref"];
    errorMessage?: string;
    selectPropsList: SelectProps[];
    selectedValue: string;
};

export const SelectFormWithImage: React.FC<SelectFormProps> = ({
    inputRef,
    errorMessage,
    selectPropsList,
    selectedValue,
    label,
    ...rest
}) => {
    const imagePaths: string[] = [];
    selectPropsList.map((props) => {
        const imagePath = CreateTacticianImagePath(props.value);
        // console.log(`GetTacticianImagePaths: imagePath = ${imagePath}`);
        imagePaths.push(imagePath);
    });

    return (
        <div>
            <FormControl>
                <InputLabel>{label}</InputLabel>
                <Select ref={inputRef} value={selectedValue} label={label} {...rest}>
                    {selectPropsList.map((props, index) => (
                        <MenuItem key={props.value} value={props.value}>
                            {imagePaths[index] !== "" && (
                                <Image
                                    src={imagePaths[index]}
                                    alt=""
                                    width={32}
                                    height={32}
                                    style={{ marginRight: 10 }}
                                />
                            )}
                            <label>{props.label}</label>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </div>
    );
};

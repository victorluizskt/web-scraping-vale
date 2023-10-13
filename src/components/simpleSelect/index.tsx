import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SimpleSelectProps from "../../interface/SimpleSelectProps";

const SimpleSelect = ({ 
    titleLabel, 
    valueSelect,
    onChangeSelect,
    disabled,
    array,
    setItem,
    keyRender,
}: SimpleSelectProps<any>) => (
    <FormControl
        variant="standard" 
        sx={{ m: 1, minWidth: 120, width: '100%' }} 
        size="small"
    >
        <InputLabel 
            id="demo-simple-select-standard-label"
        >
            {titleLabel}
        </InputLabel>
        <Select 
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={valueSelect}
            onChange={(e) => onChangeSelect(e.target.value)}
            disabled={disabled}
        >
            {array.length > 0 && array.map((item: any) => (
                <MenuItem
                    value={item[keyRender]}
                    onClick={() => setItem(item[keyRender])}
                >
                    {item[keyRender]}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default SimpleSelect;

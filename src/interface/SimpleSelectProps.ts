
interface SimpleSelectProps<T> {
    titleLabel: string;
    valueSelect: string;
    onChangeSelect: (selectedValue: T) => void;
    disabled: boolean;
    array: T[];
    setItem: Function;
    keyRender: string;
};

export default SimpleSelectProps;
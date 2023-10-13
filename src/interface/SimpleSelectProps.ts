interface SimpleSelectProps<T> {
    titleLabel: string;
    valueSelect: string;
    disabled: boolean;
    array: T[];
    setItem: Function;
    keyRender: string;
    state: T;
    keySave: string;
};

export default SimpleSelectProps;
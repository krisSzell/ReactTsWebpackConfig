import React, { FormEvent, useState } from "react";

import "./input.scss";

const useInput = (defaultValue: string | number) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = (event: FormEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return {
        onChange,
        value
    };
};

interface IProps {
    label?: string;
    placeholder?: string;
    value?: string | number;
    type?: "number" | "text";
}

const Input = ({ label, placeholder = "", value = "", type = "text" }: IProps) => {
    const input = useInput(value);

    return (
        <label className="input">
            {label && <span>{label}</span>}
            <input type={type} placeholder={placeholder} {...input} />
        </label>
    );
};

export default Input;

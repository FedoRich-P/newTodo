import {ComponentProps} from "react";

type InputProps = ComponentProps<'input'> & {};

export const Input = (props: InputProps) => {
    const {type, value, onChange, className, onClick, checked, ...rest} = props;
    return (
        <input {...props}/>
    );
};
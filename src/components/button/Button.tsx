import {ComponentProps} from "react";
import s from './Button.module.css'

type ButtonProps = ComponentProps<'button'> & {
    myProps?: any
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            className={`${s.button} + ${props.className ? props.className : ''}`}
            type="button"
            {...props}/>
    );
};
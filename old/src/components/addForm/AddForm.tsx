import s from './AddForm.module.css'
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import {ChangeEvent, useState} from "react";

type AddFormProps = {
    addTask: (value: string, todoListId: string) => void;
    id: string;
}

export const AddForm = ({addTask, id}: AddFormProps) => {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<boolean>(false);

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            setInputValue(e.currentTarget.value)
            setError(false)
        }
    }

    const onClickHandler = () => {
        if(inputValue) {
            addTask(inputValue, id)
            setInputValue('')
        } else {
            setError(true)
        }
    }

    return (
        <>
            <form className={s.addForm}>
                <Input
                    className={error ? s.error : ''}
                    value={inputValue}
                    onChange={onChangeInputHandler}
                />
                <Button onClick={onClickHandler}>Add task</Button>

            </form>
            {error && <span className={s.formError}>Task is empty</span>}
        </>
    );
};

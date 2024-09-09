import React from "react";
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import s from './TasksList.module.css'
import {TasksPropsType} from "../../App";

type TasksListProps = {
    tasks: TasksPropsType[];
    toggleStatus: (id: string, todoListId: string) => void;
    deleteTask: (id: string, todoListId: string) => void;
    id: string;
};

export const TasksList = ({tasks, toggleStatus, deleteTask, id}: TasksListProps) => {

    const tasksListItem = tasks.map(task => {
            const onClickInputHandler = () => {
                toggleStatus(task.id, id);
            }
            const onClickButtonHandler = () => {
                deleteTask(task.id, id);
            }
            return (
                <li className={`${s.taskItem} ${task.completed ? s.isDone : ""}`} key={task.id}>
                    <label>
                        <Input type="checkbox" checked={task.completed} onClick={onClickInputHandler}/>
                        <span>{task.title}</span>
                    </label>
                    <Button onClick={onClickButtonHandler}>delete</Button>
                </li>
            )
        }
    );

    return (
        <ul>
            {tasksListItem}
        </ul>
    );
};
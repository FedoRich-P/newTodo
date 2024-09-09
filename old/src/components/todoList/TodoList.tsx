import s from './TodoList.module.css'
import React, {ButtonHTMLAttributes, MouseEvent, MouseEventHandler, useState} from "react";
import {AddForm} from "../addForm/AddForm";
import {TasksList} from "../tasksList/TasksList";
import {Button} from "../button/Button";
import {FilterValuesType, TasksPropsType} from "../../App";

type TodoListProps = {
    id: string;
    title: string;
    tasks: TasksPropsType[]
    toggleStatus: (id: string, todoListId: string) => void;
    deleteTask: (id: string, todoListId: string) => void;
    addTask: (value: string, todoListId: string) => void;
    filter: FilterValuesType
    changeFilter: (value: FilterValuesType, todoListId: string)=> void;
};
export const TodoList = ({id, title, tasks, toggleStatus, deleteTask, addTask, changeFilter}: TodoListProps) => {

    // const [filter, setFilter] = useState<FilterValuesType>('all');
    //
    // let filteredTasks = tasks;
    //
    // switch (filter) {
    //     case 'completed':
    //         filteredTasks = tasks.filter(task => task.completed);
    //         break;
    //     case 'active':
    //         filteredTasks = tasks.filter(task => !task.completed);
    //         break;
    // }


    return (
        <>
            <div className={s.todoList}>
                <h3>{title}</h3>
                <AddForm  addTask={addTask} id={id}/>
                <ul className={s.buttonsGroup}>
                    <li>
                        <Button  onClick={()=> {changeFilter('all', id)}}>All</Button>
                    </li>
                    <li>
                        <Button  onClick={()=> {changeFilter('active', id)}}>Active</Button>
                    </li>
                    <li>
                        <Button  onClick={()=> {changeFilter('completed', id)}}>Completed</Button>
                    </li>
                </ul>
                <TasksList tasks={tasks} toggleStatus={toggleStatus} deleteTask={deleteTask} id={id}/>
            </div>
        </>);
};
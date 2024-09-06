import s from './TodoList.module.css'
import React, {ButtonHTMLAttributes, MouseEvent, MouseEventHandler, useState} from "react";
import {AddForm} from "../addForm/AddForm";
import {TasksList} from "../tasksList/TasksList";
import {Button} from "../button/Button";
import {TasksPropsType} from "../../App";

type TodoListProps = {
    title: string;
    tasks: TasksPropsType[]
    toggleStatus: (id: string) => void;
    deleteTask: (id: string) => void;
    addTask: (value: string) => void;
};
export const TodoList = ({title, tasks, toggleStatus, deleteTask, addTask}: TodoListProps) => {

    const [filter, setFilter] = useState('all');

    let filteredTasks = tasks;

    switch (filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
        case 'active':
            filteredTasks = tasks.filter(task => !task.completed);
            break;
    }


    return (
        <>
            <div className={s.todoList}>
                <h3>{title}</h3>
                <AddForm  addTask={addTask}/>
                <ul className={s.buttonsGroup}>
                    <li>
                        <Button  onClick={()=> {setFilter('all')}}>All</Button>
                    </li>
                    <li>
                        <Button  onClick={()=> {setFilter('active')}}>Active</Button>
                    </li>
                    <li>
                        <Button  onClick={()=> {setFilter('completed')}}>Completed</Button>
                    </li>
                </ul>
                <TasksList tasks={filteredTasks} toggleStatus={toggleStatus} deleteTask={deleteTask}/>
            </div>
        </>);
};
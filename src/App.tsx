import React, {MouseEvent, useState} from 'react';
import './App.css';
import {TodoList} from "./components/todoList/TodoList";
import {v1} from "uuid";
import {Button} from "./components/button/Button";

export type TasksPropsType = {
    id: string;
    title: string;
    completed: boolean;
}

const tasksList: TasksPropsType[] = [
    {id: v1(), title: 'HTML&CSS', completed: true},
    {id: v1(), title: 'JS', completed: true},
    {id: v1(), title: 'React', completed: true},
    {id: v1(), title: 'Redux', completed: true},
    {id: v1(), title: 'Angular', completed: false},
]

function App() {
    const [tasks, setTasks] = useState<TasksPropsType[]>(tasksList);

    const addTask = (value: string) => {
        setTasks([{id: v1(), title: value, completed: false}, ...tasks])
    }

    const toggleStatus = (id: string) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task
        }))
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className="App">
            <TodoList
                title={'What to learn'}
                tasks={tasks}
                toggleStatus={toggleStatus}
                deleteTask={deleteTask}
                addTask={addTask}
            />

        </div>
    );
}

export default App;

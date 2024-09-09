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

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodoListType = {
    id: string;
    title: string;
    filter: FilterValuesType;
}

const todoList1 = v1();
const todoList2 = v1();

const tasksListData = {
    [todoList1]: [
        {id: v1(), title: 'HTML&CSS', completed: true},
        {id: v1(), title: 'JS', completed: true},
        {id: v1(), title: 'React', completed: true},
        {id: v1(), title: 'Redux', completed: true},
        {id: v1(), title: 'Angular', completed: false},
    ],
    [todoList2]: [
        {id: v1(), title: 'HTML&CSS', completed: true},
        {id: v1(), title: 'JS', completed: true},
        {id: v1(), title: 'React', completed: true},
        {id: v1(), title: 'Redux', completed: true},
        {id: v1(), title: 'Angular', completed: true},
    ],
}

const todoListsData: TodoListType[] = [
    {id: todoList1, title: 'What to learn', filter: 'active'},
    {id: todoList2, title: 'What to by', filter: 'completed'},
]

function App() {
    // // const [allTasks, setAllTasks] = useState({});
    // const [taskObj, setTaskObj] = useState(tasksListData);
    // const [todoLists, setTodoLists] = useState<TodoListType[]>(todoListsData);
    //
    // const addTask = (value: string, todoListId: string) => {
    //     // const task = {id: v1(), title: value, completed: false};
    //     // const tasks = taskObj[todoListId];
    //     taskObj[todoListId] = [{id: v1(), title: value, completed: false}, ...taskObj[todoListId]]
    //     setTaskObj({...taskObj})
    // }
    //
    // const changeFilter = (value: FilterValuesType, todoListId: string) => {
    //     todoLists.forEach(todo => {
    //         if (todo.id === todoListId) {
    //             todo.filter = value;
    //             setTodoLists([...todoLists]);
    //         }
    //     })
    // }
    //
    // const toggleStatus = (id: string, todoListId: string) => {
    //     // const tasks = taskObj[todoListId];
    //     let task  = taskObj[todoListId].find(task => task.id === id)
    //     if (task) {
    //         task.completed = !task.completed;
    //         setTaskObj({...taskObj});
    //     }
    // }
    //
    // const deleteTask = (id: string, todoListId: string) => {
    //     const tasks = taskObj[todoListId];
    //     taskObj[todoListId] = tasks.filter(task => task.id !== id);
    //     setTaskObj({...taskObj})
    // }
    //
    // const todoArray = todoLists.map(todo => {
    //         let filteredTasks = taskObj[todo.id];
    //
    //         switch (todo.filter) {
    //             case 'completed':
    //                 filteredTasks = taskObj[todo.id].filter(task => task.completed);
    //                 break;
    //             case 'active':
    //                 filteredTasks = taskObj[todo.id].filter(task => !task.completed);
    //                 break;
    //         }
    //
    //         return (
    //             <TodoList
    //                 key={todo.id}
    //                 title={todo.title}
    //                 tasks={filteredTasks}
    //                 toggleStatus={toggleStatus}
    //                 deleteTask={deleteTask}
    //                 addTask={addTask}
    //                 id={todo.id}
    //                 changeFilter={changeFilter}
    //                 filter={todo.filter}
    //             />
    //         )
    //
    //     }
    // )

    return (
        <div className="App">

            {todoArray}

            {/*<TodoList*/}
            {/*    title={'What to learn'}*/}
            {/*    taskObj={taskObj}*/}
            {/*    toggleStatus={toggleStatus}*/}
            {/*    deleteTask={deleteTask}*/}
            {/*    addTask={addTask}*/}
            {/*/>*/}
            {/*<TodoList*/}
            {/*    title={'What to learn'}*/}
            {/*    taskObj={taskObj}*/}
            {/*    toggleStatus={toggleStatus}*/}
            {/*    deleteTask={deleteTask}*/}
            {/*    addTask={addTask}*/}
            {/*/>*/}

        </div>
    );
}

export default App;

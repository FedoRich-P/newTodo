import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {log} from "node:util";
import {AddItemForm} from "./AddItemForm";

type todoListsType = {
    id: string;
    title: string;
    filter: FilterValuesType;
}
export type FilterValuesType = "all" | "active" | "completed";

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todoLists, setTodoLists] = useState<todoListsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(todoListId: string, id: string) {
        // setTasks({...tasks, [todoListId]: tasks[todoListId].filter(task => task.id !== id)})
// ========================================================
        const task = tasks[todoListId];
        const filteredTask = task.filter(task => task.id !== id);
        tasks[todoListId] = filteredTask;
        setTasks({...tasks});
    }

    function addTask(todoListId: string, title: string) {
        const newTask = {id: v1(), title, isDone: false};
        tasks[todoListId] = [newTask, ...tasks[todoListId]];
        setTasks({...tasks})


        // setTasks({...tasks, [todoListId]: [{id: v1(), title, isDone: true}, ...tasks[todoListId]]})
// ========================================================
        // tasks[todoListId].unshift({id: v1(), title, isDone: true});
// ========================================================
        // Object.entries(tasks).map(el=> (
        //     el[0] === todoListId ? el[1].unshift({id: v1(), title, isDone: true}) : ''
        // ))
        // setTasks({...tasks})
    }

    function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].map(task => task.id === taskId ? {...task, isDone} : task)})
    }

    function changeFilter(todoListId: string, value: FilterValuesType) {
        setTodoLists(todoLists.map(task => task.id === todoListId ? {...task, filter: value} : task));
    }

    const createTodoList = todoLists.map((todo) => {
        let tasksForTodolist = tasks[todo.id];

        if (todo.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
        }
        if (todo.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
        }
        return (
            <Todolist
                key={todo.id}
                todoListId={todo.id}
                title={todo.title}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={todo.filter}
            />
        )
    })

    return (
        <div className="App">
            <AddItemForm
                titleBtn={'Add todo'}
                todoListId={todolistID1}
                addItem={(e)=> {
                    console.log(e)}}
            />
            {createTodoList}
        </div>
    );
}

export default App;

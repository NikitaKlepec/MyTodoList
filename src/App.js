import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    tasks=[
        {title:"JS",isDone:false, priority:"low"},
        {title:"React",isDone:true,priority:"height"},
        {title:"Html",isDone:false, priority: "midle"},
        {title:"Css",isDone:true, priority: "low"}
    ]

    filterValue="All"
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                   <TodoListHeader/>
                   <TodoListTasks tasks={this.tasks}/>
                   <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;


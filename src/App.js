import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

    state = {
        tasks: [
            {title: "JS", isDone: false, priority: "low"},
            {title: "React", isDone: true, priority: "height"},
            {title: "Html", isDone: false, priority: "midle"},
            {title: "Css", isDone: true, priority: "low"}
        ],
        filterValue: "All"
    }

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: "middle"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });

    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }

    changeStatus = (task, isDone) => {
        let taskCopy = this.state.tasks.map(t => {
            if (t != task) {
                return t;
            }
            else {
                return {...t, isDone: isDone};
            }
        });
        this.setState({
            tasks: taskCopy
        });
    }
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        changeStatus={this.changeStatus}

                        tasks={this.state.tasks.filter(t => {
                            switch (this.state.filterValue) {
                                case "All":
                                    return true;
                                case "Completed":
                                    return t.isDone;
                                case "Active":
                                    return !t.isDone;
                                default:
                                    return true;
                            }

                        })}
                    />


                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;


import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
<<<<<<< HEAD

        let tasksElements = this.props.tasks.map( task => <TodoListTask task={task}
        changeStatus={this.props.changeStatus}
        changeTitle={this.props.changeTitle}
        />);
=======
        let taskElement = this.props.tasks.map(task =>
        <TodoListTask task={task} changeStatus={this.props.changeStatus}/>)
>>>>>>> a1307adcbdd151f8f6474155c2ec3de42efd20fd

        return (
            <div className="todoList-tasks">
            {tasksElements}
            </div>
    );
    }
}

export default TodoListTasks;

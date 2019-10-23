import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let taskElement = this.props.tasks.map(task =>
            <TodoListTask title={task.title} isDone={task.isDone} priority={task.priority}/>)


        return (
            <div className="todoList-tasks">
                {taskElement}
            </div>
        );
    }
}

export default TodoListTasks;


import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {

    nextTodoListId = 0;

    state = {
        todolists: []
    }

    addTodoList = (title) => {

        let newTodoList = {
            id: this.nextTodoListId,
            title: title
        }

        this.setState({todolists: [...this.state.todolists, newTodoList]}, () => {
            this.saveState();
        });

        this.nextTodoListId++;


    }

    componentDidMount() {
        this.restoreState();
    }


    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("todolists-state", stateAsString);
    }

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem("todolists-state");
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.todolists.forEach(t => {
                if (t.id >= this.nextTodoListId) {
                    this.nextTodoListId = t.id + 1;
                }
            })
        });
    }

    render = () => {
        const todolists = this.state
            .todolists
            .map(tl => <TodoList id={tl.id} title={tl.title}/>)

        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

export default App;


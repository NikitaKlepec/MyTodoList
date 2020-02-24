import {createStore} from "redux";

const initialState={
    "todolists":[
        {"id":1, title:"first",tasks: []},
        {"id":2, title:"duble",tasks:[]},
        {"id":3, title:"tri",tasks:[]}

    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TODOLIST":
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]
            }
    }
         return state;
}

const store = createStore(reducer);

export default store;
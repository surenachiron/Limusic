import React, {Fragment} from "react";
import { Routes, Route } from "react-router-dom";
import MapInListWork from "../component/TodoListItems/MapInListWork";
import MapInDoneTasks from "../component/ListDoneTasks/MapInDoneTasks";
import TodoList from "./TodoList";

const App = () => {

    return(
        <Fragment>
            <TodoList />
            <Routes>
                <Route path="/" exact element={<MapInListWork />}/>
                <Route path="/done" element={<MapInDoneTasks />}/>
            </Routes>

        </Fragment>
    )
}

export default App;
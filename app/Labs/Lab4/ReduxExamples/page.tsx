"use client"

import AddRedux from "./AddRedux/page";
import CounterRedux from "./CounterRedux/page";
import HelloRedux from "./HelloRedux/page";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
    return (
        <div>
            <h1>Redux Examples:</h1>
            <HelloRedux/>
            <CounterRedux/>
            <AddRedux/>
            <TodoList/>
        </div>
    )
}
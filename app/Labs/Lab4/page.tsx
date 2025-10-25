"use client";
import store from "./store";
import { Provider } from "react-redux";

import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import HandlingClickEvent from "./HandlingClickEvent";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples/page";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
    function sayHello() {
    alert("Hello");
    }
    return (
        <>
        <br/>
        <Provider store = {store}>
            <div>
                <h1>Lab 4</h1>
                <br/>
                <h1>Maintaining State in React Applications:</h1>
            </div>
            <br/>
            <HandlingClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            <ReduxExamples/>
        </Provider>
        </>
    )
}
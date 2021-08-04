import {createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducer/reducer"

const store = createStore (reducer, applyMiddleware(reduxThunk))

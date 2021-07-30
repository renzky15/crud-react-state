import "./App.css"

import Shopping from "./components/index"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/cart" component={Shopping}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App

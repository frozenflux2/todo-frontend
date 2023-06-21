import React, { useEffect, useState } from "react"
import "./App.css"
import Title from "./component/Title"
import Toolbox from "./component/Toolbox"
import TodoList from "./component/TodoList"

const App: React.FC = () => {
    const [todo, setTodo] = useState<any[]>([])
    const [done, setDone] = useState<any[]>([])
    const [search, setSearch] = useState("")
    const [ex, setEx] = useState(true)

    const clearAll = () => {
        setTodo([])
        setDone([])
    }

    return (
        <div className="App">
            <Title clearAll={clearAll} />
            <Toolbox setTodo={setTodo} search={search} setSearch={setSearch} />
            <TodoList
                todo={todo}
                done={done}
                setDone={(e) => {
                    setDone(e)
                    setEx(!ex)
                }}
                setTodo={(e) => {
                    setTodo(e)
                    setEx(!ex)
                }}
                search={search}
            />
        </div>
    )
}

export default App

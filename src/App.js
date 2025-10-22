import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import ThemeState from "./context/notes/ThemeState";

function App() {
  // 🔹 Initialize todos from localStorage
  const initTodo = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(initTodo);

  // 🔹 Delete Todo
  const onDelete = (todo) => {
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // 🔹 Add Todo
  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
  };

  // 🔹 Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App-container">
      <ThemeState>
        <NoteState>
          <Router>
            <div className="content-wrap">
              <Header title="My Todos List" searchBar={false} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <>
                      <AddTodo addTodo={addTodo} />
                      <Todos todos={todos} onDelete={onDelete} />
                    </>
                  )}
                />
                <Route exact path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
            <Footer />
          </Router>
        </NoteState>
      </ThemeState>
    </div>
  );
}

export default App;

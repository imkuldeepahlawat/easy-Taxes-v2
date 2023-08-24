import { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import "./App.css";
import Navbar from "./components/Navbar";
import FormX from "./components/FormX";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "./store/formReducer";
import UserForm from "./components/UserForm";
import { Route, Routes } from "react-router-dom";
import FormResult from "./components/FormResult";

const store = createStore(userReducer);
function App() {
  return (
    <Provider store={store}>
      <div className="relative">
        <img
          src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=2000"
          className="absolute w-[450px] opacity-10  mix-blend-multiply top-40 left-40"
          alt="heroImage"
        />
        <Routes>
          <Route exact path="/" element={<UserForm />} />
          {/* <Route exact path="/" element={<h2>Hello</h2>} /> */}
          <Route exact path="/submit" element={<FormResult />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;

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
      <div className="">
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

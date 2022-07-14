import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    );
  }
}
export default App;

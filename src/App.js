import './App.css';
import Students from "./components/Students";
import StudentForm from "./components/StudentForm";
import {BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        {/*<p>Here is some text yippee!</p>*/}

        <BrowserRouter>
            <Routes>
                <Route path = "/students" element ={<Students />}></Route>
                <Route path="/studentForm" element ={<StudentForm />}></Route>
            </Routes>
        </BrowserRouter>
        <h1>Demo Slices! </h1>


    </div>
  );
}

export default App;

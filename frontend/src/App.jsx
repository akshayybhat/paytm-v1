import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const SignupPage = React.lazy(() => import("./pages/SignupPage.jsx"));
function App() {

  return (
    <div>
        Hello world
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

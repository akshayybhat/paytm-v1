import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
export default function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/signin" element={<SigninPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
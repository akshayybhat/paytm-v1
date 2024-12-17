import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage.jsx";
export default function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
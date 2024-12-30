import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import PaymentInitiatePage from "./pages/PaymentInitiatePage.jsx";
export default function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/signin" element={<SigninPage />}/>
                <Route path="/dashboard" element={<DashboardPage />}/>
                <Route path="/payment" element={<PaymentInitiatePage />}/>
            </Routes>
        </BrowserRouter>
    )
}
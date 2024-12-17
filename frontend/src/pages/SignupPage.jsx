import HeaderComponent from "../components/HeaderComponent.jsx";
import SubHeaderComponent from "../components/SubHeaderComponent.jsx"
import InputLabelComponent from "../components/InputLabelComponent.jsx"
import Button from "../components/ButtonComponent.jsx";
import BottomWarning from "../components/BottomWarning.jsx";
export default function SignupPage(){
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <HeaderComponent label="Sign Up"/>
                <SubHeaderComponent label="Enter your information to create an account"/>
                <InputLabelComponent label="First Name" placeholder="John"/>
                <InputLabelComponent label="Last Name" placeholder="Doe"/>
                <InputLabelComponent label="Email" placeholder="akshay@gmail.com"/>
                <InputLabelComponent label="Password" placeholder=""/>
                <div className="pt-4">
                    <Button label="Sign Up" placeholder=""/>
                </div>
                <BottomWarning label="Already have an account?" to="/signin" btnText="Signin"/>
            </div>
        </div>
    )
}
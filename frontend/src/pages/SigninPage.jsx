import HeaderComponent from "../components/HeaderComponent.jsx";
import SubHeaderComponent from "../components/SubHeaderComponent.jsx";
import InputLabelComponent from "../components/InputLabelComponent.jsx";
import Button from "../components/ButtonComponent.jsx";
import BottomWarning from "../components/BottomWarning.jsx";
export default function SigninPage(){
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div  className="flex flex-col justify-center">
                <HeaderComponent label="Sign In" />
                <SubHeaderComponent label="Enter your credentials to access your account"/>
                <InputLabelComponent label="Email" placeholder="johndoe@example.com"/>
                <InputLabelComponent label="Password" placeholder=""/>
                <div className="pt-4">
                    <Button label="Sign In" />
                </div>
                <BottomWarning label="Don't have a account?" to="/signup" btnText="Sign up"/>

            </div>
        </div>
    )
}
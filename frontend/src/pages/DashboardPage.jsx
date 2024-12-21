import Appbar from "../components/AppbarComponent.jsx";
import Balance from "../components/BalanceComponent.jsx"
import UsersList from "../components/UsersComponent.jsx"
export default function DashboardPage(){
    return(
        <div>
            <Appbar/>
            <Balance/>
            <UsersList/>
        </div>
    );
}
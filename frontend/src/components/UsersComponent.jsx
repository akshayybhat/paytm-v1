import {useEffect, useState} from "react";
import Button from "./ButtonComponent.jsx";

export default function UsersList(){
    let [allUsers, setallUsers] = useState([])
    useEffect(() => {
        setallUsers([{name:"Harkirat Singh"}, {name:"Harkirat Singh"}])
    }, []);
    return(
        <div>
            <div
                className="font-bold m-3 max-w-screen-xl items-center justify-between mx-auto py-0 pl-6  text-black">
                Users
                <div className="m-2 mx-0">
                    <input placeholder="Search Users" className="font-thin w-full border rounded border-slate-300" />
                </div>
                <div>
                    {allUsers.map((user)=> {
                        return <Users user={user} key={user.name}/>
                    })}

                </div>

            </div>

        </div>
    )
}


function Users({user}){
    return (
        <div className="flex flex-wrap items-center justify-between m-2 p-3 px-0 mx-0">
            <div>
                <span className="border-gray-100 bg-slate-300 p-2 m-1 border-2 rounded-full">H</span> {user.name}
            </div>
            <div>
                <Button label="Send Money" />
            </div>
        </div>
    )
}
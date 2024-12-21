import {useEffect, useState} from "react";

export default function UsersList(){
    let [allUsers, setallUsers] = useState([])
    useEffect(() => {
        setallUsers([{name:"Harkirat"}])
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
                        return <p key={user.name}>{user.name}</p>
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
                <span>H</span> Harkirat Singh
            </div>
            <div>
                <button>Send Money</button>
            </div>
        </div>
    )
}
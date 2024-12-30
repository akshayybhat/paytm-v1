export default function SendMoney() {
    return(
        // <div classNameName="h-screen align-middle">
        //     <div
        //         classNameName="w-1/4 h-screen align-middle">
        //         <h1 classNameName="flex flex-wrap justify-center">Send Money</h1>
        //         <div classNameName="flex flex-wrap items-center justify-center ">
        //             <div classNameName="border-gray-100 bg-slate-300 p-3 m-3 border-2 rounded-full">A</div>
        //             <div>Friend Name</div>
        //         </div>
        //         <div classNameName="flex flex-wrap flex-col items-center justify-center">
        //
        //             <label htmlFor="amount">Amount (in Rs)</label>
        //             <input type="number" id="amount" classNameName="w-1/12 m-2"/>
        //         </div>
        //         <div classNameName="flex justify-center m-3">
        //             <button type="button"
        //                     classNameName="focus:outline-none text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Initiate Transfer
        //             </button>
        //         </div>
        //     </div>
        // </div>

    <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-2xl text-white">A</span>
                        </div>
                        <h3 className="text-2xl font-semibold">Friend's Name</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="amount"
                            >
                                Amount (in Rs)
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="amount"
                                placeholder="Enter amount"
                            />
                        </div>
                        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                            Initiate Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
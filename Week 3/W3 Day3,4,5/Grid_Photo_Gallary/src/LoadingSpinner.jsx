import React from "react";

function Spinner(){
    return(
        <>
       <div className="flex flex-row md:flex-col justify-center gap-10">
 
        {/* Loadind Spinner */}

        <div className="flex flex-col items-center justify-center">
        <h1 className='text-3xl font-bold text-center text-orange-700 my-5'>Loading Spinner</h1>
            <div className="border-t-4 border-t-blue-900 border-gray-700 rounded-full w-12 h-12 animate-spin"></div>
        </div>

        {/* Growing Spinner */}

        <div className="flex flex-col items-center justify-center mt-3 md:relative bottom-10">
        <h1 className='text-3xl font-bold text-center text-orange-700 my-5'>Growing Spinner</h1>
            <div className="border-4 border-gray-700 w-16 h-16 rounded-full bg-blue-900 animate-pulse"></div>
        </div>

       </div>
        </>
    )
}

export default Spinner;
import { useState } from "react";

export default function Counter(){

    const [count, setCount] = useState<number>(0);

    function Increment():void {
      setCount(prevCont => prevCont + 1);
    }
    function Decrement():void {
        if(count > 0) {
        setCount(prevCont => prevCont - 1);
        }
      }

    return (
        <div className="flex justify-center items-center my-4">
            <button className="bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-2 px-4 rounded" onClick={Decrement}>-</button>
            <p className="font-bold text-2xl my-2">Count: {count}</p>
            <button className="bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-2 px-4 rounded" onClick={Increment}>+</button>
        </div>
    );
}
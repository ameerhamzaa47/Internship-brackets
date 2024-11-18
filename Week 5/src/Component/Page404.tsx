import { FC } from "react"
import { useNavigate } from "react-router-dom"

const Page404 :FC=()=> {
    let navigate=useNavigate()


  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-5xl font-bold text-center text-gray-800">404 Page</h1>
      <p className="w-5/12 text-justify mt-5">I'm afraid you've found a page that doesn't exist on Our Website. That can happen when you follow a link to something that has since been deleted. Or the link was incorrect to begin with.
    Sorry about that. We've logged the error for review, in case it's our fault.</p>
    <button onClick={()=>{navigate("/")}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Go to Home Page</button>
    </div>
  )
}

export default Page404

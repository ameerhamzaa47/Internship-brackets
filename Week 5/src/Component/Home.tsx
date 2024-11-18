import {useCallback, useEffect, useState} from "react";
import Product from "../Type/Interfaces";

const Home: React.FC = () => {

  const [data,setData]=useState<Product[]>([])
  const [loading,setLoading]=useState<boolean>(true)
  const [error, setError] = useState<string | null>(null);  


  const fetcData  = useCallback(async () =>{
    try{
      const res=await fetch('https://dummyjson.com/products')
      const resp=await res.json()
      setData(resp.products)
    }catch(error:any){
      setError(error.message)
    }finally{
      setLoading(false)
    }
  },[])

  useEffect(()=>{
    setTimeout(() => {
      fetcData()
    },2000);
  },[])
  
  return (
    <>
    <h1 className="text-3xl font-bold text-center text-green-600 my-4">API Data</h1>
    {loading && <p className="text-center">Loading...</p>}
    {error && <p className="text-center text-red-600">{error}</p>}
    <table className="min-w-full table-auto border-separate border-spacing-2 border-2 border-gray-200 rounded-lg shadow-md overflow-x-auto">
  <thead className="bg-blue-500 text-white">
    <tr>
      <th className="py-2 px-4 text-left">#</th>
      <th className="py-2 px-4 text-left">Image</th>
      <th className="py-2 px-4 text-left">Title</th>
      <th className="py-2 px-4 text-left">Category</th>
      <th className="py-2 px-4 text-left">Brand</th>
      <th className="py-2 px-4 text-left">Warranty</th>
      <th className="py-2 px-4 text-left">Description</th>
      <th className="py-2 px-4 text-left">Price</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} hover:bg-blue-50 transition-colors`}>
        <td className="py-2 px-4">{item.id}</td>
        <td className="py-2 px-4">
        <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-contain" />
        </td>
        <td className="py-2 px-4">{item.title}</td>
        <td>{item.category}</td>
        <td>{item.brand}</td>
        <td>{item.warrantyInformation}</td>
        <td>{item.description}</td>
        <td className="py-2 px-4 text-right font-semibold text-green-600">
          ${item.price.toFixed(2)}
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
}

export default Home;
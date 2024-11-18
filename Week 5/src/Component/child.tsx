import { useFormContext } from "react-hook-form";
import Child2 from "./child2";
import FormData from "../Type/Interfaces";
import { FC } from "react";

const  Child: FC =()=> {
  const {register, formState: { errors }}=useFormContext<FormData>();
  return (

    <div className="space-y-6">
      {/* Phone Input */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="phone" className="text-lg font-medium text-gray-700">Phone</label>
        <input {...register("phone")} type="tel" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" />
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
      </div>

      {/* Gender Radio Buttons */}
      <div className="flex flex-col space-y-2">
        <label className="text-lg font-medium text-gray-700">Gender</label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input {...register("gender")} type="radio" value="male" id="male" className="mr-2" />
            <label htmlFor="male" className="text-gray-700">Male</label>
          </div>

          <div className="flex items-center">
            <input {...register("gender")} type="radio" value="female" id="female" className="mr-2" />
            <label htmlFor="female" className="text-gray-700">Female</label>
          </div>
        </div>
        {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
      </div>

      <Child2 />
    </div>
  )
}

export default Child;
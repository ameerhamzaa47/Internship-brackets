import { useFormContext } from "react-hook-form";
import FormData from "../Type/Interfaces";
import { FC } from "react";
const Child2: FC=()=> {
  const {register, formState: { errors }}=useFormContext<FormData>();
  return (
    <div className="space-y-6">
      {/* Message Input */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-lg font-medium text-gray-700">Message</label>
        <input {...register("message")} type="text" id="message" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message" />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>

      {/* Comment Textarea */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="comment" className="text-lg font-medium text-gray-700">Comment</label>
        <textarea {...register("comment")} id="comment" rows={4} className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your comment" />
        {errors.comment && <span className="text-red-500">{errors.comment.message}</span>}
      </div>
    </div>
  )
}

export default Child2;
import { useForm, FormProvider } from "react-hook-form";
import { FC, useMemo, useState } from "react";
import Child from "./child";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";


const Contact: FC =()=> {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const schema = useMemo(() => {
    return Yup.object().shape({
      name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(8, `Password must be at least 8 characters`).required('Password is required').lowercase('Password must have at least one lowercase character').uppercase('Password must have at least one uppercase character').matches(/\d/, 'Password must have at least one digit'),
      phone: Yup.number().min(11, 'Phone number must be at least 10 digits').required('Phone number is required'),
      gender: Yup.string().oneOf(['male', 'female'],'Gender must be either "male" or "female"').required('Gender is required'),
      message: Yup.string().required('Message is required'),
      comment: Yup.string().min(10, 'Comment must be at least 10 characters').required('Comment is required'),
    })
  },[])

  type FormData = Yup.InferType<typeof schema>;

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { reset, formState: { errors } } = methods;

  const onSubmit = (data: FormData) => {
    if(!data) return <h1>No Data</h1>
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    storedData.push(data);
    localStorage.setItem('data', JSON.stringify(storedData));
    console.log('All Data:', storedData);
    
    reset();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full relative">
        
        {/* Success Message */}
        {isSubmitted && (
          <span className="fixed top-4 right-4 bg-green-100 text-green-700 px-4 py-2 rounded-md">
            Form submitted successfully!
          </span>
        )}
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>
        
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                {...methods.register("name")}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            
            {/* Email Input */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...methods.register("email")}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            
            {/* Password Input */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-lg font-medium text-gray-700">Password</label>
              <input
                type="password"
                {...methods.register("password")}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            <Child />
            
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Contact;


// import { useForm, FormProvider } from "react-hook-form";
// import Child from "./child";
// // import FormData from "../Type/Interfaces";
// import * as Yup from 'yup';
// import { yupResolver } from "@hookform/resolvers/yup";

// function Contact() {

  
//   const schema = Yup.object().shape({
//     name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().min(8,`Password must be at least 8 characters`).required('Password is required'),
//     phone: Yup.number().min(11, 'Phone number must be at least 10 digits').required('Phone number is required'),
//     gender: Yup.boolean().oneOf([true, false]).required('Gender is required'),
//     message: Yup.string().required('Message is required'),
//     comment: Yup.string().min(10, 'Comment must be at least 10 characters').required('Comment is required'),
//   })

//   type FormData = Yup.InferType<typeof schema>;

//   let methods = useForm<FormData>({
//     resolver: yupResolver(schema)
//   });
//   let {reset,   formState: { errors } } = methods;

//   const onSubmit = (data: FormData) => {
//     const storedData = JSON.parse(localStorage.getItem('data') || '[]');
//     storedData.push(data);
//     localStorage.setItem('data', JSON.stringify(storedData));
//     console.log('All Data:', storedData);
//     reset();
//     alert('Form Submitted Successfully');
//   }
  
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>
//         <FormProvider {...methods}>
//           <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
//             {/* Name Input */}
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="name" className="text-lg font-medium text-gray-700">Name</label>
//               <input type="text" {...methods.register("name", { required: "Name is required" })} className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
//               {errors.name && <span className="text-red-500">{errors.name.message}</span>}
//             </div>
//             {/* Email Input */}
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="email" className="text-lg font-medium text-gray-700">Email</label>
//               <input type="email" {...methods.register("email")} className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
//               {errors.email && <span className="text-red-500">{errors.email.message}</span>}
//             </div>
//             {/* Password Input */}
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="password" className="text-lg font-medium text-gray-700">Password</label>
//               <input type="password" {...methods.register("password")} className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
//               {errors.password && <span className="text-red-500">{errors.password.message}</span>}
//             </div>

//             <Child />
//             {/* Submit Button */}
//             <div className="flex justify-center">
//               <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300">Register</button>
//             </div>

//           </form>
//         </FormProvider>
//       </div>
//     </div>
//   )
// }

// export default Contact
import React, { useState } from 'react';
import { useTheme } from './theme-context'; // Import the theme context

interface FormState {
  username: string;
  email: string;
  password: string;
  phone: string;
}

const RegisterForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ username: '', email: '', password: '', phone: ''});
  const { theme, toggleTheme } = useTheme();  // Use the theme context

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value })); 
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!formState.username) {
      newErrors.username = 'Username is required';
    }
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formState.password) {
      newErrors.password = 'Password is required';
    } else if (formState.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!formState.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formState.phone)) {
      newErrors.phone = 'Phone number must be 11 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert('Registration successful!');
        setIsSubmitting(false);
        setFormState({ username: '', email: '', password: '', phone: '' });
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center" >
      <button className="absolute top-5 right-10 text-iconColor text-2xl" onClick={toggleTheme}>
        {theme ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
      </button>
      <div className="w-full max-w-lg p-8 text-headingColor bg-bgColor rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-labelColor">Username</label>
            <input type="text"
              id="username"
              name="username"
              value={formState.username}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-focusColor ${
                errors.username ? 'border-errorColor' : 'border-inputBorderColor'
              }`}
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-xs text-errorColor">{errors.username}</p>}
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-labelColor">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-focusColor ${
                errors.email ? 'border-errorColor' : 'border-inputBorderColor'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-xs text-errorColor">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-labelColor">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-focusColor ${
                errors.password ? 'border-errorColor' : 'border-inputBorderColor'
              }`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-xs text-errorColor">{errors.password}</p>}
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-labelColor">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-focusColor ${
                errors.phone ? 'border-errorColor' : 'border-inputBorderColor'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-xs text-errorColor">{errors.phone}</p>}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-buttonColor text-white font-semibold rounded-md hover:bg-buttonHoverColor focus:outline-none disabled:bg-gray-400"
          >
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;




// import React, { useState } from 'react';

// interface FormState {
//   username: string;
//   email: string;
//   password: string;
//   phone: string;
// }

// const RegisterForm: React.FC = () => {
//   const [formState, setFormState] = useState<FormState>({ username: '', email: '', password: '', phone: ''});
//   let [theme,setTheme]=useState(true);

//   const [errors, setErrors] = useState<Partial<FormState>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormState(prevState => ({ ...prevState, [name]: value })); 
//   };

//   // Validate the form fields
//   const validate = (): boolean => {
//     const newErrors: Partial<FormState> = {};

//     // Username validation
//     if (!formState.username) {
//       newErrors.username = 'Username is required';
//     }

//     // Email validation
//     if (!formState.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     // Password validation
//     if (!formState.password) {
//       newErrors.password = 'Password is required';
//     } else if (formState.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }

//     // Phone validation
//     if (!formState.phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{11}$/.test(formState.phone)) {
//       newErrors.phone = 'Phone number must be 11 digits';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validate()) {
//       setIsSubmitting(true);
//       // Simulate a successful form submission
//       setTimeout(() => {
//         alert('Registration successful!');
//         let items={username:formState.username,email:formState.email,password:formState.password,phone:formState.phone}
//         console.log(items);
//         setIsSubmitting(false);
//         setFormState({ username: '', email: '', password: '', phone: '' });
//       }, 1000);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-bodyColor">
//         <button className='absolute top-5 right-10 text-iconColor text-2xl' onClick={()=>setTheme(!theme)}>{theme ? <i className="fa-solid fa-moon"></i> :  <i className="fa-solid fa-sun"></i>}</button>
//       <div className="w-full max-w-lg p-8 text-headingColor bg-bgColor rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
//         <form onSubmit={handleSubmit} noValidate>
//           {/* Username Field */}
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-sm font-medium text-labelColor">Username</label>
//             <input type="text"
//               id="username"
//               name="username"
//               value={formState.username}
//               onChange={handleChange}
//               className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-focusColor ${
//                 errors.username ? 'border-errorColor' : 'border-inputBorderColor'
//               }`}
//               placeholder="Enter your username"
//             />
//             {errors.username && <p className="text-xs text-errorColor">{errors.username}</p>}
//           </div>

        //   {/* Email Field */}
        //   <div className="mb-4">
        //     <label htmlFor="email" className="block text-sm font-medium text-labelColor">Email</label>
        //     <input
        //       type="email"
        //       id="email"
        //       name="email"
        //       value={formState.email}
        //       onChange={handleChange}
        //       className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-focusColor ${
        //         errors.email ? 'border-errorColor' : 'border-inputBorderColor'
        //       }`}
        //       placeholder="Enter your email"
        //     />
        //     {errors.email && <p className="text-xs text-errorColor">{errors.email}</p>}
        //   </div>

        //   {/* Password Field */}
        //   <div className="mb-4">
        //     <label htmlFor="password" className="block text-sm font-medium text-labelColor">Password</label>
        //     <input
        //       type="password"
        //       id="password"
        //       name="password"
        //       value={formState.password}
        //       onChange={handleChange}
        //       className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-focusColor ${
        //         errors.password ? 'border-errorColor' : 'border-inputBorderColor'
        //       }`}
        //       placeholder="Enter your password"
        //     />
        //     {errors.password && <p className="text-xs text-errorColor">{errors.password}</p>}
        //   </div>

        //   {/* Phone Field */}
        //   <div className="mb-6">
        //     <label htmlFor="phone" className="block text-sm font-medium text-labelColor">Phone Number</label>
        //     <input
        //       type="tel"
        //       id="phone"
        //       name="phone"
        //       value={formState.phone}
        //       onChange={handleChange}
        //       className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-focusColor ${
        //         errors.phone ? 'border-errorColor' : 'border-inputBorderColor'
        //       }`}
        //       placeholder="Enter your phone number"
        //     />
        //     {errors.phone && <p className="text-xs text-errorColor">{errors.phone}</p>}
        //   </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full py-2 px-4 bg-buttonColor text-white font-semibold rounded-md hover:bg-buttonHoverColor focus:outline-none disabled:bg-gray-400"
//           >
//             {isSubmitting ? 'Submitting...' : 'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;
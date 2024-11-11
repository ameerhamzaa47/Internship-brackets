import React, { useState } from 'react';

interface FormState {
  username: string;
  email: string;
  password: string;
  phone: string;
}

const RegisterForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ username: '', email: '', password: '', phone: ''});

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value })); 
  };

  // Validate the form fields
  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    // Username validation
    if (!formState.username) {
      newErrors.username = 'Username is required';
    }

    // Email validation
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!formState.password) {
      newErrors.password = 'Password is required';
    } else if (formState.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Phone validation
    if (!formState.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formState.phone)) {
      newErrors.phone = 'Phone number must be 11 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      // Simulate a successful form submission
      setTimeout(() => {
        alert('Registration successful!');
        let items={username:formState.username,email:formState.email,password:formState.password,phone:formState.phone}
        console.log(items);
        setIsSubmitting(false);
        setFormState({ username: '', email: '', password: '', phone: '' });
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text"
              id="username"
              name="username"
              value={formState.username}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-xs text-red-500">{errors.username}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none disabled:bg-gray-400"
          >
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;





// import { useState, ChangeEvent, FormEvent } from "react";

// function Form() {
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [number, setNumber] = useState<string>('');

//   const [nameError, setNameError] = useState<string>('');
//   const [emailError, setEmailError] = useState<string>('');
//   const [passwordError, setPasswordError] = useState<string>('');
//   const [numberError, setNumberError] = useState<string>('');

//   // Handle form submission
//   const getData = (e: FormEvent) => {
//     e.preventDefault(); // Prevent the default form submission

//     // Reset previous errors
//     setNameError('');
//     setEmailError('');
//     setPasswordError('');
//     setNumberError('');

//     let valid = true;

//     // Name validation
//     if (name.length < 3) {
//       setNameError('* Name must be greater than 3 characters');
//       valid = false;
//     }

//     // Email validation
//     if (!email) {
//       setEmailError('* Email is required');
//       valid = false;
//     } else if (!email.includes('@')) {
//       setEmailError('* Email must contain @');
//       valid = false;
//     }

//     // Password validation
//     if (password.length < 8) {
//       setPasswordError('* Password must be greater than 8 characters');
//       valid = false;
//     }

//     // Phone number validation (checking if it's a valid number and greater than 10 digits)
//     if (!number || isNaN(Number(number)) || number.length < 11) {
//       setNumberError('* Phone number must be at least 10 digits');
//       valid = false;
//     }

//     // Submit the form if all fields are valid
//     if (valid) {
//       alert('Form Submitted!');
//       console.log({ name, email, password, number });
//     } else {
//       alert('Please fix the errors before submitting.');
//     }
//   };

//   // Handle number input change (convert to string)
//   const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;

//     // Allow only digits
//     if (/^\d*$/.test(value)) {
//       setNumber(value);
//     }

//   };


//   return (
//     <>
//     <div className="flex flex-col justify-center items-center">
//       <div className="bg-orange-200 w-12/12 md:w-1/3 py-3 my-4 rounded-lg">
//         <h1 className="text-orange-500 text-center text-3xl font-bold pt-4">Register</h1>
//         <form onSubmit={getData}>
//           <div className="mx-10 my-4">
//             <label className="font-bold text-orange-500" htmlFor="name">Name:</label><br />
//             <input type="text" className="w-80 mx-4 my-2 h-10 rounded-md p-4" onChange={(e) => setName(e.target.value)} value={name} required placeholder="Your Name" /><br />
//             <span className="text-red-600">{nameError}</span><br />

//             <label className="font-bold text-orange-500" htmlFor="email">Email:</label><br />
//             <input type="email" className="w-80 mx-4 my-2 h-10 rounded-md p-4" onChange={(e) => setEmail(e.target.value)} value={email} required placeholder="Your Email" /><br />
//             <span className="text-red-600">{emailError}</span><br />

//             <label className="font-bold text-orange-500" htmlFor="password">Password:</label><br />
//             <input  type="password" className="w-80 mx-4 my-2 h-10 rounded-md p-4" onChange={(e) => setPassword(e.target.value)} value={password} required placeholder="Your Password" /><br />
//             <span className="text-red-600">{passwordError}</span><br />

//             <label className="font-bold text-orange-500" htmlFor="number">Phone:</label><br />
//             <input type="text" className="w-80 mx-4 my-2 h-10 rounded-md p-4" onChange={handleNumberChange} required placeholder="Your Phone" /><br />
//             <span className="text-red-600">{numberError}</span><br />
//           </div>
//           <div className="flex justify-self-end ">
//           <button type="reset" className="mr-8 bg-orange-500 cursor-pointer hover:bg-orange-700 mx-2 text-white font-bold py-2 px-4 rounded">Reset</button>
//           <button type="submit" className="mr-8 bg-orange-500 cursor-pointer hover:bg-orange-700 mx-2 text-white font-bold py-2 px-4 rounded">Submit</button>
//           </div>
//         </form>
//       </div>
//       </div>
//     </>
//   );
// }

// export default Form;
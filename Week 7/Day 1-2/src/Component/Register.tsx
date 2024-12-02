import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from './Firebase';
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(number.length !== 11){
      toast.error("Please enter a valid phone number.");
      return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email, 
          number: number,
          password:password
        });
  
        
        navigate('/login');
        toast.success("Registration successful!");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // Handel Google Sign
  const handleGoogleSignIn = async () => {
    try {
      const result= await signInWithPopup(auth, googleProvider);
      const user= result.user;
// set user data in firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        number: "", 
        password: ""
      });

      navigate('/login')
      toast.success("Google Sign-In successful!");
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Register</h2>


      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Number</label>
          <input
            type="number"
            id="number"
            name="number"
            value={number}
            required
            onChange={(e) => setNumber(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your Number"
          />
        </div>

        <button type="submit" className="w-full p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <button onClick={handleGoogleSignIn} className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Sign up with Google
        </button>
      </div>

      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 hover:text-indigo-700">
          Login here
        </Link>
      </p>


    </div>
  );
};

export default Register;
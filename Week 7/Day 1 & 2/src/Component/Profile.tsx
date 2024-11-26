import { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaKey } from 'react-icons/fa';
import { auth, db } from './Firebase';
import { doc, getDoc } from 'firebase/firestore';
import MapComponent from './MapComponent'

const Profile = () => {

    // google map component pros
    const googleMapsApiKey = "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao";
    const latitude = 37.7749;
    const longitude = -122.4194;

interface User{
    name:string,
    email:string,
    password:string,
    number:number
}
    const [userDetails,setUserDetails] = useState<User>()

    const fetchUserDetails = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                  setUserDetails(docSnap.data() as User);
                } else {
                  console.log('User data does not exist');
                }
              } else {
                console.log('User Not Logged In');
              }
        })
    }

    useEffect(()=>{
        fetchUserDetails()
    },[])
  return (
    <>
    <div className="flex justify-center items-center my-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden p-6">
        {/* Card Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
          <p className="text-sm text-gray-500">Here are the details of your profile</p>
        </div>

        {/* Profile Details Table */}
        <table className="w-full table-auto">
          <tbody>
            <tr className="flex flex-col md:flex-row gap-4 md:gap-6 bg-slate-50 rounded-lg p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <td className="md:w-1/4 flex items-center gap-3">
                <FaUser className="text-indigo-600" size={20} />
                <div className="text-gray-800">
                  <strong className="font-semibold">Name:</strong>
                  <p className="text-sm">{userDetails?.name}</p>
                </div>
              </td>

              <td className="md:w-1/4 flex items-center gap-3">
                <FaEnvelope className="text-indigo-600" size={20} />
                <div className="text-gray-800">
                  <strong className="font-semibold">Email:</strong>
                  <p className="text-sm">{userDetails?.email}</p>
                </div>
              </td>

              <td className="md:w-1/4 flex items-center gap-3">
                <FaKey className="text-indigo-600" size={20} />
                <div className="text-gray-800">
                  <strong className="font-semibold">Password:</strong>
                  <p className="text-sm">{userDetails?.password}</p>
                </div>
              </td>

              <td className="md:w-1/4 flex items-center gap-3">
                <FaPhone className="text-indigo-600" size={20} />
                <div className="text-gray-800">
                  <strong className="font-semibold">Number:</strong>
                  <p className="text-sm">{userDetails?.number}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* google map */}
    <div className="App">
      <h1 className="text-center text-2xl font-bold my-4">Google Maps Integration</h1>
      <MapComponent apiKey={googleMapsApiKey} lat={latitude} lng={longitude} zoom={12} />
    </div>
    </>
  );

};

export default Profile;

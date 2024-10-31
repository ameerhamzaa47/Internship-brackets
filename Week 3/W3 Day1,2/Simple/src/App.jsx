import React, {useEffect, useRef} from 'react'
import './index.css'
import Typed from 'typed.js';

function App() {

  const elementRef = useRef(null); 
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(elementRef.current, {
      strings: ['Web Developer', 'Programmer', 'Coder'],
      typeSpeed: 50,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <>
      <nav className="bg-purple-500 flex justify-between">
        {/* <img className="w-14 px-3 py-2 rounded-3xl" src="Screenshot_1.png" alt=""> */}
        <h1 className="px-3 mx-5 py-3 text-blue-950 font-bold text-2xl">Portfolio</h1>
        <ul className="flex px-10 my-2 cursor-pointer justify-end">
            <li className="mx-4 my-2 text-white">Home</li>
            <li className="mx-4 my-2 text-white">About</li>
            <li className="mx-4 my-2 text-white">Contact</li>
            <li className="mx-4 my-2 text-white">Privacy</li>
        </ul>
    </nav>

    <main className="bg-purple-200  flex">
        <div className="py-28 px-8">
            <h1 className="text-3xl font-bold">My Name is Ameer Hamza</h1>
            <h2 className="text-2xl font-bold">I am <span className="text-yellow-900" ref={elementRef}></span></h2>
            <p className="w-10/12 text-justify">Ameer Hamza is a skilled front-end developer with a keen eye for design and a passion for crafting seamless user experiences. With a solid foundation in HTML, CSS, and JavaScript, Ameer excels in transforming creative ideas into responsive and visually appealing websites. His expertise extends to working with modern frameworks and libraries, ensuring that his projects are not only functional but also efficient and up-to-date with the latest industry trends. Ameer is known for his problem-solving skills, attention to detail, and commitment to delivering high-quality work that exceeds client expectations.</p>
            <div className="my-6">
            <button><a className="bg-blue-900 text-white mx-4 px-2 py-2 rounded-full hover:bg-red-700" href="../../Hamza Tariq Resume.pdf" target="_blank">Check CV</a></button>
            <button><a className="bg-blue-900 text-white px-2 py-2 rounded-full hover:bg-red-700" href="https://github.com/ameerhamzaa47" target="_blank">Contact Me</a></button>
            </div>
        </div>

        <div className="px-16">
            <img className="min-w-96 px-15 py-14" src="Screenshot_1.png" alt=""/>
        </div>

    </main>
    </>
  )
}

export default App

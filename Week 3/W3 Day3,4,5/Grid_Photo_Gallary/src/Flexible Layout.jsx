import React from "react";
import './App.css'
function Layout() {
    return (
        <>
            <h1 className="text-3xl font-bold text-center text-orange-500 my-5">Flexible Layout</h1>
            <div className="flex flex-col flex-wrap text-center px-4">
                <header className="bg-red-500 h-16 my-4 rounded-lg">
                    <h1 className="text-3xl mt-3">Header</h1>
                </header>

                <menu className="aside aside1 bg-yellow-400 my-4 text-3xl h-16 rounded-lg">
                    <h1 className="text-3xl mt-3">Menu</h1>
                </menu>

                <div className="flex flex-col sm:flex-row gap-4">

                <aside className="aside aside1 bg-pink-500 my-4 text-3xl h-46 rounded-lg xl:w-1/3">
                    <h1 className="mt-3">Aside 1</h1>
                </aside>

                <main className="text-left bg-blue-300 h-46 px-2 py-2 my-4 rounded-lg xl:w-1/2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, velit. Dolor eligendi laboriosam cumque quae reiciendis nisi architecto delectus adipisci, sed dolore facilis! Iste saepe praesentium commodi necessitatibus cupiditate nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae deserunt fugiat aut accusamus dolor.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, velit. Dolor eligendi laboriosam cumque quae reiciendis nisi architecto delectus adipisci, sed dolore facilis! Iste saepe praesentium commodi necessitatibus cupiditate nemo.</p>
                </main>

                
                <aside className="aside aside2 bg-orange-500 my-4 text-3xl h-46 rounded-lg xl:w-1/3">
                    <h1 className="mt-3">Aside 2</h1>
                </aside>
                </div>
                <footer className="bg-green-300 h-16 my-4 rounded-lg order-4">
                    <h1 className="text-3xl mt-3">Footer</h1>
                </footer>
            </div>
        </>
    )
}

export default Layout;

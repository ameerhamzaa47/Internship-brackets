import { FC, useState } from 'react'
import { NavLink, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Navbar: FC = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };


  const data = useSelector((state: any) => state.products.carts)


  return (
    <>
      <div className="navbar bg-black sticky top-0 z-10">
        {/*  */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {/* mobile menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-96 p-2 shadow">
              <div className="form-control ">
                <input type="text" placeholder="Search Here..." className="input input-bordered h-9 w-12/12 md:w-auto" />
              </div>
              <button className="text-white mt-2 bg-red-500 rounded-r-sm px-3 font-semibold p-1.5"><i className="fa-solid fa-magnifying-glass"></i></button>
            </ul>
          </div>
          {/* Title */}
          <div className="flex items-center  ">

            <a className=" text-xl font-semibold text-white">ShopWise</a>
            <span className='font-bold text-red-500 scale-150 px-1'>.</span>
          </div>
        </div>
        <div className="navbar-center hidden md:flex justify-center items-center ">
          <div className="form-control">
            <input type="text" placeholder="Search Here..." className="input rounded-l-sm rounded-r-none input-bordered h-9 w-24 md:w-80" />
          </div>
          <button className="text-white bg-red-500 rounded-r-sm px-3 font-semibold p-1.5"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="navbar-end">

          {/* cart and profile */}
          <div className="flex justify-center items-center">
          <div className={`dropdown dropdown-end ${isCartOpen ? "dropdown-open" : ""}`}>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleCart}>
                <div className="indicator ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="badge badge-sm indicator-item bg-red-500 text-white">{data.length}</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-96 shadow">

                {
                  data.length ?

                  <div className='p-4 w-96 max-h-96 overflow-y-auto'>
                <Table>
                <thead className='px-4 w-full text-red-500'>
                  <tr>
                    <th>Photo</th>
                    <th>Details</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((e:any)=>
                        <tr className='my-4' key={e.id}>
                          <td><NavLink><img className='w-28 h-28' src={e.images} alt="" /></NavLink></td>
                          <td>
                          <p><strong>Category:</strong> {e.category}</p>
                          <p> <strong>Name:</strong> {e.title}</p>
                          <p><strong>Price:</strong> ₹{e.price}</p>
                          <p><strong>Quantity:</strong> {e.quantity}</p>
                          <hr />
                          </td>
                          {/* <td><p><i onClick={()=>sData(e.id)} className='fas fa-trash text-red-500 cursor-pointer '></i></p></td> */}
                        </tr>
                      )
                    }
                    {/* <p className='text-center'><strong>Total:</strong> ₹{price.toFixed(2)}</p> */}
                  </tbody>
                </Table>
                </div>
                :
                <div className='flex justify-center items-center p-4'>
                <p className='text-2xl p-4'>Your Cart is Empty</p>
                <i className='fas fa-close smallclose text-2xl cursor-pointer' />
            </div>
                }

                {/* <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div> */}

              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Navbar

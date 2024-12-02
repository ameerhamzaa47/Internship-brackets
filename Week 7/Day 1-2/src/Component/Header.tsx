import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between mx-10 my-3'>
      <Link className='text-2xl font-bold text-indigo-700' to='/profile'>User</Link>
      <ul className='flex gap-5 font-semibold text-indigo-600'>
        <li><Link to='/payment'>Payment</Link></li>
      </ul>
      </nav>
    </div>
  )
}

export default Header

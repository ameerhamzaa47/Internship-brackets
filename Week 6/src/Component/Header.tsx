import { FC, useEffect } from 'react'
import {Badge, Menu} from '@mui/material';
import {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink, Table } from 'react-bootstrap';
import { deletecart } from '../Reducer/reducer';

const Header:FC = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let dispatch=useDispatch()

  function sData(id:any){
    dispatch(deletecart(id))
  }

  const data=useSelector((state:any)=>state.products.carts)


  const [price,setPrice]=useState(0)
  

  const total=()=>{
    let price=0
    data.map((ele:any)=>
       price= ele.price + price
    )
    setPrice(price)
  }

  useEffect(()=>{
    total()
  },[total])
  


  return (
    <>
      <nav className='absolute top-5 right-8'>
    <Badge className='cursor-pointer'
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    badgeContent={data.length} color="primary">
    <i className="fa-solid fa-cart-shopping text-light cursor-pointer text-2xl"></i>
    </Badge>


    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
            {
                data.length ?
                <div className='w-96 p-2'>
                <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Details</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((e:any)=>
                        <tr key={e.id}>
                          <td><NavLink onClick={handleClose}><img className='w-28 h-28' src={e.images} alt="" /></NavLink></td>
                          <td>
                          <p><strong>Category:</strong> {e.category}</p>
                          <p> <strong>Name:</strong> {e.title}</p>
                          <p><strong>Price:</strong> ₹{e.price}</p>
                          <p><strong>Quantity:</strong> {e.quantity}</p>
                          </td>
                          <td><p><i onClick={()=>sData(e.id)} className='fas fa-trash text-red-500 cursor-pointer '></i></p></td>
                        </tr>
                      )
                    }
                    <p className='text-center'><strong>Total:</strong> ₹{price.toFixed(2)}</p>
                  </tbody>
                </Table>
                </div>
                :
                <div className='flex justify-center items-center p-4'>
                <p className='text-2xl p-4'>Your Cart is Empty</p>
                <i onClick={handleClose} className='fas fa-close smallclose text-2xl cursor-pointer' />
            </div>
            }
      </Menu>

      </nav>
    </>
  )
}

export default Header
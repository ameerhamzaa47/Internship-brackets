import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/Store';
import { addtocart, fetchProducts } from '../Reducer/reducer';
import { Button, Card } from 'react-bootstrap';

const ShowData: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  function sendData(item: any): void {
        dispatch(addtocart(item))
  }
  
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    // Dispatch the fetchProducts action when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

    

  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-4'>Product List</h1>
      <ul className='flex flex-wrap justify-center shadow-2xl'>
        {products.map((item) => (
          <Card key={item.id} className='cart-style cursor-pointer border border-gray-300 shadow-xl p-4' style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
          <Card.Body>
            <Card.Title className='text-xl font-semibold'>{item.title}</Card.Title>
            <Card.Text className='text-justify'>{item.description}</Card.Text>
            <Card.Text>Price : ₹{item.price}</Card.Text>
            <Button 
            onClick={() => sendData(item)}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
            variant="primary col-lg-12">Add to Cart</Button>
          </Card.Body>
        </Card>
        ))}
      </ul>
    </div>
  );
};

export default ShowData;
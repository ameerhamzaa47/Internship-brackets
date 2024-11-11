import './App.css'
import Button from './button'
import Color from './color'
import Counter from './counter component '
import DisplayData from './DisplayData'
import Form from './Form'

function App() {

  return (
    <>
      <h1 className='text-orange-500 text-center text-3xl font-bold my-4'>Hello World!</h1>
      <DisplayData name='Ahmed' age={24} email='ahmed@gmail.com' address='GRW, Pakistan' />
      <DisplayData name='Hamza' age={20} email='hamza@gmail.com' address='GRW, Pakistan' />
      <DisplayData name='Talha' age={17} email='talha@gmail.com' address='GRW, Pakistan' />
      <Button label='Click Me sm' color='text-red-500' size='sm' disabled={false} onclick={() => alert('Button was Clicked')} />
      <Button label='Click Me md' color='text-blue-700' size='md' disabled={true} onclick={() => alert('Button was Clicked')} />
      <Button label='Click Me lg' color='text-red-900' size='lg' disabled={false} onclick={() => alert('Button was Clicked')} />
      <Counter/>
      <Form/>
      <Color/>
    </>
  )
}

export default App

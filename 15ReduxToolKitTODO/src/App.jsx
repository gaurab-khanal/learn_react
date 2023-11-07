import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <div className="flex flex-col items-center">
      <h1 className='text-3xl mt-5'>Learn about Redux ToolKit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App

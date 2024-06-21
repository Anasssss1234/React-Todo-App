import { useState } from 'react';
import './App.css';
function App() {
  const [input, setInput] = useState('')
  const [Addtodo, setAddtodo] = useState([])

  const handleClick = () => {
    if(!input){
      alert("please Enter a Todo")
      return ;
      
    }
    const updatedTodo = [...Addtodo, input];
    setInput('')
    setAddtodo(updatedTodo)
 
  }

  const deleteTodo = (i) => {
    const Todo = Addtodo.filter((Ele, id) => {
      return i != id;
    })
    setAddtodo(Todo)
  }
  const handleRemove=()=>{
    setAddtodo([])
  }
  return (
    <>
      <div className='background'>
        <div className='container'>
          <div className='head'>
            <h2>Todo-List</h2>
          </div>
          <div className='input'>
            <input type='text' placeholder='Enter a Todo...' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Add</button>
          </div>
          {Addtodo != [] && Addtodo.map((Ele, i) => {
            return (
              <>
                <div className='list'>
                  <h4>{Ele}</h4>
                  <i class="ri-delete-bin-line" onClick={() => deleteTodo(i)}></i>
                </div>
              </>
            )
          })}
         {Addtodo.length>=1 &&  <div className='btn'><button onClick={handleRemove}>Remove All</button></div>}
        </div>
      </div>
    </>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import GetTodo from './components/GetTodo';
import AddTodo from './components/AddTodo';
import './style.scss'
function App() {



 

  const [editTodo, setEditTodo] = useState()
  const dispatch = useDispatch()
  const editSingleTodo = (id) =>{

    fetch(`http://localhost:5000/list/${id}`)
    .then(res => res.json())
    .then(res2 => {
      setEditTodo(res2)
      dispatch({type:"SINGLETODO",payload:res2._id})
    })

   

  }

  return (
    <div className="App">
      <AddTodo editTodo={editTodo} setEditTodo={setEditTodo}/>
      <GetTodo editSingleTodo={editSingleTodo}/>
    </div>
  );
}

export default App;

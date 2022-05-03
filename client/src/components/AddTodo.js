import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const AddTodo = ({ editTodo, setEditTodo }) => {

  const todoId = useSelector((state)=>state.value)
  const [addTodo, setAddTodo] = useState('')

  const addList = () => {
    fetch('http://localhost:5000/list/new', {
      method: "POST",
      body: JSON.stringify({
        todo: addTodo
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    setAddTodo('')
  }
  const editList = (id) => {
      fetch(`http://localhost:5000/list/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          todo: editTodo
        }),
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(r =>r.json())
      .then(res => console.log(res))
      setEditTodo('')

  }

  return (
    <div className='add'>
      <div className='input-c'>
      <input placeholder={!editTodo ? 'Add Todo' : 'Edit Todo'} value={!editTodo ? addTodo : editTodo.todo} onChange={e=>!editTodo ? setAddTodo(e.target.value) : setEditTodo(e.target.value)}/>
      <ion-icon className='mic' name="mic"></ion-icon>
      </div>
      {!editTodo
        ?
        <button onClick={() => addList()}><ion-icon name="add-circle"></ion-icon></button>
        :
        <button onClick={() => editList(todoId)}><ion-icon name="clipboard"></ion-icon></button>
      }
    </div>
  )
}

export default AddTodo
import React, { useEffect, useState } from 'react'
const GetTodo = ({ editSingleTodo }) => {


  const [list, setList] = useState([])

  const getlist = () => {
    fetch('http://localhost:5000/list/sync')
      .then(res => res.json())
      .then(res2 => setList(res2))
  }
  useEffect(() => {
    getlist()
  })

  const deleteTodo = (id) => {

    fetch(`http://localhost:5000/list/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res2 => console.log(res2))
    getlist()
  }


  return (
    <div className='get'>
      <ul>
        {list.map((value, index) => {
          return (
            <div className='list'>
              <li key={index}>
                {value.todo}
              </li>
              <button className='tra' onClick={() => deleteTodo(value._id)}><ion-icon name="trash"></ion-icon></button>
              <button className='edi' onClick={() => editSingleTodo(value._id)}><ion-icon name="create"></ion-icon></button>
              <button className='don'><ion-icon name="done-all"></ion-icon></button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default GetTodo
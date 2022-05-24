import React, { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2'

function App() {
  const [inputText, setInputText] = useState('')

  const handleCheckTextState = () => {
    if (inputText.length <= 6) {
      Swal.fire({
        title: 'ЧОООО!',
        text: 'МАЛО БУКВ',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else {
      Swal.fire({
        title: 'ВСЕ ОК!',
        text: 'НОРМ НОРМ',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  }

  return (
    <div className='background'>
      <div className='form'>
        <h1>ВСЕ ПРИВЕТ ВВЕДИТЕ ТЕКСТ</h1>
        <input onChange={(e) => setInputText(e.target.value)} placeholder="Теребить тут"/>
        <button onClick={handleCheckTextState}>Check</button>
      </div>
    </div>
  )
}

export default App
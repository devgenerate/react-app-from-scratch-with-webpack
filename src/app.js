import { useState } from 'react'

import Image from './assets/images/img1.jpg'

import './app.scss'

export default function App() {
  const [text, setText] = useState('')
  return (
    <main>
      <h1>Main App With Input</h1>
      <input
        type="text"
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <br />
      <img src={Image} alt="" />
    </main>
  )
}
import { useState } from 'react'

import './Logo.css'

function Logo({ title }: { title: string }) {
  const [x, setX] = useState(0)
  return (
    <>
      <h1 className="logo">{title}</h1>
      <button onClick={() => setX(prev => prev + 1)}>Clicked {x} times</button>
    </>
  )
}

export { Logo }

import { useEffect, useState } from 'react'

import { Logo } from '@/components/Logo'
import { Title } from '@/components/Title'

import './App.css'

function App() {
  const [x, setX] = useState(0)

  useEffect(() => {
    if (x < 5) setX(prev => prev + 1)
  }, [x])

  return (
    <>
      <div>
        <Logo title="Vite + React" />
        <Title title="Hello World" />
        <p>{x}</p>
      </div>
    </>
  )
}

export default App

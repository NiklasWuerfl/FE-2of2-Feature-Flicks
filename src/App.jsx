import { useState } from "react"

export default function App() {

  const [greeting, setGreeting] = useState('Hello World!')

  return <div className="App">
    <h1>{greeting}</h1>
    <button
      onClick={() => setGreeting('Goodbye world!')}
    >Say goodbye</button>
    </div>
}
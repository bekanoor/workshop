import { useState } from "react"

const Counter = () => {
  const [count, setCounter] = useState(0)

  const increment = () => {
    setCounter(count - 1)
  }
  
  const decrement = () => {
    setCounter(count + 1)
  }
  
  const getColor = () => {
    if (count === 0) return ''
    if (count > 0 ) return 'green'
    if (count < 0 ) return 'red'
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>Counter: 
        <b className={getColor()}>
          {count}
        </b>
      </p>
      <button onClick={increment}>-</button>
      <button onClick={decrement}>+</button>
    </div>
  )
}

export { Counter }
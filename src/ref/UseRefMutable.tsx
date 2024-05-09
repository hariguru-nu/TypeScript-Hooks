import React, { useState, useRef, useEffect} from 'react'

const UseRefMutable = () => {
    const [name, setName] = useState("");
    // const [count, setCount] = useState(0);
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    })

  return (
    <div>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <h2>Name: {name}</h2>
      <h4>Renders: {count.current}</h4>
    </div>
  )
}

export default UseRefMutable

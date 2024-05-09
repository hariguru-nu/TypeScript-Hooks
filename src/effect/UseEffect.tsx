import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    type DataType = {
        count: number
    }

    const [count, setCount] = useState<number>(0);
    const [otherCount, setOtherCount] = useState(5);

    useEffect(() => {
        document.title = `${count} ${otherCount} new messages`;
    }, [otherCount, count])

  return (
    <div>
      <h3>{count} new messages</h3>
      <button onClick={() => setCount(count +1)}>Increase</button>
      <h2>{otherCount} new messages</h2>
      <button onClick={() => setOtherCount(otherCount + 10)}>Increase message</button>
    </div>
  )
}

export default UseEffect

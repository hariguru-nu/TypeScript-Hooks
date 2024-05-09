import React, {useRef} from 'react';

const UseRefDom = () => {
    const inputElement = useRef<HTMLInputElement>(null!);

    const handleClick = () => {
        console.log(inputElement.current);
        inputElement.current.style.width = "300px";
        inputElement.current?.focus();
    }

  return (
    <div>
      <input type='text' ref={inputElement} />
      <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default UseRefDom
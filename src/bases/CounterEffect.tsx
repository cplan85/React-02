import {useState, useEffect, useRef} from 'react';
import {gsap} from 'gsap';

const MAXIMUM_COUNT = 10; 



export const CounterEffect = () => {
  
    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter(counter => counter < MAXIMUM_COUNT ?counter + 1 : counter)
        // or (prev => Math.min(prev + 1, MAXIMUM_COUNT ))
       }

      useEffect(() => {
       // if (counter <10 ) return;
       // console.log('%c We arrived at the value', 'color:red; background-color: black')

        const tl = gsap.timeline();

        tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out'})
        .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out'})

      }, [counter])
      //execut this function everytime the variables in arrray change
      
  return (
    <>
    <h1>CounterEffect: { counter }</h1>
    <h2 ref={counterElement}>{ counter }</h2>

    <button onClick={handleClick}>
        + 1
    </button>
    </>
  )
}

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';


export const useCounter = ({maxCount = 10}) => {

    
    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null);

    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter(counter => counter < maxCount ?counter + 1 : counter)
        // or (prev => Math.min(prev + 1, MAXIMUM_COUNT ))
       }

       useLayoutEffect(() => {
        if(!counterElement.current) return;
        console.log(counterElement.current)
        tl.current.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out'})
        .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out'})
        .pause();
     
       }, [])

      useEffect(() => {
        if (counter < maxCount ) return;
       // console.log('%c We arrived at the value', 'color:red; background-color: black')
        tl.current.play(0)
      }, [counter])

      return {
        counter,
        counterElement,
        handleClick
      }
}
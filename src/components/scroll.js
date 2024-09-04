import React, { useEffect, useState } from 'react'

const Scroll = () => {

    const [count, setCount] = useState(50)

    useEffect(() => {

        const onScroll = () => {
            if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight) {
                setCount(prev =>  prev + 50)
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll)
    }, [count])

    const element = [];
    for (let i = 1; i <= count; i++) {
        element.push(<div key={i}>{i}</div>)
    }

    return element 
} 

export default Scroll
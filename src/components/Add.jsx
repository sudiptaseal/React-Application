import React from 'react'

const Add = () => {
    const myName = "Sudipta Seal";
    const multiply = (a,b) => a*b;
    const specialClass = "special-class";
    return (

        <section>
            <p>2+2 = {2 + 2}</p>
            <h1>{myName}</h1>
            <p>{["monaj","abhik","santanu"]}</p>
            <p>2 * 10 = {multiply(2,10)}</p>
            <p className={specialClass}>This is special class</p>
        </section>


    )
}

export default Add
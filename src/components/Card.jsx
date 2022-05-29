import React from 'react'
import comillas1 from '../components/comillas1.png'

const Card = ({messageRandom, colorRandom, clickBtn}) => {

    const styleBtn = {
        backgroundColor: colorRandom
    }

  return (
    <article className= 'card' style={{color: 'white'}}>
        <h4><img src={comillas1}/> {messageRandom.quote}</h4>
        <p><i>{messageRandom.author}</i></p>
        <button className="btn" style={styleBtn} onClick={clickBtn}> <b>&#62;</b></button>
    </article>
  )
}

export default Card
import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import './SingleFaq.css'


const SingleFaq = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false)
    

    return (
        
        <li onClick={ () => setShowAnswer(!showAnswer) }>
            <div className="title">
                <span>{ question }</span>
                
                {
                    showAnswer
                        ?
                            <FaAngleUp className='title__icon' />
                        :
                            <FaAngleDown className='title__icon' />
                }
            </div>
            {
                showAnswer && <p className="answer">{ answer }</p>
            }
        </li>
        
    )
}

export default SingleFaq
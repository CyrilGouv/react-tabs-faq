import { useState } from 'react'
import SingleFaq from './SingleFaq'
import { data } from '../data/data'

import './Faq.css'


const Faq = () => {
    const [index, setIndex] = useState(0)

    const { name, faq, id } = data[index]

    return (
        <section className='Faq'>
            <div className="faq__wrapper">
                <ul className="faq__lists">
                    {
                        data.map((item, idx) => {

                            const { id, name, icon } = item

                            return (
                                <li onClick={ () => setIndex(idx) } key={ id } className={`faq__lists__item ${idx === index && 'active'}`}>{ icon } <span>{ name }</span></li>
                            )
                        })
                    }
                </ul>

                <div className="faq__content">
                    <h3>{ name }</h3>

                    <ul className="faq__content__lists">
                        {
                            faq.map(item => {
                                return (
                                    <SingleFaq key={ item.id } { ...item } />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Faq
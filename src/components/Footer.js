import React from 'react'
// import logodir from '../images/logodir.png'
import logome from '../images/logome.png'

const Footer = () => {
    return (
        <div className='bg-floral-pattern text-sm text-center inset-x-0 bottom-0 p-2'>
            <footer className='mt-3'>
                Created with 💙 by   
                <a href='https://www.linkedin.com/in/harrynurbudyana/' className='underline decoration-pink-500 text-cream text-underline-offset-4 hover:text-pink-500'> Lawkidd  </a>
                <p className=''>
                    <img className='w-12 mx-auto justify-center' src={logome} alt = 'logo dir'/>
                </p>
            </footer>
        </div>
    )
}

export default Footer

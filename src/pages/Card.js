import React from 'react'
import profile from '../images/couple.png'
import logome from '../images/logome.png'
// import meant2be from '../audio/meant2be.mp3'
// import iwannagrowoldwithyou from '../audio/iwannagrowoldwithyou.m4a'
import AudioPlayer from '../components/AudioPlayer'



function Card() {
    return (
        <div className='min-h-screen bg-transparent py-20 px-3'>
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl py-12 px-12 '>
                <div className=''>
                    <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt = 'profile sc'/>
                </div>
                <div className='text-center mt-5'>
                    <span className='text-md sm:text-base font-bold text-brown-300'>
                        We Invite You To Celeberate Our Wedding
                    </span>
                    
                    <p className='text-xl md:text-2xl mt-3 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-brown-200 to-cream font-extrabold'>
                        Fina & Harry
                    </p>
                    <div className='flex align-center just-center mt-3'></div>
                    <p className='text-xs xs:text-base bg-clip-text opacity-75 bg-gradient-to-r from-pink-200 to-brown-200 font-medium italic pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                        Sabtu, 13 Januari 2024
                    </p>                    
                </div>              
            </div>
            
            <div className='bg-white-700 text-sm text-white text-center inset-x-0 bottom-0 p-9'>
                <AudioPlayer></AudioPlayer>
                
                <footer className='text-fuchsia-950 mt-5 opacity-70'>
                    Created with 💙 by
                    <a href='https://www.linkedin.com/in/harrynurbudyana/' target='_blank' rel='noreferrer'>
                        <p className='text-fuchsia-950 underline decoration-orange-800 hover:text-brown-300' href="https://www.linkedin.com/in/harrynurbudyana/"> Lawkidd </p>
                    </a>
                    <p className=''>
                        <img className='w-12 mx-auto justify-center' src={logome} alt = 'logo dir'/>
                    </p>
                </footer>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-circle mx-auto mt-2 animate-bounce" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="8" y1="12" x2="12" y2="16" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="16" y1="12" x2="12" y2="16" />
                </svg>
                <p className='text-neutral-800 opacity-90 '>
                    Scroll Down
                </p>
            </div>
        </div>
    )
}

export default Card

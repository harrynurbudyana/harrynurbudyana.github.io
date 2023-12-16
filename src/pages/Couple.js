import React from 'react'
import Avatar from 'avataaars'

function Couple() {
    return (
        <div className='min-h-screen py-10 px-6'> 

            <div className='text-md font-normal text-center'>
                <div className='bg-white flex flex-col justify-center max-w-xl mx-auto shadow-xl rounded-xl py-12 px-12'>
                    <span className='bg-clip-text mt-2 font-bold text-obrown'>
                        بِسمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                    </span>

                    <p className='bg-clip-text mt-4 font-medium text-obrown'>
                        Assalamu'alaikum wr.wb
                    </p>
                    <p className='bg-clip-text mt-4 font-medium italic text-brown-50'>
                    "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                    </p>
                    <p className='bg-clip-text text-md font-medium text-brown-50'>
                        QS. Ar-Rum : 21
                    </p>
                    <div className='text-md text-center mt-3 mb-0 font-normal break-words text-obrown leading-relaxed'>
                    Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
                    </div>
                </div>
            </div>
            
           

            <div className='flex flex-auto justify-center w-36 mx-auto inset-1'>
                <Avatar
                    avatarStyle='Circle'
                    topType='Hijab'
                    accessoriesType='Round'
                    hatColor='Red'
                    clotheType='BlazerShirt'
                    eyeType='Happy'
                    eyebrowType='Default' 
                    mouthType='Default'
                    skinColor='Light'
                />
            </div>
                
            <div className='text-xl font-extrabold text-center'>
                <span className='bg-clip-text text-fuchsia-950'>
                    Fina Najma Amalia, S.Pd.
                    {/* <p className='bg-clip-text text-md-24 mt-1 font-normal italic text-transparent bg-gradient-to-r from-brown-200 to-pink-400'>  (Fina)</p> */}
                </span>
                <p className='text-sm mt-2 font-normal italic bg-clip-text text-obrown'>
                    Putri pertama dari Bapak H. Hudri & Ibu Sri Nuranggraeni (Heni)
                </p>
            </div>

            <div className='text-2xl font-extrabold text-center mt-9'>
                <span className='bg-clip-text italic text-transparent bg-fuchsia-950'>
                   &
                </span>
            </div>
                
            <div className='flex flex-auto justify-center w-36 mx-auto'>
                <Avatar
                    avatarStyle='Circle'
                    topType='ShortHairShortCurly'
                    accessoriesType='Blank'
                    hairColor='BrownDark'
                    facialHairType='Blank'
                    clotheType='BlazerSweater'
                    eyeType='Default'
                    eyebrowType='Default'
                    mouthType='Default'
                    skinColor='Light'
                />
            </div>
            <div className='text-xl font-extrabold text-center py-3'>
                <span className='bg-clip-text text-fuchsia-950'>
                    Nanda Harry Nurbudyana, S.T.
                    {/* <p className='bg-clip-text text-md-24 mt-1 font-semibold italic text-transparent bg-gradient-to-r from-brown-200 to-pink-400'>  (Harry)</p> */}
                </span>
                <br />
                <p className='text-sm font-normal mt-2 mb-0 italic bg-clip-text text-obrown'>
                    Putra pertama dari Bapak Thuryana & Ibu Nurelah
                </p>
            </div>
        </div>
    )
}

export default Couple

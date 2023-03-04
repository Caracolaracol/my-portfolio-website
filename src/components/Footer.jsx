import { useContext } from 'react'
import logo2 from '../assets/logo1.png'
import { GeneralContext } from '../context/general-context'

function Footer() {
    const {setLanguage, language} = useContext(GeneralContext)

    const handlerSpanish = () => {
        if (language == 'EN') {
            setLanguage('ES')
        }
    }
    const handlerEnglish = () => {
        if (language == 'ES') {
            setLanguage('EN')
        }
    }


    return (
        <div className='ml-[2%] h-[4rem] tablet:h-[4.2rem] absolute bottom-0 w-[85%]'>
            <footer className='flex h-[4rem] justify-between' >
                <div>
                    <p></p>
                </div>
                <div className='flex flex-row h-[2rem] items-center'>
                    <p className='flex gap-2'>2022 ® Caracolaracol <img src={logo2} className='w-6 h-6' /></p>
                    <p className='hover:cursor-pointer hover:text-naranjahover ml-8 px-1 font-tommyregular rounded-sm active:bg-purpuraclaro active:bg-opacity-70' onClick={handlerSpanish}>Español</p><em className='text-naranjahover px-2 font-tommyregular'> // </em><p className='hover:cursor-pointer hover:text-naranjahover px-1 font-tommyregular rounded-sm active:bg-purpuraclaro active:bg-opacity-70' onClick={handlerEnglish}>English</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
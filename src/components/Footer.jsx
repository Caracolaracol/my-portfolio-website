import logo2 from '../assets/logo1.png'

function Footer() {
    return (
        <div className='ml-[2%] h-[4rem] tablet:h-[4.2rem] absolute bottom-0 w-[85%]'>
            <footer className='flex h-[4rem] justify-between' >
                <div>
                    <p></p>
                </div>
                <div >
                    <p className='flex gap-2'>2022 ® Caracolaracol <img src={logo2} className='w-6 h-6' /></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
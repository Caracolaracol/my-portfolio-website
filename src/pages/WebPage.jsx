
import { PagesContainer } from '../components/Pages'

function WebPage() {

    return (
        <PagesContainer>
            <div className='mainpage projectshow'>
                <div className='w-[60vw] tablet:w-[16rem] border-b-[1px] border-naranjaborder mb-8'>
                    <h1 className='text-5xl font-tommy h-14 pl-2'>Obsidian</h1>
                </div>

                <div className='bg-naranja w-72 h-72 '></div>
                <div className=' min-w-full h-6'>

                </div>
                <div>
                    <p className='text-[1rem] font-tommylight tracking-wide antialiased'>
                        This is a clone of the <a className='text-naranja hover:text-naranjahover' href='https://obsidian.md/' target='_blank' >Obsidian website</a>, made for improving my developing skills.
                    </p>
                    <div className=' min-w-full h-10'>

                    </div>
                    <h2 className='font-chrono text-[1.7rem]'>
                        Technologies i used
                    </h2>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                        <div className='bg-naranja w-12 h-12 '></div>
                    </div>
                    <p>
                       
                    </p>
                </div>
            </div>

        </PagesContainer>
    )
}

export default WebPage
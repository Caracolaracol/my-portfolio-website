

function WebProjectContent (props) {


    return (
        <div>
            <div className='min-w-[4rem] w-[25rem] border-b-[1px] border-naranja mb-8'>
                <h1 className='text-5xl leading-tight font-tommy min-h-max pl-2'>{props.name}</h1>
            </div>

            <div className='bg-naranja w-72 h-72 '></div>
            <div className=' min-w-full h-6'>

            </div>
            <div>
                <p className='text-[1rem] font-tommylight tracking-wide antialiased'>
                    This is a clone of the <a className='text-naranja hover:text-naranjahover' href='https://obsidian.md/' target='_blank' >Obsidian website</a>, made for improving my developing skills. It is the landing page of the site. I tried to made this page without seeing the original html because i thought that doing it this way would make it harder to clone.
                </p>
                <p>
                   {props.opinion}
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
            <div className=' min-w-full h-10'>

            </div>
            <div className='flex justify-end min-w-full'>
                <button className='w-36 h-12 font-tommyregular tablet:text-xl bg-purpural rounded-sm hover:bg-purpuralh hover:text-texth'>
                    Next project
                </button>
            </div>
        </div>
    )
}

export default WebProjectContent
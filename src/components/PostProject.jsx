
import { useParams } from "react-router-dom"
function PostProject () {
    const params = useParams()
    console.log(params)
    
    return (
        <div className='mainpage projectshow'>
            <div className='border-b-[1px] border-naranja  mb-8'>
                <h1 className='text-5xl leading-tight font-tommy min-h-max pl-2'>Bichos</h1>
            </div>

            <div className='bg-naranja w-72 h-72 '></div>
            <div className=' min-w-full h-6'>

            </div>
            <div>
                <p className='text-[1rem] font-tommylight tracking-wide antialiased'>
                    This is a music video I made for the rock band Bichonauta.
                </p>
                <p>
                    Bichonauta its a rock band filled with bugs and based in Santiago. Its a great band check it out!
                </p>
                <div className=' min-w-full h-10'>

                </div>
                <h2 className='font-chrono text-[1.7rem]'>
                    How I made this project?
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

export default PostProject
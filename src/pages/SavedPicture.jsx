// no data image
import { useContext } from 'react'
import image from '../assets/noo.svg'

// context
import { MainContext } from '../context/MainContext'

// react router dom
import { Link } from 'react-router-dom';

export default function SavedPicture() {
    // useContext
    const { saveArr } = useContext(MainContext);


    return (
        <div className="w-full h-200 px-4">
            {saveArr.length === 0 ? (
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-100 flex flex-col  items-center justify-center gap-5'>
                        <img src={image} alt="img" />
                        <h1 className='text-2xl font-bold text-gray-500'>You haven’t saved any images yet.</h1>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col gap-5'>
                    <p className='text-xl text-gray-500'>Your saved images</p>
                    <div className='max-w-full  columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6'>
                        {saveArr.map((i) => (
                            <Link key={i.id} to={`/img/${i.id}`}>
                                <div className="mb-5 cursor-pointer">
                                    <img className="rounded-xl" src={i.Image} alt="img" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
};
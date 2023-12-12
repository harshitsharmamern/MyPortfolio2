import React from 'react'

const ImageComponents = ({img1, img2}) => {
    return (
        <div>
            <a href="#" className="group block overflow-hidden">
                <div className="relative h-[280px] sm:h-[280px]">
                    <img
                        src={img1}
                        alt=""
                        className="absolute inset-0 h-[280px] w-full rounded-lg opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src={img2}
                        alt=""
                        className="absolute inset-0 h-[280px] w-full rounded-lg opacity-0 group-hover:opacity-100"
                    />
                    <button className='absolute bottom-2 left-1/2 translate-x-[-50%] py-2 px-6 border-2 hover:bg-[#29ad85] bg-[#20c997] rounded-full'>Details</button>
                </div>
            </a>
        </div>
    )
}

export default ImageComponents
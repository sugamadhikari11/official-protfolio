import Link from 'next/link'
import React from 'react'
interface TagProps {
    link?: string;
    name: string;
}

const Tag: React.FC<TagProps> = ({ link = "#", name, ...props }) => {
    return <Link href={link} className='inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light 
    rounded-full capitalize font-semibold border-2 border-solid border-light text-sm sm:text-base'>{name}</Link>

    
}

export default Tag
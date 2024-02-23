import Link from 'next/link';
import React from 'react';

interface CategoryProps {
    link?: string;
    name: string;
    active: boolean;
}

const Category: React.FC<CategoryProps> = ({ link = "#", name, active }) => {
    return (
        <Link href={link}>
            <div className={`inline-block py-1.5 md:py-2 px-6 md:px-10 hover:scale-105 transition-all ease duration-200
             rounded-full border-2 border-solid m-2 ${active ? "bg-dark text-light" : "bg-light text-dark"}`}>
                #{name}
            </div>
        </Link>
    );
};

export default Category;

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='fixed w-full h-20'>
            <div>
            <Link href="/"><a className='text-3xl text-red-500'>E-Learn</a></Link>
            </div>
        </div>
    );
};

export default Navbar;
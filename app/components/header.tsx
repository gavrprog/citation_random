import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg';

export default function Header() {
    return(
        <header>
            <Image src={logo} width={100} alt="logo" />
        </header>
    )
}
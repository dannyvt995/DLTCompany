import React from 'react'
import s from './style.module.css'
import Link from 'next/link'
export default function NavbarSection() {
    return (

        <nav>
            NavbarSection
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about-us'}>About us</Link></li>
                <li><Link href={'/our-service'}>Our Services</Link></li>
                <li><Link href={'/contact-us'}>Contact</Link></li>
            </ul>
        </nav>
    )
}

"use client"
import React, { memo } from 'react'
import s from './style.module.css'
import Link from 'next/link'
import { navbarContrast } from '@/Contrast/page'

function NavbarSection() {
    return (

        <nav className={s.navbarSection}>
            <ul className={s.listItemNavbar}>
                {navbarContrast.listItems.map((item,index) => (
                      <li key={index}><Link href={item.link}>{item.name}</Link></li>
                ))}
            </ul>
        </nav>
    )
}
export default memo(NavbarSection)
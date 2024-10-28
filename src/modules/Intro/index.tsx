import React from 'react'
import {infoCompany} from '@/Contrast/page'

import Link from 'next/link'

export default function Intro({data}:{data:any}) {
    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-img">
                         
                        {/* <ImagePreload src={data.thumb} alt="DLT Technical Services" style={{width:"auto",height:"100%"}}/> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="section-header text-left">
                            <p>Our Company</p>
                            <h2>{infoCompany.name}</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                {data.intro[0]}
                            </p>
                            <p>
                            {data.intro[1]}
                            </p>
                            <Link className="btn" href='/contact-us'>Let contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

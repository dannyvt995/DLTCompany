import React from 'react'
import {infoCompany,buttonLink} from '@/Contrast/page'
import Image from 'next/image'
export default function Intro({data}:{data:any}) {
    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-img">
                         
                        <Image src={data.thumb} alt="sdf" width={0} height={0} sizes='100vw' style={{width:"auto",height:"100%"}}/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
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
                            <a className="btn" href={buttonLink.listItems.phone.link}>Let contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

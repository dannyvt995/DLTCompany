import Image from 'next/image'
import React from 'react'
import { pageData } from '@/Contrast/page'
export default function Services() {
    return (
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Type Services</p>
                    <h2>We Provide Services</h2>
                </div>
                <div className="row">
                    
                    {pageData.aboutus.typeofservice.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="service-img">

                                    <Image src='/service/Civil_Construction_1.webp' alt="sdf" width={200} height={200} />
                                    <div className="service-overlay">
                                        <p>
                                            {pageData.aboutus.detailtypeofservice[index]}
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>{item}</h3>
                                  {/*   <a className="btn" href="img/service-1.jpg" data-lightbox="service">+</a> */}
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

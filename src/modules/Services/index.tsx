
import React from 'react'
import { pageData } from '@/Contrast/page'
import ImagePreload from '@/components/ImagePreload'
export default function Services() {
    return (
        <div className="service">
            <div className="container">
               {/*  <div className="section-header text-center">
                    <p>Our Type Services</p>
                    <h2>We Provide Services</h2>
                </div> */}
                <div className="row">
                    
                    {pageData.aboutus.typeofservice.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="service-img">

                                    <ImagePreload src={pageData.aboutus.imgtypeofservice[index]} alt={`Civil_Construction_${index}`} />
                                    <div className="service-overlay">
                                        <p>
                                            {pageData.aboutus.detailtypeofservice[index]}
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>{item}</h3>
                                  {/*   <a className="btn" href="/service/Civil_Construction-1.webp" data-lightbox="Civil_Construction">+</a> */}
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">

                    <Image src='/service/Civil_Construction_1.webp' alt="sdf" width={200} height={200} />
                    <div className="carousel-caption">
                        <p className="animated fadeInRight">We Are Professional</p>
                        <h1 className="animated fadeInLeft">For Your Dream Project</h1>
                        <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                    </div>
                </div>

                <div className="carousel-item">
                    {/*   <img src="img/carousel-2.jpg" alt="Carousel Image"> */}
                    <div className="carousel-caption">
                        <p className="animated fadeInRight">Professional Builder</p>
                        <h1 className="animated fadeInLeft">We Build Your Home</h1>
                        <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                    </div>
                </div>

                <div className="carousel-item">
                    {/*   <img src="img/carousel-3.jpg" alt="Carousel Image"> */}
                    <div className="carousel-caption">
                        <p className="animated fadeInRight">We Are Trusted</p>
                        <h1 className="animated fadeInLeft">For Your Dream Home</h1>
                        <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

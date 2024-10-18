import ImagePreload from '@/components/ImagePreload'

import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"> </li>
                <li data-target="#carousel" data-slide-to="1"> </li>
                <li data-target="#carousel" data-slide-to="2"> </li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <ImagePreload priority src='/service/Civil_Construction-1.webp' alt="Civil Construction || DLT Technical Services" />
                    <div className="carousel-caption">
                        <p className="animated fadeInRight">Type service</p>
                        <h1 className="animated fadeInLeft">Civil Construction</h1>
                        <Link className="btn animated fadeInUp" href="/our-service">Explore service</Link>
                    </div>
                </div>

                <div className="carousel-item">
                <ImagePreload src='/service/Skid-resistant_Colour_Surface_Treatment_1.webp' alt="Surface Treatment || DLT Technical Services" />
                    <div className="carousel-caption">
                        <p className="animated fadeInRight">Type service</p>
                        <h1 className="animated fadeInLeft">Surface Treatment</h1>
                        <Link className="btn animated fadeInUp" href="/our-service">Explore service</Link>
                    </div>
                </div>

                <div className="carousel-item">
                <ImagePreload src='/service/Permeable_paving_1.webp' alt="Permeable Paving || DLT Technical Services" />
                    <div className="carousel-caption">
                        <p className="animated fadeInRight">Type service</p>
                        <h1 className="animated fadeInLeft">Permeable Paving</h1>
                        <Link className="btn animated fadeInUp" href="/our-service">Explore service</Link>
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

"use client"
import { useEffect, useRef, useState } from 'react';

import ImagePreload from '@/components/ImagePreload';
import React from 'react';

export default function ListProject() {
    const isotope = useRef<Isotope | null>(null); 
    const [filterKey, setFilterKey] = useState('*'); 
    const pRef=  useRef(null)
    useEffect(() => {
        // Import Isotope dynamically only on the client-side
        import('isotope-layout').then((IsotopeModule) => {
            const Isotope = IsotopeModule.default;
            if (pRef.current) {
                isotope.current = new Isotope(pRef.current, {
                    itemSelector: '.portfolio-item',
                    layoutMode: 'fitRows',
                });
            }
        });

        return () => {
            isotope.current?.destroy();
        };
    }, []);

    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({ filter: filterKey });
        }
    }, [filterKey]);

    const handleFilterChange = (filter: string) => {
        setFilterKey(filter);
    };

    return (
        <div className="portfolio">
            <div className="container">
                <div className="section-header text-center">
                    {/* <p>Our Projects</p> */}
                    <h2>Visit Our Projects</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul id="portfolio-flters">
                            <li
                                data-filter="*"
                                className={filterKey === '*' ? 'filter-active' : ''}
                                onClick={() => handleFilterChange('*')}
                            >
                                All
                            </li>
                            <li
                                data-filter=".first"
                                className={filterKey === '.first' ? 'filter-active' : ''}
                                onClick={() => handleFilterChange('.first')}
                            >
                                Complete
                            </li>
                            <li
                                data-filter=".second"
                                className={filterKey === '.second' ? 'filter-active' : ''}
                                onClick={() => handleFilterChange('.second')}
                            >
                                Running
                            </li>
                            <li
                                data-filter=".third"
                                className={filterKey === '.third' ? 'filter-active' : ''}
                                onClick={() => handleFilterChange('.third')}
                            >
                                Upcoming
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container" ref={pRef}>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.1s" >
                        <div className="portfolio-warp">
                            <div className="portfolio-img">
                                <ImagePreload src='/service/Civil_Construction-1.webp' alt="Civil Construction || DLT Technical Services" />

                                <div className="portfolio-overlay">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-text">
                                <h3>Project 1</h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.2s">
                        <div className="portfolio-warp">
                            <div className="portfolio-img">
                                <ImagePreload src='/service/Civil_Construction-1.webp' alt="Civil Construction || DLT Technical Services" />
                                <div className="portfolio-overlay">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-text">
                                <h3>Project 2</h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.3s">
                        <div className="portfolio-warp">
                            <div className="portfolio-img">
                                <ImagePreload src='/service/Civil_Construction-1.webp' alt="Civil Construction || DLT Technical Services" />
                                <div className="portfolio-overlay">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-text">
                                <h3>Project 3</h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.4s">
                        <div className="portfolio-warp">
                            <div className="portfolio-img">
                                <ImagePreload src='/service/Civil_Construction-1.webp' alt="Civil Construction || DLT Technical Services" />
                                <div className="portfolio-overlay">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-text">
                                <h3>Project 4</h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                        <div className="portfolio-warp">
                            <div className="portfolio-img">
                                <ImagePreload src='/service/Civil_Construction-1.webp' alt="Civil Construction || DLT Technical Services" />
                                <div className="portfolio-overlay">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-text">
                                <h3>Project 5</h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.6s">
                        <div className="portfolio-warp">
                            <div className="portfolio-img">
                                <ImagePreload src='/service/Civil_Construction-1.webp' alt="Civil Construction || DLT Technical Services" />
                                <div className="portfolio-overlay">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-text">
                                <h3>Project 6</h3>

                            </div>
                        </div>
                    </div>
                </div>
                {/*  <div className="row">
            <div className="col-12 load-more">
                <a className="btn" href="#">Load More</a>
            </div>
        </div> */}
            </div>
        </div>
    )
}

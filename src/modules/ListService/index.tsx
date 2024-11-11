"use client"
import { useEffect, useRef, useState } from 'react';

import ImagePreload from '@/components/ImagePreload';
import React from 'react';
import { pageData } from '@/Contrast/page'
export default function ListService() {
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
    const listPick = ['first','first','second','third','first','second']
    return (
        <div className="portfolio">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Visit Our Service</h2>
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
                                Civil & Constructions
                            </li>
                            <li
                                data-filter=".second"
                                className={filterKey === '.second' ? 'filter-active' : ''}
                                onClick={() => handleFilterChange('.second')}
                            >
                                Building & Maintenance
                            </li>
                            <li
                                data-filter=".third"
                                className={filterKey === '.third' ? 'filter-active' : ''}
                                onClick={() => handleFilterChange('.third')}
                            >
                                Surface treatment supply & Installation
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container" ref={pRef}>

                {pageData.aboutus.typeofservice.map((item, index) => (
                        <div key={index} className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${listPick[index]}`} >
                            <div className="portfolio-warp">
                                <div className="portfolio-img">
                                <ImagePreload src={pageData.aboutus.imgtypeofservice[index]} alt={`Civil_Construction_${index}`} />

                                    <div className="portfolio-overlay">
                                        <p>
                                        {pageData.aboutus.detailtypeofservice[index]}
                                        </p>
                                    </div>
                                </div>
                                <div className="portfolio-text">
                                <h3>{item}</h3>

                                </div>
                            </div>

                        </div>
                    ))}

{/* 
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first" >
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
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second" >
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
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third">
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
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first">
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
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second" >
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
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third" >
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}

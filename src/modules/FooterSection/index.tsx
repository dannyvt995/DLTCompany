import React, { memo } from 'react'

import { pageData,infoCompany,navbarContrast } from '@/Contrast/page'
 function FooterSection() {
    return (

        <div className="footer wow fadeIn" data-wow-delay="0.3s">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5">
                    <div className="footer-contact">
                        <h2>Office Contact</h2>
                        <p><i className="fa fa-map-marker-alt"></i>{infoCompany.postal}</p>
                        <p><i className="fa fa-phone-alt"></i>{infoCompany.phone}</p>
                        <p><i className="fa fa-envelope"></i>{infoCompany.email}</p>
                        <div className="footer-social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="footer-link">
                        <h2>Services Areas</h2>
                        {pageData.service.list.map((item,index) => (
                             <a  key={index} href="">{item.name}</a>
                            
                        ))}
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="footer-link">
                        <h2>Menu</h2>
                        {navbarContrast.listItems.map((item,index) => (
                             <a  key={index} href={item.link}>{item.name}</a>
                            
                        ))}
                    </div>
                </div>
              {/*   <div className="col-md-6 col-lg-3">
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                        </p>
                        <div className="form">
                           <input className="form-control" placeholder="Email here"> 
                            <button className="btn">Submit</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="container footer-menu">
            <div className="f-menu">
                <a href="">Terms of use</a>
                <a href="">Privacy policy</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
            </div>
        </div>
        <div className="container copyright">
            <div className="row">
                <div className="col-md-12">
                    <p>&copy; <a href="#">{infoCompany.name}</a>, All Right Reserved.</p>
                </div>
             
            </div>
        </div>
    </div>
    )
}
export default memo(FooterSection)

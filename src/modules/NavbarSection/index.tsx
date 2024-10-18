"use client"
import  { memo,useState ,useEffect} from 'react'
import Link from 'next/link'
import { navbarContrast,infoCompany } from '@/Contrast/page'

import ImagePreload from '@/components/ImagePreload'

function NavbarSection() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 90) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <>
          <div className="top-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-12">
                            <Link href="/" className="logo">
                           
                                    <ImagePreload style={{width:"100%",height:"auto"}}  priority src={infoCompany.urlLogo} alt="DLT Technical Services"/>
                          
                            </Link>
                        </div>
                        <div className="col-lg-9 col-md-7 d-none d-lg-block">
                            <div className="row">
                                <div className="col-4">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-calendar"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Opening Hour</h3>
                                            <p>Mon - Fri, 8:00 - 9:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Call Us</h3>
                                            <p>{infoCompany.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="top-bar-item">
                                        <div className="top-bar-icon">
                                            <i className="flaticon-send-mail"></i>
                                        </div>
                                        <div className="top-bar-text">
                                            <h3>Email Us</h3>
                                            <p>{infoCompany.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`nav-bar ${isSticky ? 'nav-sticky' : ''}`}>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                {navbarContrast.listItems.map((item,index) => (
                                    <li key={index}><Link className='nav-item nav-link' href={item.link}>{item.name}</Link></li>
                                ))}
                            </ul>
                          
                        </div>
                    </nav>
                </div>
            </div>

       
        </>
    
    )
}
export default memo(NavbarSection)
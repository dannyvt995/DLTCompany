"use client"
import {FormEvent,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImagePreload from '@/components/ImagePreload';
export default function FormSection() {
    const [value, setValue] = useState({
        fullName: "",
        phone: "",
        email: "",
        typeService: "",
        content: "",
      });
     
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const promise = fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }).then((response) => {
          if (!response.ok) {
            throw new Error("An error occurred, please try again");
          }
          return response;
        });
        
        toast.promise(
          promise,
          {
            pending: 'Sending information...',
            success: 'We have received the information! 🎉',
            error: 'An error occurred, please try again',
          }
        );
    
        promise.then(() => {
          setValue({
            fullName: "",
            phone: "",
            email: "",
            typeService: "",
            content: "",
          });
        });
    
      };
  return (
    <div className="contact wow fadeInUp">
     
    <div className="container">
        <div className="section-header text-center">
            <p>Get In Touch</p>
            <h2>For Any Query</h2>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="contact-info">
                 
                <ImagePreload style={{width:"100%",height:"auto"}}  priority src={"/logo_clear_full.png"} alt="DLT Technical Services"/>
                   {/*  <div className="contact-item">
                        <i className="flaticon-address"></i>
                        <div className="contact-text">
                            <h2>Location</h2>
                            <p>{infoCompany.postal}</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <i className="flaticon-call"></i>
                        <div className="contact-text">
                            <h2>Phone</h2>
                            <p>{infoCompany.phone}</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <i className="flaticon-send-mail"></i>
                        <div className="contact-text ">
                            <h2>Email</h2>
                            <p className='dkouyhbs'>{infoCompany.email}</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <ToastContainer />
           
       
             <div className="col-md-6">
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" onSubmit={(e) => handleSubmit(e)}>
                        <div className="control-group">
                            <input
                             value={value.fullName}
                             onChange={(e) =>
                               setValue((prev) => ({
                                 ...prev,
                                 fullName: e.target.value,
                               }))
                             }
                             required
                              type="text" className="form-control" id="name" placeholder="Your Name"  data-validation-required-message="Please enter your name" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input
                              value={value.phone}
                              onChange={(e) =>
                                setValue((prev) => ({
                                  ...prev,
                                  phone: e.target.value,
                                }))
                              }
                              required
                              type="number" className="form-control" id="phone" placeholder="Your Phone"  data-validation-required-message="Please enter your phone number" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input
                            
                            value={value.email}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            required
                            
                            type="email" className="form-control" id="email" placeholder="Your Email"  data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input
                            
                            value={value.typeService}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                typeService: e.target.value,
                              }))
                            }
                            required
                            
                            type="text" className="form-control" id="subject" placeholder="Subject"  data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea 
                              value={value.content}
                              onChange={(e) =>
                                setValue((prev) => ({
                                  ...prev,
                                  content: e.target.value,
                                }))
                              }
                              required
                            className="form-control" id="message" placeholder="Message"  data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    </div>
</div>
  )
}

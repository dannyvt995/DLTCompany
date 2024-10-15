import React from 'react'
import { infoCompany } from '@/Contrast/page'
export default function FormSection() {
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
                    <div className="contact-item">
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
                        <div className="contact-text">
                            <h2>Email</h2>
                            <p>{infoCompany.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" >
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="Your Name"  data-validation-required-message="Please enter your name" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" id="email" placeholder="Your Email"  data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="subject" placeholder="Subject"  data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" id="message" placeholder="Message"  data-validation-required-message="Please enter your message"></textarea>
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

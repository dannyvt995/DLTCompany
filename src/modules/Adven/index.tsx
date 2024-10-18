import React from 'react'
import s from './style.module.css'
export default function Adven() {
    return (
        <div className={s.adven}>
            <div className="container">
                <div className="section-header text-center">
                    <p>DLT Technical Services</p>
                    <h2>Core Values</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className={s.tit}>
                            <div className={s.icon}>
                                <i className="fas fa-check-double"></i>
                            </div>
                            <p>Relationships</p>
                        </div>
                        <div className="about-text">
                            <p>We are proud to have relationships with many long-term local suppliers and contractors allowing us to deliver projects with confidence and efficiency. Further, we especially value the relationships with our staff. They are the backbone of DLT Technical Services.</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className={s.tit}>
                            <div className={s.icon}>
                                <i className="fas fa-check-double"></i>
                            </div>
                            <p>Environmental sustainability</p>
                        </div>
                        <div className="about-text">
                            <p>At DLT Technical Services we are committed to delivering projects which have positive outcomes for society and the environment. We pride ourselves in ensuring sustainable design, durability of products, energy efficiency, waste reduction, water conservation and incorporation of sustainable building materials. We often assist with redesigns when we see an opportunity for design improvement. These strategies allow us to support present and future generations. </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className={s.tit}>
                            <div className={s.icon}>
                                <i className="fas fa-check-double"></i>
                            </div>
                            <p>OH&S</p>
                        </div>
                        <div className="about-text">
                            <p>To ensure our employees and subcontractors can continue to do the high-quality work they do, DLT Technical Services strives to ensure a safe and risk averse environment for all..</p>
                            <p>We go above and beyond to ensure a safe workplace where hazards and risks are analysed and monitored. DLT Technical Services manages risk in the workplace through a cohesive and systematic approach by:</p>
                            <ul className={s.list}>
                                <li>Identifying reasonably foreseeable health and safety hazards.</li>
                                <li>Implementing systems and processes to eliminate, control or minimise hazards.</li>
                                <li>Maintaining, measuring and reviewing systems.</li>
                                <li>Implementing systems to control new or persistent risks</li>
                                <li>Ensuring emergency plans are in place and made known to all workers.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className={s.tit}>
                            <div className={s.icon}>
                                <i className="fas fa-check-double"></i>
                            </div>
                            <p>Equality & Inclusiveness</p>
                        </div>
                        <div className="about-text">
                            <p>We ensure that all employees and contractors are treated with respect and understanding, regardless of race, ethnicity, gender, sexual orientation, age, socio-economic status, religion, physical ability, or political belief. </p>
                            <p>We believe that everyone has a role to play in ensuring excellence for our clients.</p>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className={s.tit}>
                            <div className={s.icon}>
                                <i className="fas fa-check-double"></i>
                            </div>
                            <p>Building our next generation</p>
                        </div>
                        <div className="about-text">
                            <p>We understand that it is our employees that make DLT Technical Services great. We encourage staff to develop their talents so they can reach their individual goals and if possible, exceed them. This is carried out by training to employees with a desire to multi-skill and by placing them on projects which allow them to prosper.</p>
                            <p>Extremely important to us is the employment of apprentices, graduates and students as this allows us to cement our future as well as theirs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

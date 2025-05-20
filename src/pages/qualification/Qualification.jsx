import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualifications">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {/* Education Tab */}
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    {/* Experience Tab */}
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education Section */}
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Master of Science - Environmental Chemistry</h3>
                                <span className="qualification__subtitle">University of Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2025 - present (In view)
                                </div>
                            </div>
                            {/*<div>*/}
                            {/*    <span className="qualification__rounder"></span>*/}
                            {/*    <span className="qualification__line"></span>*/}
                            {/*</div>*/}
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Business Training</h3>
                                <span className="qualification__subtitle">Helen Business School, UK (Conducted by Semicolon in Lagos, Nigeria)
</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            {/*<div></div>*/}
                            {/*<div>*/}
                            {/*    <span className="qualification__rounder"></span>*/}
                            {/*    <span className="qualification__line"></span>*/}
                            {/*</div>*/}
                            <div>
                                <h3 className="qualification__title">Bachelor of Science - Pure and Industrial
                                    Chemistry</h3>
                                <span className="qualification__subtitle">University of Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Development Apprentice</h3>
                                <span className="qualification__subtitle">Semicolon, Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Oct 2023 - Dec 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Medical Data Analyst</h3>
                                <span className="qualification__subtitle">Faith Clinic, Lagos, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2020 - Sep 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Teaching Assistant</h3>
                                <span className="qualification__subtitle">Special Science School , Enugu, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Sep 2018 - Dec 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Public Relations Officer (PRO)</h3>
                                <span className="qualification__subtitle">NYSC Secretariat, Enugu, Nigeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Sep 2018 - Dec 2019
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;

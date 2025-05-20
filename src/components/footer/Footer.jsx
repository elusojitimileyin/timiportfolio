import React from 'react';
import './footer.css'
const Footer = () => {
    return (
       <footer className="footer">
           <div className="footer__container container">
               <h1 className="footer__title">Timileyin</h1>
               <ul className="footer__list">
                   <li>
                       <a href="#about" className="footer__link">About</a>
                   </li>
                   <li>
                       <a href="#projects" className="footer__link">Projects</a>
                   </li>
                   <li>
                       <a href="#testimonials" className="footer__link">Testimonials</a>
                   </li>

               </ul>

               <div className="footer__social">
                   <a href="https://www.instagram.com/obantu/?hl=en" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-instagram"></i>
                   </a>

                   <a href="www.linkedin.com/in/timileyin-elusoji" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-linkedin"></i>
                   </a>

                   <a href="https://x.com/TimileyinE84450" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-twitter"></i>
                   </a>

                   <a href="https://github.com/elusojitimileyin" className="footer__social-link" target={"_blank"}>
                       <i className="uil uil-github"></i>
                   </a>

               </div>
               <span className="footer__copy">&#169; Elusoji Timileyin. All rights reserved</span>
           </div>
       </footer>
    );
}

export default Footer;

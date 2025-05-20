import React from "react";
import Styles from "./Home.module.css";

const Social = () => {
    return (
        <div className={Styles.home__social}>
            <a href="https://www.instagram.com/obantu/?hl=en" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-instagram"></i>
            </a>

            <a href="www.linkedin.com/in/timileyin-elusoji" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://x.com/TimileyinE84450" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-twitter"></i>
            </a>

            <a href="https://github.com/elusojitimileyin" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-github"></i>
            </a>
        </div>

    );
};

export default Social;

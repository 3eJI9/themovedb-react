import React from "react";

import css from "./Footer.module.css";
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'

const Footer = () => {
    return (
        <footer className={css.footerBlock}>
            <div className={css.footer}>
                <div className={css.year}>{new Date ().getFullYear () + ' email: dzelua92@gmail.com'}
                    <div className={css.img}>
                        <img src={instagram}/>
                        <img src={twitter}/>
                        <img src={facebook}/></div>

                </div>
            </div>
        </footer>
    );
};

export {Footer};

import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>Vaishnavi Kulkarni</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="https://www.instagram.com/vaish_kulkarni18/"><i > <FaFacebookF/> </i></Link>
                            <Link href="https://www.linkedin.com/in/vaishnavi-kulkarni-674b341b3"><i > <FaTwitter/> </i> </Link>
                            <Link href="https://www.instagram.com/vaish_kulkarni18/" target="_blank"><i > <FaInstagram/>  </i></Link>
                            <Link href="https://www.linkedin.com/in/vaishnavi-kulkarni-674b341b3"><i > <FaLinkedinIn /> </i></Link>
                            
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><a href="https://www.udemy.com/">Home</a></li>
                            <li><a href="https://mail.google.com">Contact us</a></li>
                            <li><a href="https://www.udemy.com/">About us</a></li>
                            <li><a href="https://www.udemy.com/">Get started</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Domains</li>
                            <li><a href="https://www.w3schools.com/">Python</a></li>
                            <li><a href="https://www.w3schools.com/">Javascript</a></li>
                            <li><a href="https://www.w3schools.com/">Next JS</a></li>
                            <li><a href="https://www.w3schools.com/">Machine Learning</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li><a href="https://www.google.com/">Profile</a></li>
                            <li><a href="https://www.google.com/">My account</a></li>
                            <li><a href="https://www.google.com/">Prefrences</a></li>
                            <li><a href="https://www.google.com/">Purchase</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Courses</li>
                            <li><a href="https://www.udemy.com/">HTML & CSS</a></li>
                            <li><a href="https://www.udemy.com/">JavaScript</a></li>
                            <li><a href="https://www.udemy.com/">Photography</a></li>
                            <li><a href="https://www.udemy.com/">Photoshop</a></li>
                        </ul>
                        
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>"> Vaishnavi Kulkarni.</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;
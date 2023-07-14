import React from 'react';
import ContactCard from "@/app/components/ContactCard"
import styles from "@/app/contact/contact.module.css"
import ContactForm from "@/app/components/ContactForm"

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact us </h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />

                </section>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0598315749144!2d73.84392477485908!3d18.52619818256848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07e4111123b%3A0x3f92335c2e5c8400!2sP.E.S.%20Modern%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1689319609290!5m2!1sen!2sin" width={100} height={450} style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>


        </>
    );
};

export default Contact;
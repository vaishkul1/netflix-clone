import styles from "@/app/contact/contact.module.css"
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";
import { Mulish } from "next/font/google";




const mulish = Mulish({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
  });

const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                    <i> <MdEmail /> </i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="https://www.udemy.com/">Click Here To Send Email! </Link>
                        
                    </div>

                    <div className={styles.grid_card}>
                        <i> <MdVoiceChat /> </i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM — 6 PM ET</p>
                        <p className={styles.last_para}>Weekends: 9 AM — 5 PM ET </p>
                        <Link href="https://www.udemy.com/" >Click Here To Chat Now! </Link>
                    </div>

                    <div className={styles.grid_card}>
                        <i> <MdForum /> </i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="https://www.udemy.com/" className={styles.anchorLink}>Click Here To Ask The Community! </Link>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default ContactCard;
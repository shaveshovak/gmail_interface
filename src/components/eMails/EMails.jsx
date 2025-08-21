import EMailItem from "../eMailItem/EMailItem";
import styles from "./eMails.module.css";
import {emailData} from "../data/Data";


const EMails = () => {
    return(
        <div className={styles.emails_container}>
        <EMailItem title={emailData[0].subject} ref={emailData[0].message} date={emailData[0].date}/>
        </div>
    )
};

export default EMails;
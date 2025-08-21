import EMailItem from "../eMailItem/EMailItem";
import styles from "./eMails.module.css";
import { emailData } from "../data/Data";

const EMails = () => {
  return (
    <div className={styles.emails_container}>
      {emailData.map((item) => (
        <EMailItem
          key={item.id}
          title={item.subject}
          ref={item.message}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default EMails;

import EMailItem from "../eMailItem/EMailItem";
import styles from "./eMails.module.css";
import { emailData } from "../data/Data";

const EMails = () => {
const formatDate=(strDate)=>{
  const date = new Date(strDate);
  const options = {month:'short', day:'numeric'}
  return date.toLocaleString('en-US', options);
}

  return (
    <div className={styles.emails_container}>
      {emailData.map((item) => (
        <EMailItem
          key={item.id}
          title={item.subject}
          ref={item.message}
          date={formatDate(item.date)}
        />
      ))}
    </div>
  );
};

export default EMails;

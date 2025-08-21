import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./eMailItem.module.css";

const EMailItem = ({ title, ref, date }) => {
  return (
    <div>
      {}
      <a className={styles.parent} href="#">
        <input className={styles.div1} type="checkbox" />
        <FontAwesomeIcon className={styles.div2} icon={faStar} />
        <h4 className={styles.div3}>{title}</h4>
        <p className={styles.div4}>{ref}</p>
        <p className={styles.div5}>{date}</p>
      </a>
    </div>
  );
};

export default EMailItem;

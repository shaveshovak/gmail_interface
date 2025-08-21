import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./eMailItem.module.css";

const EMailItem = ({ title, ref, date }) => {
  return (
    <div>
      {}
      <a className={styles.parent} href="#">
        <input  type="checkbox" />
        <FontAwesomeIcon  icon={faStar} />
        <h4>{title}</h4>
        <p className={styles.ref}>{ref}</p>
        <p>{date}</p>
      </a>
    </div>
  );
};

export default EMailItem;

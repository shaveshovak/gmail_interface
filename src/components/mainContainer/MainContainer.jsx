import {
  faRotateRight,
  faInbox,
  faUsers,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./mainContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListItem from "../list-item/ListItem";
import EMails from "../eMails/EMails";

const MainContainer = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.refresh}>
        <input type="checkbox" />
        <FontAwesomeIcon icon={faRotateRight} />
      </div>
      <div className={styles.link_box}>
        <ListItem
          title={"Primary"}
          icon={faInbox}
          classes={styles.message_links}
        />
        <ListItem
          title={"Social"}
          icon={faUsers}
          classes={styles.message_links}
        />
        <ListItem
          title={"Promotions"}
          icon={faTag}
          classes={`${styles.message_links} ${styles.active}`}
        />
      </div>

      <EMails />
    </div>
  );
};

export default MainContainer;

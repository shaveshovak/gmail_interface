import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import ListItem from "../list-item/ListItem";
import styles from "./list.module.css";
import {
  faClock,
  faInbox,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";

const List = () => {
  return (
    <div className={styles.list_container}>
      <ListItem title={"Compose"} icon={faPlus} classes={styles.compose} />

      <div className={styles.general_container}>
        <ListItem
          title={"Inbox 7"}
          icon={faInbox}
          classes={`${styles.generel_item} ${styles.generel_item_active}`}
        />
        <ListItem
          title={"Starred"}
          icon={faStar}
          classes={styles.generel_item}
        />
        <ListItem
          title={"Snozed"}
          icon={faClock}
          classes={styles.generel_item}
        />
        <ListItem
          title={"Sent"}
          icon={faPaperPlane}
          classes={styles.generel_item}
        />
      </div>
    </div>
  );
};

export default List;

import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./mainContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainContainer = () => {
  return (
    <div className={styles.main_container}>
        <input type="checkbox" />
        <FontAwesomeIcon icon={faRotateRight}/>
    </div>
  )
}

export default MainContainer

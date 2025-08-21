import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = ({ title, icon, classes }) => {
  return (
    <a href="#" className={classes}>
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
    </a>
  );
};

export default ListItem;

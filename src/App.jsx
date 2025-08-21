import List from "./components/list/List";

import MainContainer from "./components/mainContainer/MainContainer";
import Navbar from "./components/navbar/Navbar";
import styles from "./App.module.css";
const App = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <List />
        <MainContainer />
      </div>
    </>
  );
};

export default App;

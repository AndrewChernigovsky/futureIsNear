import { FC } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__wrapper}>
        <h3>Sidebar Item</h3>
        <h3>Sidebar Item</h3>
        <h3>Sidebar Item</h3>
        <h3>Sidebar Item</h3>
      </div>
    </div>
  );
};

export default Sidebar;

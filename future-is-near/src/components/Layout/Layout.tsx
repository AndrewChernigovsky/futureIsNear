import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";

import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import Header from "@/components/Layout/Header/Header";

interface ILayout {
  children: ReactNode;
  showSidebar: boolean;
}

const Layout: FC<ILayout> = ({ children, showSidebar }) => {
  return (
		<div className={styles.layout}>
			<Header />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: '5px',
					marginTop: '10px',
				}}
				className={styles.container}
			>
				{showSidebar ? <Sidebar /> : <></>}
				{children}
			</div>
		</div>
  );
};

export default Layout;

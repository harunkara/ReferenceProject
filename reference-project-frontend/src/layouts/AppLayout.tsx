import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "./styles.module.css";
import { Menu } from "antd";
interface IProps {
  children: JSX.Element;
}
export function AppLayout(props: IProps) {
  const { children } = props;
  const { user } = useContext(UserContext);
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.header}>FakeBorsa</div>
        <div className={styles.body}>
          <div className={styles.sideBar}>
            {user?.username && (
              <Menu
                mode="inline"
                theme="dark"
                items={[{ key: 1, label: "deneme" }]}
              ></Menu>
            )}
          </div>
          <div className={styles.content}>{children}</div>
        </div>
        <div className={styles.footer}>Developed by KARA TSOMPAN A.Ş.</div>
      </div>
    </>
  );
}

import styles from "./styles.module.css";
interface IProps {
  children: JSX.Element;
}
export function AppLayout(props: IProps) {
  const { children } = props;
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.header}>FakeBorsa</div>
        <div className={styles.body}>
          <div className={styles.sideBar} style={{ backgroundColor: "blue" }}>
            <div>Deneme</div>
          </div>
          <div className={styles.content} style={{ backgroundColor: "pink" }}>
            {children}
          </div>
        </div>
        <div className={styles.footer} style={{ backgroundColor: "grey" }}>
          I am Footer
        </div>
      </div>
    </>
  );
}

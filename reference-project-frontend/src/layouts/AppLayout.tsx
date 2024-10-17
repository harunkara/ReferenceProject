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
          <div className={styles.sideBar}>
            <div>Deneme</div>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
        <div className={styles.footer}>I am Footer</div>
      </div>
    </>
  );
}

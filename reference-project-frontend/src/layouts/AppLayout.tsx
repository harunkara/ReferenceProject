import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "./styles.module.css";
import { Avatar, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import CharounPopover from "../components/ui/CharounPopover";
import CharounButton from "../components/ui/CharounButton";
import { useLocalize } from "../hooks/useLocalize";
import { useNavigate } from "react-router-dom";
interface IProps {
  children: JSX.Element;
}
export function AppLayout(props: IProps) {
  const navigate = useNavigate();
  const { children } = props;
  const { user, setUser, setJwt } = useContext(UserContext);
  const localizedLogoutText = useLocalize("logout");
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.header}>
          <div>FakeBorsa</div>
          {user?.username && (
            <CharounPopover
              content={
                <>
                  <CharounButton
                    buttonText={localizedLogoutText}
                    onClick={() => {
                      setUser({ username: "", password: "" });
                      setJwt("");
                      navigate("/");
                    }}
                  ></CharounButton>
                </>
              }
            >
              <Avatar
                shape="square"
                style={{ color: "#654545", backgroundColor: "antiquewhite" }}
                size={30}
                icon={<UserOutlined color="rgb(201, 199, 199)" />}
              />
            </CharounPopover>
          )}
        </div>
        <div className={styles.body}>
          <div className={styles.sideBar}>
            {user?.username && (
              <Menu
                mode="inline"
                theme="dark"
                items={[{ key: 1, icon: <HomeOutlined />, label: "Home" }]}
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

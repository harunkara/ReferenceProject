import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import RegisterPage from "../RegisterPage/Register";
import LoginPage from "../LoginPage/Login";
import CharounCard from "../../components/ui/CharounCard";
import { Col, Row } from "antd";

const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    if (user.username) {
      //
    }
  }, []);
  return user.username ? (
    <div>Welcome {user.username}</div>
  ) : (
    <CharounCard styles={{ body: { display: "flex" } }}>
      <Row>
        <Col sm={24} md={12}>
          <RegisterPage />
        </Col>
        <Col sm={24} md={12}>
          <LoginPage />
        </Col>
      </Row>
    </CharounCard>
  );
};

export default HomePage;

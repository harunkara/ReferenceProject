import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import LoginPage from "../LoginPage/Login";
import CharounCard from "../../components/ui/CharounCard";
import { Col, Row, Table } from "antd";
import { HomePageRequests } from "../../services/HomePage/HomePageRequests";
import { ICurrencyModel } from "../../models/ICurrencyModel";
const { getAllCurrencies } = HomePageRequests();

const HomePage = () => {
  const { user, jwt } = useContext(UserContext);
  const [currencies, setCurrencies] = useState<ICurrencyModel[]>([]);

  useEffect(() => {
    getAllCurrencies(jwt)
      .then((result: ICurrencyModel[]) => {
        setCurrencies(result);
      })
      .catch((err: Error) => {
        console.log("Error", err);
      });
  }, [jwt]);
  return user.username ? (
    <>
      <CharounCard>
        <h1>Welcome {user.username}</h1>
        {currencies && currencies.length > 0 && (
          <Table
            dataSource={currencies.map((element: ICurrencyModel) => ({
              key: element?.currencyId,
              ...element,
            }))}
            columns={[
              { title: "Name", dataIndex: "name", key: "name" },
              { title: "Type", dataIndex: "type", key: "type" },
              {
                title: "Current Price",
                dataIndex: "currentPrice",
                key: "currentPrice",
              },
            ]}
          ></Table>
        )}
      </CharounCard>
    </>
  ) : (
    <CharounCard styles={{ body: { display: "flex" } }}>
      <Row>
        {/* <Col sm={24} md={12}>
          <RegisterPage />
        </Col> */}
        <Col sm={24} md={12}>
          <LoginPage />
        </Col>
      </Row>
    </CharounCard>
  );
};

export default HomePage;

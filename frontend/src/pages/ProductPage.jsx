import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const cardData = [
  {
    title: "Card 1",
    description: "This is the description for Card 1",
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
  },
  {
    title: "Card 2",
    description: "This is the description for Card 2",
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
  },
  {
    title: "Card 3",
    description: "This is the description for Card 3",
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
  },
];

const ProductPage = () => {
  return (
    <>
      <h1>ProductPage</h1>
      <div className="p-10">
        <Row gutter={[16, 16]}>
          {cardData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Link to={`/ProductDetail/${card.title}`}>
                <Card
                  style={{ width: 300 }}
                  cover={<img alt={card.title} src={card.image} />}
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src={card.avatar} />}
                    title={card.title}
                    description={card.description}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductPage;

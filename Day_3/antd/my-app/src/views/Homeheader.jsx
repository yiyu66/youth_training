import React, { Component } from "react";
import { Menu, Input, Row, Col, Button } from "antd";
import { UnorderedListOutlined, SendOutlined } from "@ant-design/icons";
import "./Homeheader.css";

const { SubMenu } = Menu;
export class Homeheader extends Component {
  state = {
    current: "Menu1",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <div>
        <Row align="middle">
          <Col span={24}>
            <div className="ant-col">
              <h1>
                <a id="logo" href="/index-cn">
                  <img
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  />
                  Ant Design
                </a>
              </h1>
            </div>
          </Col>
          <Col flex="auto">
            <Input className="inputClass" placeholder="搜索" />
          </Col>
          <Col flex="auto">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              <Menu.Item key="Menu1">设计</Menu.Item>
              <Menu.Item key="Menu2">文档</Menu.Item>
              <Menu.Item key="Menu3">组件</Menu.Item>
              <Menu.Item key="Menu4">资源</Menu.Item>
              <Menu.Item key="Menu5">国内镜像</Menu.Item>
              <SubMenu key="SubMenu" icon={<UnorderedListOutlined />}>
                <Menu.Item key="setting:1">Github</Menu.Item>
                <Menu.Item key="setting:2">English</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col flex="auto"></Col>
        </Row>
        <Row justify="center">
          <div id="biglogo">
            <img src="AntDesign.svg" alt="biglogo" />
            <SendOutlined id="dot" />
            {/* <div id="dot">
              <img src="smallicon.svg" alt="smalllogo" />
            </div> */}
          </div>
        </Row>
        <Row justify="center">
          <div className="banner-qr">
            <p>企业级产品设计体系，创造高效愉悦的工作体验</p>
          </div>
        </Row>
        <Row justify="center">
          <div className="banner-qr">
            <img
              alt="mobile"
              src="https://gw.alipayobjects.com/zos/basement_prod/d2fa63a8-3e9d-4f59-80c7-1fd1d0cd9118.svg"
            />
            4.0 正式版发布
          </div>
        </Row>

        <Row justify="center">
          <div id="btns">
            <Button size="large" type="primary" shape="round">
              开始使用
            </Button>
            <Button size="large" type="default " shape="round">
              设计语言
            </Button>
          </div>
        </Row>
      </div>
    );
  }
}

export default Homeheader;

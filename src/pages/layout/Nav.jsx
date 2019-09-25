import { Menu, Icon } from "antd";
import React from "react";
import { Link } from "dva/router";

const { SubMenu } = Menu;

export default class Sider extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1">
          <Link to="/count">
            <Icon type="pie-chart" />
            计数器
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/list">
            <Icon type="pie-chart" />
            列表
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

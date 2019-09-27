import { Menu, Icon } from "antd";
import React from "react";
import { Link } from "dva/router";

export default class Nav extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1">
          <Link to="/count">
            <Icon type="calculator" />
            <span>计数器</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/prodect">
            <Icon type="pie-chart" />
            <span>产品</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/list">
            <Icon type="pie-chart" />
            <span>列表</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

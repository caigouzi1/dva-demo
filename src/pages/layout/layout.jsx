import { Layout } from "antd";
import React from "react";
import logo from "../../assets/logo.svg";
import "./layout.less";
import Nav from "./Nav.jsx";

const { Header, Footer, Sider, Content } = Layout;

export default class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Layout>
          <Sider className="sider">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <Nav />
          </Sider>
          <Layout>
            <Header style={{ height: 80 }}>Header</Header>
            <Content> {this.props.children}</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

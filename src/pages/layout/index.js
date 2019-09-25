import React from "react";
import Layout from "./layout.jsx";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Layout {...this.props}></Layout>
      </div>
    );
  }
}

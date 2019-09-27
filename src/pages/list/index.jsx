import React, { Component } from "react";
import { Table } from "antd";
import { connect } from "dva";
import { post } from "../../utils/http";
import Api from "../../services/shop";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
      </span>
    )
  }
];

@connect(list => ({
  list
}))
export default class List extends Component {
  // componentDidMount() {
  //   this.props.dispatch({
  //     type: "list/all"
  //   });
  // }

  render() {
    // let res = post("/shop/all");
    console.log(Api.queryAll());
    let res = Api.queryAll();
    console.log("请求数据1");
    console.log(res);

    console.log(res);
    const { list } = this.props.list;
    console.log(list);
    return <Table columns={columns} dataSource={list.data} />;
  }
}

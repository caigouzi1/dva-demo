import React, { Component } from "react";
import { Table, Card, Form, Input } from "antd";
import { connect } from "dva";

const columns = [
  {
    title: "商品",
    dataIndex: "title"
  },
  {
    title: "类目",
    dataIndex: "category"
  },
  {
    title: "封面",
    dataIndex: "thumb",
    render: text => <img src={text} style={{ height: 80 }} alt=""></img>
  },
  {
    title: "价格",
    dataIndex: "price"
  },
  {
    title: "销售量",
    dataIndex: "sales"
  }
];

@connect(list => ({
  list
}))
@Form.create()
export default class List extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "list/shopAll"
    });
  }

  fileterAll(value) {
    let params = {
      title: value
    };
    this.props.dispatch({
      type: "list/shopAll",
      payload: params
    });
  }

  render() {
    // let res = post("/shop/all");
    const { list } = this.props.list;
    const { Search } = Input;
    return (
      <div>
        <Card>
          <Search
            addonBefore="商品名"
            placeholder="请输入商品名"
            enterButton="筛选"
            size="default"
            style={{ width: 300 }}
            onSearch={value => {
              this.fileterAll(value);
            }}
          />
        </Card>
        <Card style={{ marginTop: 20 }}>
          <Table columns={columns} dataSource={list.data} />
        </Card>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Table, Button, Drawer, Icon, Input, Form, InputNumber } from "antd";
import { connect } from "dva";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count"
  }
];

@connect(prodect => ({
  prodect
}))
@Form.create()
export default class Prodect extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  handleAdd() {
    let data = {
      key: "2",
      name: "土豆2",
      count: 250
    };
    this.props.dispatch({
      type: "prodect/addList",
      payload: data
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);

        this.props.dispatch({
          type: "prodect/addList",
          payload: values
        });
      }
    });
  };
  // componentDidMount() {
  //   this.props.dispatch({
  //     type: "list/all"
  //   });
  // }

  render() {
    const { prodect } = this.props.prodect;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    };
    return (
      <div>
        <Table columns={columns} dataSource={prodect.data} />

        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" />
          Open
        </Button>
        <Drawer
          title="编辑"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="产品" {...formItemLayout}>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "请输入产品!"
                  }
                ]
              })(<Input placeholder="请输入产品" />)}
            </Form.Item>
            <Form.Item label="数量" {...formItemLayout}>
              {getFieldDecorator("count", {
                rules: [
                  {
                    required: true,
                    message: "请输入数量!"
                  }
                ]
              })(<InputNumber placeholder="数量" />)}
            </Form.Item>

            <Form.Item label=" " colon={false} {...formItemLayout}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Drawer>

        <Button>Default</Button>
        <Button>Dashed</Button>
      </div>
    );
  }
}

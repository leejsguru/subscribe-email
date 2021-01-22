import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";

import "./style.scss";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const actionLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const SubscribePage = () => {
  const onFinish = (values) => {};

  return (
    <div className="subscribe-page">
      <div className="subscribe-page-container">
        <div className="subscribe-page-form">
          <Form
            {...layout}
            initialValues={{}}
            className="subscribe-form"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true }, { type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="topic" label="Topic" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item {...actionLayout}>
              <Button type="primary" htmlType="submit">
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

SubscribePage.propTypes = {
  title: PropTypes.string,
};

SubscribePage.defaultProps = {
  title: "",
};

export default SubscribePage;

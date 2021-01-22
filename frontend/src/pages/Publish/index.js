import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, Button } from "antd";

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

const Topics = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
];

const PublishPage = () => {
  const onFinish = (values) => {};

  return (
    <div className="publish-page">
      <div className="publish-page-container">
        <div className="publish-page-form">
          <Form
            {...layout}
            initialValues={{}}
            className="publish-form"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item name="topic" label="Topic" rules={[{ required: true }]}>
              <Select>
                {Topics.map((item) => (
                  <Select.Option key={item.value} value={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="message"
              label="Broadcast Message"
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={10} />
            </Form.Item>
            <Form.Item {...actionLayout}>
              <Button type="primary" htmlType="submit">
                Broadcast
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="publish-page-history">
          <h5>Broadcast History</h5>
        </div>
      </div>
    </div>
  );
};

PublishPage.propTypes = {
  title: PropTypes.string,
};

PublishPage.defaultProps = {
  title: "",
};

export default PublishPage;

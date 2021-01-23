import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, notification } from "antd";
import { subscribeEmail } from "../../apis/subscribe";

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
  const [loading, setLoading] = useState(false);
  const formControl = useRef(null);

  const onFinish = (values) => {
    setLoading(true);
    subscribeEmail(values.email, values.topic, (err, res) => {
      setLoading(false);
      if (err) {
        const { msg } = err.response.data;
        notification.error({
          message: "Error",
          description: msg || "Email has not subscribed to the topic.",
        });
      } else {
        notification.info({
          message: "Success",
          description: "Email has subscribed to the topic successfully.",
        });
        if (formControl) {
          formControl.current.setFieldsValue({ email: "", topic: "" });
        }
      }
    });
  };

  return (
    <div className="subscribe-page">
      <div className="subscribe-page-container">
        <div className="subscribe-page-form">
          <Form
            {...layout}
            ref={formControl}
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
              <Button loading={loading} type="primary" htmlType="submit">
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

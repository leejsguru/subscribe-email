import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, Button, notification } from "antd";

import { getTopics } from "../../apis/subscribe";
import { broadcastMessage } from "../../apis/subscribe";

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
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    broadcastMessage(values.topic, values.message, (error, res) => {
      if (error) {
        const { msg } = error.response.data;

        notification.error({
          message: "Error",
          description: msg || "There was an error while broadcasting topic.",
        });
      } else {
        notification.info({
          message: "Success",
          description: "New topic has been successfully broadcasted.",
        });
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    getTopics((error, res) => {
      if (error) {
        notification.error({
          message: "Error",
          description: "There was an error while loading topics.",
        });
      } else {
        setTopics(res);
      }
      setLoading(false);
    });
  }, []);

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
                {topics.map((item) => (
                  <Select.Option key={item.id} value={item.id}>
                    {item.topic}
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
              <Button loading={loading} type="primary" htmlType="submit">
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

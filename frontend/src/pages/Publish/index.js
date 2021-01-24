import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, Button, notification } from "antd";
import moment from "moment";

import { getTopics } from "../../apis/subscribe";
import { broadcastMessage, getBroadcastHistory } from "../../apis/subscribe";

import "./style.scss";

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

const PublishPage = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [broadcastHistory, setBroadcastHistory] = useState([]);
  const formControl = useRef(null);

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

        if (formControl) {
          formControl.current.setFieldsValue({ message: "" });
        }

        setBroadcastHistory([...broadcastHistory, res.data]);
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

      getBroadcastHistory((error, res) => {
        if (error) {
          notification.error({
            message: "Error",
            description: "There was an error while loading broadcast history.",
          });
        } else {
          const filteredList = res.map((item) => ({
            ...item,
            emailList: JSON.parse(item.emailList),
          }));
          setBroadcastHistory(filteredList);
        }
        setLoading(false);
      });
    });
  }, []);

  return (
    <div className="publish-page">
      <div className="publish-page-container">
        <div className="publish-page-form">
          <Form
            layout="vertical"
            ref={formControl}
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
            <Form.Item>
              <Button
                className="broadcast-btn"
                loading={loading}
                type="primary"
                htmlType="submit"
              >
                Broadcast
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="publish-page-history">
          <h5>Broadcast History</h5>
          <div className="publish-page-history-list">
            {broadcastHistory.map((item) => (
              <div key={item.id} className="history-list-item">
                <h3 className="history-list-item-topic">{item.topic}</h3>
                <p className="history-list-item-message">{item.message}</p>
                <p className="history-list-item-emaillist">
                  {item.emailList ? item.emailList.join(", ") : ""}
                </p>
                <span className="history-list-item-date">
                  {moment(item.createAt).format("MMM DD, YYYY")}
                </span>
              </div>
            ))}
          </div>
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

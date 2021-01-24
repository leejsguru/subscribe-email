import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";

import MessageDetail from "../../components/message-detail";
import { getMessage } from "../../apis/subscribe";

import "./style.scss";

const MessageDetailPage = ({ history, match }) => {
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const onBack = () => {
    history.goBack();
  };

  useEffect(() => {
    const {
      params: { id },
    } = match;

    if (id) {
      setLoading(true);
      getMessage(id, (error, data) => {
        if (error) {
          notification.error({
            message: "Error",
            description: "There was an error while loading message.",
          });
        } else {
          setMessage({ ...data[0], emailList: JSON.parse(data[0].emailList) });
        }
        setLoading(false);
      });
    }

    return () => {};
  }, []);

  return (
    <div className="message-detail-page">
      <Button
        className="message-detail-page-back"
        type="primary"
        onClick={onBack}
      >
        Back
      </Button>
      {loading ? "loading ..." : <MessageDetail data={message} />}
    </div>
  );
};

export default MessageDetailPage;

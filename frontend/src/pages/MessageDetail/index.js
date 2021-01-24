import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

import MessageDetail from "../../components/message-detail";

import "./style.scss";

const MessageDetailPage = ({ history }) => {
  const onBack = () => {
    history.goBack();
  };

  return (
    <div className="message-detail-page">
      <Button
        className="message-detail-page-back"
        type="primary"
        onClick={onBack}
      >
        Back
      </Button>
      <MessageDetail
        data={{ topic: "React", message: "Message", emailList: [] }}
      />
    </div>
  );
};

export default MessageDetailPage;

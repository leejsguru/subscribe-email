import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./style.scss";

const MessageDetail = ({ data }) => {
  return (
    <div className="message-detail">
      <div className="message-detail-header">{data.topic}</div>
      <div className="message-detail-date">
        {moment(data.createdAt).format("MMM DD, YYYY")}
      </div>
      <div className="message-detail-message">{data.message}</div>
      <div className="message-detail-subscriber">
        <h6 className="header">Subscribers</h6>
        {(data.emailList || [])
          .sort((a, b) => a.localeCompare(b))
          .map((item, index) => (
            <h6 key={index}>{item}</h6>
          ))}
      </div>
    </div>
  );
};

MessageDetail.propTypes = {
  data: PropTypes.object,
};

MessageDetail.defaultProps = {
  data: "",
};

export default MessageDetail;

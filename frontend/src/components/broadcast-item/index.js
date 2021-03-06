import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import clsx from "clsx";

import "./style.scss";

const BroadcastItem = ({ data, onClick, onView }) => {
  const [messageMore, setMessageMore] = useState(false);

  const onMessageMoreClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMessageMore((prev) => !prev);
  };

  const onTopicClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onView();
  };

  return (
    <div key={data.id} className="broadcast-list-item" onClick={onClick}>
      <h3 className="broadcast-list-item-topic" onClick={onTopicClick}>
        {data.topic}
      </h3>
      <p className={clsx("broadcast-list-item-message", { more: messageMore })}>
        {data.message}
      </p>
      <span className="message-more" onClick={onMessageMoreClick}>
        {messageMore ? "less" : "more"}
      </span>
      <p className="broadcast-list-item-emaillist">
        {data.emailList ? data.emailList.join(", ") : ""}
      </p>
      <span className="broadcast-list-item-date">
        {moment(data.createAt).format("MMM DD, YYYY")}
      </span>
    </div>
  );
};

BroadcastItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  onView: PropTypes.func,
};

BroadcastItem.defaultProps = {
  data: {},
  onClick: () => {},
  onView: () => {},
};

export default BroadcastItem;

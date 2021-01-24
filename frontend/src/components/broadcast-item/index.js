import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./style.scss";

const BroadcastItem = ({ data, onClick }) => {
  return (
    <div key={data.id} className="broadcast-list-item" onClick={onClick}>
      <h3 className="broadcast-list-item-topic">{data.topic}</h3>
      <p className="broadcast-list-item-message">{data.message}</p>
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
};

BroadcastItem.defaultProps = {
  data: {},
  onClick: () => {},
};

export default BroadcastItem;

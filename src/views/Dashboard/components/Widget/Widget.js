import React from "react";
import { Card, Avatar } from "antd";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectWidget } from "actions/widgetActions";
const Widget = props => {
  const handleClick = e => {
    selectWidget(props);
  };
  return (
    <Card title={props.name} style={{ width: 160 }} onClick={handleClick}>
      {<Avatar src={props.imageUrl} size={110} />}
    </Card>
  );
};
Widget.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};
const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectWidget: selectWidget }, dispatch);
};
export default connect("", matchDispatchToProps)(Widget);

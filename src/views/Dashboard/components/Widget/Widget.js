import React, { useContext } from "react";
import { Card, Avatar } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addWidget } from "actions/widgetActions";
import ModalContext from "context/ModalContext";
const Widget = props => {
  const { hideLoading } = useContext(ModalContext);

  /**
   * Select widget
   * @param {*} e
   */
  const handleClick = e => {
    props.addWidget(props);
    hideLoading();
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
const mapDispatchToProps = {
  addWidget
};
export default connect("", mapDispatchToProps)(Widget);

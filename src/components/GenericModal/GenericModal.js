import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

const GenericModal = props => {
  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      width={props.width}
    >
      {props.body}
    </Modal>
  );
};
GenericModal.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  body: PropTypes.any.isRequired
};

export default GenericModal;

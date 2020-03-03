import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import ModalContext from "context/ModalContext";

const GenericModal = props => {
  const { loadingCount } = useContext(ModalContext);
  return (
    <>
      {loadingCount > 0 && (
        <Modal
          title={props.title}
          visible={loadingCount > 0 ? true : false}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
          width={props.width}
        >
          {props.body}
        </Modal>
      )}
    </>
  );
};
GenericModal.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  body: PropTypes.any.isRequired
};

export default GenericModal;

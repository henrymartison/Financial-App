import React from "react";
import Modal from "react-native-modal";

const CustomModal = ({
  isVisible = false,
  onModalShow = () => null,
  actionOpenClose = () => null,
  style = {},
  children = null,
  bgColor
}) => (
  <Modal
    isVisible={isVisible}
    onModalShow={onModalShow}
    // onBackdropPress={actionOpenClose}
    hideModalContentWhileAnimating
    useNativeDriver
    backdropOpacity={1}
    backdropColor={bgColor}
    style={style}
  >
    {children}
  </Modal>
);

export { CustomModal as Modal };

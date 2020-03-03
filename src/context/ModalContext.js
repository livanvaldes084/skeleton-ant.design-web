import { createContext } from "react";

const ModalContext = createContext({
  loadingCount: 0,

  showLoading: () => {},
  closeLoading: () => {}
});

export default ModalContext;

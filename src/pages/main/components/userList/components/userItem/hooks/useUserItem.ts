import { useState } from "react";

export const useUserItem = () => {
  const [modalActive, setModalActive] = useState(false);


  return {modalActive, setModalActive}
};

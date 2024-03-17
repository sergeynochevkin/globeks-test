import React from "react";
import { User } from "../../../../../../api/interfaces";
import classes from "./UserItem.module.sass";
import { useUserItem } from "./hooks/useUserItem";
import { Modal } from "../../../../../../common/components/modal/Modal";
import { UserItemModalContent } from './components/userItemModalContent/UserItemModalContent';


type Props = {
  user: User;
};

export const UserItem = ({ user }: Props) => {
  const { modalActive, setModalActive } = useUserItem();

  return (
    <div
      className={classes.Container}
      onClick={() => {
        setModalActive(true);
      }}
    >
      <div className={classes.Name}>{user.name}</div>
      <div className={classes.Email}>{user.phone}</div>
      <div className={classes.Phone}>{user.email}</div>
      {modalActive && (
        <Modal modalActive={modalActive} setModalActive={setModalActive}>
         <UserItemModalContent user = {user}/>
        </Modal>
      )}
    </div>
  );
};

import React from "react";
import { UserList } from "./components/userList/UserList";
import classes from "./Main.module.sass";

export const Main = () => {
  return (
    <div className={classes.Container}>
      <UserList />
    </div>
  );
};

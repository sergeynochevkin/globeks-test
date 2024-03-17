import React from "react";
import classes from "./UserList.module.sass";
import { UserItem } from "./components/userItem/UserItem";
import { v4 } from "uuid";
import { useUserList } from "./hooks/useUserList";
import { Search } from "../../../../common/components/search/Search";

export const UserList = () => {
  const { users, searchStringHandler, searchString } = useUserList();

  return (
    <div className={classes.Container}>
      <Search searchStringHandler = {searchStringHandler} searchString = {searchString}/>
      {users.map((user) => (
        <UserItem user={user} key={v4()} />
      ))}
    </div>
  );
};

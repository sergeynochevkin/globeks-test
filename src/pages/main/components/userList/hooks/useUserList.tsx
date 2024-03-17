import { useCallback, useEffect, useState } from "react";
import { User, UsersPayload } from "../../../../../api/interfaces";
import { getApi } from "../../../../../api/api";

export const useUserList = () => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [api] = useState(() => getApi());
  const [searchString, setSearchString] = useState<UsersPayload>({ term: "" });

  const getUsers = useCallback(async () => {
    try {
      const result = await api.getUsers(searchString);
      setUsers(result);
    } catch (error) {
      console.log(error);
    }
  }, [api, searchString]);

  const searchStringHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString({term: e.target.value})
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { users, searchStringHandler, searchString };
};

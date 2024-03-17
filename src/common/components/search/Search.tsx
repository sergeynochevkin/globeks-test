import React from "react";
import classes from "./Search.module.sass";
import search from "../../../assets/images/icons/search.svg";
import { UsersPayload } from "../../../api/interfaces";

type Props = {
  searchStringHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchString: UsersPayload
};

export const Search = ({ searchStringHandler,searchString }: Props) => {
  return (
    <div className={classes.Container}>
      <input
        className={classes.Input}
        onChange={(e) => searchStringHandler(e)}
        value={searchString.term}
      />
      <div className={classes.SearchIconAncor}>
        <img src={search} alt="Искать" className={classes.SerchIcon} />
      </div>
    </div>
  );
};

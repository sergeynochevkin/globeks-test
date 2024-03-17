import React from "react";
import { User } from "../../../../../../../../api/interfaces";
import classes from "./UserItemModalContent.module.sass";
import { format } from "date-fns";

type Props = {
  user: User;
};

export const UserItemModalContent = ({ user }: Props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Name}>{user.name}</div>
      <div className={classes.InfoContainer}>
        <div className={classes.InfoRow}>
          <div className={classes.InfoTitle}>Телефон:</div>
          <div className={classes.InfoDescription}>{user.phone}</div>
        </div>
        <div className={classes.InfoRow}>
          <div className={classes.InfoTitle}>Почта:</div>
          <div className={classes.InfoDescription}>{user.email}</div>
        </div>
        <div className={classes.InfoRow}>
          <div className={classes.InfoTitle}>Дата приема:</div>
          <div className={classes.InfoDescription}>{format(new Date(user.hire_date),'dd.MM.yyyy' ) }</div>
        </div>
        <div className={classes.InfoRow}>
          <div className={classes.InfoTitle}>Должность:</div>
          <div className={classes.InfoDescription}>{user.position_name}</div>
        </div>
        <div className={classes.InfoRow}>
          <div className={classes.InfoTitle}>Подразделение:</div>
          <div className={classes.InfoDescription}>{user.department}</div>
        </div>
      </div>
      <div className={classes.AdditionalContainer}>
        <div className={classes.AdditionalInfoTitle}>Дополнительная информация</div>
        <div className={classes.AdditionalInfoDescription}>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макета страницы.</div>        
      </div>
    </div>
  );
};

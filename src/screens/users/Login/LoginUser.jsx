import React from "react";
import { LoginComponents } from "../../../components/user/Login/LoginComponents";
import styles from "./LoginUserStyle";

export const LoginUser = ({ navigation }) => {
  console.log(navigation);
  return (
    <div className={styles.container}>
      <LoginComponents />
    </div>
  );
};

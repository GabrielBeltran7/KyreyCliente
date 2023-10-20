import React from "react";
import { LoginComponents } from "../../../components/user/Login/LoginComponents";

export const LoginUser = ({ navigation }) => {
  console.log(navigation);
  return (
    <div>
      <LoginComponents props={navigation} />
    </div>
  );
};

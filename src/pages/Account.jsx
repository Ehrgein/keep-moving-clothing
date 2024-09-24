import React, { useContext } from "react";
import NewsLetter from "../components/NewsLetter";
import Header from "../components/Header";
import { VscAccount } from "react-icons/vsc";
import AccountInformation from "../components/Account/AccountInformation";

function Account() {
  return (
    <div className="">
      <Header />
      <AccountInformation />
      <NewsLetter />
    </div>
  );
}

export default Account;

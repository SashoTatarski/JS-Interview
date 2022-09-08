import React from "react";

export const User = ({ user }) =>
  user ? `${user?.name?.first} ${user?.name?.last}` : "Loading...";

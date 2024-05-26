import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return <div className="text-center py-10 font-bold text-3xl bg-gray-500 text-slate-50">User: {userId}</div>;
}

export default User;

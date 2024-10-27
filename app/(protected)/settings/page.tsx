import { auth } from "@/auth";
import SignOut from "@/components/auth/signout-button";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignOut />
    </div>
  );
};

export default SettingsPage;

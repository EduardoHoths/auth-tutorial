import { signOut } from "@/auth";
import { Button } from "../ui/button";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({
          redirect: true,
          redirectTo: "/auth/login",
        });
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}

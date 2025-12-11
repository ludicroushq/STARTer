import { Icon } from "@iconify-icon/react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/routes/-shadcn/components/ui/button";

export function Google() {
  return (
    <Button
      className="w-full"
      onClick={() => {
        authClient.signIn.social({
          callbackURL: "/app",
          provider: "google",
        });
      }}
      size="lg"
      type="button"
      variant="outline"
    >
      <Icon icon="logos:google-icon" />
      Login with Google
    </Button>
  );
}

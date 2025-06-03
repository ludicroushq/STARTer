import { SiGoogle, SiGoogleHex } from "@icons-pack/react-simple-icons";
import { createFileRoute } from "@tanstack/react-router";
import { authClient } from "@/auth-client";

export const Route = createFileRoute("/_unauthenticated/get-started/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-center">
      <div className="card card-lg w-full max-w-md shadow">
        <div className="card-body">
          <div className="card-title">Get Started</div>

          <button
            className="btn border-[#e5e5e5] bg-white text-black"
            onClick={() => {
              authClient.signIn.social({
                provider: "google",
              });
            }}
          >
            <SiGoogle size="1.25em" color={SiGoogleHex} />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { GoogleIcon } from "@/components/svgs/google-icon";
import { authClient } from "@/lib/server/auth/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const signIn = async (provider: "google") => {
    const data = await authClient.signIn.social({
      provider,
    });

    if (data.error) {
      toast.error(data.error.message || "Failed to sign in");
      return;
    }

    router.push("/");
  };

  return (
    <div
      className={cn("flex flex-col items-center gap-6", className)}
      {...props}
    >
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back to HikmaPlay!</CardTitle>
          <CardDescription>
            Sign in to get more features and access your personalized content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => signIn("google")}
                  className="w-full"
                >
                  <GoogleIcon />
                  Login with Google
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}

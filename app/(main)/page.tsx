import { HydrateClient, prefetch, trpc } from "@/lib/server/trpc/server";
import { ClientGreeting } from "./_components/client-greeting";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function HomePage() {
  prefetch(
    trpc.hello.queryOptions({
      text: "World!",
    }),
  );

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientGreeting />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}

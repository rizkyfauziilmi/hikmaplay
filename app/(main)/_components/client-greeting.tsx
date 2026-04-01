'use client';

import { useTRPC } from '@/lib/server/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';

export function ClientGreeting() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.hello.queryOptions({
      text: 'World!',
    })
  );

  return <div>{data.greeting}</div>;
}

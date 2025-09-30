import { caller, getQueryClient,trpc } from "@/trpc/server";
import { HydrationBoundary, useQuery } from "@tanstack/react-query";
import { Client } from "./Client";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text:"bhushan prefetch"}))


  return(
    <HydrationBoundary>
      <Suspense fallback= {<p>Loading...</p>}>
        <Client/>
      </Suspense>
    </HydrationBoundary>
  )
};

export default Page;

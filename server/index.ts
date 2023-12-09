import { publicProcedure, router } from "./trpc";
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return "Hello from trpc server";
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

// TODO Flowchart of explaining rpc call
// TODO setup zod

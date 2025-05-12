import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Todo from "./Todo";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todo />
    </QueryClientProvider>
  );
}

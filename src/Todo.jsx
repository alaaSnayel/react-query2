import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Todo() {
  const { data, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });
  console.log(data);

  return (
    <div className="container">
      {data &&
        data.map((todo) => (
          <div className="todo" key={todo.id}>
            {todo.title}
          </div>
        ))}
    </div>
  );
}

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

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {data &&
        data.map((todo) => (
          <div
            className={`todo ${todo.completed ? "done" : "notdone"}`}
            key={todo.id}
          >
            {todo.title}
            <p style={{ marginTop: "1em" }}>
              Status:{" "}
              <span
                className={`${todo.completed ? "completed" : "notcompleted"}`}
              >
                {todo.completed ? "Completed" : "Not Completed"}
              </span>
            </p>
          </div>
        ))}
    </div>
  );
}

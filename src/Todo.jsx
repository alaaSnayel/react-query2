import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";

export default function Todo() {
  const getMutation = useMutation({
    mutationFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),

    onSuccess: () => {
      console.log("Data fetched successfully");
    },

    onError: (err) => {
      console.log(err);
    },
  });

  // const { data, isLoading } = useQuery({
  //   queryKey: ["todo"],
  //   queryFn: () =>
  //     fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  //       res.json()
  //     ),
  // });
  // console.log(data);

  if (getMutation.isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <button onClick={() => getMutation.mutate()}>Get Todos</button>

      <div className="container">
        {getMutation.data &&
          getMutation.data.map((todo) => (
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
    </>
  );
}

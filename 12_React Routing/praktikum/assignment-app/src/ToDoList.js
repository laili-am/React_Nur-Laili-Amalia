import React from "react";
import "./App.css";

function ToDoList() {
  const kegiatan = [
    {
      id: 1,
      title: "Membuat Komponen",
      completed: true,
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: true,
    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false,
    },
  ];
  return (
    <>
      {kegiatan.map((item, index) => {
        return (
          <div
            style={{
              background: "white",
              width: "20%",
              border: "3px solid grey",
              borderRadius: "50px",
              marginBottom: "20px",
              marginLeft: "15px",
            }}
          >
            {item.completed ? (
              <ul>
                <s>{item.title}</s>
              </ul>
            ) : (
              <ul>{item.title}</ul>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ToDoList;

import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
} from "@mui/material";
import "./Todo.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useState } from "react";
import db from "./firebase_setup/firebase";

const useStyle = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState(props.todo.todo);

  const handleOpen = () => {
    setOpen(true);
  };
  const updateTodo = () => {
    db.collection("todo").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>i am a Modal</h1>
          <input
            placeholder={props.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={updateTodo}>Update Todo</button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Dummy dadeline" />
        </ListItem>

        <button onClick={(e) => setOpen(true)}>Edit</button>

        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;

import React from "react";
import Panel from "./ToDosPanel";
import { ThemeConsumer } from "styled-components";

export default class ToDosPresenter extends React.Component {
  state = {
    toDos: [
      {
        isButton: false,
        isSelected: true,
        name: "Coding",
        time: 180,
        isDone: true,
      },
      {
        isButton: false,
        isSelected: false,
        name: "Japanese",
        time: 120,
        isDone: true,
      },
      {
        isButton: false,
        isSelected: false,
        name: "English",
        time: 60,
        isDone: false,
      },
    ],
    isEdit: false,
  };
  addToDo = (name) => {
    const newToDos = [];
    this.state.toDos.map((toDo) => newToDos.push(toDo));
    newToDos.push({
      isButton: false,
      isSelected: false,
      name: name,
      time: 0,
      isDone: false,
    });
    this.setState({ toDos: newToDos });
  };
  toggleEditMode = () => {
    let newToDos = [];
    if (this.state.isEdit) {
      this.state.toDos.map((toDo) => newToDos.push(toDo));
      newToDos.splice(0, 1);
    } else {
      newToDos.push({
        isButton: true,
        isSelected: false,
        name: "",
        time: 0,
        isDone: false,
      });
      this.state.toDos.map((toDo) => newToDos.push(toDo));
    }
    this.setState({ toDos: newToDos, isEdit: !this.state.isEdit });
  };
  render() {
    return (
      <Panel
        {...this.state}
        toggleEditMode={this.toggleEditMode}
        arrToDo={this.addToDo}
      />
    );
  }
}

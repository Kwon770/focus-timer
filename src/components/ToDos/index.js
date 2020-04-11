import React from "react";
import Panel from "./ToDosPanel";
import { ThemeConsumer } from "styled-components";

export default class ToDosPresenter extends React.Component {
  state = {
    toDos: [
      {
        key: 1,
        isButton: false,
        isSelected: true,
        name: "Coding",
        time: 180,
        isDone: true,
      },
      {
        key: 12,
        isButton: false,
        isSelected: false,
        name: "Japanese",
        time: 120,
        isDone: true,
      },
      {
        key: 123,
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
    let newToDos = [];
    this.state.toDos.map((toDo) => newToDos.push(toDo));
    newToDos.splice(1, 0, {
      key: Date.now(),
      isButton: false,
      isSelected: false,
      name: name,
      time: 0,
      isDone: false,
    });
    this.setState({ toDos: newToDos });
  };
  toggleEditMode = async () => {
    let newToDos = [];
    if (this.state.isEdit) {
      this.state.toDos.map((toDo) => newToDos.push(toDo));
      newToDos.splice(0, 1);
    } else {
      newToDos.push({
        key: 123456789,
        isButton: true,
      });
      this.state.toDos.map((toDo) => newToDos.push(toDo));
    }
    await this.setState({ toDos: newToDos, isEdit: !this.state.isEdit });
    console.log(this.state.toDos);
  };
  render() {
    return (
      <Panel
        {...this.state}
        toggleEditMode={this.toggleEditMode}
        addToDo={this.addToDo}
        isEdit={this.state.isEdit}
      />
    );
  }
}

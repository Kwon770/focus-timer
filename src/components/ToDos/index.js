import React from "react";
import Panel from "./ToDosPanel";

export default class ToDosPresenter extends React.Component {
  state = {
    toDos: [
      {
        id: 1,
        isButton: false,
        isSelected: false,
        isEdit: false,
        name: "Coding",
        time: 180,
        isDone: true,
      },
      {
        id: 12,
        isButton: false,
        isSelected: false,
        isEdit: false,
        name: "Japanese",
        time: 120,
        isDone: true,
      },
      {
        id: 123,
        isButton: false,
        isSelected: false,
        isEdit: false,
        name: "English",
        time: 60,
        isDone: false,
      },
    ],
    isEditMode: false,
  };
  addToDo = (name) => {
    let newToDos = [];
    this.state.toDos.map((toDo) => {
      toDo.isSelected = false;
      newToDos.push(toDo);
    });
    newToDos.splice(1, 0, {
      id: Date.now(),
      isButton: false,
      isSelected: true,
      name: name,
      time: 0,
      isDone: false,
    });
    this.setState({ toDos: newToDos });
  };
  deleteToDo = (id) => {
    let newToDos = [];
    this.state.toDos.map((toDo) => {
      if (toDo.id !== id) newToDos.push(toDo);
    });
    this.setState({ toDos: newToDos });
  };
  editToDo = (id) => {
    let newToDos = [];
    this.state.toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.isEdit = true;
      } else if (toDo.isEdit) {
        toDo.isEdit = false;
      }
      newToDos.push(toDo);
    });
    this.setState({ toDos: newToDos });
  };
  changeToDo = (id, name) => {
    let newToDos = [];
    this.state.toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.name = name;
        toDo.isEdit = false;
      }
      newToDos.push(toDo);
    });
    this.setState({ toDos: newToDos });
  };
  selectToDo = (id) => {
    let newToDos = [];
    this.state.toDos.map((toDo) => {
      if (toDo.id === id) {
        this.props.setCurDo(toDo.name);
        toDo.isSelected = true;
        newToDos.splice(0, 0, toDo);
      } else {
        toDo.isSelected = false;
        newToDos.push(toDo);
      }
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
        id: 123456789,
        isButton: true,
      });
      this.state.toDos.map((toDo) => newToDos.push(toDo));
    }
    await this.setState({ toDos: newToDos, isEdit: !this.state.isEdit });
  };
  render() {
    return (
      <Panel
        {...this.state}
        toggleEditMode={this.toggleEditMode}
        addToDo={this.addToDo}
        deleteToDo={this.deleteToDo}
        isEditMode={this.state.isEdit}
        editToDo={this.editToDo}
        changeToDo={this.changeToDo}
        selectToDo={this.selectToDo}
      />
    );
  }
}

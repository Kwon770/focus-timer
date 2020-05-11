import React, { useState } from "react";
import ToDosPresenter from "./ToDosPresenter";

const CUR_DO = "curDo";
const CUR_DO_ID = "curDoId";

export default ({ toDos, reallocateToDos, setCurDo }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const addToDo = (name) => {
    let newToDos = [];
    toDos.forEach((toDo) => {
      toDo.isSelected = false;
      newToDos.push(toDo);
    });
    newToDos.splice(1, 0, {
      id: Date.now(),
      isButton: false,
      isSelected: false,
      name: name,
      totalTime: 0,
      todayTime: 0,
      isDone: false,
    });
    reallocateToDos(newToDos);
  };

  const deleteToDo = (id) => {
    let newToDos = [];
    toDos.forEach((toDo) => {
      if (toDo.id !== id) newToDos.push(toDo);
    });
    reallocateToDos(newToDos);
  };

  const editToDo = (id) => {
    let newToDos = [];
    toDos.forEach((toDo) => {
      if (toDo.id === id) {
        toDo.isEdit = true;
      } else if (toDo.isEdit) {
        toDo.isEdit = false;
      }
      newToDos.push(toDo);
    });
    reallocateToDos(newToDos);
  };

  const changeToDo = (id, name) => {
    let newToDos = [];
    toDos.forEach((toDo) => {
      if (toDo.id === id) {
        toDo.name = name;
        toDo.isEdit = false;
      }
      newToDos.push(toDo);
    });
    reallocateToDos(newToDos);
  };

  const selectToDo = (id) => {
    let newToDos = [];
    toDos.forEach((toDo) => {
      if (toDo.id === id) {
        localStorage.setItem(CUR_DO, JSON.stringify(toDo.name));
        localStorage.setItem(CUR_DO_ID, JSON.stringify(toDo.id));
        setCurDo(toDo.name, toDo.id);
        toDo.isSelected = true;
        newToDos.splice(0, 0, toDo);
      } else {
        toDo.isSelected = false;
        newToDos.push(toDo);
      }
    });

    reallocateToDos(newToDos);
  };

  const toggleToDoProgress = (id) => {
    let newToDos = [];
    toDos.forEach((toDo) => {
      if (toDo.id === id) {
        toDo.isDone = !toDo.isDone;
      }
      newToDos.push(toDo);
    });
    reallocateToDos(newToDos);
  };

  const toggleEditMode = () => {
    let newToDos = [];
    if (isEditMode) {
      toDos.forEach((toDo) => newToDos.push(toDo));
      newToDos.splice(0, 1);
    } else {
      newToDos.push({
        id: 123456789,
        isButton: true,
      });
      toDos.forEach((toDo) => {
        toDo.isEdit = false;
        newToDos.push(toDo);
      });
    }
    reallocateToDos(newToDos);
    setIsEditMode(!isEditMode);
  };

  return (
    <ToDosPresenter
      toDos={toDos}
      addToDo={addToDo}
      deleteToDo={deleteToDo}
      isEditMode={isEditMode}
      editToDo={editToDo}
      changeToDo={changeToDo}
      selectToDo={selectToDo}
      toggleToDoProgress={toggleToDoProgress}
      toggleEditMode={toggleEditMode}
    />
  );
};

import React from "react";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AppContainer } from "./components/styles";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./components/AppStateContext";
import "./App.css";

const App = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;

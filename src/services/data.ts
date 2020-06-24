interface ITask {
  id: string;
  text: string;
}

interface IList {
  id: string;
  text: string;
  tasks: ITask[];
}

export interface IAppState {
  lists: IList[];
}

interface AppStateContextProps {
  state: IAppState;
}

export const appData: IAppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

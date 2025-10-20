import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const state = {
    name: "Bilal",
    class: "BSSE",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;

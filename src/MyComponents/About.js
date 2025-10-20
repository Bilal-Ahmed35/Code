import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
export const About = () => {
  const a = useContext(NoteContext);
  return (
    <div>
      <b>
        This is about {a.name} and he is in {a.class}
      </b>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis
        odio, nesciunt sed eveniet, nemo amet, dignissimos magnam itaque ipsam
        possimus. Inventore vitae, perferendis harum quas cupiditate adipisci
        repellendus tempore asperiores at consequatur quos?
      </p>
    </div>
  );
};

import React, { useEffect } from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
export const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <b>
        This is about {a.state.name} and he is in {a.state.class}
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

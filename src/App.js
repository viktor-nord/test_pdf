import artificer from "./characters/artificer";
import hugo from "./characters/hugo_von_sonson";
// import dedd from "./characters/druid_spored";
import { useState } from "react";
import Popup from "./popup";
import Ability from "./ability";
import Inputs from "./inputs";
import { Link } from "react-router-dom";

function App() {
  const [char, setchar] = useState(hugo);
  const [isOpen, setIsOpen] = useState(false);
  const [pop, setpop] = useState(null);

  function close() {
    setpop(null)
    setIsOpen(false)
  }

  function input(type, val) {
    setpop({title: type, text: val})
    setIsOpen(true)
  }

  return (
    <div className="container">
      {isOpen && <Popup char={char} val={pop} open={close} />}
      <Ability char={char} />
      <div className="button-container">
        <button className="click" onClick={() => setchar(hugo)}>
          <Link to="/monsters">Monsters</Link>
        </button>
        <button className="click" onClick={() => setchar(hugo)}>
          Hugo Sonson
        </button>
        <button className="click" onClick={() => setchar(artificer)}>
          Axel Havoc
        </button>
        <button className="click" onClick={() => setchar(artificer)}>
          Dedd Valking
        </button>
        <button className="click" onClick={() => setchar(artificer)}>
          Aumbla
        </button>
      </div>
      <img
        src="./5E_CharacterSheet_Fillable_page-0001.jpg"
        alt="gg"
        width="850px"
        height="1100px"
      />
      <Inputs char={char} click={(type, val) => input(type, val)}/>
    </div>
  );
}

export default App;
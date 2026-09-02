import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Popup from "./popup";
import hugo from "./characters/hugo_von_sonson";

function Monsters() {
  const [monsters, set_monsters] = useState(null);
  const [monster, set_monster] = useState(null);
  const [loading, set_loading] = useState(true);

  useEffect(() => {
    fetch("https://api.open5e.com/v1/monsters/?page=2")
      .then((res) => res.json())
      .then((json) => {
        set_monsters(json.results);
        set_loading(false);
      });
    // eslint-disable-next-line
  }, []);

  function selectMonter(val) {
    console.log(val);
    let obj = {
      name: val.name,
      ac: val.armor_class,
      hp: val.hit_points,
      speed: val.speed.walk ? val.speed.walk : 30,
      str: val.strength,
      dex: val.dexterity,
      con: val.constitution,
      int: val.intelligence,
      wis: val.wisdom,
      cha: val.charisma,
      pb: 2,
      skills: ["perception +" + val.perception],
      traits: val.special_abilities.length
        ? val.special_abilities.map((x) => {
            return { name: x.name, val: x.desc };
          })
        : null,
      actions: val.actions.length
        ? val.actions.map((x) => {
            return { name: x.name, val: x.desc };
          })
        : null,
    };
    console.log(obj);
    set_monster({ title: "familiar", text: obj });
  }

  function close() {
    set_monster(null);
  }

  if (loading) {
    return (
      <div>
        <Link to="/">Back</Link>
        <div className="loading">please wait</div>
      </div>
    );
  }
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="monster-list">
        <h1>monsters</h1>

        {monsters.map(function (x) {
          return (
            <p onClick={() => selectMonter(x)} className="click">
              {x.name}
            </p>
          );
        })}
      </div>
      {monster && <Popup char={hugo} val={monster} open={close} />}
    </div>
  );
}

export default Monsters;

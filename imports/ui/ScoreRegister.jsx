import React, {useState} from 'react';
import { ScoreCollection } from '/imports/api/ScoreCollection';
export const ScoreRegister  = () => {

    const [papa, setpapa] = useState("");
    const [mama, setmama] = useState("");
    const [pao, setpao] = useState("");
    const [hugon, sethugon] = useState("");
    const [juego, setjuego] = React.useState("");
    const [expansion, setexpansion] = useState("");
    const [fecha, setfecha] = useState("");
    
      /** "selected" here is state variable which will hold the
     * value of currently selected dropdown.
     */
    const [selected, setSelected] = React.useState("");
    
    /** Cambia los valores del dropdown de expansions
     */
    const changeSelectOptionHandler = (event) => {
      setjuego(event.target.value);
      setSelected(event.target.value);
    };
    
    /** Arrays con expansions (deberia ser algo de MongoDB mejor) */
    const aventurerosAlTren = [
      "Juego base",
      "1910",
      "Italia",
      "Japon",
      "Europa",
      "China",
      "Asia/China ancestral",
    ];
    const splendor = [
      "Juego base",
    ];
    const microMacro = [
      "Juego base",
    ];
    const carioca = [
      "Juego base",
    ];
    const virus = [
      "Juego base",
    ];
    const gatosExplosivos = [
      "Juego base",
      "Exploding kittens",
    ];
    const azul = [
      "Juego base",
    ];
    
    let type = null;
    
    let options = null;
    
    if (selected === "Aventureros al tren") {
      type = aventurerosAlTren;
    } else if (selected === "Splendor") {
      type = splendor;
    } else if (selected === "Micro Macro") {
      type = microMacro;
    } else if (selected === "Carioca") {
    type = carioca;
    } else if (selected === "Virus") {
      type = virus;
    } else if (selected === "Gatos Explosivos") {
      type = gatosExplosivos;
    } else if (selected === "Azul") {
    type = azul;
    }
    
    if (type) {
      options = type.map((el) => <option value={el}>{el}</option>);
    }
    else{
      options = (<option key="undefined"> Juego base </option>)
    }

    
    const handleSubmit = e => {
        //ishugonUsed(hugon);
        e.preventDefault();

        if (!papa){
          alert("Ingrese puntaje");
          return
        };
        if (!pao){
          alert("Ingrese Ingrese puntaje");
          return
        };
        if (!mama){
          alert("Ingrese Ingrese puntaje");
          return
        };
        if (!fecha){
          alert("Ingrese Ingrese puntaje");
          return
        };
        if (expansion == "unselected"){
          alert("Ingrese expansion");
          return
        };

        ScoreCollection.insert({
          papa: papa.trim(),
          mama: mama.trim(),
          pao: pao.trim(),
          hugon: hugon.trim(),
          juego: juego.trim(),
          expansion: expansion,
          fecha: fecha.trim(),
          createdAt: new Date()
        });

        // ScoreCollection.insert({ //FIX THIS ASAP
        //   papa: papa.trim(),
        //   mama: mama.trim(),
        //   pao: pao.trim(),
        //   hugon: hugon.trim(),
        //   juego: juego.trim(),
        //   expansion: expansion,
        //   fecha: fecha.trim(),
        //   createdAt: new Date()
        // });

        setpapa("");
        setmama("");
        setpao("");
        sethugon("");
        setjuego("");
        setexpansion("");
        setfecha("");
      
    };

    
  
    return (
        <form className="task-form" onSubmit={handleSubmit}>
          <label>
          Juego:
          <select value={juego} onChange={changeSelectOptionHandler}>
            <option selected value="INVALID">Seleccione juego</option>
            <option value="Aventureros al tren">Aventureros al Tren</option>
            <option value="Splendor">Splendor</option>
            <option value="Micro Macro">Micro Macro</option>
            <option value="Carioca">Carioca</option>
            <option value="Virus">Virus</option>
            <option value="Gatos explosivos">Gatos Explosivos</option>
            <option value="Azul">Azul</option>
          </select>
        </label>
        <label>
          Expansion:
          <select value={expansion} onChange={(e) => setexpansion(e.target.value)}>
            <option value="Juego Base">Juego base</option>
            {options}
          </select>
        </label>
        <br></br>
        <label>
          papa:
          <input
            type="text"
            placeholder="Puntaje papa"
            value={papa}
            onChange={(e) => setpapa(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          Apellido Paterno:
          <input
            type="text"
            placeholder="Puntaje Mama"
            value={mama}
            onChange={(e) => setmama(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          Apellido Materno:
          <input
            type="text"
            placeholder="Puntaje pao"
            value={pao}
            onChange={(e) => setpao(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          hugon:
          <input
            type="text"
            placeholder="Puntaje hugo n"
            value={hugon}
            onChange={(e) => sethugon(e.target.value)}
            className="form-control"
          />
        </label>
        <br></br>
        
        <label>
          fecha:
          <input
            type="text"
            placeholder="Fecha"
            value={fecha}
            onChange={(e) => setfecha(e.target.value)}
            className="form-control"
          />
          {/* <input type="text" name="fecha" /> */}
        </label>
        <br></br>
        <input type="submit" value="Submit" className="btn btn-primary"/>
        <br></br>
      </form>
    );
  };
  
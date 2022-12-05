import React, {useState} from 'react';
import {PatientCollection} from '/imports/api/PatientCollection';
import {validateRut} from 'rutlib';
export const PatientRegister  = () => {

    const [nombres, setNombres] = useState("");
    const [apellidoP, setApellidoP] = useState("");
    const [apellidoM, setApellidoM] = useState("");
    const [rut, setRut] = useState("");
    const [region, setRegion] = React.useState("");
    const [comuna, setComuna] = useState("");
    const [postal, setPostal] = useState("");
    
      /** "selected" here is state variable which will hold the
     * value of currently selected dropdown.
     */
    const [selected, setSelected] = React.useState("");
    
    /** Cambia los valores del dropdown de comunas
     */
    const changeSelectOptionHandler = (event) => {
      setRegion(event.target.value);
      setSelected(event.target.value);
    };
    
    /** Arrays con comunas (deberia ser algo de MongoDB mejor) */
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
        //isRutUsed(rut);
        e.preventDefault();

        if (!nombres){
          alert("Ingrese nombres");
          return
        };
        if (!apellidoM){
          alert("Ingrese apellido materno");
          return
        };
        if (!apellidoP){
          alert("Ingrese apellido paterno");
          return
        };
        if (!postal){
          alert("Ingrese codigo postal");
          return
        };
        if (comuna == "unselected"){
          alert("Ingrese comuna");
          return
        };

        PatientCollection.insert({
          nombres: nombres.trim(),
          apellidoP: apellidoP.trim(),
          apellidoM: apellidoM.trim(),
          rut: rut.trim(),
          region: region.trim(),
          comuna: comuna,
          postal: postal.trim(),
          createdAt: new Date()
        });

        setNombres("");
        setApellidoP("");
        setApellidoM("");
        setRut("");
        setRegion("");
        setComuna("");
        setPostal("");
      
    };

    
  
    return (
        <form className="task-form" onSubmit={handleSubmit}>
          <label>
          Juego:
          <select value={region} onChange={changeSelectOptionHandler}>
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
          <select value={comuna} onChange={(e) => setComuna(e.target.value)}>
            <option value="Juego Base">Juego base</option>
            {options}
          </select>
        </label>
        <br></br>
        <label>
          Nombres:
          <input
            type="text"
            placeholder="Ingrese nombres"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          Apellido Paterno:
          <input
            type="text"
            placeholder="Ingrese apellido paterno"
            value={apellidoP}
            onChange={(e) => setApellidoP(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          Apellido Materno:
          <input
            type="text"
            placeholder="Ingrese apellido materno"
            value={apellidoM}
            onChange={(e) => setApellidoM(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          Rut:
          <input
            type="text"
            placeholder="Ingrese rut"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            className="form-control"
          />
        </label>
        <br></br>
        
        <label>
          Postal:
          <input
            type="text"
            placeholder="Ingrese codigo postal"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            className="form-control"
          />
          {/* <input type="text" name="postal" /> */}
        </label>
        <br></br>
        <input type="submit" value="Submit" className="btn btn-primary"/>
        <br></br>
      </form>
    );
  };
  
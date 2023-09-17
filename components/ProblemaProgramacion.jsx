'use client';

import { useState } from 'react';

import Ide from '@/components/Ide';

export default function ProblemaProgramacion({ lenguaje, problema, explicacion, solucion_script, entradas, salidas, id, completed, updateCompletionBar, updateCompletedItems}) {
  const [theme, setTheme] = useState('monokai');
  const [fontSize, setFontSize] = useState(12);
  const [style, setStyle] = useState({ display: "none" });
  const [editorText, setEditorText] = useState('Escribe aquí tu solución');
  const [verSolucion, setVerSolucion] = useState(false);
  const [salidaPrograma, setSalidaPrograma] = useState(null);

  async function submitCode() {
    let lenguaje_judge_id;

    if (lenguaje === 'python') {
      lenguaje_judge_id = process.env.NODE_ENV === 'development' ? 10 : 25;
    } else if (lenguaje === 'java') {
      lenguaje_judge_id = 4;
    } else if (lenguaje === 'cpp') {
      lenguaje_judge_id = 12;
    }

    const url = `${process.env.NEXT_PUBLIC_RAPIDAPI_PROTOCOL}${process.env.NEXT_PUBLIC_RAPIDAPI_HOST}/submissions?base64_encoded=true&wait=true&fields=*`;

    const source_code = btoa(editorText);

    let datos = {
      language_id: lenguaje_judge_id,
      source_code: source_code,
    };

    let headersData;

    if (entradas) {
      if (entradas.length === 1) {
        datos.stdin = btoa(entradas[0]);
      } else {
        datos.stdin = btoa(entradas);
      }
    }

    if (salidas) {
      if (salidas.length === 1) {
        datos.expected_output = btoa(salidas[0]);
      } else {
        datos.expected_output = btoa(salidas);
      }
    }

    if (process.env.NODE_ENV !== 'development') {
      headersData = {
        'Content-type': "application/json",
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST
      } 
    } else {
      headersData = {
        'Content-type': "application/json"
      }
    }

    const options = {
      method: 'POST',
      headers: headersData,
      body: JSON.stringify(datos)
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      handleResult(result)
    } catch (error) {
      console.error(error);
    }
  }

  function handleResult(result) {
    console.log(result)
    const codeResult = result.status.description;
    const output = atob(result.stdout);

    if (codeResult === "Accepted") {

    } else {

    }
  }

  function changeVerSolucion() {
    setVerSolucion(true);
    setEditorText(solucion_script);
  }

  function changeTheme(e) {
    const { value } = e.target;
    setTheme(value);
  }

  function changeFontSize(e) {
    const { value } = e.target;
    setFontSize(value);
  }

  function changeContent(newValue) {
    setEditorText(newValue);
  }

  return (
    <div className="editor__container">
      <div className="header">Editor de código</div>
      <div className="language">Lenguaje de programación: {lenguaje}</div>
      <p className="problem"><b>Problema:</b> {problema}</p>
      {verSolucion && (
        <p className="solution"><b>Solución:</b>{explicacion}</p>
      )}
      
      <div className="control-panel">
        Selecciona un tema
        <select id="tema" className="tema" onChange={changeTheme}>
          <option value="monokai">Monokai</option>
          <option value="github">Github</option>
          <option value="twilight">Twilight</option>
          <option value="xcode">Xcode</option>
          <option value="terminal">Terminal</option>
        </select>
        Selecciona un tamaño de letra
        <select id="font-size" className="font-size" onChange={changeFontSize}>
          <option value={12}>12</option>
          <option value={14}>14</option>
          <option value={16}>16</option>
          <option value={18}>18</option>
          <option value={20}>20</option>
        </select>
      </div>
      <Ide language={lenguaje} theme={theme} fontSize={fontSize} dataState={changeContent} editorText={editorText}/>
      <button className="button-submit-code" onClick={submitCode}>Ejecutar</button>
      <button className="ver_solucion" onClick={changeVerSolucion} onMouseEnter={(e) => {
        setStyle({ display: "block" });
      }} onMouseLeave={(e) => {setStyle({ display: "none" });}}>Ver solución</button>
      <p className="solution__alert" style={style}>Si ves la solución, el ejercicio no contará en tu racha</p>
      <div className="output">
        <p>Salida del programa:</p>
      </div>

      <style jsx>{`
        .editor__container {
          margin-top: 50px;
          width: 75%;
          background-color: var(--grey) !important;
          color: black !important;
          display: flex;
          flex-direction: column;
        }
        .header {
          text-align: left;
          font-size: 20px;
          font-weight: bold;
          padding: 4px;
        }
        .problem {
          padding: 20px;
        }
        button {
          background-color: var(--purple);
          color: white;
          border: none;
          padding: 10px;
          font-size: 1.2rem;
          margin-top: 10px;
          margin-left: auto;
          margin-right: auto;
        }
        button:hover {
          cursor: pointer;
        }
        .control-panel {
          background: var(--grey);
          text-align: right;
          padding: 4px;
          font-family: sans-serif;
        }
        .language {
          padding-left: 4px;
        }
        select {
          margin-left: 10px;
          margin-right: 7px;
          padding: 5px;
          font-size: 1rem;
          background-color: black;
          color: var(--grey);
          border: none;
        }
        .output {
          width: 100%;
          min-height: 100px;
          padding: 20px;
        }
        .solution__alert {
          width: 50%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 10px;
          text-align: center;
        }
        .solution {
          padding: 0px 20px;
        }
      `}</style>
    </div>
  )
}

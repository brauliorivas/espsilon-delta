'use client';

import { useState } from 'react';

import Ide from '@/components/Ide';

export default function ProblemaProgramacion({ problema, explicacion, solucion_script, entradas, salidas, id, completed, updateCompletionBar, updateCompletedItems}) {
  const [codeData, setData] = useState();

  function selectLanguage() {}

  function submitCode() {}

  return (
    <div className="editor__container">
      <div className="header">Ace Online IDE</div>
      <Ide dataState={setData}/>
      <button className="button-submit-code" onClick={submitCode}>Ejecutar</button>
      <div className="output"></div>

      <style jsx>{`
        .editor__container {
          margin-top: 50px;
          width: 75%;
        }
        .header {
          background-color: var(--grey);
          text-align: left;
          font-size: 20px;
          font-weight: bold;
          color: black;
          padding: 4px;
        }
        .button-submit-code {
          background-color: var(--purple);
          color: white;
          border: none;
          padding: 10px;
          font-size: 1.2rem;
          margin-top: 10px;
          margin: auto 0;
        }
        .button-submit-code:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

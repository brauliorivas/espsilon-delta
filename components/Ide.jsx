import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/ext-language_tools';

export default function Ide({ language, theme, fontSize, dataState, editorText}) {   
    return (
        <>
            <AceEditor mode={language} value={editorText} theme={theme} onChange={dataState} fontSize={parseInt(fontSize)} style={{ width: '100%'}} setOptions={{enableBasicAutocompletion: true,
      enableLiveAutocompletion: true}}/>
        </>
    )
}
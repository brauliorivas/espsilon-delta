import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

export default function Ide({ dataState}) {
    return (
        <>
            <AceEditor mode="java" defaultValue="Ide!!" theme="monokai" onChange={dataState} style={{ width: '100%'}}/>
        </>
    )
}
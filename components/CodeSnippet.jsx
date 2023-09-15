'use client';

import { Highlight, Language, themes } from "prism-react-renderer";

import styles from "../css/index.module.css";

import Prism from 'prismjs';
import "prismjs/components/prism-jsx";

export default function CodeSnippet({ code, language, showLineNumbers }) {	
	return (
	 <Highlight
      code={code}
      language={language}
      theme={themes.vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{...style, width: 'fit-content'}}>
          {tokens.map((line, i) => (
            <div className={styles.line} {...getLineProps({ line, key: i })}>
              {showLineNumbers && (
                <span className={styles.lineNumber}>{i + 1}</span>
              )}
              <span className={styles.lineContent}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
	)
}

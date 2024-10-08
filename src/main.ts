import './style.css';
import './jetbrains-mono.css';
import '@xterm/xterm/css/xterm.css';

import './monaco.ts';

// import { loadPyodide } from 'pyodide';
// import { Terminal } from '@xterm/xterm';
// import { FitAddon } from '@xterm/addon-fit';

// const pyodide = await loadPyodide({
//   indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/',
//   stdout: console.log,
// });
// const terminal = new Terminal({
//   fontFamily: 'JetBrains Mono',
//   letterSpacing: 0,
//   convertEol: true,
// });

// const fitAddon = new FitAddon();
// terminal.loadAddon(fitAddon);
// window.addEventListener('resize', () => fitAddon.fit());
// terminal.open(document.getElementById('app')!);
// terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m');
// terminal.onData((data) => terminal.write(data.replace('\b', '\x1b[D')));

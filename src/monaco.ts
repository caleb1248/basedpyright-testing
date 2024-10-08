import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
globalThis.MonacoEnvironment = {
  getWorker() {
    return new editorWorker();
  },
};

const editor = monaco.editor.create(document.getElementById('editor')!, {
  theme: 'vs-dark',
});

window.addEventListener('resize', () => editor.layout());

editor.setModel(
  monaco.editor.createModel(
    'x:int = "hi"',
    'python',
    monaco.Uri.file('test.py')
  )
);

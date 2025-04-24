// CODE EDITOR
let fullCode = "";

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    monaco.editor.defineTheme('myDarkTheme', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { background: '1E1E1E', foreground: 'D4D4D4' }
        ],
        colors: {
            'editor.background': '#1E1E1E',
            'editor.foreground': '#D4D4D4',
            'editorCursor.foreground': '#FFFFFF',
        }
    });

    monaco.editor.setTheme('myDarkTheme');

    editor = monaco.editor.create(document.getElementById("txteditor"), {
        language: "html",
        base: "vs-dark",
        automaticLayout: true
    });

    function onInputChanged() {
        const value = editor.getValue();
        fullCode = value;
        //document.getElementById("previewarea").innerHTML = value;
        document.previewarea.document.body.innerHTML = value;
    }

    editor.onDidChangeModelContent(onInputChanged);
});

function setEditorCode(codevalue) {
    editor.setValue(codevalue);
}

function saveCode() {
    const textBoxContent = fullCode;
    const blob = new Blob([textBoxContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

function loadCode() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.html';

    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setEditorCode(e.target.result);
            };
            reader.readAsText(file);
        }
    };

    fileInput.click();
};

document.previewarea.document.body.height = "100%";

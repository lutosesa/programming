// INITIERAR CODEMIRROR
const editor = CodeMirror(document.getElementById('editor'), {
    mode: 'htmlmixed',
    theme: 'paraiso-dark',
    lineNumbers: true,
    lineWrapping: false,
    autoCloseTags: true,
    autoCloseBrackets: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    lint: true,
    extraKeys: {
        'Ctrl-Space': 'autocomplete',
        'Ctrl-Shift-F': formatCode,
        'Ctrl-M': (cm) => cm.foldCode(cm.getCursor()),
        'Ctrl-Shift-M': (cm) => cm.execCommand('unfoldAll'),
        Tab: 'emmetExpandAbbreviation',
        'Ctrl-Q': 'emmetExpandAbbreviation',
    },
    value: '',
});

// FUNKTION FÖR ATT KOLLA OM KOD ÄR HOPFÄLLD OCH VÄXLA
function toggleFoldAll() {
    const isFolded = editor.getAllMarks().length > 0;
    editor.operation(() => {
        for (let i = 0; i < editor.lineCount(); i++) {
            editor.foldCode(CodeMirror.Pos(i, 0), null, isFolded ? 'unfold' : 'fold');
        }
    });
}

// LIVE FÖRHANDSVISNING
editor.on('change', runCode);

// HÄMTAR KODBLOCK FRÅN URL ELLER LOCALSTORAGE
function getQueryParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}

window.onload = () => {
    const codeId = getQueryParam('id') || sessionStorage.getItem('codeId');
    const exampleCode = sessionStorage.getItem('exampleCode') || '';

    if (codeId) {
        console.log(`Laddar kodblock med ID: ${codeId}`);
    }

    editor.setValue(exampleCode);
    runCode();
};

// KÖR KODEN
function runCode() {
    document.getElementById('preview').srcdoc = editor.getValue();
}

// RENSAR EDITORN
function clearCode() {
    editor.setValue('');
    runCode();
}

// FORMATERAR KODEN
function formatCode() {
    editor.operation(() => {
        for (let i = 0; i < editor.lineCount(); i++) {
            editor.indentLine(i, 'smart');
        }
    });
}

// VÄXLING AV TEMAN
const themes = {
    dark: 'paraiso-dark',
    light: 'mdn-like',
};

const toggleBtn = document.getElementById('toggleTheme');
const sunIcon = document.querySelector('.btn-toggle-sun');
const moonIcon = document.querySelector('.btn-toggle-moon');

function switchTheme() {
    const isDark = editor.getOption('theme') === themes.dark;
    editor.setOption('theme', isDark ? themes.light : themes.dark);

    sunIcon.classList.toggle('active', !isDark);
    sunIcon.classList.toggle('inactive', isDark);
    moonIcon.classList.toggle('active', isDark);
    moonIcon.classList.toggle('inactive', !isDark);
    toggleBtn.style.backgroundColor = isDark ? '#333333' : '#ffffff';
}

toggleBtn.addEventListener('click', switchTheme);

// FONTSTORLEKSÄNDRINGAR
let currentFontSize = 14;
const editorWrapper = editor.getWrapperElement();

function updateFontSize(change) {
    currentFontSize = Math.max(8, currentFontSize + change);
    editorWrapper.style.fontSize = currentFontSize + 'px';
    editor.refresh();
}

document.getElementById('increaseFont').addEventListener('click', () => updateFontSize(2));
document.getElementById('decreaseFont').addEventListener('click', () => updateFontSize(-2));

// CSS-LINTING
CodeMirror.registerHelper('lint', 'css', (text) => {
    return !text.includes('{') || !text.includes('}')
        ? [
              {
                  from: CodeMirror.Pos(0, 0),
                  to: CodeMirror.Pos(0, text.length),
                  message: 'CSS-regler bör vara inom { }.',
                  severity: 'warning',
              },
          ]
        : [];
});

// JAVASCRIPT-LINTING MED ESLint
CodeMirror.registerHelper('lint', 'javascript', (text) => {
    try {
        new Function(text);
        return [];
    } catch (err) {
        return [
            {
                from: CodeMirror.Pos(0, 0),
                to: CodeMirror.Pos(0, text.length),
                message: err.message,
                severity: 'error',
            },
        ];
    }
});

// MUSDRAGNING FÖR RESIZER
const resizer = document.getElementById('resizer');
let isDragging = false;

resizer.addEventListener('mousedown', () => {
    isDragging = true;
    document.body.style.cursor = 'col-resize';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const container = document.querySelector('.container');
    let newWidth = e.clientX - container.getBoundingClientRect().left;
    newWidth = Math.max(100, Math.min(container.offsetWidth - 100, newWidth));

    document.getElementById('editor').style.width = `${newWidth}px`;
    document.getElementById('preview').style.width = `${container.offsetWidth - newWidth - resizer.offsetWidth}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
});

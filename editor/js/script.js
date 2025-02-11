// INITIERAR CODEMIRROR
const editor = CodeMirror(document.getElementById('editor'), {
    mode: 'htmlmixed',
    theme: 'paraiso-light',
    lineNumbers: true,
    lineWrapping: false,
    // readOnly: false,
    autoCloseTags: true,
    autoCloseBrackets: true,
    foldGutter: true, // Aktivera kodfällning
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'], // Lägg till fällningsikon
    extraKeys: {
        'Ctrl-Space': 'autocomplete', // Aktivera autokomplettering med Ctrl-Space
        'Ctrl-Shift-F': formatCode,
        'Ctrl-M': (cm) => cm.foldCode(cm.getCursor()), // Tangentbordsgenväg för att fälla ihop kod vid markören
        'Ctrl-Shift-M': (cm) => cm.execCommand('unfoldAll'), // Öppna all kod
        Tab: 'emmetExpandAbbreviation', // Använd TAB för att expandera Emmet-kortkommandon
        'Ctrl-Q': 'emmetExpandAbbreviation', // Alternativ tangentbordsgenväg
    },
    value: '',
});

// FÖR ATT FÄLLA IHOP/EXPANDERA ALL KOD
function toggleFoldAll() {
    const totalLines = editor.lineCount();
    let isFolded = false;

    // Kontrollera om koden redan är hopfälld
    for (let i = 0; i < totalLines; i++) {
        let marks = editor.findMarksAt(CodeMirror.Pos(i, 0));
        if (marks.length > 0) {
            isFolded = true;
            break;
        }
    }

    // Växla mellan att fälla ihop och öppna
    for (let i = 0; i < totalLines; i++) {
        if (isFolded) {
            editor.foldCode(CodeMirror.Pos(i, 0), null, 'unfold');
        } else {
            editor.foldCode(CodeMirror.Pos(i, 0), null, 'fold');
        }
    }
}




// LIVE FÖRHANDSVISNING
editor.on('change', () => {
    runCode();
});


// FUNKTIONEN FÖR ATT HÄMTA KODBLOCKET VIA URL-parametrar
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// När sidan laddas, hämta rätt kodblock från sessionStorage
window.onload = () => {
    const codeId = getQueryParam('id') || sessionStorage.getItem('codeId');
    const exampleCode = sessionStorage.getItem('exampleCode') || '';

    if (codeId) {
        console.log(`Laddar kodblock med ID: ${codeId}`);
    }

    editor.setValue(exampleCode); // Sätt koden i editorn
    runCode();
};


// KÖR KODEN
function runCode() {
    const code = editor.getValue();
    const preview = document.getElementById('preview');
    preview.srcdoc = code;
}


// RENSAR EDITORN
function clearCode() {
    editor.setValue('');
    document.getElementById('preview').srcdoc = '';
}


// FORMATERAR KODEN I EDITORN
function formatCode() {
    const totalLines = editor.lineCount();
    editor.operation(() => {
        for (let i = 0; i < totalLines; i++) {
            editor.indentLine(i, 'smart');
        }
    });
}



// VÄXLING AV TEMAN
const darkTheme = 'paraiso-light';  
const lightTheme = 'mdn-like';

// Sätt utgångsvärdet för editorn (mörkt tema)
editor.setOption('theme', darkTheme);

// Hämta toggle-knappen
const toggleBtn  = document.getElementById('toggleTheme'); 
const sunIcon    = document.querySelector('.btn-toggle-sun');
const moonIcon   = document.querySelector('.btn-toggle-moon');

// Lägg till eventlyssnare för knappen
toggleBtn.addEventListener('click', function() {
    if (editor.getOption('theme') === darkTheme) {
        // Om vi är i mörkt tema, byt till ljust tema
        editor.setOption('theme', lightTheme);
        // Uppdatera ikonerna: gör mån-ikonen aktiv och solikonen inaktiv
        sunIcon.classList.remove('active');
        sunIcon.classList.add('inactive');
        moonIcon.classList.remove('inactive');
        moonIcon.classList.add('active');
        toggleBtn.style.backgroundColor = '#333333';
        
    } else {
        // Om vi är i ljust tema, byt till mörkt tema
        editor.setOption('theme', darkTheme);
        // Uppdatera ikonerna: gör solikonen aktiv och mån-ikonen inaktiv
        sunIcon.classList.remove('inactive');
        sunIcon.classList.add('active');
        moonIcon.classList.remove('active');
        moonIcon.classList.add('inactive');
        toggleBtn.style.backgroundColor = '#d0d0d2';
    }
});



// FONTSTORLEKSÄNDRINGAR
// Sätt en startstorlek, exempelvis 14px
let currentFontSize = 14;

// Hämta referensen till CodeMirror-wrappern
// Detta element innehåller all editorinnehåll
const editorWrapper = editor.getWrapperElement();

// Funktion för att uppdatera fontstorleken
function updateFontSize() {
  editorWrapper.style.fontSize = currentFontSize + 'px';
  editor.refresh(); // Nödvändigt för att CodeMirror ska räkna om radhöjd med ny fontstorlek
}

// Lägg till eventlyssnare för knapparna
document.getElementById('increaseFont').addEventListener('click', function() {
  currentFontSize += 2; // Öka med 2px
  updateFontSize();
});

document.getElementById('decreaseFont').addEventListener('click', function() {
  // Se till att storleken inte blir för liten
  if (currentFontSize > 8) {
    currentFontSize -= 2; // Minska med 2px
    updateFontSize();
  }
});



// FUNKTION FÖR ATT HANTERA MUSDRAGNING FÖR RESIZER
const resizer = document.getElementById('resizer');
let isDragging = false;

resizer.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.body.style.cursor = 'col-resize';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const container = document.querySelector('.container');
    const resizer = document.getElementById('resizer');

    // Beräkna den nya bredden för editorn
    const containerRect = container.getBoundingClientRect();
    let newWidth = e.clientX - containerRect.left;

    // Begränsa minsta och största bredd
    newWidth = Math.max(100, Math.min(containerRect.width - 100, newWidth));

    // Sätt bredden för editor och preview
    const editorElement = document.getElementById('editor');
    const previewElement = document.getElementById('preview');
    editorElement.style.width = `${newWidth}px`;
    previewElement.style.width = `${containerRect.width - newWidth - resizer.offsetWidth}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
});
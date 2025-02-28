// Globala CodeMirror editor-variabler
var htmlEditor, cssEditor, jsEditor;

document.addEventListener('DOMContentLoaded', function () {
    /***************************************************
     * INITIALISERA CODEMIRROR-EDITORER (redigerare)
     **************************************************/
    htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-editor'), {
        mode: 'htmlmixed',
        lineNumbers: true,
        lineWrapping: true,
        theme: 'paraiso-dark',
        styleActiveLine: true, // Aktivera markering av aktuell rad
        autoCloseTags: true, // Auto-avslut HTML-taggar
        matchBrackets: true, // Matchning av parenteser
        foldGutter: true,
        colorpicker: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        extraKeys: {
            'Ctrl-Space': 'autocomplete', // Aktiverar autokomplettering med Ctrl + Space
            'Ctrl-Shift-F': formatCode,
            'Ctrl-E': (cm) => cm.execCommand('emmetExpandAbbreviation'), // Emmet expand
            'Ctrl-Q': (cm) => cm.foldCode(cm.getCursor()), // Ctrl+Q för att fälla ihop/expandera enskilda block
        },
    });

    cssEditor = CodeMirror.fromTextArea(document.getElementById('css-editor'), {
        mode: 'css',
        lineNumbers: true,
        theme: 'paraiso-dark',
        styleActiveLine: true, // Aktivera markering av aktuell rad
        autoCloseBrackets: true, // Auto-avslut (), [], {}
        matchBrackets: true, // Matchning av parenteser
        foldGutter: true,
        colorpicker: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        extraKeys: {
            'Ctrl-Space': 'autocomplete', // Aktiverar autokomplettering med Ctrl + Space
            'Ctrl-Shift-F': formatCode,
            'Ctrl-E': (cm) => cm.execCommand('emmetExpandAbbreviation'), // Emmet expand
            'Ctrl-Q': (cm) => cm.foldCode(cm.getCursor()), // Ctrl+Q för att fälla ihop/expandera enskilda block
        },
    });

    jsEditor = CodeMirror.fromTextArea(document.getElementById('js-editor'), {
        mode: 'javascript',
        lineNumbers: true,
        theme: 'paraiso-dark',
        styleActiveLine: true, // Aktivera markering av aktuell rad
        autoCloseBrackets: true, // Auto-avslut (), [], {}
        matchBrackets: true, // Markera matchande bracket
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        extraKeys: {
            'Ctrl-Space': 'autocomplete', // Aktiverar autokomplettering med Ctrl + Space
            'Ctrl-Shift-F': formatCode,
            'Ctrl-E': (cm) => cm.execCommand('emmetExpandAbbreviation'), // Emmet expand
            'Ctrl-Q': (cm) => cm.foldCode(cm.getCursor()), // Ctrl+Q för att fälla ihop/expandera enskilda block
        },
    });

    /********************************************
     * KOD FÖR ATT UPPDATERA FÖRHANDSVISNINGEN
     ********************************************/
    const previewFrame = document.getElementById('preview').contentDocument;
    function updatePreview() {
        previewFrame.open();
        previewFrame.write(`
            <html>
                <head>
                    <style>${cssEditor.getValue()}</style>
                </head>
                <body>
                    ${htmlEditor.getValue()}
                </body>
            </html>
        `);
        previewFrame.close();

        // Lägg till JavaScript separat
        const scriptTag = document.createElement('script');
        scriptTag.textContent = jsEditor.getValue();
        previewFrame.body.appendChild(scriptTag);
    }
    // Lyssna på ändringar i alla editors
    [htmlEditor, cssEditor, jsEditor].forEach((editor) => {
        editor.on('change', updatePreview);
    });

    /************************************************
     * HÄMTAR KODBLOCK FRÅN URL ELLER LOCALSTORAGE
     ************************************************/
    function getQueryParam(param) {
        return new URLSearchParams(window.location.search).get(param);
    }

    window.onload = () => {
        const codeId = getQueryParam('id') || sessionStorage.getItem('codeId');
        let exampleCode = sessionStorage.getItem('exampleCode') || '';

        if (codeId) {
            console.log(`Laddar kodblock med ID: ${codeId}`);
        }

        // Splitta koden i HTML, CSS och JavaScript
        let htmlCode = '',
            cssCode = '',
            jsCode = '';

        if (exampleCode) {
            // Matcha CSS inom <style> ... </style>
            const cssMatch = exampleCode.match(/<style[^>]*>([\s\S]*?)<\/style>/);
            cssCode = cssMatch ? cssMatch[1].trim() : '';

            // Matcha JS inom <script> ... </script>
            const jsMatch = exampleCode.match(/<script[^>]*>([\s\S]*?)<\/script>/);
            jsCode = jsMatch ? jsMatch[1].trim() : '';

            // HTML är resten av koden utan <style> och <script>
            htmlCode = exampleCode
                .replace(/<style[^>]*>[\s\S]*?<\/style>/, '')
                .replace(/<script[^>]*>[\s\S]*?<\/script>/, '')
                .trim();
        }

        // Ladda koden i CodeMirror-editorerna
        htmlEditor.setValue(htmlCode);
        cssEditor.setValue(cssCode);
        jsEditor.setValue(jsCode);

        // Uppdatera förhandsvisningen
        updatePreview();
    };

    /********************************************
     * KOD FÖR ATT HANTERA KNAPPTRYCKNINGAR
     ********************************************/
    const buttons = document.querySelectorAll('.btn-editor'); // Alla editor-knappar

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            // Ta bort 'active' från alla knappar
            buttons.forEach((btn) => btn.classList.remove('active'));

            // Lägg till 'active' på den knapp som klickades
            this.classList.add('active');

            // Visa den valda editorn baserat på knappen
            const target = this.getAttribute('data-target');
            document.getElementById('html-container').classList.add('hidden');
            document.getElementById('css-container').classList.add('hidden');
            document.getElementById('js-container').classList.add('hidden');

            if (target === 'html') {
                document.getElementById('html-container').classList.remove('hidden');
                htmlEditor.refresh();
            } else if (target === 'css') {
                document.getElementById('css-container').classList.remove('hidden');
                cssEditor.refresh();
            } else if (target === 'js') {
                document.getElementById('js-container').classList.remove('hidden');
                jsEditor.refresh();
            }
        });
    });

    /********************************************
     * KOD FÖR ATT RENSA ALLA EDITORER
     ********************************************/
    function clearCode() {
        htmlEditor.setValue('');
        cssEditor.setValue('');
        jsEditor.setValue('');
        updatePreview();
    }
    document.getElementById('clear-button').addEventListener('click', clearCode);

    /********************************************
     * KOD FÖR FORMATERING
     ********************************************/
    function formatCode() {
        // Formatera HTML med Prettier
        const formattedHTML = prettier.format(htmlEditor.getValue(), {
            parser: 'html',
            plugins: [prettierPlugins.html],
            printWidth: 80,
            tabWidth: 2,
            useTabs: false,
        });

        // Formatera CSS med Prettier
        const formattedCSS = prettier.format(cssEditor.getValue(), {
            parser: 'css',
            plugins: [prettierPlugins.css],
            printWidth: 80,
            tabWidth: 2,
            useTabs: false,
        });

        // Formatera JavaScript med Prettier
        const formattedJS = prettier.format(jsEditor.getValue(), {
            parser: 'babel',
            plugins: [prettierPlugins.babel],
            printWidth: 80,
            tabWidth: 2,
            useTabs: false,
        });

        // Uppdatera editorerna med formaterad kod
        htmlEditor.setValue(formattedHTML.trim());
        cssEditor.setValue(formattedCSS.trim());
        jsEditor.setValue(formattedJS.trim());
    }
    document.getElementById('format-button').addEventListener('click', formatCode);

    /*******************************************************
     * KOD FÖR ATT FÄLLA IHOP OCH EXPANDERA (Code Folding)
     *******************************************************/
    function toggleFoldAll(editors) {
        editors.forEach((editor) => {
            const isFolded = editor.getAllMarks().length > 0;
            editor.operation(() => {
                for (let i = 0; i < editor.lineCount(); i++) {
                    editor.foldCode(CodeMirror.Pos(i, 0), null, isFolded ? 'unfold' : 'fold');
                }
            });
        });
    }
    document.getElementById('collapse-button').addEventListener('click', () => {
        toggleFoldAll([htmlEditor, cssEditor, jsEditor]);
    });

    /********************************************
     * LOREM IPSUM-GENERATOR
     ********************************************/
    function generateLoremIpsum(wordCount) {
        const loremBase =
            'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        let words = loremBase.split(' ');
        let output = [];

        while (output.length < wordCount) {
            output = output.concat(words);
        }

        return output.slice(0, wordCount).join(' ');
    }
    // Lyssna på tangenttryckningar i alla editorer
    [htmlEditor, cssEditor, jsEditor].forEach((editor) => {
        editor.on('keydown', function (cm, event) {
            if (event.key === 'Enter') {
                let cursor = cm.getCursor();
                let line = cm.getLine(cursor.line);

                let match = line.match(/\blorem(\d+)\b/); // Matcha "loremXX"

                if (match) {
                    let wordCount = parseInt(match[1], 10);
                    let loremText = generateLoremIpsum(wordCount);

                    // Ersätt "loremXX" med genererad Lorem Ipsum-text
                    cm.replaceRange(
                        loremText,
                        { line: cursor.line, ch: match.index },
                        { line: cursor.line, ch: match.index + match[0].length }
                    );

                    event.preventDefault(); // Förhindra ny rad efter ersättning
                }
            }
        });
    });

    /********************************************
     * VÄXLING AV TEMAN FÖR ALLA EDITORER
     ********************************************/
    const themes = {
        dark: 'paraiso-dark',
        light: 'mdn-like',
    };
    // Hämta HTML-elementen
    const toggleBtn = document.getElementById('toggleTheme');
    const sunIcon = document.querySelector('.btn-toggle-sun');
    const moonIcon = document.querySelector('.btn-toggle-moon');

    // Hämta editorer
    const editors = [htmlEditor, cssEditor, jsEditor];

    function switchTheme() {
        const isDark = htmlEditor.getOption('theme') === themes.dark;

        // Växla temat för alla editorer
        editors.forEach((editor) => {
            editor.setOption('theme', isDark ? themes.light : themes.dark);
        });

        // Uppdatera ikon och bakgrund
        sunIcon.classList.toggle('active', !isDark);
        sunIcon.classList.toggle('inactive', isDark);
        moonIcon.classList.toggle('active', isDark);
        moonIcon.classList.toggle('inactive', !isDark);
        toggleBtn.style.backgroundColor = isDark ? '#333333' : '#ffffff';
    }
    toggleBtn.addEventListener('click', switchTheme); // Lägg till eventlyssnare

    /********************************************
     * FONTSTORLEKSÄNDRINGAR FÖR ALLA EDITORER
     ********************************************/
    function changeFontSize(increase) {
        const editors = [htmlEditor, cssEditor, jsEditor];

        editors.forEach((editor) => {
            const cmElement = editor.getWrapperElement();
            let currentSize = parseInt(window.getComputedStyle(cmElement).fontSize);
            let newSize = increase ? currentSize + 1 : currentSize - 1;

            cmElement.style.fontSize = newSize + 'px';
            editor.refresh(); // Uppdatera CodeMirror

            // Justera storlek på pilar och gutter
            const gutterWidth = Math.max(10, newSize); // Minsta bredd = 10px
            const foldGutterStyle = document.createElement('style');
            foldGutterStyle.innerHTML = `
            .CodeMirror-foldgutter {
                width: ${gutterWidth}px !important;
            }
            .CodeMirror-foldgutter-open::after {
                font-size: ${newSize - 1}px !important;
            }
            .CodeMirror-foldgutter-folded::after {
                font-size: ${newSize - 2}px !important;
            }
        `;

            // Rensa gammal stil och lägg till den nya
            document.head.querySelectorAll('style[data-fold-style]').forEach((el) => el.remove());
            foldGutterStyle.setAttribute('data-fold-style', 'true');
            document.head.appendChild(foldGutterStyle);
        });
    }
    document.getElementById('increaseFont').addEventListener('click', () => changeFontSize(true));
    document.getElementById('decreaseFont').addEventListener('click', () => changeFontSize(false));

    /********************************************
     * MUSDRAGNING FÖR RESIZER
     ********************************************/
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

        document.getElementById('editor-section').style.width = `${newWidth}px`;
        document.getElementById('preview-section').style.width = `${
            container.offsetWidth - newWidth - resizer.offsetWidth
        }px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.cursor = 'default';
    });

    /********************************************
     * FÖR ATT KOMMENTERA BORT KOD
     ********************************************/
    function enableToggleComment(editor) {
        editor.addKeyMap({
            'Ctrl-M': function (cm) {
                console.log("Ctrl + ' trycktes i CodeMirror!");
                cm.execCommand('toggleComment');
            },
            'Cmd-M': function (cm) {
                // För Mac
                cm.execCommand('toggleComment');
            },
        });
    }
    // Anropa för varje editor
    enableToggleComment(htmlEditor);
    enableToggleComment(cssEditor);
    enableToggleComment(jsEditor);

    /*************************************************
     * Uppdatera förhandsvisningen direkt vid start
     ************************************************/
    updatePreview();
});

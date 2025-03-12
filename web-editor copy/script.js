let htmlEditor, cssEditor, jsEditor;

let htmlValue = '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Test</title>\n</head>\n<body>\n<div class="content">\n<h1>Välkommen till min webbsida!</h1>\n<p>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta vel, est eveniet perferendis optio facere ut qui consequuntur nam excepturi provident ad consequatur assumenda commodi dolorum ducimus, ipsam illo corporis adipisci laborum.\n</p>\n</div>\n</body>\n</html>';

let cssValue =
    '/* Börja CSS koda här!*/ \nhtml, body{ background-image: url("./img/background.jpg");background-size: cover;background-position: center;background-attachment: fixed;overflow: hidden;}\n.content {padding: 0 150px;height: 100vh; }\nh1 {color: blue;}\n\n@media (max-width: 1024px) {.content { padding: 0 60px;} }\n@media (max-width: 600px) {.content { padding: 0 15px;} }';

let jsValue = '// Börja JavaScrip koda här!\nfunction hello() { \n\tconsole.log("Välkomna!"); \n}';

// VÄXLA MELLAN EDITORERNA
function switchEditor(editorType) {
    document.querySelectorAll('button').forEach((button) => {
        button.classList.remove('active');
    });

    document.querySelector(`button[data-editor="${editorType}"]`).classList.add('active');

    document.getElementById('htmlEditor').style.display = 'none';
    document.getElementById('cssEditor').style.display = 'none';
    document.getElementById('jsEditor').style.display = 'none';

    if (editorType === 'html') {
        document.getElementById('htmlEditor').style.display = 'block';
        htmlEditor.layout();
    } else if (editorType === 'css') {
        document.getElementById('cssEditor').style.display = 'block';
        cssEditor.layout();
    } else if (editorType === 'js') {
        document.getElementById('jsEditor').style.display = 'block';
        jsEditor.layout();
    }
}

// KÖR PÅ FÖRHANDVISNING
function runCode() {
    const htmlCode = htmlEditor.getValue();
    const cssCode = `<style>${cssEditor.getValue()}</style>`;
    const jsCode = `<script>
        try {
            ${jsEditor.getValue()}
        } catch (error) {
            console.error('Fel i JavaScript:', error);
        }
    <\/script>`;

    const outputFrame = document.getElementById('outputFrame');

    if (outputFrame.contentDocument) {
        outputFrame.contentDocument.open();
        outputFrame.contentDocument.write(htmlCode + cssCode + jsCode);
        outputFrame.contentDocument.close();

        const iframeDocument = outputFrame.contentDocument;
        const iframeBody = iframeDocument.body;

        iframeBody.style.margin = 0;
        iframeBody.style.padding = 0;
        iframeBody.style.overflow = 'auto'; 

        outputFrame.style.overflow = 'auto'; 

        if (iframeBody.scrollHeight > window.innerHeight || iframeBody.scrollWidth > window.innerWidth) {
            document.body.style.overflow = 'auto'; 
        } else {
            document.body.style.overflow = 'hidden'; 
        }
    }
    captureConsoleLogs();
}
function captureConsoleLogs() {
    const outputFrame = document.getElementById('outputFrame');
    if (outputFrame.contentWindow) {
        outputFrame.contentWindow.console.log = (msg) => parent.console.log('[Iframe log]:', msg);
    }
}

// KÖR PÅ BROWSER
let previewWindow = null; 
function runBrowser() {
    if (!previewWindow || previewWindow.closed) {
         previewWindow = window.open('', '_blank');
    }

    previewWindow.document.open();
    previewWindow.document.write(getFullCode());
    previewWindow.document.close();
}

// HÄMTAR HTML, CSS OCH JAVASCRIPT FRÅN EDITORERNA
function getFullCode() {
    const htmlCode = htmlEditor.getValue();
    const cssCode = `<style>${cssEditor.getValue()}</style>`; 
    const jsCode = `<script>
        try {
            ${jsEditor.getValue()}
        } catch (error) {
            console.error('Fel i JavaScript:', error);
        }
    <\/script>`;

    function extractTitleFromHTML(html) {
        const titleMatch = html.match(/<title>(.*?)<\/title>/);
        return titleMatch ? titleMatch[1] : 'Förhandsvisning';
    }

    const pageTitle = extractTitleFromHTML(htmlCode);

    return `
    <!DOCTYPE html>
    <html lang="sv">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${pageTitle}</title>
      <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
      ${cssCode}
      <style>
        body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        body {
            overflow-x: hidden; 
            overflow-y: auto; 
        }
    </style>
    </head>
    <body>
      ${htmlCode}
      ${jsCode}
    </body>
    </html>
  `;
}

// LIVE-UPPDATERING
function updatePreview() {
    if (previewWindow && !previewWindow.closed) {
        previewWindow.document.open();
        previewWindow.document.write(getFullCode());
        previewWindow.document.close();
    }
}

// RENSA KODEN
function clearCode(option) {
    htmlEditor.setValue('');
    cssEditor.setValue('');
    jsEditor.setValue('');
    const output = document.getElementById('outputFrame').contentWindow.document;
    output.open();
    output.write('');
    output.close();

    if (option === 'onAlert') showAlert('info', 'HTML CSS JS Editor', 'Koden har tagits bort från editorerna!');
}

// UPPDATERAR EDITORS FÖNSTRET STORLEK
function updateEditorSize() {
    const editorHeight = document.querySelector('.editors').offsetHeight;

    document.getElementById('htmlEditor').style.height = editorHeight + 'px';
    document.getElementById('cssEditor').style.height = editorHeight + 'px';
    document.getElementById('jsEditor').style.height = editorHeight + 'px';

    htmlEditor.layout();
    cssEditor.layout();
    jsEditor.layout();
}

// TEMA
const themes = {
    dark: 'vs-dark',
    light: 'vs-light',
};
let currentTheme = themes.dark;
const toggleBtn = document.getElementById('toggleTheme');
const sunIcon = document.querySelector('.btn-toggle-sun img');
const moonIcon = document.querySelector('.btn-toggle-moon img');

// FUNKTION UPPDATERAR TEMA-KNAPPEN
function updateToggleButton() {
    toggleBtn.style.backgroundColor = currentTheme === themes.dark ? '#ffffff' : '#333333';

    sunIcon.parentElement.classList.toggle('active', currentTheme === themes.dark);
    sunIcon.parentElement.classList.toggle('inactive', currentTheme === themes.light);
    moonIcon.parentElement.classList.toggle('active', currentTheme === themes.light);
    moonIcon.parentElement.classList.toggle('inactive', currentTheme === themes.dark);
}

// FUNKTION VÄXLAR TEMA
function switchTheme() {
    currentTheme = currentTheme === themes.dark ? themes.light : themes.dark;

    [htmlEditor, cssEditor, jsEditor].forEach((editor) => {
        editor.updateOptions({ theme: currentTheme });
    });

    updateToggleButton();
}

// ALERT-FUNKTION
function showAlert(type, title, message) {
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');
    const alertIcon = document.getElementById('alertIcon');
    const alertBox = document.getElementById('customAlert');
    const closeButton = document.getElementById('closeButton');

    // Välj ikon baserat på typen
    let iconSrc = '';
    closeButton.style.background = 'none';  
    switch (type) {
        case 'info':
            iconSrc = 'img/alert-info.png';
            closeButton.style.background = '#007bff';        
            break;
        case 'error':
            iconSrc = 'img/alert-error.png';
            closeButton.style.background = '#D60000'; 
            break;
        case 'warning':
            iconSrc = 'img/alert-warning.png';
            closeButton.style.background = '#FFD800'; 
            break;
        case 'success':
            iconSrc = 'img/alert-success.png';
            closeButton.style.background = '#40C057'; 
            break;
        default:
            iconSrc = 'img/alert-default.png';
            closeButton.style.background = '#5698C5';      
    }

    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.opacity = '0.8';
        closeButton.style.transform = 'scale(1.01)';
        closeButton.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.7)';
    });

    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.opacity = '1';
        closeButton.style.transform = 'scale(1)';
        closeButton.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
    });

    alertTitle.innerText = title;
    alertMessage.innerText = message;
    alertIcon.src = iconSrc;
    alertIcon.style.display = 'block';

    alertBox.style.display = 'flex';
}
function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

// DEFINIERAR VS-DARK OCH VS-LIGHT TEMA
function definesThemes () {
    monaco.editor.defineTheme('vs-light', {
        base: 'vs',
        inherit: true,
        rules: [
            { token: '', foreground: '000000', background: 'ffffff' },
            { token: 'comment', foreground: '119a0a' },
            { token: 'string', foreground: 'bf616a' },
            { token: 'keyword', foreground: '5e81ac' },
            { token: 'number', foreground: 'b48ead' },
            { token: 'function', foreground: 'd08770' },
            { token: 'tag', foreground: '0000ff', fontStyle: 'bold' },
            { token: 'attribute.name', foreground: '8fbcbb' },
            { token: 'attribute.value', foreground: 'a3be8c' },
        ],
        colors: {
            'editor.background': '#ffffff',
            'editor.foreground': '#000000',
            'editorCursor.foreground': '#d08770',
            'editor.lineHighlightBackground': '#e7eaf1',
            'editor.selectionBackground': '#d4e9ef',
            'editorLineNumber.foreground': '#000000',
            'editorGutter.background': '#e7eaf1',
        },
    });

    monaco.editor.defineTheme('vs-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'tag', fontStyle: 'bold' },
            { token: 'comment', foreground: '61ec59' },
        ],
        colors: {
            'editor.lineHighlightBackground': '#444',
            'editorLineNumber.foreground': '#FFFFFF',
            'editorGutter.background': '#444',
        },
    });
}

// STÄLLER IN TEXTSTORLEKAR FÖR OLIKA ENHETER
function getResponsiveFontSize() {
    if (window.innerWidth <= 600) return 10;
    if (window.innerWidth <= 1024) return 12;
    return 14;
}

// KONFIGURERAR EDITORER
function setupEditors() {
    htmlEditor = monaco.editor.create(document.getElementById('htmlEditor'), {
        value: '',
        language: 'html',
        theme: currentTheme,
        fontSize: getResponsiveFontSize(),
        tabSize: 2,
        insertSpaces: true,
        automaticLayout: true,
        formatOnType: true,
        formatOnPaste: true,
        wordWrap: 'on',
        folding: true,
        foldingStrategy: 'indentation',
        autoClosingTags: true,
        autoIndent: 'advanced',
        autoClosingBrackets: 'always',
        autoClosingQuotes: 'always',
        matchBrackets: 'always',
        suggestOnTriggerCharacters: true,
        scrollBeyondLastLine: false, // Förhindrar onödig vertikal scroll
        scrollbar: {
            vertical: 'auto', // Visar scrollbar bara om det behövs
            horizontal: 'auto', // Visar scrollbar bara om det behövs
        },
        minimap: { enabled: false },
    });

    cssEditor = monaco.editor.create(document.getElementById('cssEditor'), {
        value: '',
        language: 'css',
        theme: currentTheme,
        fontSize: getResponsiveFontSize(),
        autoClosingBrackets: 'always',
        autoClosingQuotes: 'always',
        matchBrackets: 'always',
        suggestOnTriggerCharacters: true,
        minimap: { enabled: false },
    });

    jsEditor = monaco.editor.create(document.getElementById('jsEditor'), {
        value: '',
        language: 'javascript',
        theme: currentTheme,
        fontSize: getResponsiveFontSize(),
        autoClosingBrackets: 'always',
        autoClosingQuotes: 'always',
        matchBrackets: 'always',
        suggestOnTriggerCharacters: true,
        minimap: { enabled: false },
    });

    document.getElementById('htmlEditor').style.display = 'block';
}

/***********************
 * DOMContentLoaded
 ***********************/
document.addEventListener('DOMContentLoaded', function () {

    require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' } });

    require(['vs/editor/editor.main'], function () {
        definesThemes();
        setupEditors();

        // HÄMTAR KODBLOCK FRÅN URL
        function getQueryParam(param) {
            return new URLSearchParams(window.location.search).get(param);
        }
        window.onload = () => {
            const codeId = getQueryParam('id') || sessionStorage.getItem('codeId');
            let exampleCode = sessionStorage.getItem('exampleCode') || '';

            if (codeId !== null) {
                console.log(`Laddar kodblock med ID: ${codeId}`);

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

                // Ladda koden ovan i editorerna
                htmlEditor.setValue(htmlCode);
                cssEditor.setValue(cssCode);
                jsEditor.setValue(jsCode);
            } else {
                htmlEditor.setValue(htmlValue);
                cssEditor.setValue(cssValue);
                jsEditor.setValue(jsValue);
            }

            // Uppdatera förhandsvisningen (iframe)
            formatHtmlEditor();
            formatCssEditor();
            formatJsEditor();
        };

        // LYSSNAR OM TEMA-KNAPPEN KLICKAS
        toggleBtn.addEventListener('click', switchTheme);

        // AKTIVERAR EMMET
        emmetMonaco.emmetHTML(monaco);
        emmetMonaco.emmetCSS(monaco);

        // LYSSNAR PÅ ÄNDRINGAR I ALLA TRE EDITORER OCH UPPDATERAR 'PREVIEW'
        htmlEditor.onDidChangeModelContent(updatePreview);
        cssEditor.onDidChangeModelContent(updatePreview);
        jsEditor.onDidChangeModelContent(updatePreview);

        let typingTimer;
        htmlEditor.onDidChangeModelContent(scheduleRunCode);
        cssEditor.onDidChangeModelContent(scheduleRunCode);
        jsEditor.onDidChangeModelContent(scheduleRunCode);
        function scheduleRunCode() {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(runCode, 500);
        }

        // LYSSNAR OM FÖNSTRET ÄNDRAR STORLEK
        window.addEventListener('resize', updateEditorSize);
        setTimeout(updateEditorSize, 100);

        function getCurrentFontSize() {
            return htmlEditor.getOption(monaco.editor.EditorOption.fontSize);
        }

        window.addEventListener('resize', () => {
            let responsiveFontSize = getResponsiveFontSize();
            htmlEditor.updateOptions({ fontSize: responsiveFontSize });
            updateIframeFontSize(responsiveFontSize);
        });

        // UPPDATERING AV IFRAME-TEXTSTORLEKEN
        function updateIframeFontSize(fontSize) {
            const iframe = document.getElementById('outputFrame');

            if (iframe.contentDocument) {
                const iframeBody = iframe.contentDocument.body;
                iframeBody.style.fontSize = fontSize + 'px';
            }
        }

        // EDITOR-TEXTSTORLEKEN ÄNDRAS
        function changeFontSize(delta) {
            let currentSize = getCurrentFontSize();
            let newSize = currentSize + delta;

            if (newSize < 8) newSize = 8;
            if (newSize > 30) newSize = 30;

            htmlEditor.updateOptions({ fontSize: newSize });
            cssEditor.updateOptions({ fontSize: newSize });
            jsEditor.updateOptions({ fontSize: newSize });

            updateIframeFontSize(newSize + 1);
        }

        document.getElementById('increaseFont').addEventListener('click', () => changeFontSize(1));
        document.getElementById('decreaseFont').addEventListener('click', () => changeFontSize(-1));
        document.getElementById('outputFrame').addEventListener('load', () => {
            updateIframeFontSize(getCurrentFontSize());
        });

        // RESIZER - justerar både editor och preview storleken på bredden
        const resizer = document.getElementById('resizer');
        const editors = document.getElementById('editors');
        const outputFrame = document.getElementById('outputFrame');
        const container = document.getElementById('editor-container');
        let isDragging = false;

        resizer.addEventListener('mousedown', function (event) {
            isDragging = true;
            document.body.style.cursor = 'col-resize';

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', stopDragging);
        });

        function onMouseMove(event) {
            if (!isDragging) return;

            let containerRect = container.getBoundingClientRect();
            let newWidth = event.clientX - containerRect.left;
            newWidth = Math.max(200, Math.min(containerRect.width - 150, newWidth));

            editors.style.width = `${newWidth}px`;
            outputFrame.style.width = `${containerRect.width - newWidth - resizer.offsetWidth}px`;

            monaco.editor.getModels().forEach((model) => model._associatedEditor?.layout());
        }
        function stopDragging() {
            isDragging = false;
            document.body.style.cursor = 'default';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', stopDragging);
        }

        // FORMATERA KODEN
        function formatHtmlEditor() {
            let position = htmlEditor.getPosition();
            htmlEditor
                .getAction('editor.action.formatDocument')
                .run()
                .then(() => {
                    let content = htmlEditor.getValue();

                    let lines = content.split('\n');
                    let cleanedLines = [];
                    let previousLine = '';

                    for (let i = 0; i < lines.length; i++) {
                        let line = lines[i].trim();
                        if (
                            previousLine === '<html>' ||
                            previousLine === '<head>' ||
                            previousLine === '</head>' ||
                            previousLine === '</body>'
                        ) {
                            if (line === '') continue;
                        }

                        cleanedLines.push(lines[i]);
                        previousLine = line;
                    }

                    htmlEditor.setValue(cleanedLines.join('\n'));

                    setTimeout(() => {
                        try {
                            if (htmlEditor) {
                                emmetMonaco.emmetHTML(monaco);
                            }
                        } catch (error) {
                            console.error('Emmet reload error:', error);
                        }
                    }, 100);

                    htmlEditor.setPosition(position);
                    htmlEditor.focus();
                });
        }

        function formatCssEditor() {
            cssEditor.getAction('editor.action.formatDocument').run();
        }

        function formatJsEditor() {
            jsEditor.getAction('editor.action.formatDocument').run();
        }

        document.getElementById('cssEditor').addEventListener('click', formatCssEditor);
        document.getElementById('jsEditor').addEventListener('click', formatJsEditor);
        document.getElementById('format-button').addEventListener('click', function () {
            formatHtmlEditor();
            formatCssEditor();
            formatJsEditor();
        });

        // MENY för att skapa, öppna och spara fil
        const menuButton = document.getElementById('menuButton');
        const popupMenu = document.getElementById('popupMenu');
        const closeMenu = document.getElementById('closeMenu');

        menuButton.addEventListener('click', function (event) {
            event.stopPropagation();
            popupMenu.classList.toggle('show');
        });

        closeMenu.addEventListener('click', function () {
            popupMenu.classList.remove('show');
        });

        document.addEventListener('click', function (event) {
            if (!popupMenu.contains(event.target) && event.target !== menuButton) {
                popupMenu.classList.remove('show');
            }
        });

        document.getElementById('newFile').addEventListener('click', function () {
            showFilePrompt('create');
        });

        document.getElementById('saveFile').addEventListener('click', function () {
            showFilePrompt('save');
        });

        document.getElementById('openFile').addEventListener('click', function () {
            openFile();
        });

        // SKAPA PROMPT DYNAMISKT för att spara och skapa fil
        function showFilePrompt(actionType) {
            let overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0, 0, 0, 0.4)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '1000';

            let modalBox = document.createElement('div');
            modalBox.style.background = 'white';
            modalBox.style.padding = '20px';
            modalBox.style.borderRadius = '8px';
            modalBox.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            modalBox.style.textAlign = 'center';
            modalBox.style.animation = 'fadeIn 0.3s ease-in-out';

            let imgElement = document.createElement('img');
            imgElement.src = actionType === 'create' ? 'img/new.png' : 'img/save.png';
            imgElement.alt = 'Bildbeskrivning';
            imgElement.width = 25;
            imgElement.height = 25;

            let title = document.createElement('h2');
            title.innerText = actionType === 'create' ? 'Välj filtyp' : 'Spara fil som';
            title.style.margin = '0';

            let titleContainer = document.createElement('div');
            titleContainer.style.display = 'flex';
            titleContainer.style.alignItems = 'center';
            titleContainer.style.justifyContent = 'center';
            titleContainer.style.width = '100%';
            titleContainer.style.gap = '10px';
            titleContainer.style.borderBottom = '1px solid grey';
            titleContainer.style.marginBottom = '15px';

            // Lägg till elementen i containern
            titleContainer.appendChild(imgElement);
            titleContainer.appendChild(title);

            let fileNameInput;
            if (actionType === 'save') {
                fileNameInput = document.createElement('input');
                fileNameInput.type = 'text';
                fileNameInput.placeholder = 'Ange endast filens namn...';
                fileNameInput.style.padding = '8px';
                fileNameInput.style.marginBottom = '10px';
                fileNameInput.style.width = '80%';
                fileNameInput.style.border = '1px solid #ccc';
                fileNameInput.style.borderRadius = '5px';
                fileNameInput.style.textAlign = 'center';

                fileNameInput.addEventListener('focus', function () {
                    this.placeholder = '';
                });
                fileNameInput.addEventListener('blur', function () {
                    if (this.value.trim() === '') this.placeholder = 'Ange endast filens namn...';
                });
                fileNameInput.addEventListener('mouseenter', () => {
                    fileNameInput.style.border = '2px solid #000';
                });
                fileNameInput.addEventListener('mouseleave', () => {
                    fileNameInput.style.border = '1px solid #ccc';
                });

                modalBox.appendChild(fileNameInput);
                modalBox.appendChild(document.createElement('br'));
            }

            let buttons = ['html', 'css', 'js'].map((type) => {
                let btn = document.createElement('button');
                btn.innerText = type.toUpperCase();
                btn.style.margin = '5px';
                btn.style.width = '70px';
                btn.style.border = 'none';
                btn.style.borderRadius = '5px';
                btn.style.cursor = 'pointer';
                btn.style.fontSize = '16px';
                btn.style.color = 'white';
                btn.style.transition = 'all 0.2s ease-in-out';

                btn.style.background = type === 'html' ? '#E34F26' : type === 'css' ? '#1572B6' : '#F7DF1E';
                btn.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)'; // Liten skugga

                btn.addEventListener('mouseenter', () => {
                    btn.style.opacity = '0.8';
                    btn.style.transform = 'scale(1.05)';
                    btn.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.7)';
                });

                btn.addEventListener('mouseleave', () => {
                    btn.style.opacity = '1';
                    btn.style.transform = 'scale(1)';
                    btn.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
                });

                btn.onclick = () => {
                    if (actionType === 'create') {
                        createFile(type);
                    } else if (actionType === 'save') {
                        if (!fileNameInput.value.trim()) {
                            showAlert('info', 'För att spara', 'ANGE filens namn i textfältet!');

                            document.getElementById('closeButton').addEventListener('click', function () {
                                setTimeout(() => {
                                    fileNameInput.focus();
                                }, 0);
                            });
                            return;
                        }
                        saveFile(type, fileNameInput.value);
                    }
                    document.body.removeChild(overlay);
                };
                return btn;
            });

            let cancelButton = document.createElement('button');
            cancelButton.innerText = 'Avbryt';
            cancelButton.style.marginTop = '15px';
            cancelButton.style.width = '70px';
            cancelButton.style.border = 'none';
            cancelButton.style.borderRadius = '5px';
            cancelButton.style.cursor = 'pointer';
            cancelButton.style.fontSize = '16px';
            cancelButton.style.background = '#555';
            cancelButton.style.color = 'white';
            cancelButton.style.transition = 'all 0.2s ease-in-out';
            cancelButton.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';

            cancelButton.addEventListener('mouseenter', () => {
                cancelButton.style.opacity = '0.7';
                cancelButton.style.transform = 'scale(1.05)';
                cancelButton.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.8)';
            });

            cancelButton.addEventListener('mouseleave', () => {
                cancelButton.style.opacity = '1';
                cancelButton.style.transform = 'scale(1)';
                cancelButton.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
            });

            cancelButton.onclick = () => document.body.removeChild(overlay);

            modalBox.appendChild(titleContainer);
            buttons.forEach((btn) => modalBox.appendChild(btn));
            modalBox.appendChild(document.createElement('br'));
            modalBox.appendChild(cancelButton);

            overlay.appendChild(modalBox);
            document.body.appendChild(overlay);
        }

        function createFile(fileType) {
            popupMenu.classList.remove('show');
            clearCode('offAlert');
            if (fileType === 'html') {
                switchEditor('html');
                htmlEditor.setValue(
                    '<!DOCTYPE html>\n<html>\n<head>\n<title>Ny Fil</title>\n</head>\n<body>\n\n</body>\n</html>'
                );
            } else if (fileType === 'css') {
                switchEditor('css');
                cssEditor.setValue('/* Ny CSS-fil */');
            } else if (fileType === 'js') {
                switchEditor('js');
                jsEditor.setValue('// Ny JavaScript-fil');
            }
        }

        function saveFile(fileType, fileName) {
            let content = '';
            if (fileType === 'html') {
                content = htmlEditor.getValue();
            } else if (fileType === 'css') {
                content = cssEditor.getValue();
            } else if (fileType === 'js') {
                content = jsEditor.getValue();
            }

            if (!fileName.trim()) {
                fileName = 'download';
            }
            const blob = new Blob([content], { type: 'text/plain' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = fileName + '.' + fileType;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

        function openFile() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.html, .css, .js';
            input.addEventListener('change', function (event) {
                const file = event.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function (e) {
                    const content = e.target.result;
                    if (file.name.endsWith('.html')) {
                        htmlEditor.setValue(content);
                        popupMenu.classList.remove('show');
                    } else if (file.name.endsWith('.css')) {
                        cssEditor.setValue(content);
                        popupMenu.classList.remove('show');
                    } else if (file.name.endsWith('.js')) {
                        jsEditor.setValue(content);
                        popupMenu.classList.remove('show');
                    } else {
                        showAlert('Öppna fil', 'Endast .html, .css och .js filer stöds!');
                    }
                };
                reader.readAsText(file);
            });
            input.click();
        }

        // TOOLTIP
        document.querySelectorAll('.btn , .img-logo').forEach((button) => {
            let tooltip;

            button.addEventListener('mouseenter', function () {
                if (tooltip) tooltip.remove();

                tooltip = document.createElement('div');
                tooltip.className = 'custom-tooltip';
                tooltip.innerText = this.getAttribute('data-title');
                document.body.appendChild(tooltip);

                let rect = this.getBoundingClientRect();
                tooltip.style.left = `${rect.right + window.scrollX + 2}px`;
                tooltip.style.top = `${rect.top + window.scrollY + rect.height / 2 - tooltip.offsetHeight / 2}px`;

                setTimeout(() => {
                    tooltip.remove();
                }, 1500);
            });

            button.addEventListener('mouseleave', function () {
                if (tooltip) tooltip.remove();
            });
        });

        // ALERT RUTA FÖR WEBB INFO
        const buttonInfo = document.getElementById('buttonInfo');
        const popupInfo = document.getElementById('popupInfo');
        const buttonClose = document.getElementById('buttonClose');

        buttonInfo.addEventListener('click', function () {
            popupInfo.style.display = 'flex';
        });

        buttonClose.addEventListener('click', function () {
            popupInfo.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target === popupInfo) {
                popupInfo.style.display = 'none';
            }
        });
    });
});


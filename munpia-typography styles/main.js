const { Plugin } = require('obsidian');

class CustomTypographyPlugin extends Plugin {
    async onload() {
        console.log('Loading Custom Typography Plugin');
        this.loadStyles();
    }

    onunload() {
        console.log('Unloading Custom Typography Plugin');
    }

    loadStyles() {
        const css = `
            .markdown-preview-view {
                width: 115mm;
                height: 175mm;
                margin: 5mm 14mm 5mm 14mm;
                padding-top: 15mm;
                padding-bottom: 14.2mm;
            }

            .markdown-preview-view h1 {
                font-family: 'Georgia', serif;
                font-size: 2em;
                font-weight: bold;
            }

            .markdown-preview-view p {
                font-family: 'Arial', sans-serif;
                font-size: 1em;
                line-height: 1.6;
            }

            .markdown-preview-view blockquote {
                font-family: 'Times New Roman', serif;
                font-style: italic;
                margin-left: 20px;
                padding-left: 10px;
                border-left: 2px solid #ccc;
            }
        `;

        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }
}

module.exports = CustomTypographyPlugin;

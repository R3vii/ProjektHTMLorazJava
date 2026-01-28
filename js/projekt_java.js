const App = {

    init() {
        this.justifier = new TextJustifier();

        this.cache();
        this.bind();
        this.process();
    },

    cache() {
        this.text = document.getElementById('text-input');
        this.output = document.getElementById('text-output');

        this.widthSlider = document.getElementById('width-slider');
        this.widthValue = document.getElementById('width-value');

        this.hyphen = document.getElementById('hyphenate-toggle');
        this.justify = document.getElementById('justify-toggle');

        this.wordCount = document.getElementById('word-count');
        this.lineCount = document.getElementById('line-count');
        this.hyphenCount = document.getElementById('hyphen-count');

        this.processBtn = document.getElementById('process-btn');
        this.resetBtn = document.getElementById('reset-btn');
    },

    bind() {
        this.processBtn.onclick = () => this.process();

        this.resetBtn.onclick = () => {
            this.widthSlider.value = 500;
            this.widthValue.textContent = 500;
            this.hyphen.checked = true;
            this.justify.checked = true;
            this.process();
        };

        this.widthSlider.oninput = e => {
            this.widthValue.textContent = e.target.value;
            this.process();
        };
    },

    process() {
        const result = this.justifier.justify(this.text.value, {
            width: Number(this.widthSlider.value),
            justify: this.justify.checked,
            hyphenate: this.hyphen.checked
        });

        this.output.innerHTML = result;

        const stats = this.justifier.getStats(result);
        this.wordCount.textContent = stats.words;
        this.lineCount.textContent = stats.lines;
        this.hyphenCount.textContent = stats.hyphens;
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());

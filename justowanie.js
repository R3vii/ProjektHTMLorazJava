
// Klasa odpowiedzialna za łamanie i justowanie tekstu

class TextJustifier {

    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = '16px Arial';
    }

    measure(text) {
        return this.ctx.measureText(text).width;
    }

    justify(text, options) {
        const width = options.width;
        const justify = options.justify;
        const hyphenate = options.hyphenate;

        const paragraphs = text.split(/\n+/);
        const result = [];

        paragraphs.forEach(p => {
            const words = p.split(/\s+/);
            let lines = [];
            let current = [];

            words.forEach(word => {
                const test = [...current, word].join(' ');
                if (this.measure(test) <= width) {
                    current.push(word);
                } else {
                    if (hyphenate && this.measure(word) > width) {
                        const parts = this.breakWord(word, width);
                        parts.forEach(part => {
                            if (this.measure([...current, part].join(' ')) <= width) {
                                current.push(part);
                            } else {
                                lines.push(this.formatLine(current, width, justify));
                                current = [part];
                            }
                        });
                    } else {
                        lines.push(this.formatLine(current, width, justify));
                        current = [word];
                    }
                }
            });

            if (current.length) {
                lines.push(current.join(' '));
            }

            result.push(lines.join('<br>'));
        });

        return result.join('<br><br>');
    }

    formatLine(words, width, justify) {
        if (!justify || words.length < 2) {
            return words.join(' ');
        }

        const textWidth = this.measure(words.join(' '));
        const spaceCount = words.length - 1;
        const extra = width - textWidth;
        const space = extra / spaceCount;

        return words.map((w, i) => {
            if (i === words.length - 1) return w;
            return w + `<span style="display:inline-block;width:${space}px"></span>`;
        }).join('');
    }

    breakWord(word, width) {
        const parts = [];
        let buffer = '';

        for (let char of word) {
            buffer += char;
            if (this.measure(buffer + '-') > width) {
                parts.push(buffer.slice(0, -1) + '-');
                buffer = char;
            }
        }

        if (buffer) parts.push(buffer);
        return parts;
    }

getStats(html) {
    // zamiana br na znaki nowej linii
    let text = html.replace(/<br\s*\/?>/gi, '\n');

    // usuwa spany ale zostawia spacje
    text = text.replace(/<span[^>]*><\/span>/g, ' ');

    // usuwa pozostałe tagi
    text = text.replace(/<[^>]+>/g, '');

    const words = text.trim().split(/\s+/).filter(Boolean);
    const lines = text.split('\n').filter(l => l.trim().length > 0);
    const hyphens = (text.match(/-/g) || []).length;

    return {
        words: words.length,
        lines: lines.length,
        hyphens
    };
}

}

window.TextJustifier = TextJustifier;

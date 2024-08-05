// Code Formatter Utility
class CodeFormatter {
    constructor() {
        this.indentSize = 2;
    }
    formatFunction(funcStr) {
        return funcStr.replace(/\{\s*\n/g, '{\n  ').replace(/\n\s*\}/g, '\n}');
    }
}
window.CodeFormatter = CodeFormatter;

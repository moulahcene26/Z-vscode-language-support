const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // This function is called when your extension is activated
    console.log('Z Language Support extension is now active!');
}

function deactivate() {
    // This function is called when your extension is deactivated
}

module.exports = {
    activate,
    deactivate
};
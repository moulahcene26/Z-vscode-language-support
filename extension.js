const vscode = require('vscode');

function activate(context) {
  // No need to change icon theme - file associations in package.json handle this
}

vscode.window.showInformationMessage(
    'Z Language Support updated! Check out the new features!',
    'Learn More'
 ).then(selection => {
    if (selection === 'Learn More') {
       vscode.env.openExternal(vscode.Uri.parse('https://github.com/moulahcene26/Z-vscode-language-support/releases'));
    }
 });
 
exports.activate = activate;

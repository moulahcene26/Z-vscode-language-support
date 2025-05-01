const vscode = require('vscode');

function activate(context) {
  const config = vscode.workspace.getConfiguration('workbench');
  const currentTheme = config.get('iconTheme');

  if (currentTheme !== 'zlang-icons') {
    vscode.window.showInformationMessage(
      'Enable Z icon theme for .alg files?',
      'Enable'
    ).then(selection => {
      if (selection === 'Enable') {
        config.update('iconTheme', 'zlang-icons', true);
      }
    });
  }
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

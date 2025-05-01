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

exports.activate = activate;

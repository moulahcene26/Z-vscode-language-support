const vscode = require('vscode');

function activate(context) {
    console.log('Z Language Support extension is now active!');

    const keywords = [
        'SOIT', 'SOIENT', 'LET', 'UN', 'UNE', 'DES', 'SI', 'IF', 'TANTQUE', 'TQ', 'WHILE', 'WH', 'POUR', 'FOR', 'DEBUT',
        'BEGIN', 'FSI', 'ENDIF', 'FTQ', 'ENDWHILE', 'EWH', 'FINPOUR', 'FPOUR', 'ENDFOR', 'EFOR', 'FIN', 'END', 'SINON',
        'ELSE', 'CALL', 'APPEL', 'STRUCTURE', 'STRUCTURES', 'POINTER', 'VERS', 'TO', 'POINTEUR',
        'ARRAY', 'ARRAYS', 'TABLEAU', 'TABLEAUX', 'LIST', 'LISTS', 'LISTE', 'LISTES', 'BILIST',
        'QUEUE', 'QUEUES', 'FILE', 'FILES', 'STACK', 'STACKS', 'PILE', 'PILES', 'VECTEUR', 'VECTEURS',
        'BST', 'MST', 'ARB', 'HEADER', 'BUFFER', 'DYNAMIC', 'OF', 'DE',
        'INTEGER', 'INTEGERS', 'ENTIER', 'ENTIERS', 'BOOLEAN', 'BOOLEANS', 'BOOLEEN', 'BOOLEENS',
        'CHAR', 'CHARACTER', 'CHARACTERS', 'CAR', 'STRING', 'STRINGS', 'CHAINE', 'CHAINES',
        'TRUE', 'FALSE', 'VRAI', 'FAUX', 'NULL', 'NIL',
        'AND', 'OR', 'NOT', 'ET', 'OU', 'NON',
        'MOD', 'MAX', 'MIN', 'EXP', 'RANDNUMBER', 'RANDSTRING', 'ALEANUMBER', 'ALEACHAINE',
        'ALEANOMBRE', 'ALEAENTIER', 'CARACT', 'LONGCHAINE', 'LENTHSTRING', 'STRINGLENGTH', 'HAUTEUR', 'HEIGHT',
        'ACTION', 'ACTIONS', 'FUNCTION', 'FUNCTIONS', 'FONCTION', 'FONCTIONS',
        'ADD', 'RAJOUTER', 'ALLOCATE_CELL', 'ALLOCATE_NODE', 'ALLOC_ARRAY', 'ALLOC_BLOCK',
        'ALLOC_STRUCT', 'FREE', 'LIBERER', 'FREE_ARRAY', 'LIBER_TAB', 'FREE_NODE', 'LIBERERNOEUD',
        'FREE_STRUCT', 'LIBER_STRUCT', 'CELL_VALUE', 'VALUE', 'VALEUR', 'NEXT', 'SUIVANT', 'PREVIOUS',
        'PRECEDENT', 'ASS_ADR', 'AFF_ADR', 'ASS_VAL', 'AFF_VAL', 'ASS_L_ADR', 'AFF_ADRG', 'ASS_R_ADR',
        'AFF_ADRD', 'PUSH', 'EMPILER', 'POP', 'DEPILER', 'EMPTY_STACK', 'PILEVIDE', 'CREATESTACK', 'CREERPILE',
        'ENQUEUE', 'ENFILER', 'DEQUEUE', 'DEFILER', 'EMPTY_QUEUE', 'FILEVIDE', 'CREATEQUEUE',
        'LC', 'FG', 'RC', 'FD', 'PARENT', 'PERE', 'NODE_VALUE', 'INFO', 'ASS_LC', 'AFF_FG',
        'ASS_RC', 'AFF_FD', 'ASS_PARENT', 'AFF_PERE', 'ASS_NODE_VAL', 'AFF_INFO', 'CHILD', 'FILS',
        'NODE_VALUE_MST', 'INFOR', 'ASS_CHILD', 'AFF_FILS', 'ASS_NODE_VAL_MST', 'AFF_INFOR', 'DEGREE', 'DEGRE',
        'ASS_DEGREE', 'AFF_DEGRE', 'AFF_PARENT', 'ELEMENT', 'ASS_ELEMENT', 'AFF_ELEMENT', 'STRUCT',
        'ASS_STRUCT', 'AFF_STRUCT', 'OPEN', 'OUVRIR', 'CLOSE', 'FERMER', 'READSEQ', 'LIRESEQ', 'WRITESEQ',
        'ECRIRESEQ', 'READDIR', 'LIREDIR', 'WRITEDIR', 'ECRIREDIR', 'ENDFILE', 'FINFICH', 'ALLOC_BLOC',
        'ASS_HEADER', 'AFF_ENTETE', 'HEADSEQ', 'CREATE_LIST', 'CREATE_BILIST', 'CREATE_STACK', 'CREATE_QUEUE',
        'CREER_QUEUE', 'CREATE_BST', 'CREATE_MST', 'CREATE_FILE', 'CREATE_ARB', 'CREATE_ARM',
        'CREATE_PILE', 'INIT_STRUCT', 'INIT_ARRAY', 'INIT_VECT', 'CREATE-LISTE', 'CREER_LISTE',
        'CREER_LISTEBI', 'CREER_ARB', 'CREER_ARM', 'CREER_PILE', 'CREERFILE', 'INIT_TAB', 'ALLOCATE',
        'ALLOUER', 'CREERNOEUD', 'createlist', 'FREE_TREE', 'FREE_LIST', 'FREE_STACK', 'APPEND',
        'GEN_BST', 'LIST_INORDER', 'VERIF_BST', 'RESETVISITED', 'COPYBST', 'PRINTGIVENLEVELDG',
        'PRINTGIVENLEVELGD', 'DELETEGIVENLEVELDG', 'DELETEGIVENLEVELGD', 'NODES_LIST_LR', 'NODES_LIST_RL',
        'COMPARE_LISTS', 'TOP1', 'READ', 'WRITE', 'LIRE', 'ECRIRE'
    ];

    const completionItems = keywords.map(keyword => {
        const item = new vscode.CompletionItem(keyword.toLowerCase(), vscode.CompletionItemKind.Keyword);
        item.insertText = keyword.toLowerCase();
        item.filterText = keyword.toLowerCase();
        item.documentation = keyword;
        return item;
    });

    const provider = vscode.languages.registerCompletionItemProvider('zlang', {
        provideCompletionItems(document, position) {
            return completionItems;
        }
    });

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};

// CreateFolderButton.js

export function createFolder(folderName) {

    ipcRenderer.send('create-folder', folderName);

    ipcRenderer.on('folder-created', (event, response) => {
        if (response.success) {
            console.log('Dossier créé avec succès !');
        } else {
            console.error('Erreur lors de la création du dossier :', response.error);
        }
    });
}

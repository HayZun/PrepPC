import { useState } from 'react'
import { createFolder } from "Utilities/CreateFolderButton"
import '../App.css'

function App() {

  // Utilisez useState pour créer un état pour stocker la valeur de l'input
  const [folderName, setFolderName] = useState('');

  // Fonction pour mettre à jour l'état de l'input lorsque la valeur change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
    console.log(e.target.value);
  };
  // Fonction pour créer le dossier avec le nom saisi
  const handleCreateFolder = () => {
    // Vérifiez d'abord si le nom du dossier est vide
    if (folderName.trim() === '') {
      alert('Please enter a folder name.'); // Affichez une alerte si le champ est vide
      return;
    }

    createFolder(folderName); // Appelez la fonction createFolder avec le nom du dossier
  };

  return (
    <>
      <h1>Create Folder</h1>
      <p>Enter the name of the folder you want to create.</p>
      <br />
      <input type="text" placeholder="Enter Folder Name" value={folderName} onChange={handleInputChange} />
      <button onClick={handleCreateFolder}>Create Folder</button>

      <p id="message"></p>

    </>
  )
}

export default App

import { helloWorld } from './hello-world';
import { startServer } from './server'; // Importez le serveur
import { getSystemInfo } from './sysinfo'; // Importez la fonction getSystemInfo

const greet = helloWorld();
console.log(greet);

startServer(); // Démarrage du serveur

// Utilisation de la fonction getSystemInfo
getSystemInfo()
  .then((systemInfo) => {
    console.log(systemInfo); // Afficher les informations système dans la console
  })
  .catch((error) => {
    console.error('Une erreur s\'est produite :', error);
  });
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  deferredPrompt = event;

  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
console.log('clicked');
  deferredPrompt.prompt();

  deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  deferredPrompt = null;
});

const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const backgroundMusic = document.getElementById('background-music');

function startAdventure() {
  startScreen.classList.add('hidden');
  setTimeout(() => {
    startScreen.style.display = 'none';
    mainContent.style.display = 'block';
    backgroundMusic.muted = false;
    backgroundMusic.play().catch(err => console.warn("Music play blocked:", err));
  }, 1000);
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
  window.addEventListener('load', () => {
    startScreen.classList.add('hidden');
    setTimeout(() => {
      startScreen.style.display = 'none';
      mainContent.style.display = 'block';
      backgroundMusic.muted = false;
      backgroundMusic.play().catch(err => console.warn("Music play blocked:", err));
    }, 500);
  });
} else {
  startScreen.addEventListener('click', startAdventure);
}

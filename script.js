const cardlist = document.getElementById('cardlist');
const total = 7;
const cards = [];
let currentIndex = 0;
const angleStep = 360 / total;
const themeToggle = document.getElementById('theme-toggle');
const answered = new Array(total).fill(null);

function disableButtons() {
    document.getElementById('iknow').disabled = true;
    document.getElementById('dontknow').disabled = true;
}
function enableButtons() {
    document.getElementById('iknow').disabled = false;
    document.getElementById('dontknow').disabled = false;
}


const max = 7;

function updateProgress() {
  const progressBar = document.getElementById('progressBar');
    const progressN = document.getElementById('progressN');
    const knownCount = answered.filter(a => a === "know"). length;
    const percent = (answered.filter(a => a !== null).length / max) * 100
    
    progressBar.style.width = percent + '%';
    progressN.textContent = 'Card' + ' ' + (currentIndex + 1) + ' ' + 'of' + ' ' + '7' ;
}
function updateButtonState() {
    const knowBtn = document.getElementById('iknow');
    const dontKnowBtn = document.getElementById('dontknow');

    const value = answered[currentIndex];
    if (value === "know") {
        knowBtn.disabled = true;
        dontKnowBtn.disabled = false;
    } else if (value === "dontknow") {
        knowBtn.disabled = false;
        dontKnowBtn.disabled = true;
    } else {
        knowBtn.disabled = false;
        dontKnowBtn.disabled = false;
    }
}

function increaseprogress(){
    
    if (answered[currentIndex] !== "know") {
        answered[currentIndex] = "know";
        updateProgress();
        updateButtonState();}
        else {
          console.log(`card ${currentIndex + 1} already marked KNOW`);
        }
}
function decreaseprogress(){
    if (answered[currentIndex] !== "dontknow") {
    answered[currentIndex] = "dontknow"
    updateProgress();
    updateButtonState();}
    else {
        console.log(`Card ${currentIndex + 1} already marked DON'T KNOW`);}
    
}


function toggleTheme() {
  if (themeToggle.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

const savedtherme = localStorage.getItem('theme');
if (savedtherme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.checked = true;
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.checked = false;
}
themeToggle.addEventListener('change', toggleTheme);

document.getElementById('iknow').addEventListener('click', () => {
  increaseprogress();
  updateButtonState();
});

document.getElementById('dontknow').addEventListener('click', () => {
  decreaseprogress();
  updateButtonState();
});


window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < total; i++) {
    const card = document.createElement('div');
    card.className = 'card';

    const inner = document.createElement('div');
    inner.className = 'inner';

    const front = document.createElement('div');
    front.className = 'front';
    front.textContent = `Question ${i + 1}`;

    const back = document.createElement('div');
    back.className = 'back';
    back.textContent = `Answer ${i + 1}`;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    cardlist.appendChild(card);
    cards.push(card);

    card.addEventListener('click', () => {
      if (i !== currentIndex) {
        rotateTo(i);
      } else {
        card.classList.toggle('flipped');
      }
    });
  }

  function rotateTo(index) {
    currentIndex = index;
    updateCardPositions();
    updateButtonState();
    updateProgress();
  }

  function updateCardPositions() {
    const radius = 300;

    cards.forEach((card, i) => {
      const diff = i - currentIndex;
      const angle = diff * angleStep;
      const rad = (angle * Math.PI) / 180;
      const x = Math.sin(rad) * radius;
      const z = Math.cos(rad) * radius;
      const scale = i === currentIndex ? 1 : 0.8;
      const blur = i === currentIndex ? 'none' : 'blur(3px)';
      const opacity = i === currentIndex ? 1 : 0.6;

      card.style.transform = `
        translateX(${x}px)
        translateZ(${z}px)
        scale(${scale})
      `;
      card.style.zIndex = i === currentIndex ? 100 : 100 - Math.abs(diff);
      card.style.filter = blur;
      card.style.opacity = opacity;

      if (i !== currentIndex) {
        card.classList.remove('flipped');
      }
    });
  }


  updateCardPositions();
});

const envelope = document.getElementById('envelope');
const heartContainer = document.getElementById('heartContainer');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = `
        <svg viewBox="0 0 32 29.6" width="32" height="29.6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="currentColor" d="M23.6,0c-2.9,0-5.4,1.7-6.6,4.2C15.8,1.7,13.2,0,10.4,0C4.7,0,0,4.7,0,10.4
                c0,6.1,5.5,11,13.8,17.3l1.1,0.9l1.1-0.9C26.5,21.4,32,16.5,32,10.4C32,4.7,27.3,0,21.6,0H23.6z"/>
        </svg>
    `;

    const envelopeRect = envelope.getBoundingClientRect();
    const x = envelopeRect.left + envelopeRect.width * (0.2 + Math.random() * 0.6);
    const y = envelopeRect.top + envelopeRect.height * (0.3 + Math.random() * 0.3);

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.transform = `translate(-50%, -50%) scale(${0.7 + Math.random() * 0.6})`;

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1200);
}

function makeHearts() {
    for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 100);
    }
}

envelope.addEventListener('click', () => {
    const opened = envelope.classList.toggle('open');
    if (opened) {
        makeHearts();
    }
});
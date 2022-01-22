const detectBtn = document.getElementById('detect-btn');
const crossBtn = document.getElementById('cross-icon');
const popBox = document.getElementById('popup');
const icons = document.getElementById('icon');
const browserName = document.getElementById('browser-name');
const browserVersion = document.getElementById('browser-version');
const { userAgent } = navigator;

detectBtn.addEventListener('click', () => {
    popBox.style.display = 'flex';
    popBox.style.opacity = '1';
})
crossBtn.addEventListener('click', () => {
    popBox.style.display = 'none';
    popBox.style.opacity = '0';
})

if (userAgent.includes('Firefox/')) {
    browserName.innerHTML = `Mozila Firefox`;
    browserVersion.innerHTML = (`Firefox Version ${userAgent.split('Firefox/')[1]}`)
    icons.style.backgroundPosition = '-300px 0'
    // Firefox
} else if (userAgent.includes('Edg/')) {
    browserVersion.innerHTML = (`Microsoft Edge Version ${userAgent.split('Edg/')[1]}`)
    browserName.innerHTML = `Microsoft Edge`;
    icons.style.backgroundPosition = '-150px 0'
    // Edge (Chromium)
} else if (userAgent.includes('Chrome/')) {
    browserVersion.innerHTML = (`Chrome Version ${userAgent.split('Chrome/')[1].slice(0, 12)}`)
    browserName.innerHTML = `Google Chrome`;
    // Chrome
} else if (userAgent.includes('Safari/')) {
    // Safari
}

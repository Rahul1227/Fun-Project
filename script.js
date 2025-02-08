const noBtn = document.getElementById('noBtn');
const img = document.getElementById('image');
const textArea = document.getElementById('textArea');

let clickCount = 0; // Counter to track clicks

noBtn.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
        textArea.textContent = 'Think Once Again 😑';
        img.setAttribute('src', 'https://gifdb.com/images/high/bubu-dudu-is-pooping-4mfuu5h4i2gka41o.webp');
    } else if (clickCount === 2) {
        textArea.textContent = 'Mat Jaao 😟';
        img.setAttribute('src', 'https://gifdb.com/images/high/dudu-bed-cries-in-sadness-994dqj7goc75pysm.webp');
    } else if (clickCount === 3) {
        textArea.textContent = 'Please Stay! 🥺';
        img.setAttribute('src', 'https://gifdb.com/images/high/cute-sad-bubu-dudu-panda-kick-4cn5usy9xip1m59y.webp');
    } else {
        textArea.textContent = 'I won\'t let you GO 😈';
        img.setAttribute('src', 'https://gifdb.com/images/high/dudu-chasing-bubu-ikclei6frfdc34h2.webp');
    }
});

// Function to move the button randomly
function moveButton() {
    if (clickCount >= 4) {
        let randTop = Math.floor(Math.random() * 80); // Random vertical position (0-80vh)
        let randLeft = Math.floor(Math.random() * 80); // Random horizontal position (0-80vw)

        noBtn.style.position = 'absolute'; // Ensure the button moves freely
        noBtn.style.top = `${randTop}vh`;
        noBtn.style.left = `${randLeft}vw`;
    }
}

// Add event listeners for both mouse and touch events
noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('touchstart', moveButton);
noBtn.addEventListener('touchmove', moveButton);


const yesBtn=document.getElementById('yesBtn');
yesBtn.addEventListener('click',()=>{
    textArea.textContent = 'Hehe 😁😍. Love you too❤️';
    img.setAttribute('src', 'https://gifdb.com/images/thumb/sleep-cute-couple-moments-bubu-and-dudu-ihnrde103criya0r.gif');
    noBtn.style.display='none';
    yesBtn.style.display='none';


})

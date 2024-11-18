let currentSlide = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

function updateOpacity() {
    images.forEach((img, index) => {
        img.classList.remove('first', 'last');
        if (index === currentSlide) {
            img.classList.add('first');
        }
        if (index === (currentSlide + 5) % images.length) {
            img.classList.add('last');
        }
    });
}

function moveSlide(n) {
    currentSlide += n;

    if (currentSlide >= images.length - 5) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = images.length - 6;
    }

    slides.style.transform = `translateX(${-currentSlide * 16.66}%)`;
    updateOpacity();
}

updateOpacity();

function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Texto copiado al portapapeles: ' + text);
}

document.querySelectorAll('.zoomable').forEach(image => {
    image.addEventListener('click', () => {
        const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);
        
            const zoomedImage = document.createElement('img');
            zoomedImage.src = image.src;
            zoomedImage.classList.add('zoomed');
            document.body.appendChild(zoomedImage);
        
            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
                document.body.removeChild(zoomedImage);
                });
        
            zoomedImage.addEventListener('click', () => {
                document.body.removeChild(overlay);
                document.body.removeChild(zoomedImage);
                });
            });
        });
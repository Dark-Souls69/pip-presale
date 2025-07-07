document.addEventListener('DOMContentLoaded', () => {
    // --- Paw Print Background Animation ---
    const backgroundAnimation = document.querySelector('.background-animation');
    const pawPrintImage = 'images/pawroad.png'; // Use pawroad.png as the background image

    function createPawPrint() {
        // This function is technically not used for the diagonal background animation,
        // but if you ever wanted to revert to individual paw prints, this structure is here.
        // For now, the animation is handled purely by CSS on .background-animation.
        const paw = document.createElement('div');
        paw.classList.add('paw-print'); // This class is not defined in style.css anymore
        paw.style.backgroundImage = `url(${pawPrintImage})`;

        const startX = Math.random() * window.innerWidth;
        const startY = -100; // Start higher off-screen
        paw.style.left = `${startX}px`;
        paw.style.top = `${startY}px`;

        const size = Math.random() * (120 - 40) + 40; // Between 40px and 120px
        paw.style.width = `${size}px`;
        paw.style.height = `${size}px`;

        const endX = Math.random() * window.innerWidth * 1.8 - (window.innerWidth * 0.4);
        const endY = window.innerHeight * 1.5;
        const rotateEnd = (Math.random() > 0.5 ? 1 : -1) * (360 * (Math.random() * 3 + 1));

        paw.style.setProperty('--x-end', `${endX - startX}px`);
        paw.style.setProperty('--y-end', `${endY - startY}px`);
        paw.style.setProperty('--rotate-end', `${rotateEnd}deg`);

        const duration = Math.random() * (25 - 15) + 15;
        const delay = Math.random() * 8;
        paw.style.animationDuration = `${duration}s`;
        paw.style.animationDelay = `${delay}s`;

        backgroundAnimation.appendChild(paw);

        paw.addEventListener('animationend', () => {
            paw.remove();
        });
    }

    // We are no longer calling setInterval(createPawPrint, 1500) for the new background animation.
    // The animation is controlled purely by CSS on the .background-animation div.


    // --- Contract Address Copy to Clipboard ---
    const copyButton = document.querySelector('.copy-address-btn');
    if (copyButton) {
        copyButton.addEventListener('click', async () => {
            const addressToCopy = copyButton.dataset.address;
            try {
                await navigator.clipboard.writeText(addressToCopy);
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="far fa-copy"></i> Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy address: ', err);
                const textArea = document.createElement('textarea');
                textArea.value = addressToCopy;
                textArea.style.position = 'fixed';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="far fa-copy"></i> Copy';
                    }, 2000);
                } catch (err) {
                    console.error('Fallback: Failed to copy address: ', err);
                }
                document.body.removeChild(textArea);
            }
        });
    }
});

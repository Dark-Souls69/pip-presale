document.addEventListener('DOMContentLoaded', () => {
    // --- Paw Print Background Animation (Handled by CSS) ---
    // The JavaScript function createPawPrint and related variables are
    // present for reference if a JS-driven animation is desired in the future,
    // but the current site uses CSS for the main background animation.
    // Therefore, the '.background-animation' div is not needed for the CSS effect.

    // const backgroundAnimation = document.querySelector('.background-animation');
    // const pawPrintImage = 'images/pawroad.png'; // This path needs to be correct if used by JS

    // function createPawPrint() {
    //     const paw = document.createElement('div');
    //     paw.classList.add('paw-print');
    //     paw.style.backgroundImage = `url(${pawPrintImage})`;

    //     const startX = Math.random() * window.innerWidth;
    //     const startY = -100;
    //     paw.style.left = `${startX}px`;
    //     paw.style.top = `${startY}px`;

    //     const size = Math.random() * (120 - 40) + 40;
    //     paw.style.width = `${size}px`;
    //     paw.style.height = `${size}px`;

    //     const endX = Math.random() * window.innerWidth * 1.8 - (window.innerWidth * 0.4);
    //     const endY = window.innerHeight * 1.5;
    //     const rotateEnd = (Math.random() > 0.5 ? 1 : -1) * (360 * (Math.random() * 3 + 1));

    //     paw.style.setProperty('--x-end', `${endX - startX}px`);
    //     paw.style.setProperty('--y-end', `${endY - startY}px`);
    //     paw.style.setProperty('--rotate-end', `${rotateEnd}deg`);

    //     const duration = Math.random() * (25 - 15) + 15;
    //     const delay = Math.random() * 8;
    //     paw.style.animationDuration = `${duration}s`;
    //     paw.style.animationDelay = `${delay}s`;

    //     backgroundAnimation.appendChild(paw);

    //     paw.addEventListener('animationend', () => {
    //         paw.remove();
    //     });
    // }

    // --- Contract Address Copy to Clipboard ---
    // This targets the button with class 'copy-button' and gets address from its data-address attribute.
    const copyButton = document.querySelector('.copy-button'); // Corrected to '.copy-button' as per HTML
    if (copyButton) {
        copyButton.addEventListener('click', async () => {
            const addressToCopy = copyButton.dataset.address;
            try {
                await navigator.clipboard.writeText(addressToCopy);
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="far fa-copy"></i> Copy'; // Reset button text with icon
                }, 2000);
            } catch (err) {
                console.error('Failed to copy address using Clipboard API: ', err);
                // Fallback for older browsers or non-secure contexts
                const textArea = document.createElement('textarea');
                textArea.value = addressToCopy;
                textArea.style.position = 'fixed'; // Prevents scrolling to the textarea
                textArea.style.left = '-9999px'; // Move off-screen
                textArea.style.top = '-9999px';
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
                    alert('Failed to copy. Please manually copy the address: ' + addressToCopy);
                } finally {
                    document.body.removeChild(textArea);
                }
            }
        });
    }
});

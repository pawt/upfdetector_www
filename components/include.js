// Function to include HTML components
async function includeHTML() {
    const components = document.querySelectorAll('[data-include]');
    
    for (const element of components) {
        const filePath = element.getAttribute('data-include');
        try {
            const response = await fetch(filePath);
            const html = await response.text();
            element.innerHTML = html;
            // Execute any scripts in the included content
            element.querySelectorAll('script').forEach(script => {
                const newScript = document.createElement('script');
                Array.from(script.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.textContent = script.textContent;
                script.parentNode.replaceChild(newScript, script);
            });
        } catch (error) {
            console.error(`Error loading ${filePath}:`, error);
        }
    }
}

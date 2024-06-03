const loadMenuPage = () => {
    // Get content element
    const content = document.getElementById('content');

    // Delete existing content
    content.innerHTML = '';

    // Create new elements to go inside content
    const contentLeft = document.createElement('h1');
    contentLeft.textContent = 'MENU';

    // Append content together
    content.appendChild(contentLeft);
    
}

export default loadMenuPage;
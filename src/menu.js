const loadMenuPage = () => {
    // Get content element
    const content = document.getElementById('content');

    // Delete existing content
    content.innerHTML = '';

    // Create new elements to go inside content
    const menuContent = document.createElement('div');
    menuContent.innerHTML = `
    <div id="menu-content">
        <div id="lunch-container">
            <div id="lunch-header-container">
                <h1>Lunch</h1>
                <div id="lunch-image"></div>
            </div>
            <div id="lunch-items-container">
                <ul>
                    <li>Pad thai</li>
                    <li>Pad thai</li>
                    <li>Pad thai</li>
                    <li>Pad thai</li>
                </ul>
            </div>
        </div>
        <div id="dinner-container">
            <div id="dinner-items-container">
                <ul>
                    <li>Pad thai</li>
                    <li>Pad thai</li>
                    <li>Pad thai</li>
                    <li>Pad thai</li>
                </ul>
            </div>
            <div id="dinner-header-container">
                <h1>Dinner</h1>
                <div id="dinner-image"></div>
            </div>
        </div>
    </div>`

    // Append content together
    content.appendChild(menuContent);
    
}

export default loadMenuPage;
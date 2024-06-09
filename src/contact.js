const loadContactPage = () => {
    // Get content element
    const content = document.getElementById('content');

    // Delete existing content
    content.innerHTML = '';

    // Create new elements to go inside content
    content.innerHTML = `
    <form id="contact-form">
            <div id="contact-details">
                <div id="contact-name">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name">
                </div>
                <div id="contact-email">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email">
                </div>
            </div>
            <div id="contact-message">
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <div id="contact-submit">
                <button type="submit">Submit</button>
            </div>
        </form>
    `
}

export default loadContactPage;
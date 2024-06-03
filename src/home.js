import Spices from './images/spices.jpg';

const loadHomePage = () => {
    // Get content element
    const content = document.getElementById('content');

    // Delete existing content
    content.innerHTML = '';

    // Create new elements to go inside content
    const contentLeft = document.createElement('div');
    const contentRight = document.createElement('div');
    const contentImage = document.createElement('img');

    // Populate content
    contentLeft.innerHTML = `<h1>Ora Thai Restaurant</h1>
    <h2>Sawasdee</h2>
            <p>This is where culinary innovation meets the timeless charm of lunch and dinner classics. Our menu, a treasure trove of gourmet Thai cuisine, delicious cocktails, and the best Pad Thai in Adelaide, promises an unrivaled dining experience.</p>
            <p>Savor the flavors of Thailand from decadent tom yum soup to savory spring rolls, each dish at Ora Thai is crafted to perfection, making us the go-to spot for weekend dinner. Whether you're indulging in a family-friendly group or seeking the perfect dinner spot for a Friday night, Ora Thai's unique menu caters to all.</p>`
    contentLeft.setAttribute('id', 'content-left');
    contentImage.src = Spices;
    contentImage.setAttribute('id', 'content-image');

    // Append content together
    contentRight.appendChild(contentImage);
    content.appendChild(contentLeft);
    content.appendChild(contentRight);
};

export default loadHomePage;
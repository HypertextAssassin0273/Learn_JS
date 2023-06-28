(function () { // IIFE
    'use strict';

    const defaultPhoto = 'images/signpost.jpg',
        container = document.getElementById('container');

    /* form submission */
    document.getElementById('details').addEventListener('submit', event => {
        event.preventDefault();
        const form = event.target,
            name = form.elements['name'].value,
            location = form.elements['location'].value,
            photo = form.elements['photo'].value,
            description = form.elements['description'].value;

        // clear form fields
        form.reset();

        // set title
        if (!container.children.length)
            document.getElementById('title').textContent = 'My Wish List';

        // add new card to container
        container.appendChild(createCard(name, location, photo, description));
    });

    /* helper function to create cards */
    function createCard(name, location, photo, description) {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img'); // optional field
        img.alt = name;
        img.src = photo.length ? photo : defaultPhoto;
        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        const h3 = document.createElement('h3'); // required field
        h3.textContent = name;
        cardBody.appendChild(h3);

        const h4 = document.createElement('h4'); // required field
        h4.textContent = location;
        cardBody.appendChild(h4);

        if (description.length) {
            const p = document.createElement('p'); // optional field
            p.className = 'card-text';
            p.textContent = description;
            cardBody.appendChild(p);
        }

        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.addEventListener('click', event => {
            event.target.closest('.card').remove();
            if (!container.children.length)
                document.getElementById('title').textContent = 'No Destinations Added';
        });
        cardBody.appendChild(button);

        return card;
    }
})();

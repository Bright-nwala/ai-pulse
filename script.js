document.addEventListener('DOMContentLoaded', function() {
    // Social Share (Existing Code)
    const socialShareLinks = document.querySelectorAll('.social-share a');

    socialShareLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const socialPlatform = this.querySelector('img').alt;
            alert(`Sharing this article on ${socialPlatform}! (This is a demo.)`);
        });
    });

    // Comment Section
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value;
        const commentText = document.getElementById('comment').value;

        if (name && commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <p class="comment-author">${name}:</p>
                <p>${commentText}</p>
            `;

            commentList.appendChild(commentDiv);

            // Clear the form
            document.getElementById('name').value = '';
            document.getElementById('comment').value = '';
        } else {
            alert('Please enter both your name and comment.');
        }
    });
});

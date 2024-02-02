document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentInput = document.getElementById('comment-input')
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('list');

    const likeCounts = {};

    function baseIncrement() {
        if (pauseButton.textContent === " pause ") {
            let newCount = parseInt(counter.textContent, 10) + 1;
            counter.textContent = newCount;
        };
    };
    setInterval(baseIncrement, 1000);

    minusButton.addEventListener("click", function() {
        if (pauseButton.textContent === " pause ") {
            let minusCount = parseInt(counter.textContent, 10) - 1;
            counter.textContent = minusCount;
        };
    });

    plusButton.addEventListener("click", function() {
        if (pauseButton.textContent === " pause ") {
            let plusCount = parseInt(counter.textContent, 10) + 1;
            counter.textContent = plusCount;
        };
    });

    heartButton.addEventListener("click", function() {
        if (pauseButton.textContent === " pause ") {
            currentCount = counter.textContent;
            const newLike = document.createElement('li');

            if (!likeCounts[currentCount]) {
                likeCounts[currentCount] = 1;
                newLike.textContent = `${counter.textContent} has been liked 1 time`
            } else {
                likeCounts[currentCount]++; 
                newLike.textContent = `${counter.textContent} has been liked ${likeCounts[currentCount]} times`
            };

            const existingLike = document.querySelector(`.likes li[data-count="${currentCount}"]`);

            if (existingLike) {
                existingLike.textContent = newLike.textContent;
            } else {
                newLike.setAttribute("data-count", currentCount);
                likesList.appendChild(newLike);
            };
        };
    });

    pauseButton.addEventListener("click", function() {
        if (pauseButton.textContent === " pause ") {
            pauseButton.textContent = " resume ";
        } else {
            pauseButton.textContent = " pause ";
        };
    });

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (pauseButton.textContent === " pause ") {
            const newComment = document.createElement('p');
            newComment.textContent = commentInput.value;
            commentsList.appendChild(newComment);
            commentInput.value = '';
        }; 
    });
});
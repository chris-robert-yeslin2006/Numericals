document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const loginForm = document.getElementById('loginForm');

    loginBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    loginForm.onsubmit = function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically send the login data to a server
        console.log(`Login attempt: Username - ${username}, Password - ${password}`);
        
        alert('Login functionality would be implemented here.');
        modal.style.display = "none";
        loginForm.reset();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of dynamic content loading (simulated)
    const ctaBtn = document.getElementById('ctaBtn');
    const bookNowBtn = document.getElementById('bookNowBtn');

    ctaBtn.addEventListener('click', function() {
        alert('This would navigate to the mentor selection page.');
    });

    bookNowBtn.addEventListener('click', function() {
        alert('This would open the booking process.');
    });
});
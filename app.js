// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-link');
    const header = document.querySelector('.header');

    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        navLinks.classList.toggle('show');
        header.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show');
            header.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!header.contains(e.target)) {
            navLinks.classList.remove('show');
            header.classList.remove('menu-open');
        }
    });
});

// Mobile download fallback
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-cv');
    
    downloadBtn.addEventListener('click', function(e) {
        // Check if download worked (for iOS mostly)
        setTimeout(function() {
            if (!document.querySelector('a[download]').hasAttribute('data-downloaded')) {
                // Fallback for browsers that don't support download attribute
                window.open(downloadBtn.href, '_blank');
            }
        }, 300);
        
        // Mark as downloaded for our check
        downloadBtn.setAttribute('data-downloaded', 'true');
    });
});
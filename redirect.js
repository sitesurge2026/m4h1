// Device detection and redirect
(function() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    // Only redirect if we're on the main index.html and haven't been redirected yet
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        if (isMobile && !window.location.href.includes('index-mobile.html')) {
            window.location.href = 'index-mobile.html';
        } else if (!isMobile && window.location.href.includes('index-mobile.html')) {
            window.location.href = 'index.html';
        }
    }
})();

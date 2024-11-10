// Initialize Glide.js for product slider
new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    gap: 10,
    autoplay: 3000
}).mount();

// Initialize Lightbox2 for product images
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

// Initialize FullPage.js for fullscreen scrolling sections
new fullpage('#fullpage', {
    anchors: ['home', 'shop', 'gallery', 'contact'],
    menu: 'header nav ul',  // This links to your navigation
    sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', '#6bb9f0'],
    scrollingSpeed: 1000,
    autoScrolling: true,
    navigation: true, // Enables navigation dots
    navigationPosition: 'right',
    showActiveTooltip: true
});

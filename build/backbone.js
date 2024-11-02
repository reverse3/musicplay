// Open music list when playlist icon is clicked
document.querySelector('#open-playlist').addEventListener('click', function() {
    document.querySelector('.music-list').classList.toggle('active');
});

// Close music list when close icon is clicked
document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.music-list').classList.remove('active');
});

// Facebook Share
document.querySelector('.facebook').addEventListener('click', function() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
});

// Twitter Share
document.querySelector('.twitter').addEventListener('click', function() {
  window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), '_blank');
});

// LinkedIn Share
document.querySelector('.linkedin').addEventListener('click', function() {
  window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(window.location.href), '_blank');
});

/* Homepage: keep post excerpts non-clickable; title and cover links remain */
(function () {
  function unlinkPostExcerpts() {
    var excerpts = document.querySelectorAll('a.index-excerpt');
    for (var i = 0; i < excerpts.length; i++) {
      excerpts[i].removeAttribute('href');
      excerpts[i].removeAttribute('target');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', unlinkPostExcerpts);
  } else {
    unlinkPostExcerpts();
  }
})();

/* Footer: keep the copyright year up to date */
(function () {
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

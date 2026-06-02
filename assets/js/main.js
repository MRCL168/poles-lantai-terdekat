// MBJ – main.js
document.addEventListener('DOMContentLoaded', function () {

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (el) {
        el.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Mobile nav toggle
  var ham = document.querySelector('.hamburger');
  var nav = document.querySelector('#site-nav');
  if (ham && nav) {
    ham.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Smooth counter animation for stats
  var counters = document.querySelectorAll('.num[data-target]');
  counters.forEach(function (el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var step   = Math.ceil(target / 60);
    var current = 0;
    var timer = setInterval(function () {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current.toLocaleString('id-ID') + suffix;
    }, 25);
  });
});

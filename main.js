/* ==========================
  Acordion
========================== */

const { end } = require('@popperjs/core');
const { start } = require('live-server');

const headerElement = document.getElementById('home');
const accordionTextElements = document.querySelectorAll('.accordion__text');
const summaryElements = document.querySelectorAll('.accordion__summary');

ScrollTrigger.create({
  start: 'top -100px',
  onEnter: () => headerElement.classList.add('scrolled'),
  onLeaveBack: () => headerElement.classList.remove('scrolled'),
});

accordionTextElements.forEach(textElement => {
  summaryElements.forEach(summaryElement => {
    summaryElement.addEventListener('click', () => {
      gsap.to(textElement, {
        y: 100,
        opacity: 0,
      });
    });
  });
});

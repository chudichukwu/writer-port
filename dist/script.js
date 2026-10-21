'use strict';
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  let count = 0;
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    if (!project.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = `${count} writing sample ${count === 1 ? 'space' : 'spaces'} shown.`;
}));
const samples = [
  ['Your feature story goes here', 'Choose a piece that shows your distinctive voice, careful research, or storytelling.'],
  ['Your content piece goes here', 'Choose a useful article or guide that shows how you explain a subject to a specific audience.'],
  ['Your copywriting project goes here', 'Choose a project that shows how you shape language around an audience and a clear purpose.']
];
const dialog = document.querySelector('#sample-dialog');
document.querySelectorAll('[data-sample]').forEach(button => button.addEventListener('click', () => {
  const sample = samples[Number(button.dataset.sample)];
  document.querySelector('#dialog-title').textContent = sample[0];
  document.querySelector('#dialog-intro').textContent = sample[1];
  dialog.showModal();
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

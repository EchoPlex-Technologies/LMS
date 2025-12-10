const toggleButton = document.querySelector('.js-toggle-button');
const sidebar = document.querySelector('.js-sidebar');
const sidebarBase = document.querySelector('.js-sidebar-base');

toggleButton.addEventListener('click', () => {
  toggleSidebar();
});

function toggleSidebar() {
  sidebar.classList.toggle('open');
  sidebarBase.classList.toggle('close');
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
}
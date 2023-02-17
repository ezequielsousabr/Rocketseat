const documento = document.getElementsByClassName('dashboardgrid');
const dropdown  = document.getElementById('dropdown');
const menuList  = document.querySelectorAll('li');

function SideDropdown(e){console.log(e)}

dropdown.addEventListener('click', SideDropdown);
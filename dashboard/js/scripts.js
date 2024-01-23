// /*!
//     * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
//     * Copyright 2013-2023 Start Bootstrap
//     * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
//     */
// // 
// // Scripts
// // 

window.addEventListener('DOMContentLoaded', event => {

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
  }

});



function validateLogin() {
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;

  if (email === '' || password === '') {
    alert('Tolong isi Password terlebih dahuu!!!');
    return;
  }

  if (email === 'contoh@gmail.com' && password === 'password123') {
    window.location.href = "index.html";

  } else {
    alert('Login gagal. Periksa kembali email dan password Anda.');
  }
}

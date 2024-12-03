// script.js
document.getElementById('chat').addEventListener('click', function() {
    const body = document.body;
  
    // Check if dark mode is currently enabled
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
  });  

// toggle event
// document.getElementById('chat').addEventListener('click', function() {
//   const body =document.body;
//     document.body.classList.toggle('dark-mode');
//     document.body.classList.toggle('light-mode');
//   });

// shortcut toggle event
// document.getElementById('telephone').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
//   });
  
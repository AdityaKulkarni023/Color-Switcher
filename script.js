const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    console.log(e.target.id);

    switch (e.target.id) {
      case 'teal':
        body.style.backgroundColor = '#008080'; 
        break;
      case 'coral':
        body.style.backgroundColor = '#FF6F61'; 
        break;
      case 'indigo':
        body.style.backgroundColor = '#4B0082'; 
        break;
      case 'gold':
        body.style.backgroundColor = '#FFD700'; 
        break;
      case 'violet':
        body.style.backgroundColor = '#9400D3'; 
        break;
      default:
        body.style.backgroundColor = '#f7f7f7';
        break;
    }
  });
});

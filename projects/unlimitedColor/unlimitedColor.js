const changeColor = function changeBackgroundColor() {
    // const r = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
  
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
  
    // document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  
    document.body.style.backgroundColor = color;
  };
  
  document.querySelector('#start').addEventListener('click', function () {
    let intervalId = setInterval(changeColor, 1000);
    document.querySelector('#stop').addEventListener('click', function () {
      clearInterval(intervalId);
      intervalId = null;
    });
  });
  
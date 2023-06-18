import React, { useState, useEffect } from 'react';

function Decoration({ position, imgSrc, width, height }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let style = {
    position: 'absolute',
    width: windowWidth <= 600 ? '100px' : width,  // Si la ventana es <= 600px, el ancho será 100px, de lo contrario será el ancho original
    height: windowWidth <= 600 ? '100px' : height // Lo mismo para la altura
  };

  switch (position) {
    case 'top-left': //SKULL
      style.top = '-50px';  
      style.left = '-200px';  
      break;
    case 'top-right':
      style.top = '-40px';   
      style.right = '-120px';  
      break;
    case 'bottom-left':
      style.bottom = '-50px';  
      style.left = '-170px';  
      break;
    case 'bottom-right':
      style.bottom = '-90px';  
      style.right = '-120px';  
      break;
    default:
      break;
  }

  return (
    <div style={style}>
      <img src={`${process.env.PUBLIC_URL}/${imgSrc}`} alt={imgSrc} style={{ width: '100%', height: '100%' }}/>
    </div>
  );
}

export default Decoration;


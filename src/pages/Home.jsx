import React, { useEffect, useState } from 'react';


function Home() {
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  const title = ['Développeur fullstack', 'Développeur front-end', 'Développeur back-end', 'Prompt engineering'];

  const text = [
    "Je suis un développeur fullstack passionné par la création de sites et d'applications web. J'utilise les technologies les plus récentes pour offrir des expériences utilisateur modernes et performantes.",
    "Je maîtrise javascript et des frameworks front-end tels que React et Ionic pour réaliser des applications web et mobiles. Je maîtrise également le CSS",
    "Je maîtrise Node.js et Express pour réaliser des serveurs web et des API. Je suis également à l'aise avec les bases de données mongodb, et maîtrise le C# et python.",
    "Je suis à l'aise avec le prompt engineering, et utilise l'intelligence artificielle ainsi que des logiciels variés tels que Gimp et Stable diffusion"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0));
        setFadeClass('fade-in');
      }, 1000); // Durée de l'animation de fade-out
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className='Home'>
      <div className='text-container'>
        <div className={`title-container ${fadeClass}`}>
          <h1 className='content'>{title[index]}</h1>
        </div>
        <div className={`content-container ${fadeClass}`}>
          <p className='content'>{text[index]}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

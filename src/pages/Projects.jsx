import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

function Projects() {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);
  const [openTransition, setOpenTransition] = useState(true);

  const titles = [
    'Projet Wallpit',
    'Coppelis',
    'Projets en freelance',
    'Autres projets'
  ];
  const texts = [
    'Je suis fondateur et développeur de Wallpit, une application de jeu stratégique au tour par tour en ligne.',
    "J'ai travaillé en alternance pendant un an chez Coppelis, une entreprise proposant diffrentes solution digitales pour les professionnels",
    "J'ai eu l'occasion de mettre en place des applications web et mobiles pour des clients",
    "Durant ma formation, j'ai eu l'occasion de développer différents sites types et autres serveurs et API sur mon github. J'aime également travailler sur des projets personnels pour apprendre les technologies qui m'intéressent."
  ];

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => {
        if (direction === 'next') {
          setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        } else {
          setIndex((prevIndex) => (prevIndex - 1 + titles.length) % titles.length);
        }
        setTransitioning(false);
        setDirection(null);
      }, 500); // Duration of the CSS transition

      return () => clearTimeout(timer);
    }
  }, [transitioning, direction, titles.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setOpenTransition(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  const previous = () => {
    if (!transitioning) {
      setDirection('previous');
      setTransitioning(true);
    }
  };

  const next = () => {
    if (!transitioning) {
      setDirection('next');
      setTransitioning(true);
    }
  };

  const getCardTransform = () => {
    if (!transitioning) return 'translateX( -33%)';
    if (direction === 'next') return 'translateX(-66%)';
    if (direction === 'previous') return 'translateX(0%)';
  };

  const makeCard = (title, text) => {
    return <Card title={title} text={text} />;
  };

  return (
    <div className='Skills'>
      <div className={openTransition? 'fade-in carrousel' : 'carrousel'}>
            <div className='carousel-container' style={{ transform: getCardTransform(), transition: `${transitioning === true ? 'transform 0.5s ease' : null }` }}>
                <div className='card' style={{opacity: `${direction === 'previous' ? '1' : '0'}`, transition: `${transitioning === true ? 'opacity 0.5s ease': null}` }}>
                    {makeCard(titles[(index - 1 + titles.length) % titles.length], texts[(index - 1 + titles.length) % titles.length])}
                </div>
                <div className={`card`}  style={{opacity: `${transitioning ? 0 : 1 }`, transition: `${transitioning === true ? 'opacity 0.5s ease': null}` }}>
                    {makeCard(titles[index], texts[index])}
                </div>
                <div className='card' style={{opacity: `${direction === 'next' ? '1' : '0'}`, transition: `${transitioning === true ? 'opacity 0.5s ease': null}` }} >
                    {makeCard(titles[(index + 1) % titles.length], texts[(index + 1) % titles.length])}
                </div>
            </div>
        </div>
        <button className='next' onClick={next}>Suivant</button>
        <button className='prev' onClick={previous}>Précédent</button>
    </div>
  );
}

export default Projects;

import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = images.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img src={item.src} alt={item.alt} />
        <CarouselCaption captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });

  const images = [
    {
      src: '/icono-adidas.png',
      alt: 'Imagen 1',
      header: 'First slide label',
      caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      src: 'imagen2.jpg',
      alt: 'Imagen 2',
      header: 'Second slide label',
      caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      src: 'imagen3.jpg',
      alt: 'Imagen 3',
      header: 'Third slide label',
      caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ];

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default Carrusel;
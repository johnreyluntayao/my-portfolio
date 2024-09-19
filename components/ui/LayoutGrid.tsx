'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ImageData = {
  id: number;
  className: string;
  thumbnail: string;
};

type Card = {
  id: number;
  title: string;
  images: ImageData[];
};

export const LayoutGrid = ({ card }: { card: Card }) => {
  const [selected, setSelected] = useState<ImageData | null>(null);
  const [lastSelected, setLastSelected] = useState<ImageData | null>(null);

  const handleClick = (image: ImageData) => {
    setLastSelected(selected);
    setSelected(image);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  // Framer Motion variant for animation
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Delays between each image's animation
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative"
      initial="hidden"
      whileInView="visible" // Trigger animation when this container is in view
      viewport={{ once: true, amount: 0.3 }} // Ensure the animation only happens once per scroll
      variants={containerVariant} // Apply container animation
    >
      {card.images.map((image) => (
        <motion.div
          key={image.id}
          className={cn(image.className, '')}
          variants={itemVariant} // Apply item animation to each image
        >
          <motion.div
            onClick={() => handleClick(image)}
            className={cn(
              image.className,
              'relative overflow-hidden',
              selected?.id === image.id
                ? 'rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col'
                : lastSelected?.id === image.id
                ? 'z-40 bg-white rounded-xl h-full w-full'
                : 'bg-white rounded-xl h-full w-full'
            )}
            layoutId={`card-${card.id}-image-${image.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ImageComponent image={image} cardId={card.id} />
          </motion.div>
        </motion.div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ImageComponent = ({ image, cardId }: { image: ImageData; cardId: number }) => {
  return (
    <motion.img
      layoutId={`card-${cardId}-image-${image.id}-img`}
      src={image.thumbnail}
      height="500"
      width="500"
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      alt="thumbnail"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    />
  );
};

import React from 'react';

type CarCardProps = {
  car: {
    name: string;
    year: number;
  };
};

const CarCard: React.FC<CarCardProps> = ({car}) => {
  return (
    <div id = 'CarCard'>
      <h3>{car.name}</h3>
      <p>{car.year}</p>
    </div>
  );
};

export default CarCard;
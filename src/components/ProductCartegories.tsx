
import React from 'react';
import Image from 'next/image';
import img1 from "../public/images/img1.png";
import img2 from "../public/images/img2.png";
import img3 from "../public/images/img3.png";
import img4 from "../public/images/img4.png";
import img5 from "../public/images/img5.png";
import img6 from "../public/images/img6.png";
import img7 from "../public/images/img7.png";
import img8 from "../public/images/img8.png";
import img9 from "../public/images/img9.png";
import img10 from "../public/images/img10.png";

const ProductCategories = () => {
  const cardsSection1 = [
    { image: img8, title: 'Card 1', description: 'Description for card 1' },
    { image: img9, title: 'Card 2', description: 'Description for card 2' },
    { image: img3, title: 'Card 3', description: 'Description for card 3' },
    { image: img4, title: 'Card 4', description: 'Description for card 4' },
    { image: img10, title: 'Card 5', description: 'Description for card 5' },
    { image: img6, title: 'Card 6', description: 'Description for card 6' },
  ];

  const cardsSection2 = [
    { image: img2, title: 'Card 7', description: 'Description for card 7' },
    { image: img1, title: 'Card 8', description: 'Description for card 8' },
    { image: img7, title: 'Card 9', description: 'Description for card 9' },
    { image: img5, title: 'Card 10', description: 'Description for card 10' },
  ];

  return (
    <div className=" text-black p-8">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Section 1</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardsSection1.map((card, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <Image src={card.image} alt={card.title} className="mb-2 rounded" layout="responsive" height={300} width={500} />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Section 2</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {cardsSection2.map((card, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <Image src={card.image} alt={card.title} className="mb-2 rounded" layout="responsive" width={500} height={300} />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;

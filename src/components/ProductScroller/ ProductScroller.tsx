'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'HUDDEE',
    price: 'Rs. 6,700.00',
    image: '/images/delete/products/more/Product 24 (3).png',
    tag: 'BESTSELLER',
    soldOut: false,
  },
  {
    id: 2,
    name: 'SPORT T-SHIRT',
    price: 'Rs. 6,700.00',
    image: '/images/delete/products/more/Product 25 (2).png',
    tag: 'BESTSELLER',
    soldOut: false,
  },
  {
    id: 3,
    name: 'SSS2 T-SHIRT',
    price: 'Rs. 11,400.00',
    image: '/images/delete/products/more/Product 26 (2).png',
    tag: '',
    soldOut: true,
  },
  {
    id: 4,
    name: 'SWEATSHIRT',
    price: 'Rs. 4,700.00',
    image: '/images/delete/products/more/Product 29 (4).png',
    tag: '',
    soldOut: true,
  },
  {
    id: 5,
    name: 'T-SHIRT',
    price: 'Rs. 11,400.00',
    image: '/images/delete/products/more/Product 37 (1).png',
    tag: '',
    soldOut: true,
  },
  {
    id: 6,
    name: 'HUDDEE',
    price: 'Rs. 6,700.00',
    image: '/images/delete/products/more/Product 37 (6).png',
    tag: 'BESTSELLER',
    soldOut: false,
  },
  {
    id: 7,
    name: 'SPORT T-SHIRT',
    price: 'Rs. 6,700.00',
    image: '/images/delete/products/more/Product 54 (1).png',
    tag: 'BESTSELLER',
    soldOut: false,
  },
  {
    id: 8,
    name: 'SSS2 T-SHIRT',
    price: 'Rs. 11,400.00',
    image: '/images/delete/products/more/Product 78 (1).png',
    tag: '',
    soldOut: true,
  },
  {
    id: 9,
    name: 'SWEATSHIRT',
    price: 'Rs. 4,700.00',
    image: '/images/delete/products/more/Product 120 (1).png',
    tag: '',
    soldOut: true,
  },
  {
    id: 10,
    name: 'T-SHIRT',
    price: 'Rs. 11,400.00',
    image: '/images/delete/products/more/Product_4 (5).png',
    tag: '',
    soldOut: true,
  },
];


const ProductScroller = () => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '20px' }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: 'inline-block',
            width: '250px',
            marginRight: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={() => handleClick(product.id)}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={250}
            style={{ objectFit: 'cover' }}
          />
          {product.tag && (
            <div style={{
              position: 'absolute',
              bottom: '65px',
              left: 0,
              right: 0,
              backgroundColor: 'black',
              color: 'white',
              textAlign: 'center',
              fontSize: '12px',
              padding: '2px 0',
              fontWeight: 'bold',
              letterSpacing: '2px'
            }}>
              {product.tag}
            </div>
          )}
          {product.soldOut && (
            <div style={{
              position: 'absolute',
              bottom: '65px',
              left: 0,
              right: 0,
              backgroundColor: '#ccc',
              color: '#555',
              textAlign: 'center',
              fontSize: '12px',
              padding: '2px 0',
              fontWeight: 'bold',
              letterSpacing: '2px'
            }}>
              SOLD OUT
            </div>
          )}
          <div style={{ padding: '10px', backgroundColor: '#fff' }}>
            <div style={{ fontWeight: 600 }}>{product.name}</div>
            <div style={{ color: '#666', marginTop: '4px' }}>{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductScroller;

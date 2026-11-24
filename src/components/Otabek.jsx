import React from 'react';
import { Link } from 'react-router-dom'; 

const Otabek = () => {
  const products = [
    {
      id: 1,
      title: "1C-Mahsulotlar 300",
      price: "400 rubl/oy",
      features: [
        "Prognozlash serveridan foydalanib talabni bashorat qilish (cheklov – 300 ta mahsulot)",
        "Mahsulot qoldiqlarini nazorat qilish va avtomatik buyurtma berish (cheklov – 300 ta mahsulot)",
        "Chakana savdo do'koni yoki do'konlar tarmog'i ishini tahlil qilish",
        "Assortimentni boshqarish bo'yicha tavsiyalar (1C-Riteyl Cheker)"
      ],
      link: "/batafsil/1c-300"
    },
    {
      id: 2,
      title: "1C-Mahsulotlar 30000",
      price: "1 700 rubl/oy",
      features: [
        "Prognozlash serveridan foydalanib talabni bashorat qilish (cheklov – 30000 ta mahsulot)",
        "Mahsulot qoldiqlarini nazorat qilish va avtomatik buyurtma berish (cheklov – 30000 ta mahsulot)",
        "Chakana savdo do'koni yoki do'konlar tarmog'i ishini tahlil qilish",
        "Assortimentni boshqarish bo'yicha tavsiyalar (1C-Riteyl Cheker)"
      ],
      link: "/batafsil/1c-30000"
    },
    {
      id: 3,
      title: "1C-Mahsulotlar",
      price: "4 500 rubl/oy",
      features: [
        "Prognozlash serveridan foydalanib talabni bashorat qilish",
        "Mahsulot qoldiqlarini nazorat qilish va avtomatik buyurtma berish",
        "Chakana savdo do'koni yoki do'konlar tarmog'i ishini tahlil qilish",
        "Assortimentni boshqarish bo'yicha tavsiyalar (1C-Riteyl Cheker)"
      ],
      link: "/batafsil/1c-cheksiz"
    }
  ];

  return (
    <div className="bg-[#f0f9f1] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <div className="flex justify-between items-center px-4">
          <h2 className="text-3xl text-gray-800 font-semibold">
            Mashhur mahsulotlar
          </h2>
          <button className="bg-[#4caf50] hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Barcha mahsulotlar
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 relative">
          
          <button className="hidden md:flex text-gray-400 hover:text-gray-600 absolute -left-6 z-10 text-3xl">
            ‹
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full border border-gray-50"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                    <span className="text-sm text-[#4caf50] border border-[#4caf50] rounded-full px-3 py-1 font-medium">
                      {product.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-500">
                        <span className="mr-2 text-gray-400">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Link 
                    to={product.link} 
                    className="text-[#4caf50] hover:text-green-600 font-medium flex items-center gap-1 transition-colors"
                  >
                    Batafsil <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden md:flex text-gray-400 hover:text-gray-600 absolute -right-6 z-10 text-3xl">
            ›
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Otabek;
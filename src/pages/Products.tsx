import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import productsContent from '../data/products.json';

type ProductItem = {
  id: number;
  name: string;
  category: string;
  desc: string;
  image: string;
  tags: string[];
};

export default function Products() {
  const content = productsContent as {
    hero: { title: string; description: string };
    categories: string[];
    items: ProductItem[];
    ctaText: string;
  };
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredProducts = activeCategory === '全部'
    ? content.items
    : content.items.filter((product) => product.category === activeCategory);

  return (
    <div className="pb-20">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {content.hero.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex flex-wrap gap-2 justify-center mb-12">
          {content.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold text-accent-500 mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{product.desc}</p>
                <div className="mt-auto pt-4 border-t border-slate-50">
                  <button className="w-full py-2.5 rounded-xl bg-primary-50 text-primary-600 font-bold hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                    查看详情 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-colors">
            {content.ctaText} <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const categories = ['全部', '粮油米面', '生鲜肉类', '乳制品', '休闲零食', '健康轻食'];

const products = [
  {
    id: 1,
    name: '达康臻选 五常大米',
    category: '粮油米面',
    desc: '核心产区，一年一季，米香浓郁，软糯回甘。',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    tags: ['地理标志', '有机认证'],
  },
  {
    id: 2,
    name: '达康牧场 谷饲原切牛排',
    category: '生鲜肉类',
    desc: '精选300天谷饲黑牛，原肉整切，拒绝拼接。',
    image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&w=600&q=80',
    tags: ['冷链直达', '无抗生素'],
  },
  {
    id: 3,
    name: '达康纯净 鲜牛奶',
    category: '乳制品',
    desc: '自有高山牧场，巴氏杀菌，保留更多活性营养。',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    tags: ['每日鲜送', '高钙'],
  },
  {
    id: 4,
    name: '达康压榨 一级花生油',
    category: '粮油米面',
    desc: '精选当季大花生，物理压榨，滴滴醇香。',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    tags: ['非转基因', '物理压榨'],
  },
  {
    id: 5,
    name: '达康轻享 混合坚果',
    category: '休闲零食',
    desc: '全球直采6种坚果，低温烘焙，科学配比。',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=600&q=80',
    tags: ['无添加', '健康零食'],
  },
  {
    id: 6,
    name: '达康农庄 有机蔬菜包',
    category: '健康轻食',
    desc: '当季时蔬，清晨采摘，顺丰冷链次日达。',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    tags: ['有机认证', '基地直供'],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredProducts = activeCategory === '全部' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">产品中心</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            汇聚全球优质食材，以严苛标准打造达康食品矩阵。我们致力于为您提供安全、美味、营养的每一餐。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Categories */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
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
                  {product.tags.map(tag => (
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

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-colors">
            获取完整产品目录 <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

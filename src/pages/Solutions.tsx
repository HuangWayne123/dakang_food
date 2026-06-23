import { Briefcase, Building2, Utensils, ShoppingCart, Check } from 'lucide-react';
import solutionsContent from '../data/solutions.json';

type SolutionItem = {
  iconKey: 'utensils' | 'building' | 'shoppingCart';
  title: string;
  desc: string;
  points: string[];
  buttonText: string;
  style: 'light' | 'dark';
  badge?: string;
};

export default function Solutions() {
  const content = solutionsContent as {
    hero: { title: string; description: string };
    items: SolutionItem[];
    banner: { title: string; description: string; buttonText: string };
  };
  const iconMap = {
    utensils: Utensils,
    building: Building2,
    shoppingCart: ShoppingCart
  };
  const iconBoxMap = {
    utensils: 'bg-orange-50 text-orange-600',
    building: 'bg-slate-800 text-primary-400',
    shoppingCart: 'bg-blue-50 text-blue-600'
  };

  return (
    <div className="pb-20">
      <div className="bg-primary-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Briefcase className="w-16 h-16 text-primary-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{content.hero.title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {content.hero.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.items.map((item) => {
            const Icon = iconMap[item.iconKey];
            const isDark = item.style === 'dark';
            return (
              <div
                key={item.title}
                className={isDark ? 'bg-slate-900 rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden' : 'bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col'}
              >
                {item.badge && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                    {item.badge}
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconBoxMap[item.iconKey]}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`mb-8 flex-grow ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {item.points.map((point) => (
                    <li key={point} className={`flex items-center gap-3 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <Check className={`w-4 h-4 ${isDark ? 'text-primary-400' : 'text-primary-500'}`} /> {point}
                    </li>
                  ))}
                </ul>
                <button className={isDark ? 'w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 rounded-xl transition-colors' : 'w-full bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-3 rounded-xl transition-colors border border-slate-200'}>
                  {item.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{content.banner.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            {content.banner.description}
          </p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
            {content.banner.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

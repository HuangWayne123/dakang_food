import { Map, Truck, Store, Globe, ArrowRight } from 'lucide-react';
import channelsContent from '../data/channels.json';

type MatrixItem = {
  iconKey: 'store' | 'globe' | 'map';
  title: string;
  desc: string;
  colorKey: 'accent' | 'primary' | 'blue';
  points: string[];
};

export default function Channels() {
  const content = channelsContent as {
    hero: { title: string; description: string };
    heroImage: string;
    stats: Array<{ num: string; label: string }>;
    matrix: { title: string; description: string; items: MatrixItem[] };
    synergy: {
      badge: string;
      title: string;
      description: string[];
      buttonText: string;
      image: string;
      imageAlt: string;
    };
  };
  const iconMap = {
    store: Store,
    globe: Globe,
    map: Map
  };
  const colorClassMap = {
    accent: {
      wrapper: 'hover:border-accent-500',
      iconBox: 'bg-accent-50 group-hover:bg-accent-500',
      icon: 'text-accent-600 group-hover:text-white'
    },
    primary: {
      wrapper: 'hover:border-primary-500',
      iconBox: 'bg-primary-50 group-hover:bg-primary-500',
      icon: 'text-primary-600 group-hover:text-white'
    },
    blue: {
      wrapper: 'hover:border-blue-500',
      iconBox: 'bg-blue-50 group-hover:bg-blue-500',
      icon: 'text-blue-600 group-hover:text-white'
    }
  };

  return (
    <div className="pb-20">
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: `url('${content.heroImage}')` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Truck className="w-16 h-16 text-accent-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {content.hero.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {content.stats.map((stat) => (
            <div key={stat.label} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-accent-600 mb-2">{stat.num}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{content.matrix.title}</h2>
            <p className="text-slate-600">{content.matrix.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.matrix.items.map((item) => {
              const Icon = iconMap[item.iconKey];
              const colorClasses = colorClassMap[item.colorKey];

              return (
                <div key={item.title} className={`bg-white rounded-3xl p-8 shadow-sm border border-slate-100 group transition-colors ${colorClasses.wrapper}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${colorClasses.iconBox}`}>
                    <Icon className={`w-7 h-7 transition-colors ${colorClasses.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500 font-medium">
                    {item.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-bold mb-6">
              {content.synergy.badge}
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{content.synergy.title}</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {content.synergy.description[0]}
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {content.synergy.description[1]}
            </p>
            <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-bold transition-colors">
              {content.synergy.buttonText} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 w-full">
            <img src={content.synergy.image} alt={content.synergy.imageAlt} className="w-full rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  );
}

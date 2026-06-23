import { Shield, CheckCircle, Search, Activity, FileText } from 'lucide-react';
import safetyContent from '../data/safety.json';

type Pillar = {
  iconKey: 'search' | 'activity' | 'shield' | 'fileText';
  title: string;
  desc: string;
};

export default function Safety() {
  const content = safetyContent as {
    hero: { title: string; description: string };
    heroImage: string;
    pillars: Pillar[];
    certifications: { title: string; description: string; items: string[] };
    traceability: {
      title: string;
      description: string;
      points: string[];
      image: string;
      imageAlt: string;
      statLabel: string;
      statValue: string;
    };
  };
  const iconMap = {
    search: Search,
    activity: Activity,
    shield: Shield,
    fileText: FileText
  };

  return (
    <div className="pb-20">
      <div className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: `url('${content.heroImage}')` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            {content.hero.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {content.pillars.map((pillar) => {
            const Icon = iconMap[pillar.iconKey];
            return (
              <div key={pillar.title} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{content.certifications.title}</h2>
            <p className="text-slate-600">{content.certifications.description}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.certifications.items.map((certification) => (
              <div key={certification} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center gap-3">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
                <span className="font-bold text-slate-800">{certification}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{content.traceability.title}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {content.traceability.description}
            </p>
            <ul className="space-y-4">
              {content.traceability.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <img src={content.traceability.image} alt={content.traceability.imageAlt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">{content.traceability.statLabel}</div>
                <div className="text-2xl font-black text-slate-900">{content.traceability.statValue}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

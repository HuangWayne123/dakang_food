import { ArrowRight, ShieldCheck, Truck, Sprout, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-primary-50">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/farm/1920/1080?blur=2')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 text-primary-700 text-sm font-medium mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              隶属于达康控股，世界500强企业生态成员
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
              通达天下 <br />
              <span className="text-primary-600">康润万家</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              达康食品股份致力于构建从田间到餐桌的全产业链安全体系。我们不仅提供高品质的食品，更肩负着保障民生、滋养国民的社会责任。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-primary-600/30 flex items-center gap-2"
              >
                探索产品系列
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/solutions"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center gap-2"
              >
                了解企业方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Livelihood Attributes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">坚守民生属性，铸就国民品牌</h2>
          <p className="text-slate-600">我们深知食品安全与供应是最大的民生。达康食品以科技赋能农业，以标准重塑流通，让每一口食物都充满安心。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Sprout,
              title: '源头直采，生态种植',
              desc: '依托达康农业生态，我们在全球布局优质产区，坚持可持续的生态农业模式，从源头把控食材品质。',
              color: 'text-emerald-600',
              bg: 'bg-emerald-50',
            },
            {
              icon: ShieldCheck,
              title: '严苛标准，全程溯源',
              desc: '建立高于行业的食品安全标准体系，运用区块链与物联网技术，实现从农田到餐桌的100%透明溯源。',
              color: 'text-blue-600',
              bg: 'bg-blue-50',
            },
            {
              icon: Truck,
              title: '高效流通，保供稳价',
              desc: '强大的冷链物流网络与仓储能力，确保食材新鲜直达。在特殊时期，我们更是保供稳价的中坚力量。',
              color: 'text-accent-500',
              bg: 'bg-accent-50',
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: '全球优质产区' },
              { num: '3000+', label: 'SKU产品矩阵' },
              { num: '100%', label: '全程冷链覆盖' },
              { num: '1亿+', label: '服务家庭数量' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700">
                <div className="text-4xl md:text-5xl font-black text-primary-500 mb-2">{stat.num}</div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Ecosystem Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-accent-600 font-bold mb-4">
              <Users className="w-5 h-5" />
              <span>达康控股生态圈</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">协同发展，共创产业价值</h2>
            <p className="text-slate-600 mb-6">
              作为达康控股的重要一环，达康食品与达康供应链集团、认知黑洞等板块深度协同，构建了坚不可摧的产业护城河。
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
            >
              了解生态赋能方案 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
            {['达康控股', '达康供应链集团', '认知黑洞'].map((name, idx) => (
              <div key={idx} className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 text-center font-bold text-slate-700">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

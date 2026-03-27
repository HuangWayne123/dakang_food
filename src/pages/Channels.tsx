import { Map, Truck, Store, Globe, ArrowRight } from 'lucide-react';

export default function Channels() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/logistics/1920/1080?blur=4')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Truck className="w-16 h-16 text-accent-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">渠道能力</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            依托达康供应链集团的强大支撑，我们构建了覆盖全国、辐射全球的全渠道分销网络，确保高品质食材以最快速度送达千家万户。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Network Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { num: '30+', label: '省级分拨中心' },
            { num: '500+', label: '城市前置仓' },
            { num: '10万+', label: '合作终端门店' },
            { num: '24小时', label: '核心城市送达' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-accent-600 mb-2">{stat.num}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Channel Matrix */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">全渠道覆盖矩阵</h2>
            <p className="text-slate-600">线上线下深度融合，B端C端双轮驱动</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 group hover:border-accent-500 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-accent-50 flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                <Store className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">线下零售网络</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                深度合作全国百强连锁商超、便利店系统。同时依托“达康生活”社区生鲜店，打通社区零售最后100米。
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• 大型KA卖场直供</li>
                <li>• 连锁便利店专区</li>
                <li>• 达康生活社区店</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 group hover:border-primary-500 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <Globe className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">电商与新零售</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                全面入驻主流电商平台，大力发展直播带货、社区团购等新零售模式，构建多维度的线上触点。
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• 传统电商旗舰店</li>
                <li>• 兴趣电商直播矩阵</li>
                <li>• O2O即时零售</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 group hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <Map className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">B端大客户直供</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                为大型企事业单位食堂、连锁餐饮品牌、食品加工企业提供定制化的食材供应链解决方案。
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• 连锁餐饮央厨直供</li>
                <li>• 团餐与机构集采</li>
                <li>• 食品工业原料供应</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logistics Synergy */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-bold mb-6">
              集团生态赋能
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">达康供应链集团：冷链护城河</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              渠道的广度与深度，离不开强大的物流支撑。达康食品与达康供应链集团深度绑定，共享全国最大的温控仓储网络与冷链运输车队。
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              从产地预冷、干线运输、城市分拨到末端配送，实现全程不断链的温控管理，最大程度锁住食材的新鲜与营养，降低损耗，提升流通效率。
            </p>
            <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-bold transition-colors">
              了解达康供应链集团 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 w-full">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" alt="冷链物流" className="w-full rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  );
}

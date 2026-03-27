import { Briefcase, Building2, Utensils, ShoppingCart, Check } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="bg-primary-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Briefcase className="w-16 h-16 text-primary-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">行业解决方案</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            基于达康控股强大的生态资源，我们为不同行业的合作伙伴提供定制化、一站式的食材供应链解决方案，助力企业降本增效。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Solution 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
              <Utensils className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">连锁餐饮供应链方案</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              为大型连锁餐饮品牌提供从源头直采、中央厨房初加工到门店冷链日配的端到端服务，保障菜品品质稳定与食品安全。
            </p>
            <ul className="space-y-3 mb-8">
              {['定制化规格加工', '全国统一定价集采', '多温层混合配送', '食安溯源数据对接'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-primary-500" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-3 rounded-xl transition-colors border border-slate-200">
              获取详细方案
            </button>
          </div>

          {/* Solution 2 */}
          <div className="bg-slate-900 rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              最受欢迎
            </div>
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">企事业团餐保供方案</h3>
            <p className="text-slate-400 mb-8 flex-grow">
              面向政府机关、大型企业、高校医院食堂，提供全品类、大宗食材的稳定供应，凸显达康食品的民生保供属性。
            </p>
            <ul className="space-y-3 mb-8">
              {['全品类一站式采购', '应急保供预案机制', '驻场食安检测服务', '营养师菜单定制'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-primary-400" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 rounded-xl transition-colors">
              联系专属顾问
            </button>
          </div>

          {/* Solution 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              <ShoppingCart className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">商超零售赋能方案</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              为区域连锁超市、生鲜电商提供高品质自有品牌代工（OEM/ODM）及爆款生鲜单品直供，提升终端竞争力。
            </p>
            <ul className="space-y-3 mb-8">
              {['自有品牌联合开发', '产地直发一件代发', '生鲜标品化包装', '营销物料与溯源支持'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-primary-500" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-3 rounded-xl transition-colors border border-slate-200">
              获取详细方案
            </button>
          </div>
        </div>

        {/* Ecosystem Banner */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">需要更复杂的生态协同方案？</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            如果您的业务涉及大型冷库建设、复杂的供应链金融或前沿AI技术赋能，我们可以联合【达康控股】、【达康供应链集团】、【认知黑洞】为您提供集团级综合解决方案。
          </p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
            预约集团大客户会议
          </button>
        </div>
      </div>
    </div>
  );
}

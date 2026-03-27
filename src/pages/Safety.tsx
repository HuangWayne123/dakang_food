import { Shield, CheckCircle, Search, Activity, FileText } from 'lucide-react';

export default function Safety() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/lab/1920/1080?blur=4')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">食品安全体系</h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            安全是达康食品的生命线。我们以科技赋能，建立高于国家标准的“达康金盾”食安体系，实现从农田到餐桌的100%透明溯源。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Search,
              title: '源头品控',
              desc: '依托达康农业生态，对土壤、水源、种苗进行严苛检测，拒绝农残超标。',
            },
            {
              icon: Activity,
              title: '生产监控',
              desc: '十万级无尘车间，24小时AI视觉监控，关键控制点实时数据采集。',
            },
            {
              icon: Shield,
              title: '冷链护航',
              desc: '达康供应链集团专属冷链，全程温湿度实时监控，断链即刻报警拦截。',
            },
            {
              icon: FileText,
              title: '一物一码',
              desc: '区块链防篡改溯源，消费者扫码即可查看产品前世今生。',
            },
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">国际权威认证</h2>
            <p className="text-slate-600">我们的生产基地与管理体系已通过多项国际顶级食品安全认证</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ISO 22000', 'HACCP 体系', 'BRCGS 认证', '有机产品认证'].map((cert, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center gap-3">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
                <span className="font-bold text-slate-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traceability Demo */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">认知黑洞赋能：透明溯源</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              借助集团内“认知黑洞”的AI、区块链与物联网前沿技术，我们为每一件商品赋予了唯一的“数字身份证”。消费者只需扫描包装上的二维码，即可获取详细的溯源报告。
            </p>
            <ul className="space-y-4">
              {[
                '产地环境数据（温湿度、土壤报告）',
                '种植/养殖日志与用药记录',
                '加工车间实时环境与批次检验报告',
                '冷链运输轨迹与温度曲线',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <img src="https://picsum.photos/seed/trace/800/600" alt="溯源系统" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">累计溯源查询</div>
                <div className="text-2xl font-black text-slate-900">1.2亿+ 次</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

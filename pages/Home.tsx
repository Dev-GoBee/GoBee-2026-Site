import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, TrendingUp, Users, DollarSign, ShoppingCart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col font-sans bg-white">
      
      {/* 1. Hero Section - Nubank Style (Solid Brand Color Background) */}
      <section className="relative bg-gobee-600 pt-32 pb-12 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <div className="lg:w-1/2 text-white relative z-10 pb-10 lg:pb-0">
              <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6 tracking-tight">
                O parceiro ideal <br />
                para o seu <br />
                <span className="font-bold">e-Commerce.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-md font-light leading-relaxed">
                Gestão completa, branding estratégico e marketing de performance. Tudo em um só lugar para você vender mais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gobee-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2 group">
                  Começar agora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/solucoes/gestao-ecommerce" className="px-8 py-4 rounded-full font-bold text-white border border-white/30 hover:bg-white/10 transition-all flex items-center justify-center">
                  Conhecer soluções
                </Link>
              </div>
            </div>

            {/* Hero Image - Animated CSS Dashboard */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end perspective-1000">
               {/* Container Principal do Dashboard */}
               <div className="relative w-full max-w-[550px] aspect-[4/3] bg-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                  
                  {/* Header do Mockup */}
                  <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                     <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                  </div>

                  {/* Corpo do Dashboard */}
                  <div className="p-6">
                     
                     {/* KPIs Row */}
                     <div className="grid grid-cols-3 gap-4 mb-8">
                        {/* KPI 1 */}
                        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                           <div className="flex items-center gap-2 mb-2 text-blue-600">
                              <DollarSign size={16} /> <span className="text-xs font-bold uppercase">Receita</span>
                           </div>
                           <div className="text-xl font-bold text-gray-900 mb-1">R$ 145k</div>
                           <div className="text-[10px] font-medium text-green-600 flex items-center gap-1">
                              <TrendingUp size={10} /> +12.5%
                           </div>
                        </div>

                        {/* KPI 2 */}
                        <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
                           <div className="flex items-center gap-2 mb-2 text-purple-600">
                              <Users size={16} /> <span className="text-xs font-bold uppercase">Visitantes</span>
                           </div>
                           <div className="text-xl font-bold text-gray-900 mb-1">24.5k</div>
                           <div className="text-[10px] font-medium text-green-600 flex items-center gap-1">
                              <TrendingUp size={10} /> +5.2%
                           </div>
                        </div>

                        {/* KPI 3 */}
                        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
                           <div className="flex items-center gap-2 mb-2 text-amber-600">
                              <Activity size={16} /> <span className="text-xs font-bold uppercase">Conv.</span>
                           </div>
                           <div className="text-xl font-bold text-gray-900 mb-1">3.2%</div>
                           <div className="text-[10px] font-medium text-green-600 flex items-center gap-1">
                              <TrendingUp size={10} /> +0.8%
                           </div>
                        </div>
                     </div>

                     {/* Gráfico Animado */}
                     <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 h-48 relative overflow-hidden flex flex-col justify-end">
                        <div className="absolute top-4 left-4 text-xs font-bold text-gray-400 uppercase">Vendas (Últimos 7 dias)</div>
                        <div className="flex items-end justify-between gap-2 h-32 px-2">
                           {/* Barras animadas com alturas diferentes */}
                           {[35, 55, 40, 70, 50, 85, 60].map((height, i) => (
                              <div key={i} className="w-full bg-gobee-100 rounded-t-lg relative group">
                                 <div 
                                    className="absolute bottom-0 w-full bg-gobee-500 rounded-t-lg transition-all duration-1000 ease-out group-hover:bg-gobee-600"
                                    style={{ height: `${height}%`, animation: `growBar 1.5s ease-out ${i * 0.1}s backwards` }}
                                 ></div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Elemento Flutuante Animado - Notificação de Venda */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce z-20">
                     <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-inner">
                        <ShoppingCart size={20} strokeWidth={2.5} />
                     </div>
                     <div>
                        <div className="text-xs text-gray-400 font-bold uppercase">Nova Venda Realizada</div>
                        <div className="text-sm font-bold text-gray-900">R$ 299,90</div>
                     </div>
                  </div>

                  {/* Elemento Flutuante Decorativo */}
                  <div className="absolute top-20 right-8 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-gray-100 animate-pulse">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-[10px] font-bold text-gray-500">Live</span>
                     </div>
                  </div>
               </div>

               {/* CSS para animação das barras (inline para simplicidade no componente) */}
               <style>{`
                  @keyframes growBar {
                     from { height: 0%; opacity: 0; }
                     to { opacity: 1; }
                  }
               `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics - Clean White Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors">
                <span className="block text-5xl font-bold text-gobee-600 mb-2 tracking-tighter">+10 mi</span>
                <p className="text-gray-600 font-medium">Em produtos vendidos através das nossas estratégias de gestão.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors">
                <span className="block text-5xl font-bold text-gobee-600 mb-2 tracking-tighter">+250%</span>
                <p className="text-gray-600 font-medium">Crescimento médio dos nossos parceiros no primeiro ano.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors">
                <span className="block text-5xl font-bold text-gobee-600 mb-2 tracking-tighter">+50</span>
                <p className="text-gray-600 font-medium">Lojas virtuais criadas e otimizadas para alta conversão.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Main Solution - Light Gray Background */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/2">
                <span className="text-gobee-600 font-bold uppercase tracking-wider text-sm mb-4 block">Gestão 360º</span>
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tight leading-tight">
                  Gestão eficiente do <br/>iniciante a escala.
                </h2>
                <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                  Da estratégia inicial à otimização contínua, nossa gestão de e-commerce garante que sua operação seja ágil, lucrativa e pronta para crescer.
                </p>
                
                <div className="space-y-4 mb-10">
                   {['Integração de Marketplaces', 'Logística Otimizada', 'Dashboard em Tempo Real'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-full bg-gobee-100 flex items-center justify-center text-gobee-600">
                            <CheckCircle2 size={14} strokeWidth={3} />
                         </div>
                         <span className="font-medium text-gray-800">{item}</span>
                      </div>
                   ))}
                </div>

                <Link to="/solucoes/gestao-ecommerce" className="inline-flex items-center gap-2 text-gobee-600 font-bold hover:gap-4 transition-all">
                  Conhecer detalhes da gestão <ChevronRight size={20} />
                </Link>
             </div>
             
             <div className="lg:w-1/2">
               <div className="relative">
                  <div className="absolute top-10 right-10 w-full h-full bg-gobee-200 rounded-[3rem] -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
                    alt="Gestão"
                    className="rounded-[3rem] shadow-xl w-full object-cover h-[500px]"
                  />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Services - Large Cards Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tight">
              Transforme ideias em <br />negócios de sucesso.
            </h2>
            <p className="text-lg text-gray-500">
              Nossos pilares de atuação para fortalecer sua marca no digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'e-Branding',
                desc: 'Construa uma marca forte e memorável. Identidade visual e verbal que conecta.',
                img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
                link: '/servicos/e-branding',
                bg: 'bg-gray-50'
              },
              {
                title: 'e-Commerce',
                desc: 'Desenvolvimento de lojas virtuais seguras, rápidas e focadas em conversão.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
                link: '/servicos/e-commerce',
                bg: 'bg-gray-50'
              },
              {
                title: 'e-Marketing',
                desc: 'Tráfego pago, SEO e CRM. Estratégias de dados para vender todos os dias.',
                img: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=600',
                link: '/servicos/e-marketing',
                bg: 'bg-gray-50'
              }
            ].map((card, i) => (
              <Link key={i} to={card.link} className={`group rounded-3xl overflow-hidden ${card.bg} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
                <div className="h-64 overflow-hidden">
                   <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{card.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gobee-600">Saiba mais</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gobee-600 shadow-sm group-hover:bg-gobee-600 group-hover:text-white transition-colors">
                       <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Social Proof - Minimalist */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-500 font-medium mb-10">Empresas que confiam na Gobee</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-2xl font-serif font-bold text-gray-800">Rommanel</span>
             <span className="text-2xl font-sans font-black tracking-tighter text-gray-800">KANAWAI</span>
             <span className="text-xl font-mono text-gray-800 uppercase">Floripa Boho</span>
             <span className="text-2xl font-serif italic text-gray-800">Palmasul</span>
             <span className="text-2xl font-bold text-gray-800">MAMAZOO</span>
          </div>
        </div>
      </section>

      {/* 6. Testimonial - Card Style */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
           <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 relative">
              <div className="text-6xl text-gobee-200 absolute top-10 left-10 font-serif">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 text-center leading-relaxed mb-10 relative z-10">
                Apostei na Gobee e foi um grande acerto. O site ficou perfeito e o suporte está sempre disponível. Recomendo demais.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                 <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=68" alt="Cliente" className="w-full h-full object-cover" />
                 </div>
                 <div className="text-left">
                    <p className="font-bold text-gray-900">Mateus Almeida</p>
                    <p className="text-sm text-gray-500">Excelente Proteção Veicular</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. Contact Section - Nubank Inspired (Floating Card on Gray) */}
      <div className="bg-[#f5f5f5] pb-24">
         <ContactSection serviceName="Contato Home Page" />
      </div>

    </div>
  );
};

export default Home;
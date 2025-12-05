import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SERVICE_CONTENT } from '../constants';
import { 
  ArrowLeft, CheckCircle2, ShoppingBag, 
  Gem, Lightbulb, Rocket, 
  FileText, Zap, Search, ArrowRight,
  Compass, PenTool, BookOpen, Layers, Target,
  Fingerprint, Palette, MessageSquare, Layout, Check,
  Smartphone, Code2, Gauge, ShieldCheck, Database, Globe,
  BarChart3, Megaphone, Mail, Users, Filter, MousePointerClick,
  TrendingUp, Star, Volume2, Book, Key, Puzzle, Monitor,
  Share2, PieChart, Repeat, Eye, Heart
} from 'lucide-react';
import ContactSection from '../components/ContactSection';

const ServiceDetail: React.FC = () => {
  const location = useLocation();
  const isGestaoEcommerce = location.pathname === '/solucoes/gestao-ecommerce';
  const isEbranding = location.pathname === '/servicos/e-branding';
  const isEcommerceDev = location.pathname === '/servicos/e-commerce';
  const isEmarketing = location.pathname === '/servicos/e-marketing';
  
  // State para as abas de planos do e-commerce
  const [activeEcommerceTab, setActiveEcommerceTab] = useState<'compra' | 'assinatura'>('compra');
  
  // Dados genéricos para fallback
  const genericData = SERVICE_CONTENT[location.pathname];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Título e Subtítulo Dinâmicos para o Hero
  const getHeroContent = () => {
    if (isEbranding) {
      return {
        title: <>e-Branding</>,
        subtitle: <>Transforme sua presença online! Descubra como um branding estratégico unindo sua <span className="font-bold">marca, comunicação e cultura</span> podem impulsionar seu crescimento e assegura sua relevância no competitivo mercado digital.</>,
        image: null
      };
    }
    if (isGestaoEcommerce) {
      return {
        title: <>Gestão de <br /><span className="font-bold">e-Commerce</span></>,
        subtitle: "Ajudamos gestores a identificar o momento do seu negócio, criando um mapa claro com foco na evolução e estruturação sustentável, da validação inicial à consolidação no mercado.",
        image: null
      };
    }
    if (isEcommerceDev) {
      return {
        title: <>e-Commerce</>,
        subtitle: <>Nós <span className="font-bold">implementamos sua loja virtual</span> em uma plataforma robusta, que une <span className="font-bold">segurança e agilidade</span>. Tenha uma <span className="font-bold">gestão simplificada</span> e ofereça aos seus clientes uma <span className="font-bold">experiência de compra excelente</span>, do clique ao checkout.</>,
        image: null
      };
    }
    if (isEmarketing) {
      return {
        title: <>e-Marketing</>,
        subtitle: "Transforme sua presença digital e descubra como alinhar sua marca, comunicação e cultura para crescer e permanecer no mercado digital.",
        image: null
      };
    }
    if (genericData) {
      return {
        title: <>{genericData.title}</>,
        subtitle: genericData.subtitle,
        image: null
      };
    }
    return { title: "Soluções Gobee", subtitle: "", image: null };
  };

  const heroContent = getHeroContent();

  if (!genericData && !isGestaoEcommerce && !isEbranding && !isEcommerceDev && !isEmarketing) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-32 bg-[#f5f5f5]">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Página em construção</h2>
        <Link to="/" className="text-gobee-600 hover:underline font-semibold flex items-center gap-2">
          <ArrowLeft size={20} /> Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="font-sans bg-[#f5f5f5] min-h-screen flex flex-col">
      
      {/* 1. GLOBAL HERO */}
      <section className="relative bg-gobee-600 pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden z-10">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
           {heroContent.image ? (
              // Layout Dividido (Estilo Home) - Usado quando há imagem definida
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <div className="lg:w-1/2 text-left">
                       <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-tight">
                          {heroContent.title}
                       </h1>
                       <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8">
                          {heroContent.subtitle}
                       </p>
                       <button onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})} className="bg-white text-gobee-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2 group">
                          Falar com especialista <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                  </div>
                  <div className="lg:w-1/2">
                      <img 
                        src={heroContent.image} 
                        alt="Hero" 
                        className="rounded-3xl shadow-2xl border-4 border-white/20 transform hover:scale-[1.02] transition-transform duration-500 w-full object-cover" 
                      />
                  </div>
              </div>
           ) : (
              // Layout Centralizado (Padrão) - Usado em Gestão, Branding, E-commerce, etc.
              <div className="text-center">
                 <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-tight">
                   {heroContent.title}
                 </h1>
                 <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
                   {heroContent.subtitle}
                 </p>
              </div>
           )}
         </div>
      </section>

      {/* =========================================================================
          CONTEÚDO ESPECÍFICO: E-BRANDING
         ========================================================================= */}
      {isEbranding && (
        <>
          {/* Seção 1: Clientes (Barra Branca) */}
          <section className="bg-white py-16 border-b border-gray-100">
             <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-md text-center lg:text-left">
                   <h3 className="text-3xl font-medium text-gray-900 mb-2 tracking-tight">Clientes que já confiam</h3>
                   <p className="text-gray-500 font-light">Conheça algumas das últimas marcas que já confiaram em nossa proposta e contrataram esse serviço.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-10 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-xl font-bold text-gray-800">conexão áurea</span>
                    <span className="text-xl font-black text-gray-800">KANAWAI</span>
                    <span className="text-xl font-bold text-gray-800">Gráfica Madri</span>
                    <span className="text-xl font-serif text-gray-800">Romã</span>
                    <span className="text-xl font-bold text-gray-800">DaiPujol</span>
                    <span className="text-xl font-light text-gray-800">JacyDesign</span>
                </div>
             </div>
          </section>

          {/* Seção 2: Serviços (Grid) */}
          <section className="py-24 bg-[#f8f9fa]">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex gap-4 items-center mb-6">
                   <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">O que fazemos?</span>
                   <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                </div>

                <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight max-w-3xl">
                   Transformamos suas ideias em uma marca memorável.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {[
                      { icon: Star, title: "Identidade visual", desc: "Definimos padrões visuais únicos para fácil identificação da sua marca, destacando-a da concorrência." },
                      { icon: Megaphone, title: "Campanhas de reconhecimento", desc: "Campanhas focadas em aumentar a visibilidade e o reconhecimento da sua marca no mercado." },
                      { icon: Volume2, title: "Identidade verbal", desc: "Desenvolvemos a voz da sua marca: tom, linguagem e mensagens que conectam e engajam seu público." },
                      { icon: Book, title: "Manual da marca", desc: "Documento central com diretrizes e padrões para uma gestão consistente e eficaz da sua marca." },
                      { icon: Target, title: "Alcance e expansão", desc: "Identificamos seu cliente ideal e expandimos o alcance da sua marca para novos horizontes." },
                      { icon: Gem, title: "Gestão de marca", desc: "Monitoramento e controle da aplicação de padrões e estratégias para garantir a força da sua marca." }
                   ].map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gobee-200 hover:shadow-lg transition-all flex items-start gap-6">
                         <div className="w-12 h-12 shrink-0 rounded-full bg-gobee-50 flex items-center justify-center text-gobee-600">
                            <item.icon size={24} strokeWidth={1.5} />
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </section>

          {/* Seção 3: Strategy Banner (Parallax/Imagem) */}
          <section className="relative h-[600px] overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0">
                <img 
                   src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1600" 
                   alt="Branding Strategy" 
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/60"></div>
             </div>
             
             <div className="relative z-10 bg-white p-12 md:p-16 rounded-3xl shadow-2xl max-w-2xl text-center mx-6">
                <h3 className="text-3xl font-medium text-gray-900 mb-4">Planejamento & Estratégia</h3>
                <p className="text-gray-600 mb-8 font-light leading-relaxed">
                   Definimos a base da sua marca: propósito, posicionamento e diferenciais com clareza e relevância estratégica.
                </p>
                <Link to="#contato" className="inline-block border border-gobee-600 text-gobee-600 px-8 py-3 rounded-md font-bold hover:bg-gobee-600 hover:text-white transition-all">
                   Vamos começar
                </Link>
             </div>
          </section>

          {/* Seção 4: Stats (Porque contratar) */}
          <section className="py-24 bg-white">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                   
                   {/* Coluna Esquerda: Texto */}
                   <div className="lg:w-1/3">
                      <div className="flex gap-4 items-center mb-6">
                         <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Porque contratar?</span>
                         <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                      </div>

                      <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tight leading-tight">
                         Seja mais do que um logotipo atraente.
                      </h2>
                      <p className="text-gray-600 leading-relaxed font-light mb-8">
                         O processo de branding eficaz não é apenas sobre criar um logotipo atraente ou um slogan memorável, ele permeia em toda a organização e impacta diretamente o desempenho financeiro e na percepção do consumidor.
                      </p>
                   </div>

                   {/* Coluna Direita: Cards Stats */}
                   <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                         {/* Card 80% */}
                         <div className="bg-[#f8f9fa] p-10 rounded-2xl">
                            <span className="block text-5xl font-bold text-gray-900 mb-2 tracking-tighter">80%</span>
                            <h4 className="font-bold text-gray-900 mb-2">Brand equity</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                               Marcas fortes podem aumentar o valor de mercado de uma empresa, o valor da marca podem representar até 80% do valor do negócio.
                            </p>
                         </div>
                         
                         {/* Card 59% (Preto) */}
                         <div className="bg-black text-white p-10 rounded-2xl">
                            <span className="block text-5xl font-bold text-white mb-2 tracking-tighter">59%</span>
                            <h4 className="font-bold text-white mb-2">Clientes leais</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                               59% dos consumidores preferem comprar produtos de marcas que conhecem.
                            </p>
                         </div>
                      </div>

                      {/* Card 92% (Vermelho Full) */}
                      <div className="bg-gobee-600 text-white p-10 rounded-2xl w-full">
                         <span className="block text-5xl font-bold text-white mb-2 tracking-tighter">92%</span>
                         <h4 className="font-bold text-white mb-2">Páginas incríveis</h4>
                         <p className="text-sm text-white/90 leading-relaxed max-w-2xl">
                            Cerca de 92% das pessoas consideram sites bem projetados mais confiáveis, o que está diretamente ligado à identidade visual da marca, tornando esse fator relevante em suas decisões de compra.
                         </p>
                      </div>
                   </div>

                </div>
             </div>
          </section>

          {/* Seção 5: Portfolio (Nosso trabalho) */}
          <section className="py-24 bg-[#f8f9fa]">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex gap-4 items-center mb-6">
                   <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Nosso trabalho</span>
                   <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                </div>

                <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight max-w-2xl">
                   Conheça projetos que estão prontos para deixar sua marca no mercado.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {/* Projeto 1 */}
                   <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                      <img 
                         src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600" 
                         alt="Manual de Marca"
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold text-sm">Ver projeto</span>
                      </div>
                   </div>

                   {/* Projeto 2 */}
                   <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-blue-900">
                      <div className="w-full h-full flex flex-col justify-center items-center p-8">
                         <h4 className="text-white text-2xl font-bold tracking-widest uppercase">BRANDBOOK</h4>
                         <p className="text-blue-300 text-xs tracking-wider">GRÁFICA MADRI</p>
                      </div>
                   </div>

                   {/* Projeto 3 */}
                   <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-gobee-500">
                      <div className="w-full h-full flex flex-col justify-center items-center p-8">
                         <h4 className="text-white text-2xl font-bold tracking-widest uppercase mb-2">DAI PUJOL</h4>
                         <span className="bg-black text-white text-[10px] px-2 py-1 rounded">MANUAL DA MARCA</span>
                      </div>
                   </div>

                   {/* Projeto 4 */}
                   <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                      <img 
                         src="https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=600" 
                         alt="Conexão Áurea"
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-6 left-6 text-white font-bold text-xl drop-shadow-md">
                         Conexão Áurea
                      </div>
                   </div>

                   {/* Projeto 5 */}
                   <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-[#f0e6e6]">
                       <div className="w-full h-full flex items-center justify-center">
                          <span className="text-gray-800 font-serif text-2xl">Jacy Design</span>
                       </div>
                   </div>

                   {/* Projeto 6 */}
                   <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                      <img 
                         src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" 
                         alt="Kanawai"
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-6 left-6 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                         Kanawai
                      </div>
                   </div>

                </div>
             </div>
          </section>
        </>
      )}

      {/* =========================================================================
          CONTEÚDO ESPECÍFICO: GESTÃO DE E-COMMERCE
         ========================================================================= */}
      {isGestaoEcommerce && (
        <>
           <section className="bg-white py-16 border-b border-gray-100">
             <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-md text-center lg:text-left">
                   <h3 className="text-3xl font-medium text-gray-900 mb-2 tracking-tight">Clientes que já confiam</h3>
                   <p className="text-gray-500 font-light">Conheça algumas das últimas marcas que já confiaram em nossa proposta e contrataram esse serviço.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-10 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-xl font-bold text-gray-800">MAMAZOO</span>
                    <span className="text-xl font-light text-gray-800">KAKAU LOPES</span>
                    <span className="text-xl font-black text-gray-800">KANAWAI</span>
                    <span className="text-xl font-bold text-gray-800 border-2 border-gray-800 rounded-full px-2">OTTO</span>
                    <span className="text-xl font-serif text-gray-800">Romã</span>
                    <span className="text-xl font-serif italic text-gray-800">Palmasul</span>
                </div>
             </div>
          </section>

           {/* Seção 1: Compromisso */}
           <section className="bg-white py-20 lg:py-32">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                   {/* Texto */}
                   <div className="lg:w-1/2">
                      <span className="text-gobee-600 font-bold uppercase tracking-wider text-sm mb-4 block">
                        O mundo é seu
                      </span>
                      <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight tracking-tight">
                        o compromisso é nosso!
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                        Nós estamos focados nos seus resultados, mas sabemos que eles são construídos com comprometimento e parcerias transparentes. Nosso sucesso é o seu, e ele é alimentado por conexões genuínas e um trabalho em equipe alinhado.
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        Pronto para construir seus resultados com a gente?
                      </p>
                   </div>
                   
                   {/* Imagem */}
                   <div className="lg:w-1/2 w-full">
                      <div className="relative">
                         <div className="absolute top-10 right-10 w-full h-full bg-gobee-50 rounded-[3rem] -z-10"></div>
                         <img 
                           src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800" 
                           alt="Compromisso Gobee" 
                           className="rounded-[3rem] shadow-xl w-full object-cover h-[400px] transform hover:scale-[1.02] transition-transform duration-500"
                         />
                         
                         {/* Card Flutuante */}
                         <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hidden md:block animate-bounce">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                  <TrendingUp size={24} />
                               </div>
                               <div>
                                  <p className="text-xs text-gray-500 font-bold uppercase">Crescimento</p>
                                  <p className="text-xl font-bold text-gray-900">+125% YoY</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
           </section>

           {/* Seção 2: Entenda nossa solução (Diagrama Venn) */}
           <section className="bg-[#f8f9fa] py-24">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 {/* Lado Esquerdo: Diagrama Venn (Simulado com CSS) */}
                 <div className="relative h-[400px] w-full flex justify-center items-center order-2 lg:order-1">
                    <div className="relative w-[350px] h-[350px]">
                       {/* Circle 1: Top (Branding) */}
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gobee-400 rounded-full opacity-80 mix-blend-multiply flex flex-col items-center justify-center text-white p-4 text-center z-10 animate-pulse">
                          <Gem size={24} className="mb-2" />
                          <span className="font-bold text-sm">E-BRANDING</span>
                       </div>
                       
                       {/* Circle 2: Bottom Left (Marketing) */}
                       <div className="absolute bottom-0 left-0 w-48 h-48 bg-gobee-600 rounded-full opacity-80 mix-blend-multiply flex flex-col items-center justify-center text-white p-4 text-center z-10">
                          <Lightbulb size={24} className="mb-2" />
                          <span className="font-bold text-sm">E-MARKETING</span>
                       </div>

                       {/* Circle 3: Bottom Right (Commerce) */}
                       <div className="absolute bottom-0 right-0 w-48 h-48 bg-gobee-500 rounded-full opacity-80 mix-blend-multiply flex flex-col items-center justify-center text-white p-4 text-center z-10">
                          <ShoppingBag size={24} className="mb-2" />
                          <span className="font-bold text-sm">E-COMMERCE</span>
                       </div>

                       {/* Center Intersection */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-24 h-24 bg-white rounded-full z-20 shadow-lg flex items-center justify-center border-4 border-gobee-50">
                          <Rocket size={32} className="text-gobee-600" />
                       </div>
                    </div>
                 </div>

                 {/* Lado Direito: Texto Explicativo */}
                 <div className="order-1 lg:order-2">
                    <div className="flex gap-4 items-center mb-6">
                       <Link to="/solucoes/gestao-ecommerce" className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase hover:bg-gobee-50">Sobre a solução</Link>
                       <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 leading-tight">
                      Entenda nossa solução para a gestão do seu e-Commerce.
                    </h2>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed font-light">
                      Essa solução de gestão de e-commerce une nossos três serviços pilares para criar uma estratégia digital completa, adaptada ao momento e às necessidades específicas de cada negócio.
                    </p>

                    <div className="space-y-6">
                       <div className="flex gap-4">
                          <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-gobee-600 shadow-sm border border-gray-100">
                             <Gem size={24} strokeWidth={1.5} />
                          </div>
                          <div>
                             <p className="text-sm text-gray-600">
                               <span className="font-bold text-gray-900">É o alicerce da sua marca.</span> Ele se inicia com a definição da <span className="font-bold">identidade visual</span> e <span className="font-bold">propósito</span> e evolui para a gestão <span className="font-bold">estratégica da marca</span> em todos os pontos de contato.
                             </p>
                          </div>
                       </div>

                       <div className="flex gap-4">
                          <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-gobee-600 shadow-sm border border-gray-100">
                             <ShoppingBag size={24} strokeWidth={1.5} />
                          </div>
                          <div>
                             <p className="text-sm text-gray-600">
                               O negócio <span className="font-bold text-gray-900">começa pelo plataforma</span>, enquanto as experiências do usuário são refinadas com <span className="font-bold text-gray-900">base em dados</span>. Aprimoramos a usabilidade para aumentar as <span className="font-bold text-gray-900">vendas</span> e a <span className="font-bold text-gray-900">fidelização</span>.
                             </p>
                          </div>
                       </div>

                       <div className="flex gap-4">
                          <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-gobee-600 shadow-sm border border-gray-100">
                             <Lightbulb size={24} strokeWidth={1.5} />
                          </div>
                          <div>
                             <p className="text-sm text-gray-600">
                               Da <span className="font-bold text-gray-900">atração de tráfego inicial</span> para a loja a estratégia evolui para <span className="font-bold text-gray-900">campanhas de performance avançadas</span> e, finalmente, para a <span className="font-bold text-gray-900">automação e retenção de clientes</span>.
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>
               </div>
             </div>
           </section>

           {/* Seção 3: Matriz de Maturidade (Tabela Estilizada) */}
           <section className="bg-white py-24">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 <div className="flex gap-4 items-center mb-6">
                    <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Para quem é a solução?</span>
                    <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                 </div>

                 <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 max-w-2xl leading-tight">
                    Solução pensada para cada momento do seu negócio digital.
                 </h2>

                 <div className="overflow-x-auto pb-4">
                    <div className="min-w-[1000px] border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                       {/* Header Row - Gradient of Pinks */}
                       <div className="grid grid-cols-6 text-white text-sm font-bold text-center">
                          <div className="bg-gobee-300 p-4 flex items-center justify-center">Iniciante</div>
                          <div className="bg-gobee-400 p-4 flex items-center justify-center">Iniciante operacional</div>
                          <div className="bg-gobee-500 p-4 flex items-center justify-center">Controle intermediário</div>
                          <div className="bg-gobee-600 p-4 flex items-center justify-center">Controle estratégico</div>
                          <div className="bg-gobee-700 p-4 flex items-center justify-center">Crescimento avançado</div>
                          <div className="bg-gobee-800 p-4 flex items-center justify-center">Escala</div>
                       </div>

                       {/* Body Row - Single large block with columns */}
                       <div className="grid grid-cols-6 bg-gobee-50/50">
                          {/* Col 1 */}
                          <div className="p-4 border-r border-white">
                             <ul className="space-y-3">
                                <li className="text-xs text-gray-600">> Validação da ideia</li>
                                <li className="text-xs text-gray-600">> Escolha da plataforma</li>
                                <li className="text-xs text-gray-600">> Cadastro de produtos</li>
                                <li className="text-xs text-gray-600">> Estrutura legal mínima</li>
                                <li className="text-xs text-gray-600">> Primeiras vendas</li>
                                <li className="text-xs text-gray-600">> Logística básica</li>
                                <li className="text-xs text-gray-600">> Atendimento básico</li>
                                <li className="text-xs text-gray-600">> Orçamento limitado</li>
                             </ul>
                          </div>
                          
                          {/* Col 2 */}
                          <div className="p-4 border-r border-white">
                             <ul className="space-y-3">
                                <li className="text-xs text-gray-600">> Otimização do cadastro</li>
                                <li className="text-xs text-gray-600">> Automações básicas</li>
                                <li className="text-xs text-gray-600">> Canais de venda</li>
                                <li className="text-xs text-gray-600">> Controle financeiro</li>
                                <li className="text-xs text-gray-600">> Atendimento estruturado</li>
                                <li className="text-xs text-gray-600">> Gestão de estoque</li>
                                <li className="text-xs text-gray-600">> Marketing básico</li>
                                <li className="text-xs text-gray-600">> Análise de fornecedores</li>
                             </ul>
                          </div>

                          {/* Col 3 */}
                          <div className="p-4 border-r border-white">
                             <ul className="space-y-3">
                                <li className="text-xs text-gray-600">> Métricas de vendas</li>
                                <li className="text-xs text-gray-600">> Estoque otimizado</li>
                                <li className="text-xs text-gray-600">> Marketing diversificado</li>
                                <li className="text-xs text-gray-600">> Experiência do cliente</li>
                                <li className="text-xs text-gray-600">> Jornada de compra</li>
                                <li className="text-xs text-gray-600">> Planejamento financeiro</li>
                                <li className="text-xs text-gray-600">> Desenvolvimento de equipe</li>
                                <li className="text-xs text-gray-600">> Análise da concorrência</li>
                             </ul>
                          </div>

                          {/* Col 4 */}
                          <div className="p-4 border-r border-white">
                             <ul className="space-y-3">
                                <li className="text-xs text-gray-600">> Definição de KPIs</li>
                                <li className="text-xs text-gray-600">> Análise de dados</li>
                                <li className="text-xs text-gray-600">> Margem de lucro</li>
                                <li className="text-xs text-gray-600">> Otimização de produtos</li>
                                <li className="text-xs text-gray-600">> Estratégias de retenção</li>
                                <li className="text-xs text-gray-600">> Automação avançada</li>
                                <li className="text-xs text-gray-600">> Gestão de riscos</li>
                                <li className="text-xs text-gray-600">> Plano orçamentário</li>
                             </ul>
                          </div>

                          {/* Col 5 */}
                          <div className="p-4 border-r border-white">
                             <ul className="space-y-3">
                                <li className="text-xs text-gray-600">> Expansão de mercados</li>
                                <li className="text-xs text-gray-600">> Otimização de funis</li>
                                <li className="text-xs text-gray-600">> Investimentos</li>
                                <li className="text-xs text-gray-600">> Parcerias estratégicas</li>
                                <li className="text-xs text-gray-600">> Gestão de marca</li>
                                <li className="text-xs text-gray-600">> Internacionalização</li>
                                <li className="text-xs text-gray-600">> Cultura organizacional</li>
                                <li className="text-xs text-gray-600">> Análise de viabilidade</li>
                             </ul>
                          </div>

                          {/* Col 6 */}
                          <div className="p-4">
                             <ul className="space-y-3">
                                <li className="text-xs text-gray-600">> Liderança de mercado</li>
                                <li className="text-xs text-gray-600">> Inovação constante</li>
                                <li className="text-xs text-gray-600">> Otimização de custos</li>
                                <li className="text-xs text-gray-600">> Lideranças (Equipe)</li>
                                <li className="text-xs text-gray-600">> Expansão de canais</li>
                                <li className="text-xs text-gray-600">> Responsabilidade social</li>
                                <li className="text-xs text-gray-600">> Geração de valor</li>
                                <li className="text-xs text-gray-600">> Adaptação contínua</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </section>

           {/* Seção 4: Etapas (Timeline Horizontal) */}
           <section className="bg-[#f8f9fa] py-24">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 <div className="flex gap-4 items-center mb-6">
                    <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Nosso trabalho</span>
                    <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                 </div>

                 <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-16 max-w-2xl leading-tight">
                    Conheça as etapas para o sucesso da sua loja no mercado digital.
                 </h2>

                 <div className="relative">
                    {/* Linha conectora (Desktop) */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                       {[
                          { icon: Search, title: "Diagnóstico", desc: "Compreendemos e analisamos os detalhes mais profundos do seu negócio." },
                          { icon: FileText, title: "Relatório", desc: "Entregamos  um relatório com recomendações e pontos de melhoria." },
                          { icon: Rocket, title: "Planejamento", desc: "Montamos um plano de ação considerando o momento e as informações do seu negócio." },
                          { icon: Zap, title: "Execução", desc: "É a hora de colocar tudo em prática, a execução pode ser como serviço ou de forma consultiva." }
                       ].map((step, i) => (
                          <div key={i} className="flex flex-col items-center text-center relative z-10">
                             <div className="w-20 h-20 rounded-full bg-gobee-100 flex items-center justify-center text-gobee-600 mb-6 border-4 border-[#f8f9fa]">
                                <step.icon size={28} />
                             </div>
                             <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                             <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{step.desc}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </section>

           {/* Seção 5: Planos (Cards Grid) */}
           <section className="bg-white py-24">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 <div className="flex gap-4 items-center mb-6">
                    <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Nosso trabalho</span>
                    <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                 </div>

                 <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-16 max-w-3xl leading-tight">
                    Para cada momento do seu negócio um plano personalizado.
                 </h2>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Plan 1 */}
                    <div className="border border-gray-200 rounded-lg p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
                       <h3 className="font-bold text-gray-900 text-lg mb-2">Iniciante</h3>
                       <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                          Criado para empresas que estão busca de otimização e gestão estratégica. Para negócios que já vendem, mas precisam de mais controle e eficiência.
                       </p>
                       <Link to="#contato" className="w-full py-3 border border-gobee-600 text-gobee-600 font-bold text-sm rounded-md text-center hover:bg-gobee-50 mb-8 block">
                          Iniciar agora
                       </Link>
                       <div className="space-y-4">
                          {[
                             "Lojas que faturam sem organização.",
                             "e-Commerces que precisam otimizar lucro.",
                             "Negócios que buscam fidelizar clientes.",
                             "Empreendedores que usam dados.",
                             "Empresas que querem profissionalizar.",
                             "Empresas que buscam ampliar canais."
                          ].map((item, i) => (
                             <div key={i} className="flex gap-3 items-start">
                                <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-600 font-medium">{item}</span>
                             </div>
                          ))}
                       </div>
                    </div>

                    {/* Plan 2 */}
                    <div className="border border-gray-200 rounded-lg p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
                       <h3 className="font-bold text-gray-900 text-lg mb-2">Controle</h3>
                       <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                          Para empreendedores em fase de validação e primeiras vendas. Ideal para quem está começando, com foco em estabelecer a loja, o produto e a operação básica.
                       </p>
                       <Link to="#contato" className="w-full py-3 border border-gobee-600 text-gobee-600 font-bold text-sm rounded-md text-center hover:bg-gobee-50 mb-8 block">
                          Solicitar diagnóstico
                       </Link>
                       <div className="space-y-4">
                          {[
                             "Pequenos empreendedores com uma ideia.",
                             "Lojas físicas que buscam o digital.",
                             "Profissionais liberais.",
                             "Artesãos e criadores de conteúdo.",
                             "Microempresas com baixo orçamento.",
                             "Empreendedores que buscam renda extra."
                          ].map((item, i) => (
                             <div key={i} className="flex gap-3 items-start">
                                <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-600 font-medium">{item}</span>
                             </div>
                          ))}
                       </div>
                    </div>

                    {/* Plan 3 */}
                    <div className="border border-gray-200 rounded-lg p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
                       <h3 className="font-bold text-gray-900 text-lg mb-2">Crescimento/Escala</h3>
                       <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                          Para empresas em fase de expansão e escala. Direcionada para negócios consolidados que buscam novos mercados, inovação e liderança.
                       </p>
                       <Link to="#contato" className="w-full py-3 border border-gobee-600 text-gobee-600 font-bold text-sm rounded-md text-center hover:bg-gobee-50 mb-8 block">
                          Falar com especialista
                       </Link>
                       <div className="space-y-4">
                          {[
                             "Marcas que já são conhecidas.",
                             "Empresas que buscam se expandir.",
                             "Negócios que precisam de infraestrutura.",
                             "Lojas que querem desenvolver produtos.",
                             "Empreendedores que querem uma marca forte.",
                             "Empresas que querem se tornar referência."
                          ].map((item, i) => (
                             <div key={i} className="flex gap-3 items-start">
                                <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-600 font-medium">{item}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </>
      )}

      {/* =========================================================================
          CONTEÚDO ESPECÍFICO: DESENVOLVIMENTO E-COMMERCE (Redesenhado)
         ========================================================================= */}
      {isEcommerceDev && (
        <>
          {/* Seção 1: Clientes */}
          <section className="bg-white py-16 border-b border-gray-100">
             <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-md text-center lg:text-left">
                   <h3 className="text-3xl font-medium text-gray-900 mb-2 tracking-tight">Clientes que já confiam</h3>
                   <p className="text-gray-500 font-light">Conheça algumas das últimas marcas que já confiaram em nossa proposta e contrataram esse serviço.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-10 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-xl font-bold text-gray-800">MAMAZOO</span>
                    <span className="text-xl font-light text-gray-800">KAKAU LOPES</span>
                    <span className="text-xl font-black text-gray-800">KANAWAI</span>
                    <span className="text-xl font-bold text-gray-800 border-2 border-gray-800 rounded-full px-2">OTTO</span>
                    <span className="text-xl font-serif text-gray-800">Romã</span>
                    <span className="text-xl font-serif italic text-gray-800">Palmasul</span>
                </div>
             </div>
          </section>

          {/* Seção 2: O que fazemos? (Grid) */}
          <section className="py-24 bg-[#f8f9fa]">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex gap-4 items-center mb-6">
                   <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">O que fazemos?</span>
                   <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                </div>

                <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight max-w-3xl">
                   Lojas virtuais que acompanham o movimento do seu negócio.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {[
                      { icon: Users, title: "Experiência do usuário", desc: "Aplicamos as melhores práticas de UX Design (user experience) focada na otimização da navegação do usuário." },
                      { icon: Key, title: "Segurança da informações", desc: "Camada de proteção contra ataques maliciosos e gateway de pagamento totalmente integradas às plataformas." },
                      { icon: Smartphone, title: "Mobilidade", desc: "Interface responsiva e otimizada para navegação em dispositivos móveis como tablets e smartphones." },
                      { icon: Puzzle, title: "Design flexível", desc: "Desenvolvemos lojas virtuais para todos os tipos de orçamentos e momentos do seu negócio." },
                      { icon: Zap, title: "Performance e estabilidade", desc: "Páginas otimizadas para diminuir o tempo de carregamento e melhorar a velocidade de navegação do usuário." },
                      { icon: PenTool, title: "Projetos personalizados", desc: "Feitos por especialistas no mercado o que nos permite oferecer um alto nível de personalização dos projetos sem afetar orçamento e os prazos." }
                   ].map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gobee-200 hover:shadow-lg transition-all flex items-start gap-6">
                         <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-gobee-600 border border-gray-100 shadow-sm">
                            <item.icon size={24} strokeWidth={1.5} />
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </section>

          {/* Seção 3: Galeria (Showcase) */}
          <section className="py-24 bg-white">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex gap-4 items-center mb-6">
                   <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Nosso trabalho</span>
                   <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                </div>

                <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight max-w-3xl">
                   Não basta uma boa plataforma de vendas, o sucesso está nos detalhes.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {/* Item 1 */}
                   <div className="group border border-gray-200 p-2 rounded-xl hover:shadow-xl transition-all">
                      <div className="overflow-hidden rounded-lg aspect-[4/3] relative bg-gray-100 flex items-end justify-center">
                         <Monitor size={160} className="text-gray-300 absolute -bottom-10" />
                         <img 
                           src="https://images.unsplash.com/photo-1481487484168-9b930d55208d?auto=format&fit=crop&q=80&w=800" 
                           className="w-[90%] h-[80%] object-cover mb-4 rounded shadow-md z-10"
                           alt="Showcase 1" 
                        />
                      </div>
                   </div>
                   {/* Item 2 */}
                   <div className="group border border-gray-200 p-2 rounded-xl hover:shadow-xl transition-all">
                      <div className="overflow-hidden rounded-lg aspect-[4/3] relative bg-gray-100 flex items-end justify-center">
                         <Monitor size={160} className="text-gray-300 absolute -bottom-10" />
                         <img 
                           src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=800" 
                           className="w-[90%] h-[80%] object-cover mb-4 rounded shadow-md z-10"
                           alt="Showcase 2" 
                        />
                      </div>
                   </div>
                   {/* Item 3 */}
                   <div className="group border border-gray-200 p-2 rounded-xl hover:shadow-xl transition-all">
                      <div className="overflow-hidden rounded-lg aspect-[4/3] relative bg-gray-100 flex items-end justify-center">
                         <Monitor size={160} className="text-gray-300 absolute -bottom-10" />
                         <img 
                           src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" 
                           className="w-[90%] h-[80%] object-cover mb-4 rounded shadow-md z-10"
                           alt="Showcase 3" 
                        />
                      </div>
                   </div>
                   {/* Item 4 */}
                   <div className="group border border-gray-200 p-2 rounded-xl hover:shadow-xl transition-all">
                      <div className="overflow-hidden rounded-lg aspect-[4/3] relative bg-gray-100 flex items-end justify-center">
                         <Monitor size={160} className="text-gray-300 absolute -bottom-10" />
                         <img 
                           src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=800" 
                           className="w-[90%] h-[80%] object-cover mb-4 rounded shadow-md z-10"
                           alt="Showcase 4" 
                        />
                      </div>
                   </div>
                   {/* Item 5 */}
                   <div className="group border border-gray-200 p-2 rounded-xl hover:shadow-xl transition-all">
                      <div className="overflow-hidden rounded-lg aspect-[4/3] relative bg-gray-100 flex items-end justify-center">
                         <Monitor size={160} className="text-gray-300 absolute -bottom-10" />
                         <img 
                           src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800" 
                           className="w-[90%] h-[80%] object-cover mb-4 rounded shadow-md z-10"
                           alt="Showcase 5" 
                        />
                      </div>
                   </div>
                   {/* Item 6 */}
                   <div className="group border border-gray-200 p-2 rounded-xl hover:shadow-xl transition-all">
                      <div className="overflow-hidden rounded-lg aspect-[4/3] relative bg-gray-100 flex items-end justify-center">
                         <Monitor size={160} className="text-gray-300 absolute -bottom-10" />
                         <img 
                           src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                           className="w-[90%] h-[80%] object-cover mb-4 rounded shadow-md z-10"
                           alt="Showcase 6" 
                        />
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Seção 4: Plataformas (Shopify / Nuvemshop) */}
          <section className="py-24 bg-[#f8f9fa]">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex gap-4 items-center mb-6">
                   <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Partner Store</span>
                   <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Criar minha loja virtual com parceiro <ArrowRight size={14}/></Link>
                </div>

                <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight max-w-3xl">
                   Parcerias estratégicas que garantem a qualidade da nossa entrega.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Shopify */}
                   <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                      <img 
                         src="https://images.unsplash.com/photo-1662947234676-e1373e3514ee?auto=format&fit=crop&q=80&w=800" 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         alt="Shopify"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-10 flex flex-col justify-end">
                         <h3 className="text-4xl font-bold text-white mb-4">Shopify</h3>
                         <p className="text-gray-300 text-sm leading-relaxed">
                            A maior plataforma do mundo é globalmente reconhecida, robusta e escalável. Oferece uma grande variedade de temas, um App Store extenso com diversas funcionalidades extras e atende desde pequenos negócios até grandes corporações.
                         </p>
                      </div>
                   </div>

                   {/* Nuvemshop */}
                   <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                      <img 
                         src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         alt="Nuvemshop"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-10 flex flex-col justify-end">
                         <h3 className="text-4xl font-bold text-white mb-4">Nuvemshop</h3>
                         <p className="text-gray-300 text-sm leading-relaxed">
                            Maior plataforma da América Latina, oferece planos para diferentes tamanhos de negócio, desde iniciantes até grandes marcas. É conhecida pela facilidade de uso, diversos layouts e integrações com meios de pagamento e envio.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Seção 5: Mais Parceiros */}
          <section className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <h3 className="text-3xl font-medium text-gray-900 mb-12">Mais parceiros</h3>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all">
                   <span className="text-2xl font-bold text-gray-800 flex items-center gap-1"><div className="bg-gray-800 text-white text-xs px-1 rounded">WOO</div>COMMERCE</span>
                   <span className="text-2xl font-bold text-gray-800 lowercase tracking-tighter">tiny</span>
                   <span className="text-2xl font-bold text-gray-800 tracking-tighter">stripe</span>
                   <span className="text-xl font-medium text-gray-800 italic">melhor envio</span>
                   <span className="text-2xl font-black text-gray-800">bling!</span>
                   <span className="text-xl font-bold text-gray-800 uppercase tracking-widest border border-gray-800 px-2">Frenet</span>
                </div>
             </div>
          </section>

          {/* Seção 6: Planos */}
          <section className="py-24 bg-[#f8f9fa]">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 <div className="flex gap-4 items-center mb-6">
                    <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Nossa plataforma</span>
                    <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Quero criar minha loja virtual <ArrowRight size={14}/></Link>
                 </div>

                 <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-8 max-w-3xl leading-tight">
                    Um plano ideal para cada perfil ou momento do seu negócio.
                 </h2>

                 {/* TAB SWITCHER */}
                 <div className="flex justify-center mb-16">
                    <div className="bg-white border border-gray-200 p-1.5 rounded-full inline-flex shadow-sm">
                       <button 
                          onClick={() => setActiveEcommerceTab('compra')}
                          className={`px-6 md:px-10 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${activeEcommerceTab === 'compra' ? 'bg-gobee-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                       >
                          Compre sua loja virtual
                       </button>
                       <button 
                          onClick={() => setActiveEcommerceTab('assinatura')}
                          className={`px-6 md:px-10 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${activeEcommerceTab === 'assinatura' ? 'bg-gobee-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                       >
                          Sua loja virtual por assinatura
                       </button>
                    </div>
                 </div>

                 {/* TAB CONTENT: COMPRA (EXISTING) */}
                 {activeEcommerceTab === 'compra' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Social Store */}
                        <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow flex flex-col rounded-3xl">
                           <h3 className="font-bold text-gray-900 text-lg mb-2">Social Store</h3>
                           <p className="text-xs text-gray-500 mb-6 leading-relaxed min-h-[40px]">
                              Cadastre e disponibilize seus produtos em um catálogo integrado a suas redes sociais.
                           </p>
                           <Link to="#contato" className="w-full py-3 border border-gobee-600 text-gobee-600 font-bold text-sm text-center hover:bg-gobee-50 mb-8 block rounded-xl">
                              Iniciar agora
                           </Link>
                           <div className="space-y-3 flex-grow">
                              {["Domínio próprio", "Sistema logístico", "Meios de Pagamento", "Treinamento", "Página de produtos"].map(i => (
                                 <div key={i} className="flex gap-2 items-center"><Check size={14} className="text-green-500" /><span className="text-xs text-gray-700">{i}</span></div>
                              ))}
                              {["Página institucional", "Página home", "Página de contato", "Inclusão de páginas", "Layout (Catálogo)"].map(i => (
                                 <div key={i} className="flex gap-2 items-center opacity-40"><span className="text-red-400 text-xs font-bold">✕</span><span className="text-xs text-gray-700 line-through">{i}</span></div>
                              ))}
                              <div className="flex gap-2 items-center"><Check size={14} className="text-green-500" /><span className="text-xs text-gray-700">Suporte Técnico (E-mail e Ticket)</span></div>
                              <div className="flex gap-2 items-center"><Check size={14} className="text-green-500" /><span className="text-xs text-gray-700">Assessoria para configuração (5 horas)</span></div>
                           </div>
                           <div className="bg-gray-50 text-center text-[10px] text-gray-500 py-2 mt-6 rounded-xl">Prazo de entrega: 48 horas</div>
                        </div>

                        {/* Fast Store */}
                        <div className="bg-white p-8 border-2 border-gobee-400 hover:shadow-xl transition-shadow flex flex-col relative transform scale-105 shadow-lg z-10 rounded-3xl overflow-hidden">
                           <div className="absolute top-0 left-0 w-full h-1 bg-gobee-600"></div>
                           <h3 className="font-bold text-gray-900 text-lg mb-2">Fast Store</h3>
                           <p className="text-xs text-gray-500 mb-6 leading-relaxed min-h-[40px]">
                              Escolha um dos nossos temas e personalize com a identidade visual da sua empresa.
                           </p>
                           <Link to="#contato" className="w-full py-3 border border-gobee-600 text-gobee-600 font-bold text-sm text-center hover:bg-gobee-50 mb-8 block rounded-xl">
                              Iniciar agora
                           </Link>
                           <div className="space-y-3 flex-grow">
                              {["Domínio próprio", "Sistema logístico", "Meios de Pagamento", "Treinamento", "Página de produtos", "Página institucional", "Página home", "Página de contato", "Inclusão de páginas", "Layout (Temas)", "Suporte Técnico (E-mail e Ticket)", "Assessoria para configuração (10 horas)"].map(i => (
                                 <div key={i} className="flex gap-2 items-center"><Check size={14} className="text-green-500" /><span className="text-xs text-gray-700">{i}</span></div>
                              ))}
                           </div>
                           <div className="bg-gray-50 text-center text-[10px] text-gray-500 py-2 mt-6 rounded-xl">Prazo de entrega: 10 dias úteis</div>
                        </div>

                        {/* Custom Store */}
                        <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow flex flex-col rounded-3xl">
                           <h3 className="font-bold text-gray-900 text-lg mb-2">Custom Store</h3>
                           <p className="text-xs text-gray-500 mb-6 leading-relaxed min-h-[40px]">
                              Construímos um layout do zero alinhado a personalidade da sua marca.
                           </p>
                           <Link to="#contato" className="w-full py-3 border border-gobee-600 text-gobee-600 font-bold text-sm text-center hover:bg-gobee-50 mb-8 block rounded-xl">
                              Entre em contato
                           </Link>
                           <div className="space-y-3 flex-grow">
                              {["Domínio próprio", "Sistema logístico", "Meios de Pagamento", "Treinamento", "Página de produtos", "Página institucional", "Página home", "Página de contato", "Inclusão de páginas", "Layout (Personalizado)", "Suporte Técnico (E-mail e Ticket)", "Assessoria para configuração (20 horas)"].map(i => (
                                 <div key={i} className="flex gap-2 items-center"><Check size={14} className="text-green-500" /><span className="text-xs text-gray-700">{i}</span></div>
                              ))}
                           </div>
                           <div className="bg-gray-50 text-center text-[10px] text-gray-500 py-2 mt-6 rounded-xl">Prazo de entrega: 20 a 30 dias úteis</div>
                        </div>
                    </div>
                 )}

                 {/* TAB CONTENT: ASSINATURA (NEW) */}
                 {activeEcommerceTab === 'assinatura' && (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Assinatura Plan 1: Social Store */}
                        <div className="border border-gray-300 rounded-3xl p-8 flex flex-col h-full hover:shadow-lg transition-shadow bg-white">
                           <h3 className="font-bold text-gray-900 text-lg mb-4">Social Store</h3>
                           <div className="flex items-baseline gap-1 mb-2">
                              <span className="text-4xl font-bold text-gray-900">R$ 149,00</span>
                              <span className="text-xs text-gray-500">/mês</span>
                           </div>
                           <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                              Para negócios que estão começando e querem fortalecer suas vendas usando as redes sociais.
                           </p>
                           <Link to="#contato" className="w-full sm:w-auto px-8 py-3 border border-gobee-600 text-gobee-600 font-bold text-sm rounded-xl text-center hover:bg-gobee-50 mb-8 block self-start">
                              Conheça mais
                           </Link>
                           <div className="space-y-4 pt-4 border-t border-gray-100 flex-grow">
                              {[
                                 "Tudo do plano Social Store +",
                                 "Hospedagem incluída",
                                 "Manutenção preventiva",
                                 "Integração com redes sociais",
                                 "Suporte por e-mail e chat"
                              ].map((item, i) => (
                                 <div key={i} className="flex gap-3 items-center">
                                    <div className="w-4 h-4 rounded-full border border-gobee-500 flex items-center justify-center shrink-0">
                                       <Check size={10} className="text-gobee-500" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                                 </div>
                              ))}
                           </div>
                           <div className="bg-gray-50 text-center text-[10px] text-gray-500 py-3 mt-8 border-t border-gray-100 rounded-xl">
                              O valor do plano corresponde a assinatura no contrato anual.
                           </div>
                        </div>

                        {/* Assinatura Plan 2: Fast Store */}
                        <div className="border border-gray-300 rounded-3xl p-8 flex flex-col h-full hover:shadow-lg transition-shadow bg-white">
                           <h3 className="font-bold text-gray-900 text-lg mb-4">Fast Store</h3>
                           <div className="flex items-baseline gap-1 mb-2">
                              <span className="text-4xl font-bold text-gray-900">R$ 249,00</span>
                              <span className="text-xs text-gray-500">/mês</span>
                           </div>
                           <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                              Página completa e personalizada com a identidade da sua marca, por um valor de mensalidade imperdível.
                           </p>
                           <Link to="#contato" className="w-full sm:w-auto px-8 py-3 border border-gobee-600 text-gobee-600 font-bold text-sm rounded-xl text-center hover:bg-gobee-50 mb-8 block self-start">
                              Conheça mais
                           </Link>
                           <div className="space-y-4 pt-4 border-t border-gray-100 flex-grow">
                              {[
                                 "Tudo do plano Fast Store +",
                                 "Hospedagem incluída",
                                 "Manutenções preventivas",
                                 "Integração com redes sociais",
                                 "Suporte por e-mail e chat"
                              ].map((item, i) => (
                                 <div key={i} className="flex gap-3 items-center">
                                    <div className="w-4 h-4 rounded-full border border-gobee-500 flex items-center justify-center shrink-0">
                                       <Check size={10} className="text-gobee-500" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                                 </div>
                              ))}
                           </div>
                           <div className="bg-gray-50 text-center text-[10px] text-gray-500 py-3 mt-8 border-t border-gray-100 rounded-xl">
                              O valor do plano corresponde a assinatura no contrato anual.
                           </div>
                        </div>
                     </div>
                 )}
              </div>
           </section>
        </>
      )}

      {/* =========================================================================
          CONTEÚDO ESPECÍFICO: E-MARKETING (Redesenhado)
         ========================================================================= */}
      {isEmarketing && (
        <>
           {/* Seção 1: Clientes (Barra Branca) */}
           <section className="bg-white py-16 border-b border-gray-100">
             <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-md text-center lg:text-left">
                   <h3 className="text-3xl font-medium text-gray-900 mb-2 tracking-tight">Clientes que já confiam</h3>
                   <p className="text-gray-500 font-light">Conheça algumas das últimas marcas que já confiaram em nossa proposta e contrataram esse serviço.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-10 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-xl font-bold text-gray-800">MAMAZOO</span>
                    <span className="text-xl font-black text-gray-800">KANAWAI</span>
                    <span className="text-xl font-mono text-gray-800 uppercase">Floripa Boho</span>
                    <span className="text-xl font-serif text-gray-800">Kaiera</span>
                    <span className="text-xl font-serif text-gray-800">Romã</span>
                    <span className="text-xl font-bold text-gray-800 flex items-center gap-1"><div className="w-4 h-4 bg-gray-800 rounded-sm"></div>Store</span>
                </div>
             </div>
          </section>

           {/* Seção 2: O que fazemos? (Grid Cards) */}
           <section className="py-24 bg-[#f8f9fa]">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex gap-4 items-center mb-6">
                   <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">O que fazemos?</span>
                   <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Fale com especialista <ArrowRight size={14}/></Link>
                </div>

                <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight max-w-3xl">
                   Dê movimento a sua marca com estratégias de marketing digital.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {[
                      { icon: Star, title: "Campanhas de anúncios", desc: "Amplie sua base de clientes, atingindo um público segmentado além da sua rede atual." },
                      { icon: Megaphone, title: "Nutrição e retenção", desc: "Mantenha seus contatos sempre informados sobre as últimas novidades de sua marca e produtos." },
                      { icon: MessageSquare, title: "Análise competitiva", desc: "Mapeie seus concorrentes e torne seus produtos mais competitivos no mercado." },
                      { icon: FileText, title: "Remarketing e retargeting", desc: "Entenda os hábitos de consumo e envie para seu cliente as ofertas certas, no momento mais oportuno." },
                      { icon: Target, title: "Fluxo de conteúdo", desc: "Organiza e planeje seu fluxo de conteúdo e torne sua comunicação mais assertiva." },
                      { icon: Gem, title: "Jornada de compra", desc: "Tenha a visão correta do momento do seu cliente, e direcione corretamente sua estratégia." }
                   ].map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-sm border border-gray-200 hover:border-gobee-200 hover:shadow-lg transition-all flex items-start gap-6">
                         <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-gobee-600 border border-gray-100 shadow-sm">
                            <item.icon size={24} strokeWidth={1.5} />
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
           </section>

           {/* Seção 3: Serviços (Icons Row) */}
           <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 <div className="flex gap-4 items-center mb-6">
                    <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Serviços</span>
                    <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Quero saber mais <ArrowRight size={14}/></Link>
                 </div>

                 <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight max-w-3xl">
                    Serviços feitos para impulsionar os resultados do seu negócio.
                 </h2>

                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                       { title: "Gestão de tráfego pago", icon: MousePointerClick },
                       { title: "Gestão de mídias sociais", icon: Heart },
                       { title: "Experiência automatizada", icon: Share2 },
                       { title: "Otimização para busca (SEO)", icon: Search },
                       { title: "Otimização da taxa de conversão (CRO)", icon: BarChart3 },
                       { title: "Análise e inteligência de dados", icon: PieChart },
                    ].map((item, i) => (
                       <div key={i} className="border border-gray-200 p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all h-[180px] hover:border-gobee-200">
                          <div className="mb-4 text-gray-800">
                             <item.icon size={32} strokeWidth={1.5} />
                          </div>
                          <h4 className="text-xs font-bold text-gray-900">{item.title}</h4>
                       </div>
                    ))}
                 </div>
              </div>
           </section>

           {/* Seção 4: Partners (Big Logos) */}
           <section className="py-20 bg-[#f8f9fa]">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 <div className="flex gap-4 items-center mb-10">
                    <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Parceiros</span>
                    <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Quero saber mais <ArrowRight size={14}/></Link>
                 </div>
                <h3 className="text-3xl md:text-5xl font-medium text-gray-900 mb-12">Estamos ao lado dos maiores do mercado.</h3>
                
                <div className="flex flex-wrap justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
                   <div className="flex items-center gap-2 font-bold text-gray-600 text-xl"><div className="w-6 h-6 rounded-full bg-gray-400"></div> Google Ads</div>
                   <div className="font-bold text-gray-600 text-xl">ActiveCampaign &gt;</div>
                   <div className="font-bold text-gray-600 text-xl flex items-center gap-1">∞ Meta</div>
                   <div className="font-bold text-gray-600 text-xl flex items-center gap-1"><span className="text-black">TikTok</span> Ads</div>
                   <div className="font-bold text-gray-600 text-xl flex items-center gap-1"><div className="w-4 h-4 bg-orange-500 rounded-full"></div> SEMRUSH</div>
                   <div className="font-bold text-gray-600 text-xl flex items-center gap-1"><div className="w-4 h-3 bg-black"></div> edrone</div>
                </div>
             </div>
          </section>

          {/* Seção 5: Portfolio Visual */}
          <section className="py-24 bg-white">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex gap-4 items-center mb-6">
                    <span className="border border-gobee-600 text-gobee-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Serviços</span>
                    <Link to="#contato" className="text-gray-500 text-sm hover:text-gobee-600 flex items-center gap-1">Quero saber mais <ArrowRight size={14}/></Link>
                 </div>

                 <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight max-w-3xl">
                    Serviços feitos para impulsionar os resultados do seu negócio.
                 </h2>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative group">
                       <img src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Portfolio 1" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                       <div className="absolute bottom-4 right-4 text-white font-bold text-2xl drop-shadow-lg">Romã</div>
                    </div>
                    <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative group">
                       <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Portfolio 2" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                       <div className="absolute bottom-4 right-4 text-white font-bold text-2xl drop-shadow-lg">Costurando</div>
                    </div>
                    <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative group">
                       <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Portfolio 3" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                       <div className="absolute bottom-4 right-4 text-white font-bold text-2xl drop-shadow-lg text-right">FLORIPA<br/>BOHO</div>
                    </div>
                    <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative group">
                       <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Portfolio 4" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                       <div className="absolute bottom-4 right-4 text-white font-bold text-2xl drop-shadow-lg">MAMAZOO</div>
                    </div>
                    <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative group">
                       <img src="https://images.unsplash.com/photo-1529139574466-a302c27e0169?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Portfolio 5" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                       <div className="absolute bottom-4 right-4 text-white font-bold text-2xl drop-shadow-lg">Kaierva Kinis</div>
                    </div>
                    <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative group">
                       <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Portfolio 6" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                       <div className="absolute bottom-4 right-4 text-white font-bold text-2xl drop-shadow-lg">G store</div>
                    </div>
                 </div>
             </div>
          </section>
        </>
      )}

      {/* =========================================================================
          CONTEÚDO GENÉRICO (Fallback style aligned)
         ========================================================================= */}
      {!isGestaoEcommerce && !isEbranding && !isEcommerceDev && !isEmarketing && genericData && (
        <section className="py-12 -mt-12 relative z-20 px-6 lg:px-8 flex-grow">
           <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-xl p-8 md:p-16">
              <div className="max-w-4xl mx-auto">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre o serviço</h2>
                 <p className="text-lg text-gray-600 leading-relaxed mb-12 font-light">
                    {genericData.content}
                 </p>

                 <h3 className="text-xl font-bold text-gray-900 mb-6">Principais Características</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {genericData.features.map((feature, index) => (
                       <div key={index} className="flex items-center gap-4 p-5 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-gray-100 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-white text-gobee-600 flex items-center justify-center shadow-sm">
                             <CheckCircle2 size={20} />
                          </div>
                          <span className="font-medium text-gray-800">{feature}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      )}

      {/* 4. CONTATO FINAL (Standardized) */}
      <div className="pb-24 bg-white mt-auto">
        <ContactSection serviceName={heroContent.title ? heroContent.title.toString() : 'Serviço'} />
      </div>

    </div>
  );
};

export default ServiceDetail;
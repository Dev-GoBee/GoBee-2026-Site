import React from 'react';
import ContactSection from '../components/ContactSection';

const About: React.FC = () => {
  return (
    <div className="font-sans bg-white flex flex-col">
      
      {/* 1. HERO SECTION - Red Background (Aligned with Home) */}
      <section className="relative bg-gobee-600 pt-32 pb-12 lg:pt-40 lg:pb-32 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
           <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
             Sobre nós
           </h1>
           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
             Conheça a história e os valores que movem nossa paixão por tecnologia e resultados.
           </p>
        </div>
      </section>

      {/* 2. INTRODUÇÃO & TEXTO */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
               <span className="text-gobee-600 font-bold uppercase tracking-wider text-sm mb-4 block">
                 Quem somos
               </span>
               <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight tracking-tight">
                 Transformamos suas ideias em negócios.
               </h2>
               <p className="text-lg text-gray-600 leading-relaxed font-light text-justify md:text-left">
                 Somos uma martech sediada em Florianópolis/SC, junto ao parque de inovação <span className="font-bold text-gray-900">Sapiens Parque</span>, que tem como objetivo contribuir para que empresas se estabeleçam no mercado digital através de marketing e tecnologia. Nossos serviços visam a criação e o fortalecimento de marcas, excelência na experiência de compra e estratégias eficientes de marketing digital com foco no crescimento sustentável dos nossos clientes e do mercado de varejo online de uma forma geral.
               </p>
            </div>
         </div>
      </section>

      {/* 3. GRID DE CULTURA (FOTO + CARDS) */}
      <section className="pb-24 px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 h-full">
               
               {/* Imagem do Prédio (Esquerda) */}
               <div className="lg:w-1/3">
                  <div className="h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-lg relative group">
                     <img 
                       src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                       alt="Sede Sapiens Parque" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                     <div className="absolute bottom-8 left-8 text-white text-sm font-medium">
                        Sede Sapiens Parque - Floripa/SC
                     </div>
                  </div>
               </div>

               {/* Grid de Cards (Direita) */}
               <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Card Propósito (Vermelho) */}
                  <div className="bg-gobee-600 p-8 rounded-[3rem] text-white flex flex-col justify-between shadow-lg hover:shadow-gobee-200 transition-shadow">
                     <div>
                        <h3 className="text-2xl font-bold mb-4">Propósito</h3>
                        <p className="text-white/90 leading-relaxed font-light">
                           Transformar o potencial de empreendedores e negócios, desenvolvendo pessoas.
                        </p>
                     </div>
                  </div>

                  {/* Card Missão (Branco) */}
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-[3rem] text-gray-900 flex flex-col justify-between hover:border-gobee-200 transition-colors">
                     <div>
                        <h3 className="text-2xl font-bold mb-4">Missão</h3>
                        <p className="text-gray-600 leading-relaxed font-light text-sm">
                           Impulsionar negócios digitais com soluções integradas para experiências otimizadas e escaláveis, focadas em dados estratégicos.
                        </p>
                     </div>
                  </div>

                  {/* Card Visão (Branco) */}
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-[3rem] text-gray-900 flex flex-col justify-between hover:border-gobee-200 transition-colors">
                     <div>
                        <h3 className="text-2xl font-bold mb-4">Visão</h3>
                        <p className="text-gray-600 leading-relaxed font-light text-sm">
                           Ser reconhecido nacional e internacionalmente pela qualidade, resultados para clientes e responsabilidade com colaboradores.
                        </p>
                     </div>
                  </div>

                  {/* Card Valores (Branco) */}
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-[3rem] text-gray-900 flex flex-col justify-between hover:border-gobee-200 transition-colors">
                     <div>
                        <h3 className="text-2xl font-bold mb-4">Valores</h3>
                        <p className="text-gray-600 leading-relaxed font-light text-sm">
                           Comprometimento, qualidade, eficiência, lealdade, colaboração e sustentabilidade.
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>

      {/* 4. SEÇÃO "COMO PENSAMOS" & FOTO TIME */}
      <section className="py-24 bg-[#f5f5f5]">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="text-gobee-600 font-bold uppercase tracking-wider text-sm mb-4 block">
                 Como pensamos
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight max-w-3xl">
               Transformamos suas ideias em uma marca de impacto.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               
               {/* Coluna Esquerda: Texto + Imagem */}
               <div className="flex flex-col gap-6">
                  {/* Cards de Texto */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg text-gray-900 mb-3">Inovação</h3>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                           Digitalizamos PMEs, nacionais e internacionais, impulsionando sua presença no mercado digital com marketing e tecnologia.
                        </p>
                     </div>
                     <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg text-gray-900 mb-3">Foco</h3>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                           Cultivamos conexões autênticas com clientes e time, construindo parcerias duradouras para o sucesso mútuo.
                        </p>
                     </div>
                  </div>

                  {/* Imagem Ambiente (Mural) */}
                  <div className="rounded-[3rem] overflow-hidden shadow-lg h-[300px]">
                      <img 
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" 
                        alt="Ambiente Criativo" 
                        className="w-full h-full object-cover"
                      />
                  </div>
               </div>

               {/* Coluna Direita: Foto Time + Stats */}
               <div className="flex flex-col gap-6 h-full">
                  <div className="rounded-[3rem] overflow-hidden shadow-lg flex-grow min-h-[300px]">
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                        alt="Time Gobee" 
                        className="w-full h-full object-cover"
                      />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                     <div className="bg-white p-8 rounded-[3rem] border border-gray-100 flex flex-col justify-center items-center text-center shadow-sm">
                        <span className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-2">100%</span>
                        <span className="text-xs text-gray-500 uppercase font-bold">satisfeitos com o modelo</span>
                     </div>
                     <div className="bg-gobee-600 p-8 rounded-[3rem] flex flex-col justify-center items-center text-center shadow-lg text-white">
                        <span className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">+12</span>
                        <span className="text-xs text-white/80 uppercase font-bold">empreendedores pelo mundo</span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 5. CLIENTES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-medium text-gray-900 mb-2">Conheça nossos clientes mais recentes</h3>
          <p className="text-sm text-gray-500 mb-12 flex items-center justify-center gap-1 cursor-pointer hover:underline">
            Veja nossos estudos de caso <span className="text-xs">›</span>
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-serif font-bold text-gray-800">Rommanel</span>
             <span className="text-xl font-sans font-black tracking-tighter text-gray-800">KANAWAI</span>
             <span className="text-lg font-mono text-gray-800 uppercase">Floripa Boho</span>
             <span className="text-xl font-serif italic text-gray-800">Palmasul</span>
             <span className="text-xl font-bold text-gray-800">MAMAZOO</span>
             <span className="text-xl font-bold text-gray-800">DaiPujol</span>
             <span className="text-xl font-serif text-gray-800">Kaiera</span>
             <span className="text-xl font-bold text-gray-800 flex items-center gap-1"><div className="w-4 h-4 bg-gray-800 rounded-sm"></div>Store</span>
             <span className="text-xl font-light text-gray-800">JacyDesign</span>
             <span className="text-lg font-bold text-gray-800">Priscila</span>
          </div>
        </div>
      </section>

      {/* 6. CONTATO */}
      <div className="pb-24 bg-white">
         <ContactSection serviceName="Página Sobre Nós" />
      </div>

    </div>
  );
};

export default About;
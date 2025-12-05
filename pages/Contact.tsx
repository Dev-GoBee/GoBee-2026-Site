import React, { useState } from 'react';
import { 
  Mail, Facebook, Instagram, Linkedin, Twitter, MessageCircle, 
  Youtube, Video, Share2, Loader2, CheckCircle2, ChevronLeft, ChevronRight, Quote, User, Building2 
} from 'lucide-react';
import { submitLeadToExternalSystem } from '../api';

const Contact: React.FC = () => {
  const [personType, setPersonType] = useState<'PF' | 'PJ'>('PJ');
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    empresa: '',
    site: '',
    assunto: '',
    pergunta: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitLeadToExternalSystem({
        service: 'Página de Contato',
        name: `${formData.nome} ${formData.sobrenome}`,
        email: formData.email,
        timestamp: new Date().toISOString(),
        phone: formData.telefone,
        company: personType === 'PJ' ? formData.empresa : undefined,
        site: personType === 'PJ' ? formData.site : undefined,
        personType: personType,
        extra: {
           assunto: formData.assunto,
           mensagem: formData.pergunta
        }
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="font-sans bg-white flex flex-col min-h-screen">
      
      {/* 1. HERO & FORM SECTION */}
      <section className="relative bg-gobee-600 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
               
               {/* Left Column: Text & Info */}
               <div className="lg:w-5/12 text-white">
                  <h1 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight leading-tight">
                    Somos sua estratégia de e-commerce.
                  </h1>
                  <p className="text-white/90 text-lg font-light leading-relaxed mb-10">
                    Preencha o formulário ao lado que em breve nossa equipe estrará em contato ou se preferir encaminhe uma mensagem direta pelo e-mail abaixo:
                  </p>

                  {/* Info Card */}
                  <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg mb-10 max-w-md">
                     <h3 className="font-bold text-lg mb-2">Comercial</h3>
                     <div className="flex items-center gap-3 text-gray-600">
                        <Mail size={18} />
                        <a href="mailto:comercial@gobee.com.br" className="hover:text-gobee-600 transition-colors">
                           Envie mensagem para comercial@gobee.com.br
                        </a>
                     </div>
                  </div>

                  {/* Social Share */}
                  <div>
                     <p className="text-sm text-white/80 mb-4">Compartilhe em suas redes:</p>
                     <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-gobee-600 flex items-center justify-center transition-all text-white">
                           <Facebook size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-gobee-600 flex items-center justify-center transition-all text-white">
                           <Twitter size={18} /> {/* X icon replacement */}
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-gobee-600 flex items-center justify-center transition-all text-white">
                           <Linkedin size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-gobee-600 flex items-center justify-center transition-all text-white">
                           <MessageCircle size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-gobee-600 flex items-center justify-center transition-all text-white">
                           <Share2 size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-gobee-600 flex items-center justify-center transition-all text-white">
                           <Mail size={18} />
                        </button>
                     </div>
                  </div>
               </div>

               {/* Right Column: Form */}
               <div className="lg:w-7/12 w-full">
                  <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
                     {status === 'success' ? (
                        <div className="text-center py-20 animate-fade-in">
                           <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                              <CheckCircle2 size={40} className="text-green-500" />
                           </div>
                           <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                           <p className="text-gray-500 mb-8">
                              Obrigado pelo contato. Responderemos o mais breve possível.
                           </p>
                           <button onClick={() => setStatus('idle')} className="text-gobee-600 font-bold hover:underline">
                              Enviar nova mensagem
                           </button>
                        </div>
                     ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                           {/* Seletor PF / PJ */}
                           <div className="flex bg-gray-50 p-1 rounded-lg mb-2">
                             <button
                               type="button"
                               onClick={() => setPersonType('PF')}
                               className={`flex-1 flex items-center justify-center gap-2 py-2 rounded text-sm font-bold transition-all ${personType === 'PF' ? 'bg-white shadow-sm text-gobee-600' : 'text-gray-400 hover:text-gray-600'}`}
                             >
                               <User size={16} /> Pessoa Física
                             </button>
                             <button
                               type="button"
                               onClick={() => setPersonType('PJ')}
                               className={`flex-1 flex items-center justify-center gap-2 py-2 rounded text-sm font-bold transition-all ${personType === 'PJ' ? 'bg-white shadow-sm text-gobee-600' : 'text-gray-400 hover:text-gray-600'}`}
                             >
                               <Building2 size={16} /> Pessoa Jurídica
                             </button>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                 <input 
                                    type="text" 
                                    name="nome"
                                    placeholder={personType === 'PJ' ? "Nome do Responsável" : "Seu nome"}
                                    className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:border-gobee-500 focus:ring-1 focus:ring-gobee-500 text-sm text-gray-900"
                                    required
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                 />
                              </div>
                              <div>
                                 <input 
                                    type="text" 
                                    name="sobrenome"
                                    placeholder="Sobrenome"
                                    className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:border-gobee-500 focus:ring-1 focus:ring-gobee-500 text-sm text-gray-900"
                                    required
                                    value={formData.sobrenome}
                                    onChange={handleInputChange}
                                 />
                              </div>
                           </div>
                           
                           <div>
                              <input 
                                 type="text" 
                                 name="telefone"
                                 placeholder="WhatsApp / Telefone"
                                 className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:border-gobee-500 focus:ring-1 focus:ring-gobee-500 text-sm text-gray-900"
                                 required
                                 value={formData.telefone}
                                 onChange={handleInputChange}
                              />
                           </div>

                           <div>
                              <input 
                                 type="email" 
                                 name="email"
                                 placeholder={personType === 'PJ' ? "E-mail Corporativo" : "Seu E-mail"}
                                 className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:border-gobee-500 focus:ring-1 focus:ring-gobee-500 text-sm text-gray-900"
                                 required
                                 value={formData.email}
                                 onChange={handleInputChange}
                              />
                           </div>

                           {personType === 'PJ' && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                                 <div>
                                    <input 
                                       type="text" 
                                       name="empresa"
                                       placeholder="Nome da Empresa"
                                       className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:border-gobee-500 focus:ring-1 focus:ring-gobee-500 text-sm text-gray-900"
                                       required
                                       value={formData.empresa}
                                       onChange={handleInputChange}
                                    />
                                 </div>
                                 <div>
                                    <input 
                                       type="text" 
                                       name="site"
                                       placeholder="Site ou Instagram da Empresa"
                                       className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:border-gobee-500 focus:ring-1 focus:ring-gobee-500 text-sm text-gray-900"
                                       value={formData.site}
                                       onChange={handleInputChange}
                                    />
                                 </div>
                              </div>
                           )}

                           <div>
                              <input 
                                 type="text" 
                                 name="assunto"
                                 placeholder="Assunto"
                                 className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:border-gobee-500 focus:ring-1 focus:ring-gobee-500 text-sm text-gray-900"
                                 required
                                 value={formData.assunto}
                                 onChange={handleInputChange}
                              />
                           </div>

                           <div>
                              <textarea 
                                 name="pergunta"
                                 placeholder="Sua mensagem"
                                 rows={4}
                                 className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:border-gobee-500 focus:ring-1 focus:ring-gobee-500 text-sm resize-none text-gray-900"
                                 required
                                 value={formData.pergunta}
                                 onChange={handleInputChange}
                              ></textarea>
                           </div>
                           
                           <button 
                              type="submit" 
                              disabled={status === 'loading'}
                              className="w-full bg-gobee-600 text-white font-bold py-3 rounded hover:bg-gobee-700 transition-colors flex justify-center items-center gap-2"
                           >
                              {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'Enviar mensagem'}
                           </button>
                        </form>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 2. SOCIAL FOLLOW SECTION */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-500 mb-6 hover:border-gobee-200 transition-colors cursor-default">
               <span className="text-gobee-600">👍</span> Siga nossas redes sociais
            </div>
            
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-16 tracking-tight leading-tight">
               Acompanhe as novidades em nossas redes sociais.
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
               {[
                  { icon: Facebook, color: 'hover:text-blue-600 hover:border-blue-600' },
                  { icon: Instagram, color: 'hover:text-pink-600 hover:border-pink-600' },
                  { icon: Linkedin, color: 'hover:text-blue-700 hover:border-blue-700' },
                  { icon: Video, color: 'hover:text-black hover:border-black' }, // TikTok placeholder
                  { icon: Youtube, color: 'hover:text-red-600 hover:border-red-600' },
                  { icon: Share2, color: 'hover:text-blue-500 hover:border-blue-500' } // Behance placeholder
               ].map((social, idx) => (
                  <a 
                     key={idx} 
                     href="#" 
                     className={`w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                     <social.icon size={28} strokeWidth={1.5} />
                  </a>
               ))}
            </div>
         </div>
      </section>

      {/* 3. TESTIMONIAL (DARK SECTION) */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
         {/* Abstract background lines */}
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>

         <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block bg-gobee-600 p-3 rounded-lg mb-8 shadow-lg shadow-gobee-900/50">
               <Quote className="text-white fill-current" size={24} />
            </div>
            
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-12">
               "A disponibilidade é um grande diferencial da GoBee. Sempre que tenho dúvidas ou preciso de um auxílio sou atendida. Estou muito satisfeita com a minha escolha."
            </blockquote>

            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full border-2 border-white/20 p-1 mb-4">
                  <img 
                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
                     alt="Jacy Design" 
                     className="w-full h-full rounded-full object-cover"
                  />
               </div>
               <h4 className="text-white font-bold text-lg">Jacy Oliveira</h4>
               <p className="text-gray-400 text-sm">Jacy Design</p>
            </div>

            {/* Navigation Arrows (Visual only) */}
            <div className="absolute top-1/2 left-4 md:left-0 -translate-y-1/2 text-white/20 hover:text-white cursor-pointer transition-colors hidden md:block">
               <ChevronLeft size={48} />
            </div>
            <div className="absolute top-1/2 right-4 md:right-0 -translate-y-1/2 text-white/20 hover:text-white cursor-pointer transition-colors hidden md:block">
               <ChevronRight size={48} />
            </div>
         </div>
      </section>

    </div>
  );
};

export default Contact;
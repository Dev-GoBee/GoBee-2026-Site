import React, { useState } from 'react';
import { Loader2, CheckCircle2, ArrowRight, User, Building2 } from 'lucide-react';
import { submitLeadToExternalSystem } from '../api';

interface ContactSectionProps {
  serviceName?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ serviceName = 'Contato Geral' }) => {
  const [personType, setPersonType] = useState<'PF' | 'PJ'>('PJ'); // Default PJ (B2B focus)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    site: '',
    termos: false
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termos) return;
    
    setStatus('loading');
    try {
      await submitLeadToExternalSystem({
        service: serviceName,
        name: formData.nome,
        email: formData.email,
        timestamp: new Date().toISOString(),
        phone: formData.telefone,
        company: personType === 'PJ' ? formData.empresa : undefined,
        site: personType === 'PJ' ? formData.site : undefined,
        personType: personType
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
      <section id="contato" className="relative">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-24">
            <div className="bg-gobee-600 rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
               
               {/* Decorative Circles */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black opacity-10 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none"></div>

               {/* Left: Text */}
               <div className="lg:w-1/2 text-white relative z-10">
                  <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight tracking-tight">
                    Vamos transformar <br />
                    seu negócio?
                  </h2>
                  <p className="text-white/80 leading-relaxed max-w-lg text-lg font-light mb-10">
                    Solicite um diagnóstico gratuito. Analisamos sua presença digital e propomos uma estratégia de crescimento personalizada.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                     <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                        <div className="w-12 h-12 rounded-full bg-white text-gobee-600 flex items-center justify-center font-bold">1</div>
                        <div>
                           <p className="font-bold">Diagnóstico</p>
                           <p className="text-sm text-white/70">Análise do cenário atual</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                        <div className="w-12 h-12 rounded-full bg-white text-gobee-600 flex items-center justify-center font-bold">2</div>
                        <div>
                           <p className="font-bold">Planejamento</p>
                           <p className="text-sm text-white/70">Plano de ação focado em ROI</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right: Form Card */}
               <div className="lg:w-1/2 w-full relative z-10">
                  <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg">
                     {status === 'success' ? (
                       <div className="text-center py-12 animate-fade-in">
                          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                              <CheckCircle2 size={48} className="text-green-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Tudo certo!</h3>
                          <p className="text-gray-500 mt-2 mb-8 max-w-xs mx-auto">
                              Recebemos suas informações. Em breve um de nossos especialistas entrará em contato.
                          </p>
                          <button onClick={() => setStatus('idle')} className="px-8 py-3 rounded-full bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors">
                              Voltar
                          </button>
                       </div>
                     ) : (
                       <form className="space-y-4" onSubmit={handleSubmit}>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Preencha seus dados</h3>

                          {/* Seletor PF / PJ */}
                          <div className="flex bg-gray-50 p-1 rounded-xl mb-6">
                            <button
                              type="button"
                              onClick={() => setPersonType('PF')}
                              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${personType === 'PF' ? 'bg-white shadow-sm text-gobee-600' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                              <User size={16} /> Pessoa Física
                            </button>
                            <button
                              type="button"
                              onClick={() => setPersonType('PJ')}
                              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${personType === 'PJ' ? 'bg-white shadow-sm text-gobee-600' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                              <Building2 size={16} /> Pessoa Jurídica
                            </button>
                          </div>
                          
                          <input 
                            type="text" 
                            name="nome"
                            placeholder={personType === 'PJ' ? "Nome do Responsável" : "Nome Completo"}
                            required
                            value={formData.nome}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-gobee-500 focus:ring-2 focus:ring-gobee-100 p-4 text-base rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900"
                          />
                          
                          <input 
                            type="email" 
                            name="email"
                            placeholder={personType === 'PJ' ? "E-mail Corporativo" : "Seu E-mail"}
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-gobee-500 focus:ring-2 focus:ring-gobee-100 p-4 text-base rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900"
                          />

                          <input 
                            type="tel" 
                            name="telefone"
                            placeholder="WhatsApp / Telefone"
                            required
                            value={formData.telefone}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-gobee-500 focus:ring-2 focus:ring-gobee-100 p-4 text-base rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900"
                          />

                          {/* Campos específicos para PJ */}
                          {personType === 'PJ' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                              <input 
                                type="text" 
                                name="empresa"
                                placeholder="Nome da Empresa" 
                                required
                                value={formData.empresa}
                                onChange={handleInputChange}
                                className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-gobee-500 focus:ring-2 focus:ring-gobee-100 p-4 text-base rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900"
                              />
                              <input 
                                type="text" 
                                name="site"
                                placeholder="Site ou Instagram" 
                                value={formData.site}
                                onChange={handleInputChange}
                                className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-gobee-500 focus:ring-2 focus:ring-gobee-100 p-4 text-base rounded-2xl outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900"
                              />
                            </div>
                          )}
                          
                          <div className="flex items-start gap-3 mt-2 px-1">
                             <input 
                                type="checkbox" 
                                id="termos_contact" 
                                name="termos"
                                checked={formData.termos}
                                onChange={handleInputChange}
                                className="mt-1 w-5 h-5 text-gobee-600 rounded border-gray-300 focus:ring-gobee-500" 
                                required 
                             />
                             <label htmlFor="termos_contact" className="text-xs text-gray-500 leading-snug cursor-pointer">
                               Concordo com a Política de Privacidade e em receber contatos da Gobee.
                             </label>
                          </div>

                          <button 
                             type="submit" 
                             disabled={status === 'loading'}
                             className="w-full bg-gobee-600 text-white font-bold py-4 mt-4 rounded-full hover:bg-gobee-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                          >
                             {status === 'loading' ? <Loader2 className="animate-spin" /> : <>Solicitar Contato <ArrowRight size={18} /></>}
                          </button>
                       </form>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </section>
  );
};

export default ContactSection;
import React, { useState, useEffect } from 'react';
import { 
  Lock, LayoutDashboard, Users, Settings, LogOut, 
  Save, Bell, CheckCircle2, Search, Filter, Trash2, Download,
  User, Building2, ExternalLink, Edit2, X, Globe, Link2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdminLead, clearLeads, deleteLead, updateLead, testIntegration } from '../api';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'leads' | 'settings'>('dashboard');
  
  // States do Dashboard
  const [announcement, setAnnouncement] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'testing' | 'success_test' | 'error_test'>('idle');
  const [leads, setLeads] = useState<AdminLead[]>([]);

  // States de Edição
  const [editingLead, setEditingLead] = useState<AdminLead | null>(null);

  // Carregar Leads do LocalStorage
  const loadLeads = () => {
    const stored = localStorage.getItem('gobee_leads');
    if (stored) {
        try {
            setLeads(JSON.parse(stored));
        } catch (e) {
            console.error("Erro ao ler leads", e);
        }
    } else {
        setLeads([]);
    }
  };

  // Verifica autenticação persistida e listeners
  useEffect(() => {
    const auth = sessionStorage.getItem('gobee_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    
    // Carrega configuração atual
    const savedAnnouncement = localStorage.getItem('gobee_announcement');
    if (savedAnnouncement) setAnnouncement(savedAnnouncement);

    const savedWebhook = localStorage.getItem('gobee_webhook_url');
    if (savedWebhook) setWebhookUrl(savedWebhook);

    // Carrega leads iniciais
    loadLeads();

    // Listener para atualizações em tempo real (ex: form enviado em outra aba)
    const handleLeadsUpdate = () => loadLeads();
    window.addEventListener('leads-update', handleLeadsUpdate);
    
    return () => {
        window.removeEventListener('leads-update', handleLeadsUpdate);
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Senha simples para demonstração
      setIsAuthenticated(true);
      sessionStorage.setItem('gobee_admin_auth', 'true');
    } else {
      alert('Senha incorreta');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('gobee_admin_auth');
  };

  const handleSaveSettings = () => {
    // Salvar Anúncio
    if (announcement.trim() === '') {
      localStorage.removeItem('gobee_announcement');
    } else {
      localStorage.setItem('gobee_announcement', announcement);
    }
    
    // Salvar Webhook
    if (webhookUrl.trim() === '') {
        localStorage.removeItem('gobee_webhook_url');
    } else {
        localStorage.setItem('gobee_webhook_url', webhookUrl);
    }
    
    // Dispara evento para atualizar o Layout sem reload
    window.dispatchEvent(new Event('announcement-update'));
    
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  const handleTestIntegration = async () => {
      if (!webhookUrl) return;
      
      // AUTO-SAVE: Salva automaticamente no LocalStorage ao testar
      // Isso previne que o usuário teste, funcione, e saia sem salvar.
      localStorage.setItem('gobee_webhook_url', webhookUrl);

      setSaveStatus('testing');
      const success = await testIntegration(webhookUrl);
      if (success) {
          setSaveStatus('success_test');
      } else {
          setSaveStatus('error_test');
      }
      setTimeout(() => setSaveStatus('idle'), 3000);
  };

  const handleClearLeads = () => {
      if(confirm('Tem certeza que deseja apagar todos os leads? Esta ação não pode ser desfeita.')) {
          clearLeads();
      }
  };

  const handleDeleteSingleLead = (id: number) => {
      if(confirm('Deseja excluir este lead?')) {
          deleteLead(id);
      }
  };

  const handleEditClick = (lead: AdminLead) => {
      setEditingLead(lead);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
      e.preventDefault();
      if (editingLead) {
          updateLead(editingLead);
          setEditingLead(null);
      }
  };

  // Cálculos para o Dashboard
  const currentMonthLeads = leads.length; // Simplificado para demo
  const mostRequestedService = leads.length > 0 
    ? Object.entries(leads.reduce((acc: Record<string, number>, lead) => {
        acc[lead.service] = (acc[lead.service] || 0) + 1;
        return acc;
      }, {} as Record<string, number>))
      .sort((a: [string, number], b: [string, number]) => b[1] - a[1])[0]?.[0]
    : 'Nenhum dado';

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-gobee-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gobee-600">
                <Lock size={32} />
             </div>
             <h1 className="text-2xl font-bold text-gray-900">Gobee Admin</h1>
             <p className="text-gray-500 text-sm">Acesso restrito a administradores</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha de Acesso</label>
              <input 
                type="password" 
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gobee-500 focus:border-gobee-500 outline-none"
                placeholder="Digite a senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-gobee-600 text-white font-bold py-3 rounded-lg hover:bg-gobee-700 transition-colors"
            >
              Entrar
            </button>
            <div className="text-center mt-4">
               <Link to="/" className="text-sm text-gray-400 hover:text-gobee-600">Voltar para o site</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col fixed h-full z-40">
        <div className="p-6 border-b border-gray-800">
           <h2 className="text-xl font-bold flex items-center gap-2">
             <div className="w-8 h-8 bg-gobee-600 rounded-lg"></div> Gobee
           </h2>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-gobee-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'leads' ? 'bg-gobee-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <Users size={20} /> Leads (Contatos)
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-gobee-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <Settings size={20} /> Configurações
          </button>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-gray-800 transition-colors"
          >
            <LogOut size={20} /> Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        
        {/* Header Mobile (Only visible on small screens) */}
        <div className="md:hidden mb-8 flex justify-between items-center">
           <h1 className="text-2xl font-bold text-gray-900">Gobee Admin</h1>
           <button onClick={handleLogout} className="p-2 bg-gray-200 rounded-full"><LogOut size={20} /></button>
        </div>

        {/* --- DASHBOARD TAB --- */}
        {activeTab === 'dashboard' && (
          <div className="animate-fade-in">
             <h2 className="text-3xl font-bold text-gray-900 mb-8">Visão Geral</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 text-sm font-medium">Total de Leads</span>
                      <span className="p-2 bg-green-50 text-green-600 rounded-lg"><Users size={18} /></span>
                   </div>
                   <div className="text-3xl font-bold text-gray-900">{currentMonthLeads}</div>
                   <div className="text-xs text-gray-400 mt-2">Registrados no sistema</div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 text-sm font-medium">Serviço Mais Procurado</span>
                      <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Search size={18} /></span>
                   </div>
                   <div className="text-xl font-bold text-gray-900 truncate" title={mostRequestedService}>{mostRequestedService}</div>
                   <div className="text-xs text-gray-400 mt-2">Baseado no histórico</div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 text-sm font-medium">Status do Site</span>
                      <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><CheckCircle2 size={18} /></span>
                   </div>
                   <div className="text-xl font-bold text-green-600">Online</div>
                   <div className="text-xs text-gray-400 mt-2">Versão 1.0.3</div>
                </div>
             </div>

             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Últimos Contatos</h3>
                <div className="overflow-x-auto">
                   {leads.length > 0 ? (
                       <table className="w-full text-left">
                          <thead>
                             <tr className="border-b border-gray-100 text-xs text-gray-500 uppercase">
                                <th className="py-3 font-medium">Tipo</th>
                                <th className="py-3 font-medium">Nome / Empresa</th>
                                <th className="py-3 font-medium">Origem</th>
                                <th className="py-3 font-medium">Data</th>
                                <th className="py-3 font-medium">Status</th>
                             </tr>
                          </thead>
                          <tbody>
                             {leads.slice(0, 5).map(lead => (
                                <tr key={lead.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                                   <td className="py-3">
                                      <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${lead.personType === 'PJ' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                                        {lead.personType || 'N/A'}
                                      </span>
                                   </td>
                                   <td className="py-3 text-sm font-medium text-gray-900">
                                      {lead.personType === 'PJ' ? (
                                        <div>{lead.company} <span className="text-gray-400 font-normal">({lead.name})</span></div>
                                      ) : (
                                        <div>{lead.name}</div>
                                      )}
                                   </td>
                                   <td className="py-3 text-sm text-gray-600">{lead.service}</td>
                                   <td className="py-3 text-sm text-gray-500">{lead.date}</td>
                                   <td className="py-3">
                                       <span className={`text-xs font-bold px-2 py-1 rounded-full 
                                          ${lead.status === 'Novo' ? 'bg-blue-100 text-blue-700' : 
                                            lead.status === 'Em Andamento' ? 'bg-yellow-100 text-yellow-700' : 
                                            'bg-green-100 text-green-700'}`}>
                                          {lead.status}
                                       </span>
                                   </td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                   ) : (
                       <div className="text-center py-8 text-gray-400 text-sm">Nenhum contato recebido ainda.</div>
                   )}
                </div>
             </div>
          </div>
        )}

        {/* --- LEADS TAB --- */}
        {activeTab === 'leads' && (
           <div className="animate-fade-in">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                 <h2 className="text-3xl font-bold text-gray-900">Gerenciar Leads</h2>
                 <div className="flex gap-2">
                    <button 
                        onClick={handleClearLeads}
                        className="p-2 bg-red-50 text-red-600 border border-red-100 rounded-lg hover:bg-red-100" 
                        title="Limpar todos os leads"
                    >
                        <Trash2 size={20} />
                    </button>
                    <button className="px-4 py-2 bg-gobee-600 text-white rounded-lg font-bold hover:bg-gobee-700 text-sm flex items-center gap-2">
                        <Download size={16} /> Exportar CSV
                    </button>
                 </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                 {leads.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                            <tr className="text-xs text-gray-500 uppercase border-b border-gray-100">
                                <th className="p-4 font-medium w-16 text-center">Tipo</th>
                                <th className="p-4 font-medium">Cliente / Empresa</th>
                                <th className="p-4 font-medium">Contato</th>
                                <th className="p-4 font-medium">Origem / Data</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium text-right">Ações</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                            {leads.map(lead => (
                                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 text-center">
                                       <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${lead.personType === 'PJ' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`} title={lead.personType === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}>
                                          {lead.personType === 'PJ' ? <Building2 size={16} /> : <User size={16} />}
                                       </div>
                                    </td>
                                    <td className="p-4">
                                        {lead.personType === 'PJ' ? (
                                            <>
                                                <div className="font-bold text-gray-900 text-base">{lead.company}</div>
                                                <div className="text-sm text-gray-500">Resp: {lead.name}</div>
                                                {lead.site && (
                                                   <a href={lead.site.startsWith('http') ? lead.site : `https://${lead.site}`} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline flex items-center gap-1 mt-1">
                                                      {lead.site} <ExternalLink size={10} />
                                                   </a>
                                                )}
                                            </>
                                        ) : (
                                            <div className="font-bold text-gray-900">{lead.name}</div>
                                        )}
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">
                                        <div className="font-medium text-gray-900">{lead.email}</div>
                                        {lead.phone && <div className="text-gray-500 mt-1">{lead.phone}</div>}
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">
                                        <div className="mb-1"><span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium">{lead.service}</span></div>
                                        <div className="text-gray-400 text-xs">{lead.date}</div>
                                    </td>
                                    <td className="p-4">
                                       <span className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap
                                          ${lead.status === 'Novo' ? 'bg-blue-100 text-blue-700' : 
                                            lead.status === 'Em Andamento' ? 'bg-yellow-100 text-yellow-700' : 
                                            'bg-green-100 text-green-700'}`}>
                                          {lead.status}
                                       </span>
                                    </td>
                                    <td className="p-4 text-right">
                                       <div className="flex justify-end gap-2">
                                           <button 
                                              onClick={() => handleEditClick(lead)}
                                              className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gobee-600 hover:text-white transition-colors"
                                              title="Editar Lead"
                                           >
                                              <Edit2 size={16} />
                                           </button>
                                           <button 
                                              onClick={() => handleDeleteSingleLead(lead.id)}
                                              className="p-2 bg-gray-100 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                                              title="Excluir Lead"
                                           >
                                              <Trash2 size={16} />
                                           </button>
                                       </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                 ) : (
                     <div className="p-12 text-center text-gray-500">
                         Nenhum lead encontrado na base de dados.
                     </div>
                 )}
              </div>
           </div>
        )}

        {/* --- SETTINGS TAB --- */}
        {activeTab === 'settings' && (
           <div className="animate-fade-in max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Configurações do Site</h2>
              
              <div className="space-y-6">
                {/* Banner Config */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="bg-yellow-50 p-3 rounded-xl text-yellow-600">
                        <Bell size={24} />
                        </div>
                        <div>
                        <h3 className="text-lg font-bold text-gray-900">Banner de Anúncio Global</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Exibe uma faixa colorida no topo de todas as páginas do site.
                        </p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Texto do Anúncio</label>
                        <input 
                        type="text" 
                        className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-gobee-500 outline-none transition-all"
                        placeholder="Ex: Estamos em recesso até dia 05/01."
                        value={announcement}
                        onChange={(e) => setAnnouncement(e.target.value)}
                        />
                    </div>
                </div>

                {/* Integration Config */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                        <Globe size={24} />
                        </div>
                        <div>
                        <h3 className="text-lg font-bold text-gray-900">Integração Externa (Webhook)</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Envie automaticamente todos os novos leads para outro sistema (CRM, Outro Site, Zapier).
                        </p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                             <Link2 size={16} /> URL de Integração
                        </label>
                        <div className="flex gap-2">
                            <input 
                                type="text" 
                                className="flex-grow border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-gobee-500 outline-none transition-all"
                                placeholder="https://api.outrosite.com/webhook/leads"
                                value={webhookUrl}
                                onChange={(e) => setWebhookUrl(e.target.value)}
                            />
                            <button 
                                onClick={handleTestIntegration}
                                type="button"
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 font-bold text-sm"
                                title="Enviar um lead de teste para esta URL"
                            >
                                Testar
                            </button>
                        </div>
                        {saveStatus === 'testing' && <p className="text-xs text-blue-500 mt-2 flex items-center gap-1"><span className="animate-spin">⏳</span> Testando conexão...</p>}
                        {saveStatus === 'success_test' && <p className="text-xs text-green-600 mt-2 flex items-center gap-1"><CheckCircle2 size={12}/> Sucesso! O servidor externo recebeu os dados.</p>}
                        {saveStatus === 'error_test' && <p className="text-xs text-red-500 mt-2 flex items-center gap-1"><X size={12}/> Falha: Verifique a URL ou o servidor externo.</p>}
                        <p className="text-xs text-gray-400 mt-2">
                            Cole a URL do endpoint API do outro sistema que receberá os dados JSON.
                        </p>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex items-center justify-end pt-4">
                    {saveStatus === 'saved' && (
                       <span className="text-green-600 font-bold text-sm flex items-center gap-1 animate-pulse mr-4">
                          <CheckCircle2 size={16} /> Configurações salvas!
                       </span>
                    )}
                    
                    <button 
                       onClick={handleSaveSettings}
                       className="px-6 py-3 bg-gobee-600 text-white font-bold rounded-lg hover:bg-gobee-700 transition-all flex items-center gap-2"
                    >
                       <Save size={18} /> Salvar Tudo
                    </button>
                 </div>
              </div>
           </div>
        )}

      </main>

      {/* MODAL DE EDIÇÃO */}
      {editingLead && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
               <button 
                  onClick={() => setEditingLead(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
               >
                  <X size={20} />
               </button>

               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Edit2 size={20} className="text-gobee-600" /> Editar Lead
               </h2>

               <form onSubmit={handleSaveEdit} className="space-y-4">
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status do Atendimento</label>
                      <select 
                         value={editingLead.status}
                         onChange={(e) => setEditingLead({...editingLead, status: e.target.value as any})}
                         className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gobee-500 focus:border-gobee-500 text-gray-900 bg-white"
                      >
                         <option value="Novo">Novo</option>
                         <option value="Em Andamento">Em Andamento</option>
                         <option value="Finalizado">Finalizado</option>
                      </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                          <select 
                             value={editingLead.personType}
                             onChange={(e) => setEditingLead({...editingLead, personType: e.target.value as any})}
                             className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 bg-gray-50"
                          >
                             <option value="PF">Pessoa Física</option>
                             <option value="PJ">Pessoa Jurídica</option>
                          </select>
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
                          <input 
                             type="text" 
                             value={editingLead.date}
                             disabled
                             className="w-full border border-gray-200 p-3 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                          />
                      </div>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Nome / Responsável</label>
                     <input 
                        type="text"
                        value={editingLead.name}
                        onChange={(e) => setEditingLead({...editingLead, name: e.target.value})}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gobee-500 text-gray-900"
                        required
                     />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <input 
                           type="email"
                           value={editingLead.email}
                           onChange={(e) => setEditingLead({...editingLead, email: e.target.value})}
                           className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gobee-500 text-gray-900"
                           required
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                        <input 
                           type="text"
                           value={editingLead.phone || ''}
                           onChange={(e) => setEditingLead({...editingLead, phone: e.target.value})}
                           className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gobee-500 text-gray-900"
                        />
                     </div>
                  </div>

                  {editingLead.personType === 'PJ' && (
                     <>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa</label>
                           <input 
                              type="text"
                              value={editingLead.company || ''}
                              onChange={(e) => setEditingLead({...editingLead, company: e.target.value})}
                              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gobee-500 text-gray-900"
                           />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Site / Instagram</label>
                           <input 
                              type="text"
                              value={editingLead.site || ''}
                              onChange={(e) => setEditingLead({...editingLead, site: e.target.value})}
                              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gobee-500 text-gray-900"
                           />
                        </div>
                     </>
                  )}

                  <div className="pt-4 flex gap-3">
                     <button 
                        type="button" 
                        onClick={() => setEditingLead(null)}
                        className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors"
                     >
                        Cancelar
                     </button>
                     <button 
                        type="submit" 
                        className="flex-1 px-4 py-3 bg-gobee-600 text-white rounded-lg font-bold hover:bg-gobee-700 transition-colors flex items-center justify-center gap-2"
                     >
                        <Save size={18} /> Salvar Alterações
                     </button>
                  </div>
               </form>
            </div>
         </div>
      )}
    </div>
  );
};

export default Admin;
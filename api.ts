/**
 * ARQUIVO DE CONFIGURAÇÃO DE INTEGRAÇÃO E ARMAZENAMENTO LOCAL
 */

export interface LeadData {
  service: string; // Origem (Página/Serviço)
  name: string;
  email: string;
  timestamp: string;
  phone?: string;
  company?: string;
  site?: string;
  personType: 'PF' | 'PJ';
  extra?: any;
}

// Interface para o formato salvo no Admin
export interface AdminLead {
  id: number;
  name: string;
  email: string;
  service: string;
  date: string;
  status: 'Novo' | 'Em Andamento' | 'Finalizado';
  phone?: string;
  company?: string;
  site?: string;
  personType: 'PF' | 'PJ';
}

// =============================================================================
// LÓGICA DE ENVIO E SALVAMENTO
// =============================================================================

export const submitLeadToExternalSystem = async (data: LeadData): Promise<boolean> => {
  console.log("🚀 Processando lead...", data);

  // 1. SALVAR NO ADMIN (LocalStorage)
  try {
    const storedLeads = localStorage.getItem('gobee_leads');
    const leads: AdminLead[] = storedLeads ? JSON.parse(storedLeads) : [];

    const newLead: AdminLead = {
      id: Date.now(), // ID único baseado no timestamp
      name: data.name,
      email: data.email,
      service: data.service, // Aqui está a página de origem
      date: new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'}),
      status: 'Novo',
      phone: data.phone,
      company: data.company,
      site: data.site,
      personType: data.personType
    };

    // Adiciona no início da lista
    leads.unshift(newLead);
    localStorage.setItem('gobee_leads', JSON.stringify(leads));
    
    // Avisa o sistema que houve atualização
    window.dispatchEvent(new Event('leads-update'));
    
    console.log("✅ Lead salvo no Admin Local.");
  } catch (e) {
    console.error("Erro ao salvar localmente:", e);
  }

  // 2. ENVIAR PARA INTEGRAÇÃO (WEBHOOK DINÂMICO)
  // Verifica se existe uma URL configurada no painel admin
  const webhookUrl = localStorage.getItem('gobee_webhook_url');
  
  if (webhookUrl) {
    console.log("🔗 Enviando para integração:", webhookUrl);
    try {
      // Usamos mode: 'no-cors' para evitar bloqueios de CORS do navegador.
      // Isso torna a resposta 'opaca' (status 0), mas permite o envio dos dados.
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', 
        },
        body: JSON.stringify(data),
      });
      console.log("✅ Dados enviados para o webhook (modo no-cors).");
      return true;
    } catch (error) {
      console.error("❌ Erro na integração (Webhook):", error);
      // Não retorna false para não bloquear o UX do usuário, já que salvou localmente
      return true; 
    }
  }

  // Simulação de delay de rede para UX
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  return true;
};

// Atualizar um lead existente
export const updateLead = (updatedLead: AdminLead) => {
    try {
        const storedLeads = localStorage.getItem('gobee_leads');
        if (!storedLeads) return;

        let leads: AdminLead[] = JSON.parse(storedLeads);
        leads = leads.map(lead => lead.id === updatedLead.id ? updatedLead : lead);

        localStorage.setItem('gobee_leads', JSON.stringify(leads));
        window.dispatchEvent(new Event('leads-update'));
    } catch (e) {
        console.error("Erro ao atualizar lead", e);
    }
};

// Deletar um lead específico
export const deleteLead = (id: number) => {
    try {
        const storedLeads = localStorage.getItem('gobee_leads');
        if (!storedLeads) return;

        let leads: AdminLead[] = JSON.parse(storedLeads);
        leads = leads.filter(lead => lead.id !== id);

        localStorage.setItem('gobee_leads', JSON.stringify(leads));
        window.dispatchEvent(new Event('leads-update'));
    } catch (e) {
        console.error("Erro ao deletar lead", e);
    }
};

// Função auxiliar para o Admin limpar leads
export const clearLeads = () => {
    localStorage.removeItem('gobee_leads');
    window.dispatchEvent(new Event('leads-update'));
};

// Função de Teste de Integração
export const testIntegration = async (url: string) => {
    const testData: LeadData = {
        service: "Teste de Integração",
        name: "Lead de Teste",
        email: "teste@gobee.com.br",
        phone: "11999999999",
        timestamp: new Date().toISOString(),
        personType: "PJ",
        company: "Empresa Teste Ltda",
        site: "www.teste.com.br"
    };

    try {
        if (!url || !url.startsWith('http')) {
            throw new Error("URL inválida. Deve começar com http:// ou https://");
        }

        // Usamos mode: 'no-cors' para evitar erro "Failed to fetch" por bloqueio de CORS na resposta.
        // A resposta será opaca (não legível), mas o envio acontece.
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 
                'Content-Type': 'text/plain;charset=utf-8' 
            },
            body: JSON.stringify(testData)
        });
        
        // Se o fetch não lançar exceção de rede, assumimos que foi enviado.
        return true;
    } catch (e) {
        console.error("Erro no teste de integração:", e);
        return false;
    }
};
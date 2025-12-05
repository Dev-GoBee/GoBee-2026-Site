import { LayoutDashboard, ShoppingBag, Palette, Megaphone, LineChart } from 'lucide-react';

export interface NavItem {
  label: string;
  path?: string;
  children?: NavItemChild[];
}

export interface NavItemChild {
  label: string;
  path: string;
  description: string;
  icon: any;
}

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Soluções',
    children: [
      {
        label: 'Gestão de E-commerce',
        path: '/solucoes/gestao-ecommerce',
        description: 'Administração completa e otimização de operações de vendas online.',
        icon: LayoutDashboard
      }
    ]
  },
  {
    label: 'Serviços',
    children: [
      {
        label: 'E-branding',
        path: '/servicos/e-branding',
        description: 'Construção de marcas fortes e identidade visual no ambiente digital.',
        icon: Palette
      },
      {
        label: 'E-commerce',
        path: '/servicos/e-commerce',
        description: 'Desenvolvimento de lojas virtuais robustas e escaláveis.',
        icon: ShoppingBag
      },
      {
        label: 'E-marketing',
        path: '/servicos/e-marketing',
        description: 'Estratégias de marketing digital focadas em conversão e ROI.',
        icon: Megaphone
      }
    ]
  },
  { label: 'Contato', path: '/contato' }
];

export const SERVICE_CONTENT: Record<string, { title: string; subtitle: string; content: string; features: string[] }> = {
  '/solucoes/gestao-ecommerce': {
    title: 'Gestão de E-commerce',
    subtitle: 'Maximizando a eficiência da sua operação online',
    content: 'Nossa solução de gestão de e-commerce assume a complexidade operacional para que você possa focar no crescimento do negócio. Cuidamos desde a integração de marketplaces até a logística e atendimento ao cliente, garantindo uma experiência fluida.',
    features: ['Integração com Marketplaces', 'Gestão de Estoque Inteligente', 'Otimização Logística', 'Dashboard de KPI em Tempo Real']
  },
  '/servicos/e-branding': {
    title: 'E-branding',
    subtitle: 'Sua marca com presença marcante no digital',
    content: 'No mundo digital, a percepção é realidade. Nosso serviço de E-branding constrói identidades visuais e narrativas de marca que ressoam com seu público-alvo, criando conexões emocionais duradouras.',
    features: ['Identidade Visual', 'Tone of Voice', 'Guia de Estilo Digital', 'Redesign de Marca']
  },
  '/servicos/e-commerce': {
    title: 'Desenvolvimento E-commerce',
    subtitle: 'Lojas virtuais que convertem visitantes em clientes',
    content: 'Desenvolvemos plataformas de e-commerce personalizadas, focadas em usabilidade (UX), velocidade e taxas de conversão. Utilizamos tecnologias modernas para garantir segurança e escalabilidade.',
    features: ['Plataformas Customizadas', 'Integração de Pagamentos', 'UX/UI Design', 'Otimização Mobile-First']
  },
  '/servicos/e-marketing': {
    title: 'E-marketing',
    subtitle: 'Estratégias orientadas a dados para crescimento exponencial',
    content: 'Transformamos dados em vendas. Nossa abordagem de E-marketing utiliza as melhores ferramentas de análise para criar campanhas de alta performance em SEO, Mídia Paga e CRM.',
    features: ['SEO Técnico', 'Gestão de Tráfego Pago', 'Automação de Marketing', 'Marketing de Conteúdo']
  }
};
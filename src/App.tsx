import { useEffect, useState, useRef } from 'react';
import { TrendingDown, TrendingUp, MessageCircle, Zap, ShieldCheck, Users, Banknote } from 'lucide-react';

export default function App() {
  const [stats, setStats] = useState({ millions: 0, clients: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timer: ReturnType<typeof setInterval> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);

        let frame = 0;
        timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const easeOutQuad = (t: number) => t * (2 - t);
          const easedProgress = easeOutQuad(progress);

          setStats({
            millions: Math.floor(easedProgress * 350),
            clients: Math.floor(easedProgress * 480)
          });

          if (frame === totalFrames) clearInterval(timer!);
        }, frameRate);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = grid;
      const maxScroll = scrollWidth - clientWidth;
      const index = maxScroll > 0 ? Math.round((scrollLeft / maxScroll) * 3) : 0;
      setActiveCard(Math.min(Math.max(index, 0), 3));
    };

    grid.addEventListener('scroll', handleScroll, { passive: true });
    return () => grid.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5544910013347";

  return (
    <div className="app-wrapper">
      {/* S1: Header Sticky */}
      <header className="header" id="home">
        <div className="container">
          <a href="#home" className="logo-link">
            <img src="/logo-toppix.webp" className="logo-img" alt="TOPPIX Digital - Intermediação de Crédito" />
          </a>
          <a href={whatsappLink} className="btn-pill" target="_blank" rel="noopener noreferrer">
            → Falar no WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* S2: Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content animate-fade-up">
              <span className="badge">✓ Crédito para negativados</span>
              <h1>Crédito rápido como PIX. Mesmo pra negativado.</h1>
              
              {/* Mobile Image: Appears below title on mobile */}
              <div className="hero-image-container mobile-only">
                <img src="/hero-toppix.webp" className="hero-image" alt="TOPPIX Hero" />
              </div>

              <p className="subheadline">
                Conectamos você às melhores opções de empréstimo do Brasil — FGTS, CLT, Bolsa Família ou Conta de Luz. Sem enrolação. Direto no WhatsApp.
              </p>
              <p className="lead">
                Você precisa de dinheiro agora, não semana que vem. A TOPPIX conecta você às linhas de crédito mais rápidas do mercado — com ou sem nome limpo, com ou sem carteira assinada. Escolha o empréstimo certo. Receba o dinheiro na conta.
              </p>
              
              <div className="cta-block">
                <span className="cta-label">Precisa de dinheiro agora? Fale com a TOPPIX no WhatsApp.</span>
                <a href={whatsappLink} className="btn-large" target="_blank" rel="noopener noreferrer">
                  → Simular meu crédito agora
                </a>
              </div>
            </div>

            {/* Desktop Image: Appears on the right on desktop */}
            <div className="hero-image-container desktop-only">
              <img src="/hero-toppix.webp" className="hero-image" alt="TOPPIX Hero" />
            </div>
          </div>
        </section>

        {/* S2.5: Parceiros */}
        <section className="section-partners">
          <div className="container">
            <p className="partners-title">Parceiros que confiam na TOPPIX</p>
          </div>
          <div className="partners-track-wrapper">
            <div className="partners-track">
              <div className="partner-card"><img src="/parceiro-itau.png" className="partner-logo" alt="Itaú" /></div>
              <div className="partner-card"><img src="/parceiro-grandino.png" className="partner-logo" alt="Grandino" /></div>
              <div className="partner-card"><img src="/parceiro-c6.png" className="partner-logo" alt="C6 Bank" /></div>
              <div className="partner-card"><img src="/parceiro-mercantil.png" className="partner-logo" alt="Mercantil do Brasil" /></div>
              <div className="partner-card"><img src="/parceiro-prata.png" className="partner-logo" alt="Prata" /></div>
              <div className="partner-card"><img src="/parceiro-lotus.png" className="partner-logo" alt="Lotus" /></div>
              <div className="partner-card"><img src="/parceiro-agilizza.png" className="partner-logo" alt="Agilizza" /></div>
              <div className="partner-card"><img src="/parceiro-novosaque.png" className="partner-logo" alt="Novo Saque" /></div>
              <div className="partner-card"><img src="/parceiro-granapix.png" className="partner-logo" alt="GranaPix" /></div>
              <div className="partner-card"><img src="/parceiro-facta.png" className="partner-logo" alt="Facta" /></div>
              {/* Duplicado para loop infinito */}
              <div className="partner-card"><img src="/parceiro-itau.png" className="partner-logo" alt="Itaú" /></div>
              <div className="partner-card"><img src="/parceiro-grandino.png" className="partner-logo" alt="Grandino" /></div>
              <div className="partner-card"><img src="/parceiro-c6.png" className="partner-logo" alt="C6 Bank" /></div>
              <div className="partner-card"><img src="/parceiro-mercantil.png" className="partner-logo" alt="Mercantil do Brasil" /></div>
              <div className="partner-card"><img src="/parceiro-prata.png" className="partner-logo" alt="Prata" /></div>
              <div className="partner-card"><img src="/parceiro-lotus.png" className="partner-logo" alt="Lotus" /></div>
              <div className="partner-card"><img src="/parceiro-agilizza.png" className="partner-logo" alt="Agilizza" /></div>
              <div className="partner-card"><img src="/parceiro-novosaque.png" className="partner-logo" alt="Novo Saque" /></div>
              <div className="partner-card"><img src="/parceiro-granapix.png" className="partner-logo" alt="GranaPix" /></div>
              <div className="partner-card"><img src="/parceiro-facta.png" className="partner-logo" alt="Facta" /></div>
            </div>
          </div>
        </section>

        {/* S3: Produtos (Bento Grid) */}
        <section className="section-products">
          <div className="container">
            <div className="bento-grid" ref={gridRef}>
              {/* CARD 1 */}
              <div className="card">
                <div className="card-icon-wrapper">
                  <img src="/ilustra-fgts.svg" className="card-icon" alt="FGTS Icon" />
                </div>
                <span className="card-label label-green">FGTS</span>
                <h3>FGTS — Antecipação do Saque-Aniversário</h3>
                <p className="card-sub">Receba hoje o que só cairia em 2025, 2026, 2027…</p>
                <ul className="card-bullets">
                  <li>Antecipe até 5 anos do seu Saque-Aniversário</li>
                  <li>A partir de R$ 100</li>
                  <li>Sem parcela mensal — você paga quando o saque cair</li>
                  <li>Aprovação rápida, mesmo negativado</li>
                </ul>
                <a href={whatsappLink} className="btn-card" target="_blank" rel="noopener noreferrer">
                  → Simular FGTS no WhatsApp
                </a>
              </div>

              {/* CARD 2 */}
              <div className="card">
                <div className="card-icon-wrapper">
                  <img src="/ilustra-clt.svg" className="card-icon" alt="CLT Icon" />
                </div>
                <span className="card-label label-blue">CLT</span>
                <h3>CLT — Crédito Consignado Trabalhador</h3>
                <p className="card-sub">Desconto direto na folha. Menor taxa do mercado.</p>
                <ul className="card-bullets">
                  <li>Exclusivo para quem tem carteira assinada</li>
                  <li>Parcelas descontadas automaticamente no salário</li>
                  <li>Taxas menores que cartão e cheque especial</li>
                  <li>Liberação rápida, contratação 100% digital</li>
                </ul>
                <a href={whatsappLink} className="btn-card" target="_blank" rel="noopener noreferrer">
                  → Simular CLT no WhatsApp
                </a>
              </div>

              {/* CARD 3 */}
              <div className="card">
                <div className="card-icon-wrapper">
                  <img src="/ilustra-bolsa.svg" className="card-icon" alt="Bolsa Família Icon" />
                </div>
                <span className="card-label label-purple">Bolsa Família</span>
                <h3>Bolsa Família — Crédito Consignado</h3>
                <p className="card-sub">Crédito facilitado para beneficiários.</p>
                <ul className="card-bullets">
                  <li>Análise simplificada</li>
                  <li>Desconto automático no benefício</li>
                  <li>Condições acessíveis</li>
                  <li>Aprovação rápida</li>
                </ul>
                <a href={whatsappLink} className="btn-card" target="_blank" rel="noopener noreferrer">
                  → Simular Bolsa Família no WhatsApp
                </a>
              </div>

              {/* CARD 4 */}
              <div className="card">
                <div className="card-icon-wrapper">
                  <img src="/ilustra-luz.svg" className="card-icon" alt="Conta de Luz Icon" />
                </div>
                <span className="card-label label-orange">Conta de Luz</span>
                <h3>Conta de Luz — Crédito Pessoal</h3>
                <p className="card-sub">Empréstimo rápido, sem burocracia.</p>
                <ul className="card-bullets">
                  <li>Sem necessidade de carteira assinada</li>
                  <li>Análise simplificada</li>
                  <li>Dinheiro na conta em até 24h (conforme aprovação)</li>
                  <li>Ideal para quem busca flexibilidade</li>
                </ul>
                <a href={whatsappLink} className="btn-card" target="_blank" rel="noopener noreferrer">
                  → Simular Conta de Luz no WhatsApp
                </a>
              </div>
            </div>
            <div className="bento-dots">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={`bento-dot${activeCard === i ? ' active' : ''}`} />
              ))}
            </div>
          </div>
        </section>

        {/* S4: Por que a TOPPIX */}
        <section className="section-why">
          <div className="container">
            <h2 className="section-title">Por que a TOPPIX?</h2>
            <div className="bento-why">
              <div className="why-card">
                <TrendingDown size={32} color="#A3F46D" style={{ marginBottom: '12px' }} />
                <div className="why-num">01</div>
                <h4>Conectamos você às melhores taxas do mercado</h4>
                <p>Não somos apenas uma opção — somos a ponte entre você e as instituições financeiras mais competitivas do Brasil.</p>
              </div>
              <div className="why-card">
                <MessageCircle size={32} color="#A3F46D" style={{ marginBottom: '12px' }} />
                <div className="why-num">02</div>
                <h4>Atendimento 100% humano pelo WhatsApp</h4>
                <p>Sem robô, sem menu infinito. Você fala com gente de verdade que entende de crédito.</p>
              </div>
              <div className="why-card">
                <Zap size={32} color="#A3F46D" style={{ marginBottom: '12px' }} />
                <div className="why-num">03</div>
                <h4>Rapidez de verdade</h4>
                <p>Simulação em minutos. Aprovação no mesmo dia (conforme análise). Dinheiro na conta sem enrolação.</p>
              </div>
              <div className="why-card">
                <ShieldCheck size={32} color="#A3F46D" style={{ marginBottom: '12px' }} />
                <div className="why-num">04</div>
                <h4>Transparência total — zero taxa antecipada</h4>
                <p>A TOPPIX não cobra nada antes da aprovação.</p>
              </div>
              <div className="why-card">
                <Users size={32} color="#A3F46D" style={{ marginBottom: '12px' }} />
                <div className="why-num">05</div>
                <h4>Já conectamos mais de 480 mil brasileiros</h4>
                <p>Desde 2021, mais de R$ 350 milhões liberados. Você não está testando — está usando o que já funciona.</p>
              </div>
            </div>
            <div className="anti-scam">
              🛡️ Atenção: A TOPPIX não cobra nada antes da aprovação. Se alguém pedir dinheiro antecipado, não somos nós.
            </div>
          </div>
        </section>

        {/* S5: Como Funciona */}
        <section className="section-how">
          <div className="container">
            <h2 className="section-title">Como funciona?</h2>
            <div className="timeline">
              <div className="step">
                <div className="step-num">
                  {/* @ts-ignore */}
                  <dotlottie-wc src="https://lottie.host/f044d1d4-f699-4f37-a06c-6b6aa7f846d3/9Ymmii0VYU.lottie" style={{ width: '120px', height: '120px' }} autoplay loop></dotlottie-wc>
                </div>
                <h4>Fale com a gente no WhatsApp</h4>
                <p>Manda mensagem. Conta o que você precisa. A gente te orienta qual linha de crédito faz sentido pra você.</p>
              </div>
              <div className="step">
                <div className="step-num">
                  {/* @ts-ignore */}
                  <dotlottie-wc src="https://lottie.host/f0dd0214-05c6-4812-8b2c-d74238786164/HuqVRRtl0T.lottie" style={{ width: '120px', height: '120px' }} autoplay loop></dotlottie-wc>
                </div>
                <h4>Simule e envie os documentos</h4>
                <p>Fazemos a simulação na hora. Se bater, você envia os docs (tudo pelo WhatsApp mesmo).</p>
              </div>
              <div className="step">
                <div className="step-num">
                  {/* @ts-ignore */}
                  <dotlottie-wc src="https://lottie.host/23d4634b-7f8d-4530-817f-d9e5b3ee8329/mc0PADiCSW.lottie" style={{ width: '120px', height: '120px' }} autoplay loop></dotlottie-wc>
                </div>
                <h4>Receba o dinheiro na conta</h4>
                <p>Aprovação rápida. Contrato digital. Dinheiro liberado direto na sua conta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* S6: Prova Social */}
        <section className="section-social" ref={sectionRef}>
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h2>+ R$ {stats.millions} milhões</h2>
                <p>liberados desde 2021</p>
              </div>
              <div className="stat-item">
                <h2>+ {stats.clients} mil clientes</h2>
                <p>atendidos em todo o Brasil</p>
              </div>
              <div className="stat-item">
                <h2>Desde 2021</h2>
                <p>conectando brasileiros ao crédito certo</p>
              </div>
            </div>
          </div>
        </section>

        {/* S7: Depoimentos */}
        <section className="section-testimonials">
          <div className="container">
            <h2 className="section-title">O que dizem sobre nós</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "Eu estava precisando de dinheiro urgente e não conseguia em lugar nenhum por estar negativada. O atendimento da TOPPIX pelo WhatsApp foi maravilhoso, falaram com calma e em poucas horas o dinheiro do FGTS já estava na minha conta!"
                </p>
                <div className="testimonial-author">
                  <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Maria&backgroundColor=173A31" width="48" height="48" style={{ borderRadius: '50%' }} alt="Avatar Maria Silva" />
                  <div>
                    <strong>Maria Silva</strong>
                    <p style={{ fontSize: '14px', color: 'var(--color-muted)' }}>Antecipação FGTS</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "Impressionado com a rapidez. Mandei mensagem, fiz a simulação e no mesmo dia resolvi tudo. Sem burocracia, sem robôs, atendimento humano de verdade. Recomendo muito para quem precisa de crédito rápido."
                </p>
                <div className="testimonial-author">
                  <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Joao&backgroundColor=173A31" width="48" height="48" style={{ borderRadius: '50%' }} alt="Avatar João Pedro" />
                  <div>
                    <strong>João Pedro</strong>
                    <p style={{ fontSize: '14px', color: 'var(--color-muted)' }}>Crédito CLT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S8: CTA Secundário */}
        <section className="section-cta-sec">
          <Banknote    size={64} color="#173A31" aria-hidden="true" className="deco-icon icon-float" style={{ top: '20px',    left: '20px',  animationDelay: '0s'   }} />
          <TrendingUp  size={80} color="#173A31" aria-hidden="true" className="deco-icon icon-float" style={{ top: '20px',    right: '20px', animationDelay: '0.8s' }} />
          <ShieldCheck size={48} color="#173A31" aria-hidden="true" className="deco-icon icon-float" style={{ bottom: '20px', left: '20px',  animationDelay: '1.6s' }} />
          <Zap         size={64} color="#173A31" aria-hidden="true" className="deco-icon icon-float" style={{ bottom: '20px', right: '20px', animationDelay: '0.4s' }} />
          <Users       size={56} color="#173A31" aria-hidden="true" className="deco-icon icon-float" style={{ top: '50%',     left: '20px',  animationDelay: '1.2s', transform: 'translateY(-50%)' }} />
          <div className="container">
            <div className="cta-sec-content">
              <h2>Ainda não tem certeza qual crédito é melhor pra você?</h2>
              <p>
                Sem problema. Manda uma mensagem no WhatsApp e a gente te ajuda a escolher — sem compromisso, sem pressão. Nosso trabalho é conectar você à linha de crédito certa. Simples assim.
              </p>
              <a href={whatsappLink} className="btn-outline" target="_blank" rel="noopener noreferrer">
                → Tirar dúvidas no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* S9: Footer Institucional */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a href="#home" className="logo-link footer-logo">
              <img src="/logo-toppix.webp" className="logo-img" alt="TOPPIX Digital - Intermediação de Crédito" />
            </a>
            <p className="copyright">© 2026 TOPPIX Digital.</p>
            <p className="legal-text">
              Atuamos como correspondente bancário e intermediadora de crédito, regulamentada nos termos da legislação vigente. As condições de crédito são definidas pelas instituições parceiras.
            </p>
          </div>
        </div>
      </footer>

      {/* S10: Elemento Flutuante (FAB WhatsApp) */}
      <a href={whatsappLink} className="fab-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

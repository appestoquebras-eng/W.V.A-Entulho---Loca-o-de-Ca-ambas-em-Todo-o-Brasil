# W.V.A ENTULHO – Locação de Caçambas de Entulho

Site institucional de alta conversão para a **W.V.A ENTULHO** (Razão Social: *W. V. A. PEREIRA ENTULHO*, CNPJ: `17.323.365/0001-50`), especializada em locação ágil de caçambas estacionárias para obras, reformas e demolições em **todo o Brasil** através de empresas parceiras cadastradas.

---

## 🎨 Identidade Visual & Diretrizes de Design

- **Estilo**: Editorial industrial de alto padrão.
- **Paleta de Cores**: Preto carvão (`#0e1013`, `#12151a`), branco quente (`#f8f9fa`) e laranja vibrante industrial (`#f97316`).
- **Tipografia**: *Archivo* (display industrial impactante) e *Plus Jakarta Sans* (legibilidade técnica refinada).
- **Sem poluição de IA**: Sem pílulas genéricas de metadados, sem comentários de código no visual, sem contadores fictícios de satisfação.

---

## 🖼️ Imagens Originais & Assets

Todas as imagens oficiais estão hospedadas no bucket público do Supabase e possuem cópias locais na pasta `/public/images/`:

| Elemento | URL Supabase Oficial | Arquivo Local de Backup |
| :--- | :--- | :--- |
| **Logo Oficial** | `https://ojvznzupiojimykqryhw.supabase.co/storage/v1/object/public/wva-site-assets/logo.png` | `/public/images/logo.png` |
| **Hero (Imagem Horizontal)** | `https://ojvznzupiojimykqryhw.supabase.co/storage/v1/object/public/wva-site-assets/hero-desktop.png` | `/public/images/hero-desktop.png` |
| **Arte Tamanhos e Valores** | `https://ojvznzupiojimykqryhw.supabase.co/storage/v1/object/public/wva-site-assets/tamanhos-valores.png` | `/public/images/tamanhos-valores.png` |
| **Arte Forma de Pagamento** | `https://ojvznzupiojimykqryhw.supabase.co/storage/v1/object/public/wva-site-assets/pagamento.png` | `/public/images/pagamento.png` |

> **⚠️ Observação Importante sobre Prazos e Imagens:**  
> - A imagem horizontal oficial das duas caçambas é renderizada com `object-contain` em todas as larguras de tela, garantindo visualização integral de ambas as caçambas sem cortes laterais.
> - A arte gráfica promocional menciona ilustrativamente *"locação por até 7 dias"*. Conforme as regras comerciais da empresa, **o prazo de permanência NÃO é fixo em 7 dias**; ele é alinhado e formalizado diretamente no orçamento com o cliente, conforme as regras do município e a necessidade da obra. O site e toda a comunicação respeitam essa transparência.

---

## 🚀 Funcionalidades Principais

1. **Atendimento Nacional**: Esclarece que o atendimento ocorre em todo o Brasil através de empresas parceiras cadastradas, mediante consulta prévia de disponibilidade por cidade/UF. Os formulários iniciam com o seletor em *"Selecione seu estado"*.
2. **Catálogo de Caçambas**:
   - 3m³: a partir de R$ 299,90 (pequenas reformas e limpezas)
   - 4m³: a partir de R$ 349,90 (Padrão do dia a dia / Mais pedida)
   - 5m³: a partir de R$ 449,90 (obras médias)
   - 6m³: a partir de R$ 549,90 (maior volume de entulho)
   - 7m³: a partir de R$ 649,90 (obras maiores)
   - 10m³: Sob consulta (grandes volumes industriais)
3. **Fluxo Operacional em 4 Passos**:
   - 01. Informe localização, tipo de resíduo, tamanho e data prevista
   - 02. Confirme o orçamento e condições
   - 03. Entrega agendada no local com acesso livre
   - 04. Retirada combinada e destinação do entulho conforme o serviço e regras locais do município
4. **Guia de Resíduos**:
   - *Aceitos*: concreto, tijolos, cerâmica, azulejos, argamassa, pedras e terra limpa. Madeiras e metais sob triagem.
   - *Proibidos*: amianto, produtos químicos, lixo hospitalar, latas de tinta líquida/solventes, inflamáveis, pilhas/baterias, lixo orgânico.
   - *Segurança*: não ultrapassar a borda, espaço de manobra do caminhão e regras municipais de via pública.
5. **Forma de Pagamento**: Explicada com transparência (pagamento no ato da contratação para garantia de reserva na frota e evitar trotes).
6. **Formulário Rápido WhatsApp**: Abre diretamente o WhatsApp com mensagem montada contendo cidade, bairro, volume, tipo de resíduo e data, sem armazenar dados em servidor externo (100% LGPD compliance).
7. **SEO Completo**: Schema.org `Organization` e `Service` (JSON-LD), OpenGraph, Twitter Cards, `robots.txt` e `sitemap.xml`.

---

## 🛠️ Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (porta 3000)
npm run dev

# Verificar tipagem TypeScript
npm run lint

# Build de produção
npm run build
```

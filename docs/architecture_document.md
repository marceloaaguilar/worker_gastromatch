# GASTROMATCH


**Guilherme Augusto Jardim de Souza, email do aluno 1**

**Isabelle Cristine Lucas Costa, email do aluno 2**

**Julia Gabriela de Resende, juliarsende@hotmail.com**

**Marcelo Aguilar Araújo D'Almeida, email do aluno 4**

**Pedro Talma Toledo, email do aluno 5**

**Philippe Roberto Dutra Chaves Vieira, email do aluno 6**

---

Professores:

**Cleiton Silva Tavares**

**Cristiano de Macêdo Neto**

**Hugo Bastos de Paula**


---

_Curso de Engenharia de Software, Campus Lourdes_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

**Resumo**

O Gastro Match é um aplicativo que conecta clientes a chefs particulares, facilitando a busca e a contratação de profissionais qualificados na área gastronômica. A crescente demanda por experiências culinárias personalizadas evidencia a necessidade de uma plataforma intuitiva e eficiente. Este trabalho apresenta a arquitetura da aplicação, destacando sua estrutura, funcionalidades e diferenciais em relação às soluções existentes. O Gastro Match oferece um catálogo detalhado de chefs especializados, permitindo filtragem por especialidade e agendamento simplificado. Como resultado, a plataforma se propõe a otimizar o processo de contratação, tornando-o mais ágil, acessível e personalizado.

---

## Histórico de Revisões

| **Data** | **Autor** | **Descrição** | **Versão** |
| --- | --- | --- | --- |
| **[25/02/2025]** | Julia Gabriela de Resende | Criação dos tópicos: resumo, apresentação, problema, objetivos. Adicionei as partes (que ja haviam sido feitas em sala) do "Nosso Produto". | [1] |
| **[25/02/2025]** | Julia Gabriela de Resende | Adicionei o diagrama de visão geral feito pelo Marcelo, transformei o mesmo em uma versão textual e criei as restrições do sistema  | [2] |
| **[25/02/2025]** | Julia Gabriela de Resende | Adicionei os mecanismos estruturais | [3] |
| **[27/02/2025]** | Julia Gabriela de Resende | Correção do objetivo e problema. Criação da personal Gabriel Almeida e Mariana Torres | [4] |
| **[11/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Correção do diagrama de arquiteutra | [5] |
| **[11/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Adicionando requisitos funcionais e não funcionais | [6] |
| **[11/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Corrigindo visão de produto | [7] |
| **[11/03/2025]** | Julia Gabriela de Resende | Histórias de usuário | [8] |
| **[11/03/2025]** | Julia Gabriela de Resende | Visão de negócio | [9] |
| **[12/03/2025]** | Pedro Talma Toledo | Correção: problema, objetivos e visão do produto | [10] |

## SUMÁRIO

1. [Apresentação](#apresentacao "Apresentação") <br />
	1.1. Problema <br />
	1.2. Objetivos do trabalho <br />
	1.3. Definições e Abreviaturas <br />

2. [Nosso Produto](#produto "Nosso Produto") <br />
	2.1. Visão do Produto <br />
   	2.2. Nosso Produto <br />
   	2.3. Personas <br />

3. [Requisitos](#requisitos "Requisitos") <br />
	3.1. Requisitos Funcionais <br />
	3.2. Requisitos Não-Funcionais <br />
	3.3. Restrições Arquiteturais <br />
	3.4. Mecanismos Arquiteturais <br />

4. [Modelagem](#modelagem "Modelagem e projeto arquitetural") <br />
	4.1. Visão de Negócio <br />
	4.2. Visão Lógica <br />
	4.3. Modelo de dados (opcional) <br />

5. [Wireframes](#wireframes "Wireframes") <br />

6. [Solução](#solucao "Projeto da Solução") <br />

7. [Avaliação](#avaliacao "Avaliação da Arquitetura") <br />
	7.1. Cenários <br />
	7.2. Avaliação <br />

8. [Referências](#referencias "REFERÊNCIAS")<br />

9. [Apêndices](#apendices "APÊNDICES")<br />
	9.1 Ferramentas <br />


<a name="apresentacao"></a>
# 1. Apresentação

No mundo gastronômico, a busca por chefs particulares tem crescido exponencialmente, seja para eventos privados ou experiências exclusivas. No entanto, a dificuldade em encontrar profissionais qualificados e alinhados com as necessidades específicas do cliente é um problema recorrente. Segundo dados do setor de alimentação, a demanda por serviços personalizados tem aumentado em torno de 20% ao ano, impulsionada pelo desejo de experiências únicas e pelo crescimento do mercado de gastronomia sob demanda. Apesar disso, a maioria das soluções existentes no mercado não oferecem personalização adequada, nem conectam de forma eficiente clientes a profissionais especializados.


## 1.1. Problema

A dificuldade de encontrar e agendar chefs particulares qualificados para cozinhar em casa ou em eventos de forma prática e confiável.

## 1.2. Objetivos do trabalho

Facilitar a conexão entre clientes e chefs particulares, permitindo a reserva de serviços gastronômicos de forma rápida e personalizada.

## 1.3. Definições e Abreviaturas

Coloque aqui as definições, siglas e abreviaturas utilizadas no trabalho._

<a name="produto"></a>
# 2. Nosso Produto

## 2.1 Visão do Produto
### Visão do produto

**Para**:  Profissionais e entusiastas da gastronomia

**Cujo**: Dificuldade do cliente é encontrar bons chefs particulares

**O**: Gastro Match

**É um**: Catálogo de profissionais da culinária

**Que**:  Facilita a busca por chefs particulares para os clientes

**Diferentemente do**: “A Chef em casa”

**O nosso produto**:  Oferece um catálogo de chefs especializados, personalizados de acordo com a necessidade do cliente.


## 2.2 Nosso Produto
![Captura de tela 2025-02-25 132754](https://github.com/user-attachments/assets/a7168ca1-93f1-48a6-a537-ec15f643af09))

## 2.3 Personas
<h2>Persona 1</h2>
<table>
  <tr>
    <td style="vertical-align: top; width: 150px;">
      <img src="imagens/persona.jpg" alt="Imagem da Persona"  style="width: 100px; height: auto; border-radius: 10px;">
    </td>
    <td style="vertical-align: top; padding-left: 10px;">
      <strong>Nome:</strong> Gabriel Almeida <br>
      <strong>Idade:</strong> 40 anos <br>
      <strong>Hobby:</strong> Experimentar novas técnicas culinárias e viajar para conhecer diferentes gastronomias <br>
      <strong>Trabalho:</strong> Chef particular especializado em culinária mediterrânea <br>
      <strong>Personalidade:</strong> Perfeccionista, inovador e comunicativo <br>
      <strong>Sonho:</strong> Abrir seu próprio restaurante com um conceito exclusivo de experiências gastronômicas personalizadas <br>
      <strong>Dores:</strong> Dificuldade em encontrar clientes alinhados ao seu estilo culinário e instabilidade financeira devido à falta de uma plataforma confiável para captar novos contratos <br>
    </td>
  </tr>
</table>

<h2>Persona 2</h2>
<table>
  <tr>
    <td style="vertical-align: top; width: 150px;">
      <img src="imagens/persona.jpg" alt="Imagem da Persona"  style="width: 100px; height: auto; border-radius: 10px;">
    </td>
    <td style="vertical-align: top; padding-left: 10px;">
      <strong>Nome:</strong>  Mariana Torres <br>
      <strong>Idade:</strong> 35 anos <br>
      <strong>Hobby:</strong> Organizar jantares temáticos para amigos e familiares <br>
      <strong>Trabalho:</strong>  Executiva de marketing em uma empresa de tecnologia <br>
      <strong>Personalidade:</strong>  Exigente, sociável e apreciadora de experiências exclusivas <br>
      <strong>Sonho:</strong> Viajar pelo mundo experimentando diferentes gastronomias <br>
      <strong>Dores:</strong> Falta de tempo para cozinhar e dificuldade em encontrar chefs particulares que atendam às suas preferências e restrições alimentares <br>
    </td>
  </tr>
</table>


<a name="requisitos"></a>
# 3. Requisitos

_Esta seção descreve os requisitos comtemplados nesta descrição arquitetural, divididos em dois grupos: funcionais e não funcionais._

## 3.1. Requisitos Funcionais

_Enumere os requisitos funcionais previstos para a sua aplicação. Concentre-se nos requisitos funcionais que sejam críticos para a definição arquitetural. Lembre-se de listar todos os requisitos que são necessários para garantir cobertura arquitetural. Esta seção deve conter uma lista de requisitos ainda sem modelagem. Na coluna Prioridade utilize uma escala (do mais prioritário para o menos): Essencial, Desejável, Opcional._

| **ID** | **Descrição** | **Prioridade** | **Plataforma** | **Sprint** | **Status** |
| ---     | ---                                        | ---            | ---                | ---        | ---        |
| RF001   | Login/Cadastro (Cliente) (Frontend)        | Alta           | _web_              | Sprint 2   | ❌         |
| RF002   | Login/Cadastro (Chef) (Frontend)           | Alta           | _web_              | Sprint 2   | ❌         |
| RF003   | Login/Cadastro (Cliente) (Mobile)          | Alta           | _mobile_           | Sprint 2   | ❌         |
| RF004   | Login/Cadastro (Chef) (Mobile)             | Alta           | _mobile_           | Sprint 2   | ❌         |
| RF005   | Login/Cadastro (Chef) (Backend)            | Alta           | _web_              | Sprint 2   | ❌         |
| RF006   | Login/Cadastro (Cliente) (Backend)         | Alta           | _web_              | Sprint 2   | ❌         |
| RF007   | Homepage (Mobile)                          | Alta           | _mobile_           | Sprint 2   | ❌         |
| RF008   | Homepage (Backend)                         | Alta           | _web_              | Sprint 2   | ❌         |
| RF009   | Homepage (Frontend)                        | Alta           | _web_              | Sprint 2   | ❌         |
| RF010   | Configuração/Deploy Banco de Dados         | Alta           | _web_              | Sprint 2   | ❌         |
| RF011   | Cadastro de avaliação                      | Média          | _web_              | Sprint 3   | ❌         |
| RF012   | Cadastro de avaliação                      | Média          | _mobile_           | Sprint 3   | ❌         |
| RF013   | Criar interface de chat em tempo real      | Alta           | _web_              | Sprint 3   | ❌         |
| RF014   | Criar interface de chat em tempo real      | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF015   | Interface de pagamento                     | Alta           | _web_              | Sprint 3   | ❌         |
| RF016   | Interface de pagamento                     | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF017   | Criar perfil do usuário                    | Alta           | _web_              | Sprint 3   | ❌         |
| RF018   | Criar perfil do usuário                    | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF019   | Solicitação de agendamento                 | Alta           | _web_              | Sprint 3   | ❌         |
| RF020   | Solicitação de agendamento                 | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF021   | Listagem de Chefs                          | Alta           | _web_              | Sprint 3   | ❌         |
| RF022   | Listagem de Chefs                          | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF023   | Autenticação de Usuário                    | Alta           | _web_              | Sprint 3   | ❌         |
| RF024   | Autenticação de Usuário                    | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF025   | Integração com API para envio de mensagens | Média          | _web_              | Sprint 3   | ❌         |
| RF026   | Integração com API para envio de mensagens | Média          | _mobile_           | Sprint 3   | ❌         |
| RF027   | Criar fila para gerenciamento de mensagens | Alta           | _web_              | Sprint 3   | ❌         |
| RF028   | Criar fila para gerenciamento de mensagens | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF029   | Configurar RabbitMQ                        | Alta           | _web_              | Sprint 3   | ❌         |
| RF030   | Configurar RabbitMQ                        | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF031   | Pesquisa de chefs                          | Alta           | _web_              | Sprint 4   | ❌         |
| RF032   | Pesquisa de chefs                          | Alta           | _mobile_           | Sprint 4   | ❌         |
| RF033   | Endpoint para busca de chefs e pratos      | Alta           | _web_              | Sprint 4   | ❌         |
| RF034   | Endpoint para busca de chefs e pratos      | Alta           | _mobile_           | Sprint 4   | ❌         |
| RF035   | Integrar pagamento com PagBank             | Alta           | _web_              | Sprint 4   | ❌         |
| RF036   | Integrar pagamento com PagBank             | Alta           | _mobile_           | Sprint 4   | ❌         |

Obs: acrescente mais linhas, se necessário.

## 3.2. Requisitos Não-Funcionais

_Enumere os requisitos não-funcionais previstos para a sua aplicação. Entre os requisitos não funcionais, inclua todos os requisitos que julgar importante do ponto de vista arquitetural ou seja os requisitos que terão impacto na definição da arquitetura. Os requisitos devem ser descritos de forma completa e preferencialmente quantitativa._

| **ID** | **Descrição** |
| --- | --- |
| RNF001 | O sistema deve ter tempo de resposta de até 3 segundos em qualquer operação realizada. |
| RNF002 | O sistema deve ser acessível através dos navegadores Chrome, Firefox, Safari e Edge. |
| RNF003 | O sistema deve ser responsivo, oferecendo boa experiência tanto em dispositivos móveis quanto desktops. |
| RNF004 | O sistema deve ser capaz de realizar atualizações de forma simples e sem causar impacto nos usuários ativos. |
| RNF005 | O sistema deve ser compatível com os sistemas operacionais Android e iOS nas versões mais recentes. |
| RNF006 | O sistema deve implementar autenticação e autorização robustas, garantindo a proteção dos dados dos pacientes. |
| RNF007 | O código-fonte do sistema deve ser legível, bem estruturado e seguir boas práticas de codificação, facilitando a manutenção e futuras modificações. |
| RNF008 | O sistema deve estar disponível 99,9% do tempo, com exceção de manutenções programadas. |

Obs: acrescente mais linhas, se necessário.

## 3.3. Restrições Arquiteturais

As restrições impostas ao projeto que afetam sua arquitetura são :

- O sistema deverá adotar uma arquitetura baseada em microsserviços.
- O tráfego de requisições deverá passar por um API Gateway, centralizando a comunicação com os serviços internos.
- A comunicação entre os serviços deverá ser feita de forma assíncrona, utilizando RabbitMQ para mensageria.
- O sistema deverá utilizar Supabase como camada adicional para gerenciamento de dados e autenticação.
- A integração com serviços de pagamento deverá ser feita através de um gateway de pagamento externo.
- A arquitetura deverá permitir escalabilidade e modularidade para facilitar manutenção e expansão do sistema.

## 3.4. Mecanismos Arquiteturais

_Visão geral dos mecanismos que compõem a arquitetura do sosftware baseando-se em três estados: (1) análise, (2) design e (3) implementação. Em termos de Análise devem ser listados os aspectos gerais que compõem a arquitetura do software como: persistência, integração com sistemas legados, geração de logs do sistema, ambiente de front end, tratamento de exceções, formato dos testes, formato de distribuição/implantação (deploy), entre outros. Em Design deve-se identificar o padrão tecnológico a seguir para cada mecanismo identificado na análise. Em Implementação, deve-se identificar o produto a ser utilizado na solução.
 Ex: Análise (Persistência), Design (ORM), Implementação (Hibernate)._

| **Análise** | **Design** | **Implementação** |
| --- | --- | --- |
| Persistência | ORM para abstração do banco de dados | PostgreSQL e SupaBase |
| Front end | SPA (Single Page Application) para melhor experiência do usuário | React.js |
| Back end | Arquitetura de microsserviços  | Node.js |
| Integração |  Comunicação assíncrona entre serviços | RabbitMQ para mensageria |
| Log do sistema | Logging centralizado para monitoramento e auditoria  | GitHub |
| Teste de Software | | |
| Deploy | Contêineres e orquestração para escalabilidade (implantação)| Docker |

<a name="modelagem"></a>
# 4. Modelagem e Projeto Arquitetural

O diagrama representa a visão geral de um sistema baseado em microsserviços, onde um **API Gateway** atua como ponto central de entrada, direcionando as requisições para os serviços apropriados. Dentro do sistema, há três serviços principais: um responsável pelo gerenciamento de usuários, outro dedicado ao agendamento de eventos ou serviços, e um terceiro que funciona como gateway de pagamento, processando as transações relacionadas. O serviço de agendamento interage diretamente com o gateway de pagamento para realizar as operações financeiras. Além disso, o sistema conta com uma infraestrutura de mensageria utilizando **RabbitMQ**, permitindo comunicação assíncrona entre os microsserviços, otimizando o processamento de eventos. Na camada de armazenamento de dados, o banco **PostgreSQL** é utilizado para persistência das informações, enquanto o **Supabase** complementa essa estrutura, oferecendo funcionalidades adicionais, como autenticação e acesso em tempo real. A arquitetura proposta garante escalabilidade, eficiência na comunicação entre serviços e um fluxo bem estruturado para processamento de pagamentos e agendamentos.


![DiagramaDeArquitetura](https://github.com/user-attachments/assets/0379b592-844d-4420-81a9-2cd8dcb7e615)

## 4.1. Visão de Negócio (Funcionalidades)

_Apresente uma lista simples com as funcionalidades previstas no projeto (escopo do produto)._

O sistema deve:
1. Permitir login e cadastro de clientes e chefs tanto no frontend quanto no backend (web e mobile).
2. Exibir uma homepage para acesso rápido às principais funcionalidades (web e mobile).
3. Configurar e realizar o deploy do banco de dados.
4. Permitir que clientes cadastrem e visualizem avaliações de chefs (web e mobile).
5. Oferecer uma interface de pagamento integrada à plataforma (web e mobile).
6. Criar perfis de usuários (clientes e chefs) para exibição de informações relevantes (web e mobile).
7. Permitir que clientes realizem solicitações de agendamento de serviços (web e mobile).
8. Exibir uma listagem de chefs disponíveis na plataforma (web e mobile).
9. Garantir a autenticação de usuários para acesso seguro ao sistema (web e mobile).
10. Integrar uma API para envio de mensagens e gerenciar filas de mensagens via RabbitMQ (web e mobile).
11. Implementar um sistema de pesquisa de chefs e pratos para facilitar a busca (web e mobile).
12. Criar endpoints para busca de chefs e pratos, garantindo comunicação eficiente com o backend (web e mobile).
13. Integrar pagamentos com o PagBank para transações seguras e confiáveis (web e mobile).

Obs: a quantidade e o escopo das funcionalidades deve ser negociado com os professores/orientadores do trabalho.

### Histórias de Usuário

_Nesta seção, você deve descrever estórias de usuários seguindo os métodos ágeis. Lembre-se das características de qualidade das estórias de usuários, ou seja, o que é preciso para descrever boas histórias de usuários._

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|chef particular  | cadastrar meu perfil, incluindo minhas especialidades e disponibilidade           | que os clientes possam me encontrar e contratar meus serviços.               |
|chef particular  | acessar relatórios sobre minhas contratações e avaliações           | acompanhar meu desempenho e melhorar meu serviço.               |
|cliente       | pesquisar chefs por especialidade e localização                 | encontrar um profissional adequado às minhas preferências gastronômicas. |
|cliente       | agendar um serviço diretamente pela plataforma                 |  garantir que um chef esteja disponível na data desejada. |
|cliente       | avaliar um chef após a experiência                |  ajudar outros clientes na escolha e garantir a qualidade do serviço. |
|cliente       | conversar com um chef antes de contratar o serviço                 |  esclarecer dúvidas e alinhar expectativas. |
|cliente       | realizar pagamentos dentro da plataforma                 |  ter segurança na transação e garantir a confirmação do serviço. |
|cliente       | agendar um serviço diretamente pela plataforma                 |  garantir que um chef esteja disponível na data desejada. |

## 4.2. Visão Lógica

_Apresente os artefatos que serão utilizados descrevendo em linhas gerais as motivações que levaram a equipe a utilizar estes diagramas._

### Diagrama de Classes

![Diagrama de classes](imagens/classes.gif "Diagrama de classes")


**Figura 2 – Diagrama de classes (exemplo). Fonte: o próprio autor.**

Obs: Acrescente uma breve descrição sobre o diagrama apresentado na Figura 3.

### Diagrama de componentes

_Apresente o diagrama de componentes da aplicação, indicando, os elementos da arquitetura e as interfaces entre eles. Liste os estilos/padrões arquiteturais utilizados e faça uma descrição sucinta dos componentes indicando o papel de cada um deles dentro da arquitetura/estilo/padrão arquitetural. Indique também quais componentes serão reutilizados (navegadores, SGBDs, middlewares, etc), quais componentes serão adquiridos por serem proprietários e quais componentes precisam ser desenvolvidos._

![Diagrama de componentes](imagens/componentes.png "Diagrama de componentes")

**Figura 3 – Diagrama de Componentes (exemplo). Fonte: o próprio autor.**

_Apresente uma descrição detalhada dos artefatos que constituem o diagrama de implantação._

Ex: conforme diagrama apresentado na Figura X, as entidades participantes da solução são:

- **Componente 1** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc magna, accumsan eget porta a, tincidunt sed mauris. Suspendisse orci nulla, sagittis a lorem laoreet, tincidunt imperdiet ipsum. Morbi malesuada pretium suscipit.
- **Componente 2** - Praesent nec nisi hendrerit, ullamcorper tortor non, rutrum sem. In non lectus tortor. Nulla vel tincidunt eros.

## 4.3. Modelo de dados (opcional)

_Caso julgue necessário para explicar a arquitetura, apresente o diagrama de classes ou diagrama de Entidade/Relacionamentos ou tabelas do banco de dados. Este modelo pode ser essencial caso a arquitetura utilize uma solução de banco de dados distribuídos ou um banco NoSQL._

![Diagrama de Entidade Relacionamento (ER) ](imagens/der.png "Diagrama de Entidade Relacionamento (ER) ")

**Figura 4 – Diagrama de Entidade Relacionamento (ER) - exemplo. Fonte: o próprio autor.**

Obs: Acrescente uma breve descrição sobre o diagrama apresentado na Figura 3.

<a name="wireframes"></a>
# 5. Wireframes

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.

<a name="solucao"></a>
# 6. Projeto da Solução

_Apresente as telas dos sistema construído com uma descrição sucinta de cada uma das interfaces._

<a name="avaliacao"></a>
# 7. Avaliação da Arquitetura

_Esta seção descreve a avaliação da arquitetura apresentada, baseada no método ATAM._

## 7.1. Cenários

_Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos não funcionais sendo satisfeitos. Os requisitos a seguir são apenas exemplos de possíveis requisitos, devendo ser revistos, adequados a cada projeto e complementados de forma a terem uma especificação completa e auto-explicativa._

**Cenário 1 - Acessibilidade:** Suspendisse consequat consectetur velit. Sed sem risus, dictum dictum facilisis vitae, commodo quis leo. Vivamus nulla sem, cursus a mollis quis, interdum at nulla. Nullam dictum congue mauris. Praesent nec nisi hendrerit, ullamcorper tortor non, rutrum sem. In non lectus tortor. Nulla vel tincidunt eros.

**Cenário 2 - Interoperabilidade:** Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut accumsan erat. Pellentesque in enim tempus, iaculis sem in, semper arcu.

**Cenário 3 - Manutenibilidade:** Phasellus magna tellus, consectetur quis scelerisque eget, ultricies eu ligula. Sed rhoncus fermentum nisi, a ullamcorper leo fringilla id. Nulla lacinia sem vel magna ornare, non tincidunt ipsum rhoncus. Nam euismod semper ante id tristique. Mauris vel elit augue.

**Cenário 4 - Segurança:** Suspendisse consectetur porta tortor non convallis. Sed lobortis erat sed dignissim dignissim. Nunc eleifend elit et aliquet imperdiet. Ut eu quam at lacus tincidunt fringilla eget maximus metus. Praesent finibus, sapien eget molestie porta, neque turpis congue risus, vel porttitor sapien tortor ac nulla. Aliquam erat volutpat.

## 7.2. Avaliação

_Apresente as medidas registradas na coleta de dados. O que não for possível quantificar apresente uma justificativa baseada em evidências qualitativas que suportam o atendimento do requisito não-funcional. Apresente uma avaliação geral da arquitetura indicando os pontos fortes e as limitações da arquitetura proposta._

| **Atributo de Qualidade:** | Segurança |
| --- | --- |
| **Requisito de Qualidade** | Acesso aos recursos restritos deve ser controlado |
| **Preocupação:** | Os acessos de usuários devem ser controlados de forma que cada um tenha acesso apenas aos recursos condizentes as suas credenciais. |
| **Cenários(s):** | Cenário 4 |
| **Ambiente:** | Sistema em operação normal |
| **Estímulo:** | Acesso do administrador do sistema as funcionalidades de cadastro de novos produtos e exclusão de produtos. |
| **Mecanismo:** | O servidor de aplicação (Rails) gera um _token_ de acesso para o usuário que se autentica no sistema. Este _token_ é transferido para a camada de visualização (Angular) após a autenticação e o tratamento visual das funcionalidades podem ser tratados neste nível. |
| **Medida de Resposta:** | As áreas restritas do sistema devem ser disponibilizadas apenas quando há o acesso de usuários credenciados. |

**Considerações sobre a arquitetura:**

| **Riscos:** | Não existe |
| --- | --- |
| **Pontos de Sensibilidade:** | Não existe |
| _ **Tradeoff** _ **:** | Não existe |

Evidências dos testes realizados

_Apresente imagens, descreva os testes de tal forma que se comprove a realização da avaliação._

<a name="referencias"></a>
# 8. REFERÊNCIAS

_Como um projeto da arquitetura de uma aplicação não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT._

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf


**[1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._


<a name="apendices"></a>
# 9. APÊNDICES

_Inclua o URL do repositório (Github, Bitbucket, etc) onde você armazenou o código da sua prova de conceito/protótipo arquitetural da aplicação como anexos. A inclusão da URL desse repositório de código servirá como base para garantir a autenticidade dos trabalhos._

## 9.1 Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Repositório de código | GitHub | https://github.com/XXXXXXX |
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com |
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX |
|Documentação de teste | Github | https://githun.com/xxxx |

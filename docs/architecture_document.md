![image](https://github.com/user-attachments/assets/ab32e525-9eb7-4194-b343-9440da55adb0)# GASTROMATCH


**Guilherme Augusto Jardim de Souza, gajsouza@sga.pucminas.br**

**Isabelle Cristine Lucas Costa, iclcosta@sga.pucminas.br**

**Julia Gabriela de Resende, juliarsende@hotmail.com**

**Marcelo Aguilar Araújo D'Almeida, marceloalmeida42@gmail.com**

**Pedro Talma Toledo, pedrotoledo1717@gmail.com**

**Philippe Roberto Dutra Chaves Vieira, philipperobertod.97@gmail.com**

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
| **[25/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Corrigindo RNFs e incluindo versões de navegadores e S.O  | [18] |
| **[25/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Corrigindo RF022 e RF023 | [17] |
| **[25/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Removendo requisitos funcionais | [16] |
| **[25/03/2025]** | Julia Gabriela de Resende | Adicionado diagrama de componentes | [15] |
| **[25/03/2025]** | Julia Gabriela de Resende | Correção: objetivo, visão do produto e exclusão de textos padrão | [14] |
| **[19/03/2025]** | Pedro Talma Toledo | Correção: Diagrama de arquitetura | [13] |
| **[18/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Correção: Diagrama de arquitetura | [12] |
| **[17/03/2025]** | Julia Gabriela de Resende | Correção: Objetivo e diagrama de classes | [11] |
| **[12/03/2025]** | Pedro Talma Toledo | Correção: problema, objetivos e visão do produto | [10] |
| **[11/03/2025]** | Julia Gabriela de Resende | Visão de negócio | [9] |
| **[11/03/2025]** | Julia Gabriela de Resende | Histórias de usuário | [8] |
| **[11/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Corrigindo visão de produto | [7] |
| **[11/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Adicionando requisitos funcionais e não funcionais | [6] |
| **[11/03/2025]** | Marcelo Aguilar Araújo D'Almeida | Correção do diagrama de arquiteutra | [5] |
| **[27/02/2025]** | Julia Gabriela de Resende | Correção do objetivo e problema. Criação da personal Gabriel Almeida e Mariana Torres | [4] |
| **[25/02/2025]** | Julia Gabriela de Resende | Adicionei os mecanismos estruturais | [3] |
| **[25/02/2025]** | Julia Gabriela de Resende | Adicionei o diagrama de visão geral feito pelo Marcelo, transformei o mesmo em uma versão textual e criei as restrições do sistema  | [2] |
| **[25/02/2025]** | Julia Gabriela de Resende | Criação dos tópicos: resumo, apresentação, problema, objetivos. Adicionei as partes (que ja haviam sido feitas em sala) do "Nosso Produto". | [1] |


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

No mundo gastronômico, a busca por chefs particulares tem crescido exponencialmente, seja para eventos privados ou experiências exclusivas. No entanto, a dificuldade em encontrar profissionais qualificados e alinhados com as necessidades específicas do cliente é um problema recorrente. De acordo com a 13ª edição da Pesquisa Anual Setorial de Food Service 2024, realizada pela Associação Brasileira de Franchising (ABF) em parceria com a Galunion Consultoria, o ano de 2023 fechou com crescimento de 19% por serviços personalizados, impulsionada pelo desejo de experiências únicas e pelo crescimento do mercado de gastronomia sob demanda. Apesar disso, a maioria das soluções existentes no mercado não oferecem personalização adequada, nem conectam de forma eficiente clientes a profissionais especializados.


## 1.1. Problema

A dificuldade de encontrar e agendar chefs particulares qualificados para cozinhar em casa ou em eventos de forma prática e confiável.

## 1.2. Objetivos do trabalho

Criação de uma plataforma digital que irá conectar clientes e chefs especializados, oferecendo uma experiência personalizada de contratação de serviços gastronômicos, na região de Belo Horizonte.

## 1.3. Definições e Abreviaturas


<a name="produto"></a>
# 2. Nosso Produto

## 2.1 Visão do Produto
### Visão do produto

**Para**:  Profissionais e entusiastas da gastronomia.

**Cujo**: Dificuldade do cliente é encontrar bons chefs particulares.

**O**: Gastro Match.

**É um**: Plataforma para profissionais e entusiastas da gastronomia.

**Que**:  Facilita a busca por chefs particulares para os clientes.

**Diferentemente do**: “A Chef em casa”.

**O nosso produto**:  Oferece uma plataforma de chefs especializados e personalizados de acordo com a necessidade do cliente.


## 2.2 Nosso Produto
![Captura de tela 2025-02-25 132754](https://github.com/user-attachments/assets/a7168ca1-93f1-48a6-a537-ec15f643af09))

**Figura 1 – Nosso produto. Fonte: o próprio autor.**

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
| RF010   | Cadastro de avaliação                      | Média          | _web_              | Sprint 3   | ❌         |
| RF011   | Cadastro de avaliação                      | Média          | _mobile_           | Sprint 3   | ❌         |
| RF012   | Criar interface de chat em tempo real      | Alta           | _web_              | Sprint 3   | ❌         |
| RF013   | Criar interface de chat em tempo real      | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF014   | Interface de pagamento                     | Alta           | _web_              | Sprint 3   | ❌         |
| RF015   | Interface de pagamento                     | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF016   | Solicitação de agendamento                 | Alta           | _web_              | Sprint 3   | ❌         |
| RF017   | Solicitação de agendamento                 | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF018   | Listagem de Chefs                          | Alta           | _web_              | Sprint 3   | ❌         |
| RF019   | Listagem de Chefs                          | Alta           | _mobile_           | Sprint 3   | ❌         |
| RF020   | Pesquisa de chefs                          | Alta           | _web_              | Sprint 4   | ❌         |
| RF021   | Pesquisa de chefs                          | Alta           | _mobile_           | Sprint 4   | ❌         |
| RF022   | Permitir a busca de chefs e pratos         | Alta           | _web_              | Sprint 4   | ❌         |
| RF023   | Permitir a busca de chefs e pratos         | Alta           | _mobile_           | Sprint 4   | ❌         |
| RF024   | Integrar pagamento com PagBank             | Alta           | _web_              | Sprint 4   | ❌         |
| RF025   | Integrar pagamento com PagBank             | Alta           | _mobile_           | Sprint 4   | ❌         |
| RF026   | Recuperar senha de usuário por e-mail      | Alta           | _web_              | Sprint 4   | ❌         |
| RF027   | Recuperar senha de usuário por e-mail      | Alta           | _mobile_           | Sprint 4   | ❌         |



## 3.2. Requisitos Não-Funcionais

| **ID** | **Descrição** |
| --- | --- |
| RNF001 | O sistema deve ter tempo de resposta de até 3 segundos em qualquer operação realizada. |
| RNF002 | O sistema deve ser acessível através dos navegadores Chrome (versão 134.0.6998.118 ou superior), Firefox (versão 136.0 ou superior), Safari (versão 18.3 ou superior) e Edge  (versão 134.0.3124.83 ou superior). |
| RNF003 | O sistema deve ser responsivo, oferecendo boa experiência tanto em dispositivos móveis quanto desktops. |
| RNF004 | O sistema deve ser capaz de realizar atualizações de forma simples e sem causar impacto nos usuários ativos. |
| RNF005 | O sistema deve ser compatível com os sistemas operacionais Android (versão 14 ou superior) e iOS (versão 18.3.2 ou superior). |
| RNF006 | O sistema deve implementar autenticação e autorização robustas, garantindo a proteção dos dados dos pacientes, com padrão de autenticação OAuth2.|
| RNF007 | O sistema deve estar disponível 99,9% do tempo, com exceção de manutenções programadas. |
| RNF008 | O sistema deve proporcionar uma experiência de usuário intuitiva e fácil de navegar, garantindo que as principais funcionalidades sejam acessíveis em até 3 cliques. |
| RNF009 | O sistema deve ser capaz de suportar até 500 usuários simultâneos sem degradação na performance. |


## 3.3. Restrições Arquiteturais

As restrições impostas ao projeto que afetam sua arquitetura são :

- O sistema deverá adotar uma arquitetura baseada em microsserviços.
- O tráfego de requisições deverá passar por um API Gateway, centralizando a comunicação com os serviços internos.
- A comunicação entre os serviços deverá ser feita de forma assíncrona, utilizando RabbitMQ para mensageria.
- O sistema deverá utilizar Supabase como camada adicional para gerenciamento de dados e autenticação.
- A integração com serviços de pagamento deverá ser feita através de um gateway de pagamento externo.
- A arquitetura deverá permitir escalabilidade e modularidade para facilitar manutenção e expansão do sistema.
- O código-fonte do sistema deve ser legível e seguir boas práticas de codificação, facilitando a manutenção e futuras modificações.
- O chat deve utilizar um mecanismo de mensageria assíncrona para garantir a entrega confiável das mensagens, mesmo em casos de falha temporária na conexão.
- Os dados do usuário devem ser armazenados em um banco de dados relacional

## 3.4. Mecanismos Arquiteturais

| **Análise** | **Design** | **Implementação** |
| --- | --- | --- |
| Persistência | ORM para abstração do banco de dados | PostgreSQL e SupaBase |
| Front end | SPA (Single Page Application) para melhor experiência do usuário | React.js |
| Back end | Arquitetura de microsserviços  | Node.js |
| Mobile | Aplicativo híbrido para múltiplas plataformas  | Flutter |
| Integração |  Comunicação assíncrona entre serviços | RabbitMQ para mensageria |
| Log do sistema | Logging centralizado para monitoramento e auditoria  | GitHub |
| Teste de Software | Testes automatizados para garantir a qualidade | Jest (Back-end) e Flutter Test (Mobile) |
| Deploy | Contêineres e orquestração para escalabilidade (implantação)| Docker |

<a name="modelagem"></a>
# 4. Modelagem e Projeto Arquitetural

O diagrama representa a visão geral de um sistema baseado em microsserviços, onde um **API Gateway** atua como ponto central de entrada, direcionando as requisições para os serviços apropriados. Dentro do sistema, há três serviços principais: um responsável pelo gerenciamento de usuários, outro dedicado ao agendamento de eventos ou serviços, e um terceiro que funciona como gateway de pagamento, processando as transações relacionadas. O serviço de agendamento interage diretamente com o gateway de pagamento para realizar as operações financeiras. Além disso, o sistema conta com uma infraestrutura de mensageria utilizando **RabbitMQ**, permitindo comunicação assíncrona entre os microsserviços, otimizando o processamento de eventos. Na camada de armazenamento de dados, o banco **PostgreSQL** é utilizado para persistência das informações, enquanto o **Supabase** complementa essa estrutura, oferecendo funcionalidades adicionais, como autenticação e acesso em tempo real. A arquitetura proposta garante escalabilidade, eficiência na comunicação entre serviços e um fluxo bem estruturado para processamento de pagamentos e agendamentos.


![Diagrama de Arquitetura-Corrigido](https://github.com/user-attachments/assets/bf62563b-3262-4573-badb-125075f15188)

**Figura 2 – Diagrama de Arquitetura. Fonte: o próprio autor.**

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


### Histórias de Usuário

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

### Diagrama de Classes

![Captura de tela 2025-03-17 094649](https://github.com/user-attachments/assets/d1dfb8a9-1b9d-404d-bad4-fbe002c7b810)

O diagrama de classes do Gastro Match representa a estrutura do sistema e seus principais componentes, incluindo usuários (clientes e chefs), autenticação, agendamentos, pagamentos, chat, avaliação, perfil e  banco de dados.
A plataforma permite que clientes encontrem e contratem chefs particulares, facilitando agendamentos, pagamentos e interações via chat. O banco de dados é responsável pela persistência das informações, garantindo a integridade dos dados.
As relações entre as classes foram estruturadas para proporcionar uma experiência fluida, desde o registro de usuários até a finalização do serviço.

### Diagrama de componentes

![Captura de tela 2025-03-25 104436](https://github.com/user-attachments/assets/ac362988-6036-4a82-8ef0-4768c81a3817)

**Figura 3 – Diagrama de componentes. Fonte: o próprio autor.**

Conforme diagrama apresentado na Figura 3, as entidades participantes da solução GastroMatch são:

- **Aplicação Web** – Responsável pela interface web do sistema, permitindo que clientes e chefs interajam com a plataforma por meio de um navegador. Se comunica com o backend através de requisições HTTP utilizando REST API.
- **Aplicação Mobile** – Versão da plataforma acessível via dispositivos móveis. Funciona de forma semelhante à aplicação web, utilizando requisições HTTP para interagir com o backend.
- **Backend** – Núcleo central da solução, responsável por processar requisições das aplicações web e mobile, gerenciar regras de negócio e intermediar a comunicação com serviços externos. Ele expõe uma Backend API baseada em REST para atender às funcionalidades da plataforma.
- **Serviços** – Conjunto de componentes auxiliares para o funcionamento do sistema:
  Banco de Dados – Armazena informações essenciais, como perfis de usuários, agendamentos, pagamentos e avaliações.
  Sistema de Mensageria (RabbitMQ) – Facilita a comunicação assíncrona entre os componentes, permitindo o envio de notificações, processamento de tarefas em segundo plano e otimização do desempenho.
- **Autenticação e Pagamentos** – Responsável pela segurança e gestão financeira:
  Serviço de Autenticação (OAuth2) – Garante a segurança no acesso, permitindo autenticação de usuários por meio do protocolo OAuth2.
  API de Pagamentos (PagBank) – Integração com serviço de pagamentos para processar transações financeiras de forma segura e eficiente.
  
## 4.3. Modelo de dados (opcional)

_Caso julgue necessário para explicar a arquitetura, apresente o diagrama de classes ou diagrama de Entidade/Relacionamentos ou tabelas do banco de dados. Este modelo pode ser essencial caso a arquitetura utilize uma solução de banco de dados distribuídos ou um banco NoSQL._

![Diagrama de Entidade Relacionamento (ER) ](imagens/der.png "Diagrama de Entidade Relacionamento (ER) ")

**Figura 4 – Diagrama de Entidade Relacionamento (ER) - exemplo. Fonte: o próprio autor.**



<a name="wireframes"></a>
# 5. Wireframes
![image](https://github.com/user-attachments/assets/41371bae-9b14-4dc5-b6f9-1b8eb5d2259c)

![image](https://github.com/user-attachments/assets/f2f191ae-4b35-48a1-b460-3108725257ec)

![image](https://github.com/user-attachments/assets/fc51371b-3631-458b-8299-30601e967b79)

![image](https://github.com/user-attachments/assets/35b6e130-9d72-4091-974b-e5b152db6410)

![image](https://github.com/user-attachments/assets/1024c576-433a-4cdf-9bf5-06da0ebd2918)

![image](https://github.com/user-attachments/assets/28fd47bd-46cf-410e-bcd3-4820960a5d0b)

![image](https://github.com/user-attachments/assets/c5da55f9-4820-469f-a410-b0991539a990)








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


**[1]** - _Associação Brasileira de Franchising (ABF). Pesquisa de Food Service 2024: crescimento do setor e tendências para o futuro. Disponível em: https://www.abf.com.br/pesquisa-de-food-service-2024. Acesso em: 18 mar. 2025._


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

# GASTROMATCH


**Guilherme Augusto Jardim de Souza, email do aluno 1**

**Isabelle Cristine Lucas Costa, email do aluno 2**

**Julia Gabriela de Resende, email do aluno 3**

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

Atualmente, clientes que desejam contratar um chef particular enfrentam desafios como:

- Falta de plataformas confiáveis e acessíveis para encontrar profissionais qualificados.

- Dificuldade na personalização do serviço, considerando restrições alimentares e preferências individuais.

- Ausência de um catálogo diversificado e organizado de chefs que possam atender diferentes demandas.

- Processo burocrático e moroso para agendar e contratar um serviço de qualidade.

## 1.2. Objetivos do trabalho

Este trabalho tem como objetivo apresentar a arquitetura do Gastro Match, um aplicativo que facilita a conexão entre clientes e chefs particulares. Para isso, serão abordados aspectos essenciais da plataforma, destacando sua estrutura e diferenciais.

Os objetivos específicos incluem:

- Definir a estrutura do Gastro Match, detalhando suas principais funcionalidades e componentes.

- Apresentar a forma como o sistema permite a busca, filtragem e contratação de chefs especializados.

- Destacar a experiência do usuário na plataforma e os diferenciais em relação às alternativas existentes.

- Especificar requisitos essenciais para o funcionamento da aplicação, garantindo usabilidade, segurança e escalabilidade.

## 1.3. Definições e Abreviaturas

Coloque aqui as definições, siglas e abreviaturas utilizadas no trabalho._

<a name="produto"></a>
# 2. Nosso Produto

## 2.1 Visão do Produto
### Visão do produto

**Para** [cliente final]:  Profissionais e entusiastas da gastronomia

**cujo** [problema que precisa ser resolvido]: Dificuldade do cliente encontrar bons chefs particulares

**O** [nome do produto]: Gastro Match

**é um** [categoria do produto]: catálogo de profissionais da culinária

**que** [benefício-chave, razão para adquiri-lo]:  facilitará de encontrar chefs particulares

**diferentemente do** [alternativa da concorrência]: “A Chef em casa”

**O nosso produto** [diferença-chave]: possui um catálogo de chefs especializados e personalizados de acordo com a necessidade do cliente.


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
      <strong>Nome:</strong> Ana Souza <br>
      <strong>Idade:</strong> 32 anos <br>
      <strong>Hobby:</strong> Ler livros de ficção científica <br>
      <strong>Trabalho:</strong> Desenvolvedora de software <br>
      <strong>Personalidade:</strong> Analítica, criativa e determinada <br>
      <strong>Sonho:</strong> Criar uma startup de tecnologia <br>
      <strong>Dores:</strong> Falta de tempo para equilibrar trabalho e vida pessoal <br>
    </td>
  </tr>
</table>


<a name="requisitos"></a>
# 3. Requisitos

_Esta seção descreve os requisitos comtemplados nesta descrição arquitetural, divididos em dois grupos: funcionais e não funcionais._

## 3.1. Requisitos Funcionais

_Enumere os requisitos funcionais previstos para a sua aplicação. Concentre-se nos requisitos funcionais que sejam críticos para a definição arquitetural. Lembre-se de listar todos os requisitos que são necessários para garantir cobertura arquitetural. Esta seção deve conter uma lista de requisitos ainda sem modelagem. Na coluna Prioridade utilize uma escala (do mais prioritário para o menos): Essencial, Desejável, Opcional._

| **ID** | **Descrição** | **Prioridade** | **Plataforma** | **Sprint** | **Status** |
| --- | --- | --- | --- | --- | --- |
| RF001 | | | _web_ | Sprint 1 | ✅ |
| RF002 | | | _mobile_ | Sprint 1 | ❌ |
| RF003 | | | _web e mobile_ | Sprint 1 |  |
| | | | | | |
| | | | | | |

Obs: acrescente mais linhas, se necessário.

## 3.2. Requisitos Não-Funcionais

_Enumere os requisitos não-funcionais previstos para a sua aplicação. Entre os requisitos não funcionais, inclua todos os requisitos que julgar importante do ponto de vista arquitetural ou seja os requisitos que terão impacto na definição da arquitetura. Os requisitos devem ser descritos de forma completa e preferencialmente quantitativa._

| **ID** | **Descrição** |
| --- | --- |
| RNF001 | |
| RNF002 | |
| | |
| | |
| | |

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

![Imagem do WhatsApp de 2025-02-25 à(s) 20 18 21_b7ff2aea](https://github.com/user-attachments/assets/047fb8f7-b61a-4fe9-9465-b11c1ce61f10)


**Figura 1 - Visão Geral da Solução (fonte: https://medium.com)**

Obs: substitua esta imagem por outra, adequada ao seu projeto (cada arquitetura é única).

## 4.1. Visão de Negócio (Funcionalidades)

_Apresente uma lista simples com as funcionalidades previstas no projeto (escopo do produto)._

1. O sistema deve...
2. O sistema deve...
3. ...

Obs: a quantidade e o escopo das funcionalidades deve ser negociado com os professores/orientadores do trabalho.

### Histórias de Usuário

_Nesta seção, você deve descrever estórias de usuários seguindo os métodos ágeis. Lembre-se das características de qualidade das estórias de usuários, ou seja, o que é preciso para descrever boas histórias de usuários._

Exemplos de Histórias de Usuário:

- Como Fulano eu quero poder convidar meus amigos para que a gente possa se reunir...

- Como Cicrano eu quero poder organizar minhas tarefas diárias, para que...

- Como gerente eu quero conseguir entender o progresso do trabalho do meu time, para que eu possa ter relatórios periódicos dos nossos acertos e falhas.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

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

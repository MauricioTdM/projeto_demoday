# 📚 Portal de Doação de Livros (Monorepo)

Este é o repositório oficial do projeto final de doação de livros, estruturado com foco em boas práticas de **Engenharia de Software e DevOps**. 

O projeto adota a arquitetura de **Monorepo**, unificando o Frontend (React) e o Backend (Python/Flask) sob o mesmo pipeline de Integração e Entrega Contínuas (CI/CD), além de ser totalmente conteinerizado com Docker.

---

## 🎯 O Desafio e as Soluções DevOps

Para este projeto, simulamos cenários reais de dores no ciclo de desenvolvimento e aplicamos práticas de DevOps para resolvê-las.

### Caso 1: A Síndrome do "Na Minha Máquina Funciona" 💻

**O Cenário:**
O projeto possui ecossistemas completamente diferentes: um Frontend em React.js e um Backend em Python (Flask).

🔴 **A Dor:**
Para um novo desenvolvedor (ou avaliador) rodar o projeto, ele precisaria instalar versões específicas do Node, do Python, gerenciar ambientes virtuais (`venv`) e configurar o banco de dados na mão. O risco de quebra por diferença de versões entre as máquinas é gigantesco.

✅ **A Solução DevOps:**
**Conteinerização e Paridade de Ambiente (Docker & Docker Compose)**
* Isolamento total das aplicações usando Dockerfiles customizados (Multi-stage para o Front e Slim para o Back).
* Orquestração com `docker-compose.yml`, garantindo que toda a infraestrutura suba idêntica em qualquer máquina.

**Resultado:** Onboarding sem atrito. Se roda no Docker, roda em qualquer lugar.

---

### Caso 2: O Push Desastroso (Shift-Left) 🛑

**O Cenário:**
Um desenvolvedor na pressa altera o código do React e envia direto para o repositório principal, quebrando a aplicação.

🔴 **A Dor:**
Gastar minutos valiosos do pipeline na nuvem (CI) apenas para descobrir que havia um erro de digitação bobo ou uma variável não declarada. O código quebrado suja o histórico do repositório.

✅ **A Solução DevOps:**
**Qualidade de Código Antecipada (Git Hooks)**
* Implementação de um `pre-push` hook na máquina local.
* Antes do código sair do computador, um script força a execução do Linter (`npm run lint`) e do empacotamento (`npm run build`).

**Resultado:** Erros são barrados localmente, protegendo a integridade do repositório.

---

### Caso 3: O Deploy Cego e Manual 🚀

**O Cenário:**
Toda vez que uma nova funcionalidade de doação fica pronta, a equipe precisa parar o que está fazendo, subir arquivos manualmente para o servidor e ficar olhando para a tela esperando terminar.

🔴 **A Dor:**
O processo é lento, propício a falhas humanas e a equipe não sabe quando o deploy dá erro a não ser que o cliente reclame que o site caiu.

✅ **A Solução DevOps:**
**CI/CD e Observabilidade Ativa (GitHub Actions, Render & Discord)**
* Esteira de CI testando o código automaticamente a cada commit na branch `main`.
* CD configurado via Webhooks no Render, atualizando a produção em tempo real sem intervenção humana.
* Monitoramento com integração direta no **Discord**, enviando alertas vermelhos se o build quebrar e mensagens verdes de sucesso.

**Resultado:** Deploy contínuo, invisível e notificações de status na palma da mão da equipe.

---

## 🏗️ Arquitetura e Tecnologias

A aplicação foi desenhada para separar claramente as responsabilidades, com infraestrutura como código (IaC) e automação de deploys.

### 💻 Frontend (SPA)
* **Stack:** React, Vite, JavaScript, SCSS.
* **Conteinerização:** Dockerfile em Multi-stage build.
* **Servidor Web:** Nginx configurado com `nginx.conf` customizado para lidar com rotas de Single Page Application (SPA) e evitar erros 404.

### ⚙️ Backend (API REST)
* **Stack:** Python, Flask, SQLite (Banco de Dados).
* **Conteinerização:** Dockerfile baseado em imagem enxuta (`python:3.10-slim`) rodando via Gunicorn para maior estabilidade.

### 🚀 DevOps & Infraestrutura
* **Orquestração Local:** `docker-compose.yml` conectando Front e Back, com injeção dinâmica de Variáveis de Ambiente e persistência de dados (Volumes) para o SQLite.
* **CI/CD (GitHub Actions):** Pipeline automatizado que valida o *Linting* e o *Build* de ambos os ecossistemas a cada `push`.
* **Observabilidade:** Integração com Webhooks do Discord para alertas em tempo real de sucesso ou falha nas esteiras de CI.
* **Deploy Contínuo (Render):** Serviços provisionados na nuvem consumindo as imagens Docker diretamente do repositório.

---

## 📁 Estrutura do Monorepo

```text
projeto_demoday/
│
├── .github/workflows/       # Pipeline de CI/CD (GitHub Actions)
├── backend/                 # API em Flask + SQLite + Dockerfile
├── frontend/                # SPA em React/Vite + Nginx + Dockerfile
└── docker-compose.yml       # Orquestrador do ambiente de desenvolvimento
```

---

## 🛠️ Como rodar o projeto localmente

Para avaliar este projeto na sua máquina, você não precisa instalar o Node ou o Python. Basta ter o **Docker** e o **Git** instalados.

1. Clone este repositório:
   ```bash
   git clone [https://github.com/MauricioTdM/projeto_demoday.git](https://github.com/MauricioTdM/projeto_demoday.git)
   ```

2. Entre na pasta do projeto:
   ```bash
   cd projeto_demoday
   ```

3. Suba toda a infraestrutura com um único comando:
   ```bash
   docker-compose up -d --build
   ```

4. Acesse no seu navegador:
   * **Frontend:** [http://localhost:3010](http://localhost:3010)
   * **Backend (API):** [http://localhost:5000](http://localhost:5000)

*(Nota: O banco de dados SQLite persistirá as doações locais graças ao mapeamento de volumes do Compose).*

---

## ☁️ Links de Produção (Deploy)

A infraestrutura está hospedada e rodando na nuvem:

* **Frontend (Aplicação):** https://app-livros-frontend.onrender.com
* **Backend (API Base URL):** https://api-livros-backend.onrender.com

*(Nota sobre a Produção: Como o deploy backend utiliza o plano gratuito e efêmero do Render sem disco persistente configurado, o banco de dados é resetado periodicamente em caso de inatividade do servidor).*
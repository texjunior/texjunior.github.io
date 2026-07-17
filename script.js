const letras = ["A", "B", "C", "D"];
const distribuicaoSimulado = { 1: 8, 2: 6, 3: 4, 4: 11, 5: 9, 6: 2 };
const bancoCompleto = [
  {
    "id": 1,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.1",
    "assunto": "Objetivos típicos de teste",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual alternativa representa um objetivo típico do teste?",
    "correta": "fornecer informações sobre a qualidade e apoiar decisões sobre o objeto de teste.",
    "erradas": [
      "provar que não existe nenhum defeito restante.",
      "substituir a depuração feita por desenvolvedores.",
      "garantir que todos os usuários aceitarão o produto."
    ],
    "explicacao": "Testes ajudam a revelar falhas, avaliar qualidade, reduzir riscos e apoiar decisões. Eles não provam ausência total de defeitos."
  },
  {
    "id": 2,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.1",
    "assunto": "Objetivos típicos de teste",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual alternativa representa um objetivo típico do teste?",
    "correta": "fornecer informações sobre a qualidade e apoiar decisões sobre o objeto de teste.",
    "erradas": [
      "provar que não existe nenhum defeito restante.",
      "substituir a depuração feita por desenvolvedores.",
      "garantir que todos os usuários aceitarão o produto."
    ],
    "explicacao": "Testes ajudam a revelar falhas, avaliar qualidade, reduzir riscos e apoiar decisões. Eles não provam ausência total de defeitos."
  },
  {
    "id": 3,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.1",
    "assunto": "Objetivos típicos de teste",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual alternativa representa um objetivo típico do teste?",
    "correta": "fornecer informações sobre a qualidade e apoiar decisões sobre o objeto de teste.",
    "erradas": [
      "provar que não existe nenhum defeito restante.",
      "substituir a depuração feita por desenvolvedores.",
      "garantir que todos os usuários aceitarão o produto."
    ],
    "explicacao": "Testes ajudam a revelar falhas, avaliar qualidade, reduzir riscos e apoiar decisões. Eles não provam ausência total de defeitos."
  },
  {
    "id": 4,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.1",
    "assunto": "Objetivos típicos de teste",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual alternativa representa um objetivo típico do teste?",
    "correta": "fornecer informações sobre a qualidade e apoiar decisões sobre o objeto de teste.",
    "erradas": [
      "provar que não existe nenhum defeito restante.",
      "substituir a depuração feita por desenvolvedores.",
      "garantir que todos os usuários aceitarão o produto."
    ],
    "explicacao": "Testes ajudam a revelar falhas, avaliar qualidade, reduzir riscos e apoiar decisões. Eles não provam ausência total de defeitos."
  },
  {
    "id": 5,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.1",
    "assunto": "Objetivos típicos de teste",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual alternativa representa um objetivo típico do teste?",
    "correta": "fornecer informações sobre a qualidade e apoiar decisões sobre o objeto de teste.",
    "erradas": [
      "provar que não existe nenhum defeito restante.",
      "substituir a depuração feita por desenvolvedores.",
      "garantir que todos os usuários aceitarão o produto."
    ],
    "explicacao": "Testes ajudam a revelar falhas, avaliar qualidade, reduzir riscos e apoiar decisões. Eles não provam ausência total de defeitos."
  },
  {
    "id": 6,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.2",
    "assunto": "Teste e depuração",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, um testador evidencia uma falha e um desenvolvedor localiza e remove a causa no código. A melhor distinção é:",
    "correta": "o teste revela falhas ou defeitos; a depuração identifica e corrige a causa.",
    "erradas": [
      "teste e depuração são nomes diferentes para a mesma atividade.",
      "depuração é feita somente por usuários finais.",
      "testar significa alterar diretamente o código."
    ],
    "explicacao": "Teste e depuração são atividades relacionadas, mas diferentes: o teste expõe problemas; a depuração investiga e corrige a causa."
  },
  {
    "id": 7,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.2",
    "assunto": "Teste e depuração",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, um testador evidencia uma falha e um desenvolvedor localiza e remove a causa no código. A melhor distinção é:",
    "correta": "o teste revela falhas ou defeitos; a depuração identifica e corrige a causa.",
    "erradas": [
      "teste e depuração são nomes diferentes para a mesma atividade.",
      "depuração é feita somente por usuários finais.",
      "testar significa alterar diretamente o código."
    ],
    "explicacao": "Teste e depuração são atividades relacionadas, mas diferentes: o teste expõe problemas; a depuração investiga e corrige a causa."
  },
  {
    "id": 8,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.2",
    "assunto": "Teste e depuração",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, um testador evidencia uma falha e um desenvolvedor localiza e remove a causa no código. A melhor distinção é:",
    "correta": "o teste revela falhas ou defeitos; a depuração identifica e corrige a causa.",
    "erradas": [
      "teste e depuração são nomes diferentes para a mesma atividade.",
      "depuração é feita somente por usuários finais.",
      "testar significa alterar diretamente o código."
    ],
    "explicacao": "Teste e depuração são atividades relacionadas, mas diferentes: o teste expõe problemas; a depuração investiga e corrige a causa."
  },
  {
    "id": 9,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.2",
    "assunto": "Teste e depuração",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, um testador evidencia uma falha e um desenvolvedor localiza e remove a causa no código. A melhor distinção é:",
    "correta": "o teste revela falhas ou defeitos; a depuração identifica e corrige a causa.",
    "erradas": [
      "teste e depuração são nomes diferentes para a mesma atividade.",
      "depuração é feita somente por usuários finais.",
      "testar significa alterar diretamente o código."
    ],
    "explicacao": "Teste e depuração são atividades relacionadas, mas diferentes: o teste expõe problemas; a depuração investiga e corrige a causa."
  },
  {
    "id": 10,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.1.2",
    "assunto": "Teste e depuração",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, um testador evidencia uma falha e um desenvolvedor localiza e remove a causa no código. A melhor distinção é:",
    "correta": "o teste revela falhas ou defeitos; a depuração identifica e corrige a causa.",
    "erradas": [
      "teste e depuração são nomes diferentes para a mesma atividade.",
      "depuração é feita somente por usuários finais.",
      "testar significa alterar diretamente o código."
    ],
    "explicacao": "Teste e depuração são atividades relacionadas, mas diferentes: o teste expõe problemas; a depuração investiga e corrige a causa."
  },
  {
    "id": 11,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.1",
    "assunto": "Necessidade dos testes",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual situação mostra por que testes são necessários?",
    "correta": "uma revisão de requisitos encontra ambiguidade antes da implementação, evitando retrabalho.",
    "erradas": [
      "executar testes apenas para cumprir burocracia sem analisar resultados.",
      "testar somente depois da entrega para não interferir no projeto.",
      "ignorar falhas raras, mesmo que tenham alto impacto de negócio."
    ],
    "explicacao": "Testes são necessários para reduzir riscos, encontrar defeitos cedo, aumentar confiança e apoiar decisões de qualidade."
  },
  {
    "id": 12,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.1",
    "assunto": "Necessidade dos testes",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual situação mostra por que testes são necessários?",
    "correta": "uma revisão de requisitos encontra ambiguidade antes da implementação, evitando retrabalho.",
    "erradas": [
      "executar testes apenas para cumprir burocracia sem analisar resultados.",
      "testar somente depois da entrega para não interferir no projeto.",
      "ignorar falhas raras, mesmo que tenham alto impacto de negócio."
    ],
    "explicacao": "Testes são necessários para reduzir riscos, encontrar defeitos cedo, aumentar confiança e apoiar decisões de qualidade."
  },
  {
    "id": 13,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.1",
    "assunto": "Necessidade dos testes",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual situação mostra por que testes são necessários?",
    "correta": "uma revisão de requisitos encontra ambiguidade antes da implementação, evitando retrabalho.",
    "erradas": [
      "executar testes apenas para cumprir burocracia sem analisar resultados.",
      "testar somente depois da entrega para não interferir no projeto.",
      "ignorar falhas raras, mesmo que tenham alto impacto de negócio."
    ],
    "explicacao": "Testes são necessários para reduzir riscos, encontrar defeitos cedo, aumentar confiança e apoiar decisões de qualidade."
  },
  {
    "id": 14,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.1",
    "assunto": "Necessidade dos testes",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual situação mostra por que testes são necessários?",
    "correta": "uma revisão de requisitos encontra ambiguidade antes da implementação, evitando retrabalho.",
    "erradas": [
      "executar testes apenas para cumprir burocracia sem analisar resultados.",
      "testar somente depois da entrega para não interferir no projeto.",
      "ignorar falhas raras, mesmo que tenham alto impacto de negócio."
    ],
    "explicacao": "Testes são necessários para reduzir riscos, encontrar defeitos cedo, aumentar confiança e apoiar decisões de qualidade."
  },
  {
    "id": 15,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.1",
    "assunto": "Necessidade dos testes",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual situação mostra por que testes são necessários?",
    "correta": "uma revisão de requisitos encontra ambiguidade antes da implementação, evitando retrabalho.",
    "erradas": [
      "executar testes apenas para cumprir burocracia sem analisar resultados.",
      "testar somente depois da entrega para não interferir no projeto.",
      "ignorar falhas raras, mesmo que tenham alto impacto de negócio."
    ],
    "explicacao": "Testes são necessários para reduzir riscos, encontrar defeitos cedo, aumentar confiança e apoiar decisões de qualidade."
  },
  {
    "id": 16,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.2",
    "assunto": "Teste, GQ e CQ",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual afirmação descreve corretamente a relação entre testes, garantia da qualidade e controle da qualidade?",
    "correta": "testes são uma forma de controle da qualidade, enquanto garantia da qualidade foca processos preventivos.",
    "erradas": [
      "garantia da qualidade e teste são exatamente a mesma coisa.",
      "controle da qualidade elimina a necessidade de testes.",
      "teste foca somente melhoria de processo, nunca produto."
    ],
    "explicacao": "A garantia da qualidade é preventiva e orientada a processos; o controle da qualidade avalia o produto. Testes são uma parte importante do controle da qualidade."
  },
  {
    "id": 17,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.2",
    "assunto": "Teste, GQ e CQ",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual afirmação descreve corretamente a relação entre testes, garantia da qualidade e controle da qualidade?",
    "correta": "testes são uma forma de controle da qualidade, enquanto garantia da qualidade foca processos preventivos.",
    "erradas": [
      "garantia da qualidade e teste são exatamente a mesma coisa.",
      "controle da qualidade elimina a necessidade de testes.",
      "teste foca somente melhoria de processo, nunca produto."
    ],
    "explicacao": "A garantia da qualidade é preventiva e orientada a processos; o controle da qualidade avalia o produto. Testes são uma parte importante do controle da qualidade."
  },
  {
    "id": 18,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.2",
    "assunto": "Teste, GQ e CQ",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual afirmação descreve corretamente a relação entre testes, garantia da qualidade e controle da qualidade?",
    "correta": "testes são uma forma de controle da qualidade, enquanto garantia da qualidade foca processos preventivos.",
    "erradas": [
      "garantia da qualidade e teste são exatamente a mesma coisa.",
      "controle da qualidade elimina a necessidade de testes.",
      "teste foca somente melhoria de processo, nunca produto."
    ],
    "explicacao": "A garantia da qualidade é preventiva e orientada a processos; o controle da qualidade avalia o produto. Testes são uma parte importante do controle da qualidade."
  },
  {
    "id": 19,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.2",
    "assunto": "Teste, GQ e CQ",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual afirmação descreve corretamente a relação entre testes, garantia da qualidade e controle da qualidade?",
    "correta": "testes são uma forma de controle da qualidade, enquanto garantia da qualidade foca processos preventivos.",
    "erradas": [
      "garantia da qualidade e teste são exatamente a mesma coisa.",
      "controle da qualidade elimina a necessidade de testes.",
      "teste foca somente melhoria de processo, nunca produto."
    ],
    "explicacao": "A garantia da qualidade é preventiva e orientada a processos; o controle da qualidade avalia o produto. Testes são uma parte importante do controle da qualidade."
  },
  {
    "id": 20,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.2",
    "assunto": "Teste, GQ e CQ",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual afirmação descreve corretamente a relação entre testes, garantia da qualidade e controle da qualidade?",
    "correta": "testes são uma forma de controle da qualidade, enquanto garantia da qualidade foca processos preventivos.",
    "erradas": [
      "garantia da qualidade e teste são exatamente a mesma coisa.",
      "controle da qualidade elimina a necessidade de testes.",
      "teste foca somente melhoria de processo, nunca produto."
    ],
    "explicacao": "A garantia da qualidade é preventiva e orientada a processos; o controle da qualidade avalia o produto. Testes são uma parte importante do controle da qualidade."
  },
  {
    "id": 21,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.3",
    "assunto": "Causa raiz, erro, defeito e falha",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, um analista interpretou uma regra de forma errada, o código foi escrito com essa regra incorreta e o sistema calculou um valor indevido. A regra incorreta no código é:",
    "correta": "um defeito.",
    "erradas": [
      "uma falha.",
      "um critério de saída.",
      "um teste de confirmação."
    ],
    "explicacao": "Erro é a ação humana equivocada; defeito é o problema no produto de trabalho; falha é o comportamento incorreto observado; causa raiz é a origem do problema."
  },
  {
    "id": 22,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.3",
    "assunto": "Causa raiz, erro, defeito e falha",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, um analista interpretou uma regra de forma errada, o código foi escrito com essa regra incorreta e o sistema calculou um valor indevido. A regra incorreta no código é:",
    "correta": "um defeito.",
    "erradas": [
      "uma falha.",
      "um critério de saída.",
      "um teste de confirmação."
    ],
    "explicacao": "Erro é a ação humana equivocada; defeito é o problema no produto de trabalho; falha é o comportamento incorreto observado; causa raiz é a origem do problema."
  },
  {
    "id": 23,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.3",
    "assunto": "Causa raiz, erro, defeito e falha",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, um analista interpretou uma regra de forma errada, o código foi escrito com essa regra incorreta e o sistema calculou um valor indevido. A regra incorreta no código é:",
    "correta": "um defeito.",
    "erradas": [
      "uma falha.",
      "um critério de saída.",
      "um teste de confirmação."
    ],
    "explicacao": "Erro é a ação humana equivocada; defeito é o problema no produto de trabalho; falha é o comportamento incorreto observado; causa raiz é a origem do problema."
  },
  {
    "id": 24,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.3",
    "assunto": "Causa raiz, erro, defeito e falha",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, um analista interpretou uma regra de forma errada, o código foi escrito com essa regra incorreta e o sistema calculou um valor indevido. A regra incorreta no código é:",
    "correta": "um defeito.",
    "erradas": [
      "uma falha.",
      "um critério de saída.",
      "um teste de confirmação."
    ],
    "explicacao": "Erro é a ação humana equivocada; defeito é o problema no produto de trabalho; falha é o comportamento incorreto observado; causa raiz é a origem do problema."
  },
  {
    "id": 25,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.2.3",
    "assunto": "Causa raiz, erro, defeito e falha",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, um analista interpretou uma regra de forma errada, o código foi escrito com essa regra incorreta e o sistema calculou um valor indevido. A regra incorreta no código é:",
    "correta": "um defeito.",
    "erradas": [
      "uma falha.",
      "um critério de saída.",
      "um teste de confirmação."
    ],
    "explicacao": "Erro é a ação humana equivocada; defeito é o problema no produto de trabalho; falha é o comportamento incorreto observado; causa raiz é a origem do problema."
  },
  {
    "id": 26,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.3.1",
    "assunto": "Sete princípios de teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, a equipe repete sempre os mesmos testes e quase não encontra novos defeitos. Qual princípio explica essa situação?",
    "correta": "paradoxo do pesticida.",
    "erradas": [
      "teste exaustivo é possível.",
      "ausência de erros garante sucesso.",
      "testes desgastam fisicamente o software."
    ],
    "explicacao": "O paradoxo do pesticida indica que repetir sempre os mesmos testes reduz a chance de encontrar novos defeitos; os testes precisam ser revisados e ampliados."
  },
  {
    "id": 27,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.3.1",
    "assunto": "Sete princípios de teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, a equipe repete sempre os mesmos testes e quase não encontra novos defeitos. Qual princípio explica essa situação?",
    "correta": "paradoxo do pesticida.",
    "erradas": [
      "teste exaustivo é possível.",
      "ausência de erros garante sucesso.",
      "testes desgastam fisicamente o software."
    ],
    "explicacao": "O paradoxo do pesticida indica que repetir sempre os mesmos testes reduz a chance de encontrar novos defeitos; os testes precisam ser revisados e ampliados."
  },
  {
    "id": 28,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.3.1",
    "assunto": "Sete princípios de teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, a equipe repete sempre os mesmos testes e quase não encontra novos defeitos. Qual princípio explica essa situação?",
    "correta": "paradoxo do pesticida.",
    "erradas": [
      "teste exaustivo é possível.",
      "ausência de erros garante sucesso.",
      "testes desgastam fisicamente o software."
    ],
    "explicacao": "O paradoxo do pesticida indica que repetir sempre os mesmos testes reduz a chance de encontrar novos defeitos; os testes precisam ser revisados e ampliados."
  },
  {
    "id": 29,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.3.1",
    "assunto": "Sete princípios de teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, a equipe repete sempre os mesmos testes e quase não encontra novos defeitos. Qual princípio explica essa situação?",
    "correta": "paradoxo do pesticida.",
    "erradas": [
      "teste exaustivo é possível.",
      "ausência de erros garante sucesso.",
      "testes desgastam fisicamente o software."
    ],
    "explicacao": "O paradoxo do pesticida indica que repetir sempre os mesmos testes reduz a chance de encontrar novos defeitos; os testes precisam ser revisados e ampliados."
  },
  {
    "id": 30,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.3.1",
    "assunto": "Sete princípios de teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, a equipe repete sempre os mesmos testes e quase não encontra novos defeitos. Qual princípio explica essa situação?",
    "correta": "paradoxo do pesticida.",
    "erradas": [
      "teste exaustivo é possível.",
      "ausência de erros garante sucesso.",
      "testes desgastam fisicamente o software."
    ],
    "explicacao": "O paradoxo do pesticida indica que repetir sempre os mesmos testes reduz a chance de encontrar novos defeitos; os testes precisam ser revisados e ampliados."
  },
  {
    "id": 31,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.1",
    "assunto": "Atividades e tarefas de teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, identificar condições de teste a partir de requisitos faz parte principalmente de qual atividade?",
    "correta": "análise de teste.",
    "erradas": [
      "conclusão do teste.",
      "depuração.",
      "gerenciamento de configuração."
    ],
    "explicacao": "A análise de teste transforma a base de teste em condições testáveis. Depois vêm projeto, implementação, execução e outras atividades."
  },
  {
    "id": 32,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.1",
    "assunto": "Atividades e tarefas de teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, identificar condições de teste a partir de requisitos faz parte principalmente de qual atividade?",
    "correta": "análise de teste.",
    "erradas": [
      "conclusão do teste.",
      "depuração.",
      "gerenciamento de configuração."
    ],
    "explicacao": "A análise de teste transforma a base de teste em condições testáveis. Depois vêm projeto, implementação, execução e outras atividades."
  },
  {
    "id": 33,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.1",
    "assunto": "Atividades e tarefas de teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, identificar condições de teste a partir de requisitos faz parte principalmente de qual atividade?",
    "correta": "análise de teste.",
    "erradas": [
      "conclusão do teste.",
      "depuração.",
      "gerenciamento de configuração."
    ],
    "explicacao": "A análise de teste transforma a base de teste em condições testáveis. Depois vêm projeto, implementação, execução e outras atividades."
  },
  {
    "id": 34,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.1",
    "assunto": "Atividades e tarefas de teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, identificar condições de teste a partir de requisitos faz parte principalmente de qual atividade?",
    "correta": "análise de teste.",
    "erradas": [
      "conclusão do teste.",
      "depuração.",
      "gerenciamento de configuração."
    ],
    "explicacao": "A análise de teste transforma a base de teste em condições testáveis. Depois vêm projeto, implementação, execução e outras atividades."
  },
  {
    "id": 35,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.1",
    "assunto": "Atividades e tarefas de teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, identificar condições de teste a partir de requisitos faz parte principalmente de qual atividade?",
    "correta": "análise de teste.",
    "erradas": [
      "conclusão do teste.",
      "depuração.",
      "gerenciamento de configuração."
    ],
    "explicacao": "A análise de teste transforma a base de teste em condições testáveis. Depois vêm projeto, implementação, execução e outras atividades."
  },
  {
    "id": 36,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.2",
    "assunto": "Contexto no processo de teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, por que o processo de teste deve variar conforme o contexto?",
    "correta": "porque domínio, riscos, ciclo de vida, criticidade e restrições influenciam a estratégia de teste.",
    "erradas": [
      "porque todos os projetos devem usar exatamente os mesmos testes.",
      "porque sistemas críticos precisam de menos evidência.",
      "porque o contexto não afeta técnica, ambiente nem prioridade."
    ],
    "explicacao": "O CTFL enfatiza que teste depende do contexto. Um sistema crítico, um MVP e um produto regulado exigem abordagens diferentes."
  },
  {
    "id": 37,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.2",
    "assunto": "Contexto no processo de teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, por que o processo de teste deve variar conforme o contexto?",
    "correta": "porque domínio, riscos, ciclo de vida, criticidade e restrições influenciam a estratégia de teste.",
    "erradas": [
      "porque todos os projetos devem usar exatamente os mesmos testes.",
      "porque sistemas críticos precisam de menos evidência.",
      "porque o contexto não afeta técnica, ambiente nem prioridade."
    ],
    "explicacao": "O CTFL enfatiza que teste depende do contexto. Um sistema crítico, um MVP e um produto regulado exigem abordagens diferentes."
  },
  {
    "id": 38,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.2",
    "assunto": "Contexto no processo de teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, por que o processo de teste deve variar conforme o contexto?",
    "correta": "porque domínio, riscos, ciclo de vida, criticidade e restrições influenciam a estratégia de teste.",
    "erradas": [
      "porque todos os projetos devem usar exatamente os mesmos testes.",
      "porque sistemas críticos precisam de menos evidência.",
      "porque o contexto não afeta técnica, ambiente nem prioridade."
    ],
    "explicacao": "O CTFL enfatiza que teste depende do contexto. Um sistema crítico, um MVP e um produto regulado exigem abordagens diferentes."
  },
  {
    "id": 39,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.2",
    "assunto": "Contexto no processo de teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, por que o processo de teste deve variar conforme o contexto?",
    "correta": "porque domínio, riscos, ciclo de vida, criticidade e restrições influenciam a estratégia de teste.",
    "erradas": [
      "porque todos os projetos devem usar exatamente os mesmos testes.",
      "porque sistemas críticos precisam de menos evidência.",
      "porque o contexto não afeta técnica, ambiente nem prioridade."
    ],
    "explicacao": "O CTFL enfatiza que teste depende do contexto. Um sistema crítico, um MVP e um produto regulado exigem abordagens diferentes."
  },
  {
    "id": 40,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.2",
    "assunto": "Contexto no processo de teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, por que o processo de teste deve variar conforme o contexto?",
    "correta": "porque domínio, riscos, ciclo de vida, criticidade e restrições influenciam a estratégia de teste.",
    "erradas": [
      "porque todos os projetos devem usar exatamente os mesmos testes.",
      "porque sistemas críticos precisam de menos evidência.",
      "porque o contexto não afeta técnica, ambiente nem prioridade."
    ],
    "explicacao": "O CTFL enfatiza que teste depende do contexto. Um sistema crítico, um MVP e um produto regulado exigem abordagens diferentes."
  },
  {
    "id": 41,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.3",
    "assunto": "Testware",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual conjunto representa testware que apoia as atividades de teste?",
    "correta": "plano de teste, casos de teste, dados de teste, scripts e relatórios.",
    "erradas": [
      "apenas código-fonte de produção e campanhas de marketing.",
      "somente contrato comercial e nota fiscal.",
      "apenas prints soltos sem relação com requisitos."
    ],
    "explicacao": "Testware é o conjunto de produtos de trabalho usados ou produzidos no teste, como casos, dados, scripts, planos e relatórios."
  },
  {
    "id": 42,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.3",
    "assunto": "Testware",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual conjunto representa testware que apoia as atividades de teste?",
    "correta": "plano de teste, casos de teste, dados de teste, scripts e relatórios.",
    "erradas": [
      "apenas código-fonte de produção e campanhas de marketing.",
      "somente contrato comercial e nota fiscal.",
      "apenas prints soltos sem relação com requisitos."
    ],
    "explicacao": "Testware é o conjunto de produtos de trabalho usados ou produzidos no teste, como casos, dados, scripts, planos e relatórios."
  },
  {
    "id": 43,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.3",
    "assunto": "Testware",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual conjunto representa testware que apoia as atividades de teste?",
    "correta": "plano de teste, casos de teste, dados de teste, scripts e relatórios.",
    "erradas": [
      "apenas código-fonte de produção e campanhas de marketing.",
      "somente contrato comercial e nota fiscal.",
      "apenas prints soltos sem relação com requisitos."
    ],
    "explicacao": "Testware é o conjunto de produtos de trabalho usados ou produzidos no teste, como casos, dados, scripts, planos e relatórios."
  },
  {
    "id": 44,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.3",
    "assunto": "Testware",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual conjunto representa testware que apoia as atividades de teste?",
    "correta": "plano de teste, casos de teste, dados de teste, scripts e relatórios.",
    "erradas": [
      "apenas código-fonte de produção e campanhas de marketing.",
      "somente contrato comercial e nota fiscal.",
      "apenas prints soltos sem relação com requisitos."
    ],
    "explicacao": "Testware é o conjunto de produtos de trabalho usados ou produzidos no teste, como casos, dados, scripts, planos e relatórios."
  },
  {
    "id": 45,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.3",
    "assunto": "Testware",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual conjunto representa testware que apoia as atividades de teste?",
    "correta": "plano de teste, casos de teste, dados de teste, scripts e relatórios.",
    "erradas": [
      "apenas código-fonte de produção e campanhas de marketing.",
      "somente contrato comercial e nota fiscal.",
      "apenas prints soltos sem relação com requisitos."
    ],
    "explicacao": "Testware é o conjunto de produtos de trabalho usados ou produzidos no teste, como casos, dados, scripts, planos e relatórios."
  },
  {
    "id": 46,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.4",
    "assunto": "Rastreabilidade",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, ligar requisitos, condições de teste, casos de teste, resultados e defeitos ajuda principalmente a:",
    "correta": "avaliar cobertura, impacto de mudanças e comunicação do status de teste.",
    "erradas": [
      "garantir que todos os defeitos foram removidos.",
      "eliminar a necessidade de priorizar testes.",
      "substituir a participação do negócio."
    ],
    "explicacao": "A rastreabilidade ajuda a entender o que foi coberto, o que foi afetado por uma mudança e como resultados se relacionam aos requisitos."
  },
  {
    "id": 47,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.4",
    "assunto": "Rastreabilidade",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, ligar requisitos, condições de teste, casos de teste, resultados e defeitos ajuda principalmente a:",
    "correta": "avaliar cobertura, impacto de mudanças e comunicação do status de teste.",
    "erradas": [
      "garantir que todos os defeitos foram removidos.",
      "eliminar a necessidade de priorizar testes.",
      "substituir a participação do negócio."
    ],
    "explicacao": "A rastreabilidade ajuda a entender o que foi coberto, o que foi afetado por uma mudança e como resultados se relacionam aos requisitos."
  },
  {
    "id": 48,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.4",
    "assunto": "Rastreabilidade",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, ligar requisitos, condições de teste, casos de teste, resultados e defeitos ajuda principalmente a:",
    "correta": "avaliar cobertura, impacto de mudanças e comunicação do status de teste.",
    "erradas": [
      "garantir que todos os defeitos foram removidos.",
      "eliminar a necessidade de priorizar testes.",
      "substituir a participação do negócio."
    ],
    "explicacao": "A rastreabilidade ajuda a entender o que foi coberto, o que foi afetado por uma mudança e como resultados se relacionam aos requisitos."
  },
  {
    "id": 49,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.4",
    "assunto": "Rastreabilidade",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, ligar requisitos, condições de teste, casos de teste, resultados e defeitos ajuda principalmente a:",
    "correta": "avaliar cobertura, impacto de mudanças e comunicação do status de teste.",
    "erradas": [
      "garantir que todos os defeitos foram removidos.",
      "eliminar a necessidade de priorizar testes.",
      "substituir a participação do negócio."
    ],
    "explicacao": "A rastreabilidade ajuda a entender o que foi coberto, o que foi afetado por uma mudança e como resultados se relacionam aos requisitos."
  },
  {
    "id": 50,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.4",
    "assunto": "Rastreabilidade",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, ligar requisitos, condições de teste, casos de teste, resultados e defeitos ajuda principalmente a:",
    "correta": "avaliar cobertura, impacto de mudanças e comunicação do status de teste.",
    "erradas": [
      "garantir que todos os defeitos foram removidos.",
      "eliminar a necessidade de priorizar testes.",
      "substituir a participação do negócio."
    ],
    "explicacao": "A rastreabilidade ajuda a entender o que foi coberto, o que foi afetado por uma mudança e como resultados se relacionam aos requisitos."
  },
  {
    "id": 51,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.5",
    "assunto": "Papéis no teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual comparação entre papéis está mais alinhada ao CTFL?",
    "correta": "gerente de teste tende a coordenar e controlar atividades; testador tende a analisar, projetar, executar e relatar testes.",
    "erradas": [
      "testador sempre decide sozinho a liberação do produto.",
      "desenvolvedor nunca participa de testes.",
      "usuário final deve depurar todos os defeitos."
    ],
    "explicacao": "Papéis podem variar por organização, mas é importante distinguir responsabilidades de planejamento, controle, execução, análise e apoio ao negócio."
  },
  {
    "id": 52,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.5",
    "assunto": "Papéis no teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual comparação entre papéis está mais alinhada ao CTFL?",
    "correta": "gerente de teste tende a coordenar e controlar atividades; testador tende a analisar, projetar, executar e relatar testes.",
    "erradas": [
      "testador sempre decide sozinho a liberação do produto.",
      "desenvolvedor nunca participa de testes.",
      "usuário final deve depurar todos os defeitos."
    ],
    "explicacao": "Papéis podem variar por organização, mas é importante distinguir responsabilidades de planejamento, controle, execução, análise e apoio ao negócio."
  },
  {
    "id": 53,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.5",
    "assunto": "Papéis no teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual comparação entre papéis está mais alinhada ao CTFL?",
    "correta": "gerente de teste tende a coordenar e controlar atividades; testador tende a analisar, projetar, executar e relatar testes.",
    "erradas": [
      "testador sempre decide sozinho a liberação do produto.",
      "desenvolvedor nunca participa de testes.",
      "usuário final deve depurar todos os defeitos."
    ],
    "explicacao": "Papéis podem variar por organização, mas é importante distinguir responsabilidades de planejamento, controle, execução, análise e apoio ao negócio."
  },
  {
    "id": 54,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.5",
    "assunto": "Papéis no teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual comparação entre papéis está mais alinhada ao CTFL?",
    "correta": "gerente de teste tende a coordenar e controlar atividades; testador tende a analisar, projetar, executar e relatar testes.",
    "erradas": [
      "testador sempre decide sozinho a liberação do produto.",
      "desenvolvedor nunca participa de testes.",
      "usuário final deve depurar todos os defeitos."
    ],
    "explicacao": "Papéis podem variar por organização, mas é importante distinguir responsabilidades de planejamento, controle, execução, análise e apoio ao negócio."
  },
  {
    "id": 55,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.4.5",
    "assunto": "Papéis no teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual comparação entre papéis está mais alinhada ao CTFL?",
    "correta": "gerente de teste tende a coordenar e controlar atividades; testador tende a analisar, projetar, executar e relatar testes.",
    "erradas": [
      "testador sempre decide sozinho a liberação do produto.",
      "desenvolvedor nunca participa de testes.",
      "usuário final deve depurar todos os defeitos."
    ],
    "explicacao": "Papéis podem variar por organização, mas é importante distinguir responsabilidades de planejamento, controle, execução, análise e apoio ao negócio."
  },
  {
    "id": 56,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.1",
    "assunto": "Habilidades essenciais",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual conjunto de habilidades é especialmente útil para um testador?",
    "correta": "pensamento crítico, curiosidade, comunicação clara, colaboração e atenção a detalhes.",
    "erradas": [
      "foco em culpar pessoas e evitar conversas difíceis.",
      "apenas decorar nomes de ferramentas.",
      "não questionar requisitos para evitar conflitos."
    ],
    "explicacao": "Além de conhecimento técnico, bons testadores precisam de comunicação, análise crítica, domínio do negócio e postura colaborativa."
  },
  {
    "id": 57,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.1",
    "assunto": "Habilidades essenciais",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual conjunto de habilidades é especialmente útil para um testador?",
    "correta": "pensamento crítico, curiosidade, comunicação clara, colaboração e atenção a detalhes.",
    "erradas": [
      "foco em culpar pessoas e evitar conversas difíceis.",
      "apenas decorar nomes de ferramentas.",
      "não questionar requisitos para evitar conflitos."
    ],
    "explicacao": "Além de conhecimento técnico, bons testadores precisam de comunicação, análise crítica, domínio do negócio e postura colaborativa."
  },
  {
    "id": 58,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.1",
    "assunto": "Habilidades essenciais",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual conjunto de habilidades é especialmente útil para um testador?",
    "correta": "pensamento crítico, curiosidade, comunicação clara, colaboração e atenção a detalhes.",
    "erradas": [
      "foco em culpar pessoas e evitar conversas difíceis.",
      "apenas decorar nomes de ferramentas.",
      "não questionar requisitos para evitar conflitos."
    ],
    "explicacao": "Além de conhecimento técnico, bons testadores precisam de comunicação, análise crítica, domínio do negócio e postura colaborativa."
  },
  {
    "id": 59,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.1",
    "assunto": "Habilidades essenciais",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual conjunto de habilidades é especialmente útil para um testador?",
    "correta": "pensamento crítico, curiosidade, comunicação clara, colaboração e atenção a detalhes.",
    "erradas": [
      "foco em culpar pessoas e evitar conversas difíceis.",
      "apenas decorar nomes de ferramentas.",
      "não questionar requisitos para evitar conflitos."
    ],
    "explicacao": "Além de conhecimento técnico, bons testadores precisam de comunicação, análise crítica, domínio do negócio e postura colaborativa."
  },
  {
    "id": 60,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.1",
    "assunto": "Habilidades essenciais",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual conjunto de habilidades é especialmente útil para um testador?",
    "correta": "pensamento crítico, curiosidade, comunicação clara, colaboração e atenção a detalhes.",
    "erradas": [
      "foco em culpar pessoas e evitar conversas difíceis.",
      "apenas decorar nomes de ferramentas.",
      "não questionar requisitos para evitar conflitos."
    ],
    "explicacao": "Além de conhecimento técnico, bons testadores precisam de comunicação, análise crítica, domínio do negócio e postura colaborativa."
  },
  {
    "id": 61,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.2",
    "assunto": "Abordagem de equipe completa",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual é uma vantagem da abordagem de equipe completa?",
    "correta": "qualidade passa a ser responsabilidade compartilhada entre desenvolvedores, testadores e negócio.",
    "erradas": [
      "somente o testador fica responsável pela qualidade.",
      "o negócio deixa de participar das decisões.",
      "os testes só começam no fim do projeto."
    ],
    "explicacao": "Na abordagem de equipe completa, diferentes competências são usadas em conjunto para prevenir e encontrar problemas mais cedo."
  },
  {
    "id": 62,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.2",
    "assunto": "Abordagem de equipe completa",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual é uma vantagem da abordagem de equipe completa?",
    "correta": "qualidade passa a ser responsabilidade compartilhada entre desenvolvedores, testadores e negócio.",
    "erradas": [
      "somente o testador fica responsável pela qualidade.",
      "o negócio deixa de participar das decisões.",
      "os testes só começam no fim do projeto."
    ],
    "explicacao": "Na abordagem de equipe completa, diferentes competências são usadas em conjunto para prevenir e encontrar problemas mais cedo."
  },
  {
    "id": 63,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.2",
    "assunto": "Abordagem de equipe completa",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual é uma vantagem da abordagem de equipe completa?",
    "correta": "qualidade passa a ser responsabilidade compartilhada entre desenvolvedores, testadores e negócio.",
    "erradas": [
      "somente o testador fica responsável pela qualidade.",
      "o negócio deixa de participar das decisões.",
      "os testes só começam no fim do projeto."
    ],
    "explicacao": "Na abordagem de equipe completa, diferentes competências são usadas em conjunto para prevenir e encontrar problemas mais cedo."
  },
  {
    "id": 64,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.2",
    "assunto": "Abordagem de equipe completa",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual é uma vantagem da abordagem de equipe completa?",
    "correta": "qualidade passa a ser responsabilidade compartilhada entre desenvolvedores, testadores e negócio.",
    "erradas": [
      "somente o testador fica responsável pela qualidade.",
      "o negócio deixa de participar das decisões.",
      "os testes só começam no fim do projeto."
    ],
    "explicacao": "Na abordagem de equipe completa, diferentes competências são usadas em conjunto para prevenir e encontrar problemas mais cedo."
  },
  {
    "id": 65,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.2",
    "assunto": "Abordagem de equipe completa",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual é uma vantagem da abordagem de equipe completa?",
    "correta": "qualidade passa a ser responsabilidade compartilhada entre desenvolvedores, testadores e negócio.",
    "erradas": [
      "somente o testador fica responsável pela qualidade.",
      "o negócio deixa de participar das decisões.",
      "os testes só começam no fim do projeto."
    ],
    "explicacao": "Na abordagem de equipe completa, diferentes competências são usadas em conjunto para prevenir e encontrar problemas mais cedo."
  },
  {
    "id": 66,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.3",
    "assunto": "Independência dos testes",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual alternativa mostra benefício e possível desvantagem da independência dos testes?",
    "correta": "beneficia por reduzir viés do autor, mas pode criar barreiras de comunicação se mal aplicada.",
    "erradas": [
      "garante ausência de defeitos e não tem desvantagens.",
      "elimina a necessidade de colaboração com desenvolvedores.",
      "significa que apenas pessoas externas podem testar."
    ],
    "explicacao": "Independência aumenta a chance de encontrar problemas por reduzir viés, mas precisa ser equilibrada com comunicação e colaboração."
  },
  {
    "id": 67,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.3",
    "assunto": "Independência dos testes",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual alternativa mostra benefício e possível desvantagem da independência dos testes?",
    "correta": "beneficia por reduzir viés do autor, mas pode criar barreiras de comunicação se mal aplicada.",
    "erradas": [
      "garante ausência de defeitos e não tem desvantagens.",
      "elimina a necessidade de colaboração com desenvolvedores.",
      "significa que apenas pessoas externas podem testar."
    ],
    "explicacao": "Independência aumenta a chance de encontrar problemas por reduzir viés, mas precisa ser equilibrada com comunicação e colaboração."
  },
  {
    "id": 68,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.3",
    "assunto": "Independência dos testes",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual alternativa mostra benefício e possível desvantagem da independência dos testes?",
    "correta": "beneficia por reduzir viés do autor, mas pode criar barreiras de comunicação se mal aplicada.",
    "erradas": [
      "garante ausência de defeitos e não tem desvantagens.",
      "elimina a necessidade de colaboração com desenvolvedores.",
      "significa que apenas pessoas externas podem testar."
    ],
    "explicacao": "Independência aumenta a chance de encontrar problemas por reduzir viés, mas precisa ser equilibrada com comunicação e colaboração."
  },
  {
    "id": 69,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.3",
    "assunto": "Independência dos testes",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual alternativa mostra benefício e possível desvantagem da independência dos testes?",
    "correta": "beneficia por reduzir viés do autor, mas pode criar barreiras de comunicação se mal aplicada.",
    "erradas": [
      "garante ausência de defeitos e não tem desvantagens.",
      "elimina a necessidade de colaboração com desenvolvedores.",
      "significa que apenas pessoas externas podem testar."
    ],
    "explicacao": "Independência aumenta a chance de encontrar problemas por reduzir viés, mas precisa ser equilibrada com comunicação e colaboração."
  },
  {
    "id": 70,
    "capitulo": 1,
    "capituloNome": "Fundamentos de Teste",
    "lo": "FL-1.5.3",
    "assunto": "Independência dos testes",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual alternativa mostra benefício e possível desvantagem da independência dos testes?",
    "correta": "beneficia por reduzir viés do autor, mas pode criar barreiras de comunicação se mal aplicada.",
    "erradas": [
      "garante ausência de defeitos e não tem desvantagens.",
      "elimina a necessidade de colaboração com desenvolvedores.",
      "significa que apenas pessoas externas podem testar."
    ],
    "explicacao": "Independência aumenta a chance de encontrar problemas por reduzir viés, mas precisa ser equilibrada com comunicação e colaboração."
  },
  {
    "id": 71,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.1",
    "assunto": "Impacto do SDLC nos testes",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, como o ciclo de vida de desenvolvimento influencia os testes?",
    "correta": "define quando e como testar, quais artefatos estão disponíveis e como o feedback será incorporado.",
    "erradas": [
      "não influencia testes, pois a execução é sempre igual.",
      "obriga que todos os testes ocorram somente no fim.",
      "elimina a necessidade de teste estático."
    ],
    "explicacao": "Modelos sequenciais, iterativos, ágeis e DevOps influenciam momento, escopo, automação, documentação e feedback dos testes."
  },
  {
    "id": 72,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.1",
    "assunto": "Impacto do SDLC nos testes",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, como o ciclo de vida de desenvolvimento influencia os testes?",
    "correta": "define quando e como testar, quais artefatos estão disponíveis e como o feedback será incorporado.",
    "erradas": [
      "não influencia testes, pois a execução é sempre igual.",
      "obriga que todos os testes ocorram somente no fim.",
      "elimina a necessidade de teste estático."
    ],
    "explicacao": "Modelos sequenciais, iterativos, ágeis e DevOps influenciam momento, escopo, automação, documentação e feedback dos testes."
  },
  {
    "id": 73,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.1",
    "assunto": "Impacto do SDLC nos testes",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, como o ciclo de vida de desenvolvimento influencia os testes?",
    "correta": "define quando e como testar, quais artefatos estão disponíveis e como o feedback será incorporado.",
    "erradas": [
      "não influencia testes, pois a execução é sempre igual.",
      "obriga que todos os testes ocorram somente no fim.",
      "elimina a necessidade de teste estático."
    ],
    "explicacao": "Modelos sequenciais, iterativos, ágeis e DevOps influenciam momento, escopo, automação, documentação e feedback dos testes."
  },
  {
    "id": 74,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.1",
    "assunto": "Impacto do SDLC nos testes",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, como o ciclo de vida de desenvolvimento influencia os testes?",
    "correta": "define quando e como testar, quais artefatos estão disponíveis e como o feedback será incorporado.",
    "erradas": [
      "não influencia testes, pois a execução é sempre igual.",
      "obriga que todos os testes ocorram somente no fim.",
      "elimina a necessidade de teste estático."
    ],
    "explicacao": "Modelos sequenciais, iterativos, ágeis e DevOps influenciam momento, escopo, automação, documentação e feedback dos testes."
  },
  {
    "id": 75,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.1",
    "assunto": "Impacto do SDLC nos testes",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, como o ciclo de vida de desenvolvimento influencia os testes?",
    "correta": "define quando e como testar, quais artefatos estão disponíveis e como o feedback será incorporado.",
    "erradas": [
      "não influencia testes, pois a execução é sempre igual.",
      "obriga que todos os testes ocorram somente no fim.",
      "elimina a necessidade de teste estático."
    ],
    "explicacao": "Modelos sequenciais, iterativos, ágeis e DevOps influenciam momento, escopo, automação, documentação e feedback dos testes."
  },
  {
    "id": 76,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.2",
    "assunto": "Boas práticas em qualquer SDLC",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual prática é aplicável a todos os ciclos de vida?",
    "correta": "definir objetivos de teste, rastrear a base de teste e testar cedo quando possível.",
    "erradas": [
      "esperar todo o sistema ficar pronto para pensar em testes.",
      "evitar critérios de aceite.",
      "testar sem comunicação com stakeholders."
    ],
    "explicacao": "Independentemente do ciclo de vida, boas práticas incluem teste antecipado, rastreabilidade, níveis adequados e comunicação de resultados."
  },
  {
    "id": 77,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.2",
    "assunto": "Boas práticas em qualquer SDLC",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual prática é aplicável a todos os ciclos de vida?",
    "correta": "definir objetivos de teste, rastrear a base de teste e testar cedo quando possível.",
    "erradas": [
      "esperar todo o sistema ficar pronto para pensar em testes.",
      "evitar critérios de aceite.",
      "testar sem comunicação com stakeholders."
    ],
    "explicacao": "Independentemente do ciclo de vida, boas práticas incluem teste antecipado, rastreabilidade, níveis adequados e comunicação de resultados."
  },
  {
    "id": 78,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.2",
    "assunto": "Boas práticas em qualquer SDLC",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual prática é aplicável a todos os ciclos de vida?",
    "correta": "definir objetivos de teste, rastrear a base de teste e testar cedo quando possível.",
    "erradas": [
      "esperar todo o sistema ficar pronto para pensar em testes.",
      "evitar critérios de aceite.",
      "testar sem comunicação com stakeholders."
    ],
    "explicacao": "Independentemente do ciclo de vida, boas práticas incluem teste antecipado, rastreabilidade, níveis adequados e comunicação de resultados."
  },
  {
    "id": 79,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.2",
    "assunto": "Boas práticas em qualquer SDLC",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual prática é aplicável a todos os ciclos de vida?",
    "correta": "definir objetivos de teste, rastrear a base de teste e testar cedo quando possível.",
    "erradas": [
      "esperar todo o sistema ficar pronto para pensar em testes.",
      "evitar critérios de aceite.",
      "testar sem comunicação com stakeholders."
    ],
    "explicacao": "Independentemente do ciclo de vida, boas práticas incluem teste antecipado, rastreabilidade, níveis adequados e comunicação de resultados."
  },
  {
    "id": 80,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.2",
    "assunto": "Boas práticas em qualquer SDLC",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual prática é aplicável a todos os ciclos de vida?",
    "correta": "definir objetivos de teste, rastrear a base de teste e testar cedo quando possível.",
    "erradas": [
      "esperar todo o sistema ficar pronto para pensar em testes.",
      "evitar critérios de aceite.",
      "testar sem comunicação com stakeholders."
    ],
    "explicacao": "Independentemente do ciclo de vida, boas práticas incluem teste antecipado, rastreabilidade, níveis adequados e comunicação de resultados."
  },
  {
    "id": 81,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.3",
    "assunto": "Abordagens test-first",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual opção é exemplo de abordagem que prioriza o teste?",
    "correta": "TDD, ATDD ou BDD, em que testes ou exemplos orientam o desenvolvimento.",
    "erradas": [
      "adiar todo teste para depois da implantação.",
      "codificar sem requisitos nem exemplos.",
      "corrigir defeitos sem registrar evidências."
    ],
    "explicacao": "Abordagens test-first usam testes, exemplos ou critérios de aceite antes ou durante o desenvolvimento para guiar a solução."
  },
  {
    "id": 82,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.3",
    "assunto": "Abordagens test-first",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual opção é exemplo de abordagem que prioriza o teste?",
    "correta": "TDD, ATDD ou BDD, em que testes ou exemplos orientam o desenvolvimento.",
    "erradas": [
      "adiar todo teste para depois da implantação.",
      "codificar sem requisitos nem exemplos.",
      "corrigir defeitos sem registrar evidências."
    ],
    "explicacao": "Abordagens test-first usam testes, exemplos ou critérios de aceite antes ou durante o desenvolvimento para guiar a solução."
  },
  {
    "id": 83,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.3",
    "assunto": "Abordagens test-first",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual opção é exemplo de abordagem que prioriza o teste?",
    "correta": "TDD, ATDD ou BDD, em que testes ou exemplos orientam o desenvolvimento.",
    "erradas": [
      "adiar todo teste para depois da implantação.",
      "codificar sem requisitos nem exemplos.",
      "corrigir defeitos sem registrar evidências."
    ],
    "explicacao": "Abordagens test-first usam testes, exemplos ou critérios de aceite antes ou durante o desenvolvimento para guiar a solução."
  },
  {
    "id": 84,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.3",
    "assunto": "Abordagens test-first",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual opção é exemplo de abordagem que prioriza o teste?",
    "correta": "TDD, ATDD ou BDD, em que testes ou exemplos orientam o desenvolvimento.",
    "erradas": [
      "adiar todo teste para depois da implantação.",
      "codificar sem requisitos nem exemplos.",
      "corrigir defeitos sem registrar evidências."
    ],
    "explicacao": "Abordagens test-first usam testes, exemplos ou critérios de aceite antes ou durante o desenvolvimento para guiar a solução."
  },
  {
    "id": 85,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.3",
    "assunto": "Abordagens test-first",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual opção é exemplo de abordagem que prioriza o teste?",
    "correta": "TDD, ATDD ou BDD, em que testes ou exemplos orientam o desenvolvimento.",
    "erradas": [
      "adiar todo teste para depois da implantação.",
      "codificar sem requisitos nem exemplos.",
      "corrigir defeitos sem registrar evidências."
    ],
    "explicacao": "Abordagens test-first usam testes, exemplos ou critérios de aceite antes ou durante o desenvolvimento para guiar a solução."
  },
  {
    "id": 86,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.4",
    "assunto": "DevOps e testes",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual é um impacto comum do DevOps nos testes?",
    "correta": "aumentar a necessidade de automação, feedback rápido, monitoramento e integração contínua dos testes.",
    "erradas": [
      "eliminar todos os testes manuais e exploratórios.",
      "fazer testes apenas uma vez por ano.",
      "impedir colaboração entre operações e desenvolvimento."
    ],
    "explicacao": "DevOps promove integração, entrega e feedback contínuos. Testes precisam ser rápidos, confiáveis e integrados ao pipeline."
  },
  {
    "id": 87,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.4",
    "assunto": "DevOps e testes",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual é um impacto comum do DevOps nos testes?",
    "correta": "aumentar a necessidade de automação, feedback rápido, monitoramento e integração contínua dos testes.",
    "erradas": [
      "eliminar todos os testes manuais e exploratórios.",
      "fazer testes apenas uma vez por ano.",
      "impedir colaboração entre operações e desenvolvimento."
    ],
    "explicacao": "DevOps promove integração, entrega e feedback contínuos. Testes precisam ser rápidos, confiáveis e integrados ao pipeline."
  },
  {
    "id": 88,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.4",
    "assunto": "DevOps e testes",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual é um impacto comum do DevOps nos testes?",
    "correta": "aumentar a necessidade de automação, feedback rápido, monitoramento e integração contínua dos testes.",
    "erradas": [
      "eliminar todos os testes manuais e exploratórios.",
      "fazer testes apenas uma vez por ano.",
      "impedir colaboração entre operações e desenvolvimento."
    ],
    "explicacao": "DevOps promove integração, entrega e feedback contínuos. Testes precisam ser rápidos, confiáveis e integrados ao pipeline."
  },
  {
    "id": 89,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.4",
    "assunto": "DevOps e testes",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual é um impacto comum do DevOps nos testes?",
    "correta": "aumentar a necessidade de automação, feedback rápido, monitoramento e integração contínua dos testes.",
    "erradas": [
      "eliminar todos os testes manuais e exploratórios.",
      "fazer testes apenas uma vez por ano.",
      "impedir colaboração entre operações e desenvolvimento."
    ],
    "explicacao": "DevOps promove integração, entrega e feedback contínuos. Testes precisam ser rápidos, confiáveis e integrados ao pipeline."
  },
  {
    "id": 90,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.4",
    "assunto": "DevOps e testes",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual é um impacto comum do DevOps nos testes?",
    "correta": "aumentar a necessidade de automação, feedback rápido, monitoramento e integração contínua dos testes.",
    "erradas": [
      "eliminar todos os testes manuais e exploratórios.",
      "fazer testes apenas uma vez por ano.",
      "impedir colaboração entre operações e desenvolvimento."
    ],
    "explicacao": "DevOps promove integração, entrega e feedback contínuos. Testes precisam ser rápidos, confiáveis e integrados ao pipeline."
  },
  {
    "id": 91,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.5",
    "assunto": "Shift-left",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, o que significa aplicar shift-left nos testes?",
    "correta": "antecipar atividades de teste para detectar e prevenir defeitos mais cedo no ciclo de vida.",
    "erradas": [
      "mover todos os testes para produção.",
      "testar apenas depois da assinatura do contrato.",
      "reduzir testes para acelerar a entrega."
    ],
    "explicacao": "Shift-left desloca atividades como revisão, análise e projeto de testes para momentos mais iniciais, reduzindo custo de correção."
  },
  {
    "id": 92,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.5",
    "assunto": "Shift-left",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, o que significa aplicar shift-left nos testes?",
    "correta": "antecipar atividades de teste para detectar e prevenir defeitos mais cedo no ciclo de vida.",
    "erradas": [
      "mover todos os testes para produção.",
      "testar apenas depois da assinatura do contrato.",
      "reduzir testes para acelerar a entrega."
    ],
    "explicacao": "Shift-left desloca atividades como revisão, análise e projeto de testes para momentos mais iniciais, reduzindo custo de correção."
  },
  {
    "id": 93,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.5",
    "assunto": "Shift-left",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, o que significa aplicar shift-left nos testes?",
    "correta": "antecipar atividades de teste para detectar e prevenir defeitos mais cedo no ciclo de vida.",
    "erradas": [
      "mover todos os testes para produção.",
      "testar apenas depois da assinatura do contrato.",
      "reduzir testes para acelerar a entrega."
    ],
    "explicacao": "Shift-left desloca atividades como revisão, análise e projeto de testes para momentos mais iniciais, reduzindo custo de correção."
  },
  {
    "id": 94,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.5",
    "assunto": "Shift-left",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, o que significa aplicar shift-left nos testes?",
    "correta": "antecipar atividades de teste para detectar e prevenir defeitos mais cedo no ciclo de vida.",
    "erradas": [
      "mover todos os testes para produção.",
      "testar apenas depois da assinatura do contrato.",
      "reduzir testes para acelerar a entrega."
    ],
    "explicacao": "Shift-left desloca atividades como revisão, análise e projeto de testes para momentos mais iniciais, reduzindo custo de correção."
  },
  {
    "id": 95,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.5",
    "assunto": "Shift-left",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, o que significa aplicar shift-left nos testes?",
    "correta": "antecipar atividades de teste para detectar e prevenir defeitos mais cedo no ciclo de vida.",
    "erradas": [
      "mover todos os testes para produção.",
      "testar apenas depois da assinatura do contrato.",
      "reduzir testes para acelerar a entrega."
    ],
    "explicacao": "Shift-left desloca atividades como revisão, análise e projeto de testes para momentos mais iniciais, reduzindo custo de correção."
  },
  {
    "id": 96,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.6",
    "assunto": "Retrospectivas",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, como retrospectivas podem melhorar o processo de teste?",
    "correta": "identificando causas de problemas, ações de melhoria e ajustes para próximas iterações.",
    "erradas": [
      "servindo apenas para apontar culpados.",
      "substituindo completamente relatórios de defeitos.",
      "impedindo mudanças no processo."
    ],
    "explicacao": "Retrospectivas são mecanismos de melhoria contínua: o time analisa o que funcionou, o que falhou e define ações concretas."
  },
  {
    "id": 97,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.6",
    "assunto": "Retrospectivas",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, como retrospectivas podem melhorar o processo de teste?",
    "correta": "identificando causas de problemas, ações de melhoria e ajustes para próximas iterações.",
    "erradas": [
      "servindo apenas para apontar culpados.",
      "substituindo completamente relatórios de defeitos.",
      "impedindo mudanças no processo."
    ],
    "explicacao": "Retrospectivas são mecanismos de melhoria contínua: o time analisa o que funcionou, o que falhou e define ações concretas."
  },
  {
    "id": 98,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.6",
    "assunto": "Retrospectivas",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, como retrospectivas podem melhorar o processo de teste?",
    "correta": "identificando causas de problemas, ações de melhoria e ajustes para próximas iterações.",
    "erradas": [
      "servindo apenas para apontar culpados.",
      "substituindo completamente relatórios de defeitos.",
      "impedindo mudanças no processo."
    ],
    "explicacao": "Retrospectivas são mecanismos de melhoria contínua: o time analisa o que funcionou, o que falhou e define ações concretas."
  },
  {
    "id": 99,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.6",
    "assunto": "Retrospectivas",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, como retrospectivas podem melhorar o processo de teste?",
    "correta": "identificando causas de problemas, ações de melhoria e ajustes para próximas iterações.",
    "erradas": [
      "servindo apenas para apontar culpados.",
      "substituindo completamente relatórios de defeitos.",
      "impedindo mudanças no processo."
    ],
    "explicacao": "Retrospectivas são mecanismos de melhoria contínua: o time analisa o que funcionou, o que falhou e define ações concretas."
  },
  {
    "id": 100,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.1.6",
    "assunto": "Retrospectivas",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, como retrospectivas podem melhorar o processo de teste?",
    "correta": "identificando causas de problemas, ações de melhoria e ajustes para próximas iterações.",
    "erradas": [
      "servindo apenas para apontar culpados.",
      "substituindo completamente relatórios de defeitos.",
      "impedindo mudanças no processo."
    ],
    "explicacao": "Retrospectivas são mecanismos de melhoria contínua: o time analisa o que funcionou, o que falhou e define ações concretas."
  },
  {
    "id": 101,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.1",
    "assunto": "Níveis de teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, testar interfaces entre módulos ou serviços caracteriza principalmente qual nível?",
    "correta": "teste de integração.",
    "erradas": [
      "teste de componente isolado.",
      "teste de aceitação operacional.",
      "teste estático de requisitos."
    ],
    "explicacao": "Níveis de teste se diferenciam pelo escopo: componente, integração, sistema e aceitação."
  },
  {
    "id": 102,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.1",
    "assunto": "Níveis de teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, testar interfaces entre módulos ou serviços caracteriza principalmente qual nível?",
    "correta": "teste de integração.",
    "erradas": [
      "teste de componente isolado.",
      "teste de aceitação operacional.",
      "teste estático de requisitos."
    ],
    "explicacao": "Níveis de teste se diferenciam pelo escopo: componente, integração, sistema e aceitação."
  },
  {
    "id": 103,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.1",
    "assunto": "Níveis de teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, testar interfaces entre módulos ou serviços caracteriza principalmente qual nível?",
    "correta": "teste de integração.",
    "erradas": [
      "teste de componente isolado.",
      "teste de aceitação operacional.",
      "teste estático de requisitos."
    ],
    "explicacao": "Níveis de teste se diferenciam pelo escopo: componente, integração, sistema e aceitação."
  },
  {
    "id": 104,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.1",
    "assunto": "Níveis de teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, testar interfaces entre módulos ou serviços caracteriza principalmente qual nível?",
    "correta": "teste de integração.",
    "erradas": [
      "teste de componente isolado.",
      "teste de aceitação operacional.",
      "teste estático de requisitos."
    ],
    "explicacao": "Níveis de teste se diferenciam pelo escopo: componente, integração, sistema e aceitação."
  },
  {
    "id": 105,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.1",
    "assunto": "Níveis de teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, testar interfaces entre módulos ou serviços caracteriza principalmente qual nível?",
    "correta": "teste de integração.",
    "erradas": [
      "teste de componente isolado.",
      "teste de aceitação operacional.",
      "teste estático de requisitos."
    ],
    "explicacao": "Níveis de teste se diferenciam pelo escopo: componente, integração, sistema e aceitação."
  },
  {
    "id": 106,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.2",
    "assunto": "Tipos de teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, avaliar se uma tela é compreensível e fácil de usar é exemplo de qual tipo de teste?",
    "correta": "teste não funcional de usabilidade.",
    "erradas": [
      "teste funcional de cálculo.",
      "teste de confirmação.",
      "teste de ramificação."
    ],
    "explicacao": "Tipos de teste avaliam características como funcionalidade, desempenho, segurança, usabilidade, compatibilidade e outras qualidades."
  },
  {
    "id": 107,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.2",
    "assunto": "Tipos de teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, avaliar se uma tela é compreensível e fácil de usar é exemplo de qual tipo de teste?",
    "correta": "teste não funcional de usabilidade.",
    "erradas": [
      "teste funcional de cálculo.",
      "teste de confirmação.",
      "teste de ramificação."
    ],
    "explicacao": "Tipos de teste avaliam características como funcionalidade, desempenho, segurança, usabilidade, compatibilidade e outras qualidades."
  },
  {
    "id": 108,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.2",
    "assunto": "Tipos de teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, avaliar se uma tela é compreensível e fácil de usar é exemplo de qual tipo de teste?",
    "correta": "teste não funcional de usabilidade.",
    "erradas": [
      "teste funcional de cálculo.",
      "teste de confirmação.",
      "teste de ramificação."
    ],
    "explicacao": "Tipos de teste avaliam características como funcionalidade, desempenho, segurança, usabilidade, compatibilidade e outras qualidades."
  },
  {
    "id": 109,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.2",
    "assunto": "Tipos de teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, avaliar se uma tela é compreensível e fácil de usar é exemplo de qual tipo de teste?",
    "correta": "teste não funcional de usabilidade.",
    "erradas": [
      "teste funcional de cálculo.",
      "teste de confirmação.",
      "teste de ramificação."
    ],
    "explicacao": "Tipos de teste avaliam características como funcionalidade, desempenho, segurança, usabilidade, compatibilidade e outras qualidades."
  },
  {
    "id": 110,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.2",
    "assunto": "Tipos de teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, avaliar se uma tela é compreensível e fácil de usar é exemplo de qual tipo de teste?",
    "correta": "teste não funcional de usabilidade.",
    "erradas": [
      "teste funcional de cálculo.",
      "teste de confirmação.",
      "teste de ramificação."
    ],
    "explicacao": "Tipos de teste avaliam características como funcionalidade, desempenho, segurança, usabilidade, compatibilidade e outras qualidades."
  },
  {
    "id": 111,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.3",
    "assunto": "Confirmação e regressão",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, após corrigir um defeito, a equipe retesta o caso que falhou e depois executa testes em áreas relacionadas. Essas atividades são:",
    "correta": "teste de confirmação e teste de regressão.",
    "erradas": [
      "teste de regressão e depuração.",
      "teste estático e revisão informal.",
      "teste de aceitação e teste alfa."
    ],
    "explicacao": "Confirmação verifica se a correção resolveu o defeito. Regressão procura efeitos colaterais em partes já existentes."
  },
  {
    "id": 112,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.3",
    "assunto": "Confirmação e regressão",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, após corrigir um defeito, a equipe retesta o caso que falhou e depois executa testes em áreas relacionadas. Essas atividades são:",
    "correta": "teste de confirmação e teste de regressão.",
    "erradas": [
      "teste de regressão e depuração.",
      "teste estático e revisão informal.",
      "teste de aceitação e teste alfa."
    ],
    "explicacao": "Confirmação verifica se a correção resolveu o defeito. Regressão procura efeitos colaterais em partes já existentes."
  },
  {
    "id": 113,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.3",
    "assunto": "Confirmação e regressão",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, após corrigir um defeito, a equipe retesta o caso que falhou e depois executa testes em áreas relacionadas. Essas atividades são:",
    "correta": "teste de confirmação e teste de regressão.",
    "erradas": [
      "teste de regressão e depuração.",
      "teste estático e revisão informal.",
      "teste de aceitação e teste alfa."
    ],
    "explicacao": "Confirmação verifica se a correção resolveu o defeito. Regressão procura efeitos colaterais em partes já existentes."
  },
  {
    "id": 114,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.3",
    "assunto": "Confirmação e regressão",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, após corrigir um defeito, a equipe retesta o caso que falhou e depois executa testes em áreas relacionadas. Essas atividades são:",
    "correta": "teste de confirmação e teste de regressão.",
    "erradas": [
      "teste de regressão e depuração.",
      "teste estático e revisão informal.",
      "teste de aceitação e teste alfa."
    ],
    "explicacao": "Confirmação verifica se a correção resolveu o defeito. Regressão procura efeitos colaterais em partes já existentes."
  },
  {
    "id": 115,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.2.3",
    "assunto": "Confirmação e regressão",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, após corrigir um defeito, a equipe retesta o caso que falhou e depois executa testes em áreas relacionadas. Essas atividades são:",
    "correta": "teste de confirmação e teste de regressão.",
    "erradas": [
      "teste de regressão e depuração.",
      "teste estático e revisão informal.",
      "teste de aceitação e teste alfa."
    ],
    "explicacao": "Confirmação verifica se a correção resolveu o defeito. Regressão procura efeitos colaterais em partes já existentes."
  },
  {
    "id": 116,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.3.1",
    "assunto": "Teste de manutenção",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual situação aciona teste de manutenção?",
    "correta": "alteração em sistema existente, migração, correção, melhoria ou mudança de ambiente.",
    "erradas": [
      "somente criação do primeiro requisito do produto.",
      "apenas reunião de kick-off sem mudança no sistema.",
      "exclusivamente treinamento comercial."
    ],
    "explicacao": "Teste de manutenção ocorre quando sistemas em operação sofrem mudanças ou precisam ser migrados, corrigidos ou adaptados."
  },
  {
    "id": 117,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.3.1",
    "assunto": "Teste de manutenção",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual situação aciona teste de manutenção?",
    "correta": "alteração em sistema existente, migração, correção, melhoria ou mudança de ambiente.",
    "erradas": [
      "somente criação do primeiro requisito do produto.",
      "apenas reunião de kick-off sem mudança no sistema.",
      "exclusivamente treinamento comercial."
    ],
    "explicacao": "Teste de manutenção ocorre quando sistemas em operação sofrem mudanças ou precisam ser migrados, corrigidos ou adaptados."
  },
  {
    "id": 118,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.3.1",
    "assunto": "Teste de manutenção",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual situação aciona teste de manutenção?",
    "correta": "alteração em sistema existente, migração, correção, melhoria ou mudança de ambiente.",
    "erradas": [
      "somente criação do primeiro requisito do produto.",
      "apenas reunião de kick-off sem mudança no sistema.",
      "exclusivamente treinamento comercial."
    ],
    "explicacao": "Teste de manutenção ocorre quando sistemas em operação sofrem mudanças ou precisam ser migrados, corrigidos ou adaptados."
  },
  {
    "id": 119,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.3.1",
    "assunto": "Teste de manutenção",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual situação aciona teste de manutenção?",
    "correta": "alteração em sistema existente, migração, correção, melhoria ou mudança de ambiente.",
    "erradas": [
      "somente criação do primeiro requisito do produto.",
      "apenas reunião de kick-off sem mudança no sistema.",
      "exclusivamente treinamento comercial."
    ],
    "explicacao": "Teste de manutenção ocorre quando sistemas em operação sofrem mudanças ou precisam ser migrados, corrigidos ou adaptados."
  },
  {
    "id": 120,
    "capitulo": 2,
    "capituloNome": "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software",
    "lo": "FL-2.3.1",
    "assunto": "Teste de manutenção",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual situação aciona teste de manutenção?",
    "correta": "alteração em sistema existente, migração, correção, melhoria ou mudança de ambiente.",
    "erradas": [
      "somente criação do primeiro requisito do produto.",
      "apenas reunião de kick-off sem mudança no sistema.",
      "exclusivamente treinamento comercial."
    ],
    "explicacao": "Teste de manutenção ocorre quando sistemas em operação sofrem mudanças ou precisam ser migrados, corrigidos ou adaptados."
  },
  {
    "id": 121,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.1",
    "assunto": "Produtos examinados por teste estático",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual produto de trabalho pode ser examinado por teste estático?",
    "correta": "requisitos, histórias de usuário, modelos, código, planos de teste ou documentação.",
    "erradas": [
      "apenas o sistema em execução.",
      "somente logs de produção após uma falha.",
      "apenas telas abertas pelo usuário final."
    ],
    "explicacao": "Teste estático examina produtos de trabalho sem executar o software, incluindo documentos e código."
  },
  {
    "id": 122,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.1",
    "assunto": "Produtos examinados por teste estático",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual produto de trabalho pode ser examinado por teste estático?",
    "correta": "requisitos, histórias de usuário, modelos, código, planos de teste ou documentação.",
    "erradas": [
      "apenas o sistema em execução.",
      "somente logs de produção após uma falha.",
      "apenas telas abertas pelo usuário final."
    ],
    "explicacao": "Teste estático examina produtos de trabalho sem executar o software, incluindo documentos e código."
  },
  {
    "id": 123,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.1",
    "assunto": "Produtos examinados por teste estático",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual produto de trabalho pode ser examinado por teste estático?",
    "correta": "requisitos, histórias de usuário, modelos, código, planos de teste ou documentação.",
    "erradas": [
      "apenas o sistema em execução.",
      "somente logs de produção após uma falha.",
      "apenas telas abertas pelo usuário final."
    ],
    "explicacao": "Teste estático examina produtos de trabalho sem executar o software, incluindo documentos e código."
  },
  {
    "id": 124,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.1",
    "assunto": "Produtos examinados por teste estático",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual produto de trabalho pode ser examinado por teste estático?",
    "correta": "requisitos, histórias de usuário, modelos, código, planos de teste ou documentação.",
    "erradas": [
      "apenas o sistema em execução.",
      "somente logs de produção após uma falha.",
      "apenas telas abertas pelo usuário final."
    ],
    "explicacao": "Teste estático examina produtos de trabalho sem executar o software, incluindo documentos e código."
  },
  {
    "id": 125,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.1",
    "assunto": "Produtos examinados por teste estático",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual produto de trabalho pode ser examinado por teste estático?",
    "correta": "requisitos, histórias de usuário, modelos, código, planos de teste ou documentação.",
    "erradas": [
      "apenas o sistema em execução.",
      "somente logs de produção após uma falha.",
      "apenas telas abertas pelo usuário final."
    ],
    "explicacao": "Teste estático examina produtos de trabalho sem executar o software, incluindo documentos e código."
  },
  {
    "id": 126,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.2",
    "assunto": "Valor do teste estático",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual é um valor importante do teste estático?",
    "correta": "encontrar defeitos cedo, antes que eles se propaguem para produtos derivados.",
    "erradas": [
      "medir tempo real de resposta de mil usuários.",
      "substituir todos os testes dinâmicos.",
      "garantir que nenhuma falha ocorrerá em produção."
    ],
    "explicacao": "Teste estático pode encontrar defeitos em requisitos, projeto, código e testes antes da execução, reduzindo retrabalho."
  },
  {
    "id": 127,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.2",
    "assunto": "Valor do teste estático",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual é um valor importante do teste estático?",
    "correta": "encontrar defeitos cedo, antes que eles se propaguem para produtos derivados.",
    "erradas": [
      "medir tempo real de resposta de mil usuários.",
      "substituir todos os testes dinâmicos.",
      "garantir que nenhuma falha ocorrerá em produção."
    ],
    "explicacao": "Teste estático pode encontrar defeitos em requisitos, projeto, código e testes antes da execução, reduzindo retrabalho."
  },
  {
    "id": 128,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.2",
    "assunto": "Valor do teste estático",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual é um valor importante do teste estático?",
    "correta": "encontrar defeitos cedo, antes que eles se propaguem para produtos derivados.",
    "erradas": [
      "medir tempo real de resposta de mil usuários.",
      "substituir todos os testes dinâmicos.",
      "garantir que nenhuma falha ocorrerá em produção."
    ],
    "explicacao": "Teste estático pode encontrar defeitos em requisitos, projeto, código e testes antes da execução, reduzindo retrabalho."
  },
  {
    "id": 129,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.2",
    "assunto": "Valor do teste estático",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual é um valor importante do teste estático?",
    "correta": "encontrar defeitos cedo, antes que eles se propaguem para produtos derivados.",
    "erradas": [
      "medir tempo real de resposta de mil usuários.",
      "substituir todos os testes dinâmicos.",
      "garantir que nenhuma falha ocorrerá em produção."
    ],
    "explicacao": "Teste estático pode encontrar defeitos em requisitos, projeto, código e testes antes da execução, reduzindo retrabalho."
  },
  {
    "id": 130,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.2",
    "assunto": "Valor do teste estático",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual é um valor importante do teste estático?",
    "correta": "encontrar defeitos cedo, antes que eles se propaguem para produtos derivados.",
    "erradas": [
      "medir tempo real de resposta de mil usuários.",
      "substituir todos os testes dinâmicos.",
      "garantir que nenhuma falha ocorrerá em produção."
    ],
    "explicacao": "Teste estático pode encontrar defeitos em requisitos, projeto, código e testes antes da execução, reduzindo retrabalho."
  },
  {
    "id": 131,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.3",
    "assunto": "Teste estático e dinâmico",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual comparação está correta?",
    "correta": "teste estático encontra defeitos sem executar o software; teste dinâmico executa o objeto de teste e observa falhas.",
    "erradas": [
      "teste estático sempre executa a aplicação.",
      "teste dinâmico examina apenas documentos.",
      "ambos são idênticos e usam os mesmos resultados."
    ],
    "explicacao": "Teste estático e dinâmico são complementares: um avalia artefatos sem execução; o outro avalia comportamento durante execução."
  },
  {
    "id": 132,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.3",
    "assunto": "Teste estático e dinâmico",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual comparação está correta?",
    "correta": "teste estático encontra defeitos sem executar o software; teste dinâmico executa o objeto de teste e observa falhas.",
    "erradas": [
      "teste estático sempre executa a aplicação.",
      "teste dinâmico examina apenas documentos.",
      "ambos são idênticos e usam os mesmos resultados."
    ],
    "explicacao": "Teste estático e dinâmico são complementares: um avalia artefatos sem execução; o outro avalia comportamento durante execução."
  },
  {
    "id": 133,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.3",
    "assunto": "Teste estático e dinâmico",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual comparação está correta?",
    "correta": "teste estático encontra defeitos sem executar o software; teste dinâmico executa o objeto de teste e observa falhas.",
    "erradas": [
      "teste estático sempre executa a aplicação.",
      "teste dinâmico examina apenas documentos.",
      "ambos são idênticos e usam os mesmos resultados."
    ],
    "explicacao": "Teste estático e dinâmico são complementares: um avalia artefatos sem execução; o outro avalia comportamento durante execução."
  },
  {
    "id": 134,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.3",
    "assunto": "Teste estático e dinâmico",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual comparação está correta?",
    "correta": "teste estático encontra defeitos sem executar o software; teste dinâmico executa o objeto de teste e observa falhas.",
    "erradas": [
      "teste estático sempre executa a aplicação.",
      "teste dinâmico examina apenas documentos.",
      "ambos são idênticos e usam os mesmos resultados."
    ],
    "explicacao": "Teste estático e dinâmico são complementares: um avalia artefatos sem execução; o outro avalia comportamento durante execução."
  },
  {
    "id": 135,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.1.3",
    "assunto": "Teste estático e dinâmico",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual comparação está correta?",
    "correta": "teste estático encontra defeitos sem executar o software; teste dinâmico executa o objeto de teste e observa falhas.",
    "erradas": [
      "teste estático sempre executa a aplicação.",
      "teste dinâmico examina apenas documentos.",
      "ambos são idênticos e usam os mesmos resultados."
    ],
    "explicacao": "Teste estático e dinâmico são complementares: um avalia artefatos sem execução; o outro avalia comportamento durante execução."
  },
  {
    "id": 136,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.1",
    "assunto": "Feedback antecipado e frequente",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual é um benefício do feedback antecipado e frequente dos stakeholders?",
    "correta": "reduzir ambiguidades e corrigir problemas antes de gerar retrabalho maior.",
    "erradas": [
      "evitar que usuários participem do desenvolvimento.",
      "adiar decisões até a produção.",
      "eliminar qualquer necessidade de teste dinâmico."
    ],
    "explicacao": "Feedback cedo ajuda a alinhar entendimento, prevenir defeitos e reduzir custos de correção."
  },
  {
    "id": 137,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.1",
    "assunto": "Feedback antecipado e frequente",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual é um benefício do feedback antecipado e frequente dos stakeholders?",
    "correta": "reduzir ambiguidades e corrigir problemas antes de gerar retrabalho maior.",
    "erradas": [
      "evitar que usuários participem do desenvolvimento.",
      "adiar decisões até a produção.",
      "eliminar qualquer necessidade de teste dinâmico."
    ],
    "explicacao": "Feedback cedo ajuda a alinhar entendimento, prevenir defeitos e reduzir custos de correção."
  },
  {
    "id": 138,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.1",
    "assunto": "Feedback antecipado e frequente",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual é um benefício do feedback antecipado e frequente dos stakeholders?",
    "correta": "reduzir ambiguidades e corrigir problemas antes de gerar retrabalho maior.",
    "erradas": [
      "evitar que usuários participem do desenvolvimento.",
      "adiar decisões até a produção.",
      "eliminar qualquer necessidade de teste dinâmico."
    ],
    "explicacao": "Feedback cedo ajuda a alinhar entendimento, prevenir defeitos e reduzir custos de correção."
  },
  {
    "id": 139,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.1",
    "assunto": "Feedback antecipado e frequente",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual é um benefício do feedback antecipado e frequente dos stakeholders?",
    "correta": "reduzir ambiguidades e corrigir problemas antes de gerar retrabalho maior.",
    "erradas": [
      "evitar que usuários participem do desenvolvimento.",
      "adiar decisões até a produção.",
      "eliminar qualquer necessidade de teste dinâmico."
    ],
    "explicacao": "Feedback cedo ajuda a alinhar entendimento, prevenir defeitos e reduzir custos de correção."
  },
  {
    "id": 140,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.1",
    "assunto": "Feedback antecipado e frequente",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual é um benefício do feedback antecipado e frequente dos stakeholders?",
    "correta": "reduzir ambiguidades e corrigir problemas antes de gerar retrabalho maior.",
    "erradas": [
      "evitar que usuários participem do desenvolvimento.",
      "adiar decisões até a produção.",
      "eliminar qualquer necessidade de teste dinâmico."
    ],
    "explicacao": "Feedback cedo ajuda a alinhar entendimento, prevenir defeitos e reduzir custos de correção."
  },
  {
    "id": 141,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.2",
    "assunto": "Processo de revisão",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual sequência resume atividades comuns de uma revisão?",
    "correta": "planejar, iniciar, preparar individualmente, comunicar achados, corrigir e reportar.",
    "erradas": [
      "executar carga, compilar, implantar e vender.",
      "apagar defeitos, ocultar dúvidas e finalizar.",
      "testar produção sem registro."
    ],
    "explicacao": "Revisões têm atividades estruturadas, desde planejamento e preparação até comunicação, correção e acompanhamento dos achados."
  },
  {
    "id": 142,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.2",
    "assunto": "Processo de revisão",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual sequência resume atividades comuns de uma revisão?",
    "correta": "planejar, iniciar, preparar individualmente, comunicar achados, corrigir e reportar.",
    "erradas": [
      "executar carga, compilar, implantar e vender.",
      "apagar defeitos, ocultar dúvidas e finalizar.",
      "testar produção sem registro."
    ],
    "explicacao": "Revisões têm atividades estruturadas, desde planejamento e preparação até comunicação, correção e acompanhamento dos achados."
  },
  {
    "id": 143,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.2",
    "assunto": "Processo de revisão",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual sequência resume atividades comuns de uma revisão?",
    "correta": "planejar, iniciar, preparar individualmente, comunicar achados, corrigir e reportar.",
    "erradas": [
      "executar carga, compilar, implantar e vender.",
      "apagar defeitos, ocultar dúvidas e finalizar.",
      "testar produção sem registro."
    ],
    "explicacao": "Revisões têm atividades estruturadas, desde planejamento e preparação até comunicação, correção e acompanhamento dos achados."
  },
  {
    "id": 144,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.2",
    "assunto": "Processo de revisão",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual sequência resume atividades comuns de uma revisão?",
    "correta": "planejar, iniciar, preparar individualmente, comunicar achados, corrigir e reportar.",
    "erradas": [
      "executar carga, compilar, implantar e vender.",
      "apagar defeitos, ocultar dúvidas e finalizar.",
      "testar produção sem registro."
    ],
    "explicacao": "Revisões têm atividades estruturadas, desde planejamento e preparação até comunicação, correção e acompanhamento dos achados."
  },
  {
    "id": 145,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.2",
    "assunto": "Processo de revisão",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual sequência resume atividades comuns de uma revisão?",
    "correta": "planejar, iniciar, preparar individualmente, comunicar achados, corrigir e reportar.",
    "erradas": [
      "executar carga, compilar, implantar e vender.",
      "apagar defeitos, ocultar dúvidas e finalizar.",
      "testar produção sem registro."
    ],
    "explicacao": "Revisões têm atividades estruturadas, desde planejamento e preparação até comunicação, correção e acompanhamento dos achados."
  },
  {
    "id": 146,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.3",
    "assunto": "Papéis em revisões",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, em uma revisão, quem normalmente criou ou mantém o produto de trabalho revisado?",
    "correta": "autor.",
    "erradas": [
      "moderador.",
      "escriba.",
      "gerente de configuração."
    ],
    "explicacao": "O autor é responsável pelo produto revisado. Outros papéis podem incluir moderador, revisores, líder de revisão e escriba."
  },
  {
    "id": 147,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.3",
    "assunto": "Papéis em revisões",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, em uma revisão, quem normalmente criou ou mantém o produto de trabalho revisado?",
    "correta": "autor.",
    "erradas": [
      "moderador.",
      "escriba.",
      "gerente de configuração."
    ],
    "explicacao": "O autor é responsável pelo produto revisado. Outros papéis podem incluir moderador, revisores, líder de revisão e escriba."
  },
  {
    "id": 148,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.3",
    "assunto": "Papéis em revisões",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, em uma revisão, quem normalmente criou ou mantém o produto de trabalho revisado?",
    "correta": "autor.",
    "erradas": [
      "moderador.",
      "escriba.",
      "gerente de configuração."
    ],
    "explicacao": "O autor é responsável pelo produto revisado. Outros papéis podem incluir moderador, revisores, líder de revisão e escriba."
  },
  {
    "id": 149,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.3",
    "assunto": "Papéis em revisões",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, em uma revisão, quem normalmente criou ou mantém o produto de trabalho revisado?",
    "correta": "autor.",
    "erradas": [
      "moderador.",
      "escriba.",
      "gerente de configuração."
    ],
    "explicacao": "O autor é responsável pelo produto revisado. Outros papéis podem incluir moderador, revisores, líder de revisão e escriba."
  },
  {
    "id": 150,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.3",
    "assunto": "Papéis em revisões",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, em uma revisão, quem normalmente criou ou mantém o produto de trabalho revisado?",
    "correta": "autor.",
    "erradas": [
      "moderador.",
      "escriba.",
      "gerente de configuração."
    ],
    "explicacao": "O autor é responsável pelo produto revisado. Outros papéis podem incluir moderador, revisores, líder de revisão e escriba."
  },
  {
    "id": 151,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.4",
    "assunto": "Tipos de revisão",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual comparação entre tipos de revisão é adequada?",
    "correta": "uma inspeção tende a ser mais formal; uma revisão informal tende a ter menos estrutura.",
    "erradas": [
      "toda revisão tem exatamente a mesma formalidade.",
      "revisão informal exige sempre métricas formais.",
      "inspeção dispensa preparação."
    ],
    "explicacao": "Tipos de revisão variam em objetivo, formalidade, papéis, documentação e preparação."
  },
  {
    "id": 152,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.4",
    "assunto": "Tipos de revisão",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual comparação entre tipos de revisão é adequada?",
    "correta": "uma inspeção tende a ser mais formal; uma revisão informal tende a ter menos estrutura.",
    "erradas": [
      "toda revisão tem exatamente a mesma formalidade.",
      "revisão informal exige sempre métricas formais.",
      "inspeção dispensa preparação."
    ],
    "explicacao": "Tipos de revisão variam em objetivo, formalidade, papéis, documentação e preparação."
  },
  {
    "id": 153,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.4",
    "assunto": "Tipos de revisão",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual comparação entre tipos de revisão é adequada?",
    "correta": "uma inspeção tende a ser mais formal; uma revisão informal tende a ter menos estrutura.",
    "erradas": [
      "toda revisão tem exatamente a mesma formalidade.",
      "revisão informal exige sempre métricas formais.",
      "inspeção dispensa preparação."
    ],
    "explicacao": "Tipos de revisão variam em objetivo, formalidade, papéis, documentação e preparação."
  },
  {
    "id": 154,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.4",
    "assunto": "Tipos de revisão",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual comparação entre tipos de revisão é adequada?",
    "correta": "uma inspeção tende a ser mais formal; uma revisão informal tende a ter menos estrutura.",
    "erradas": [
      "toda revisão tem exatamente a mesma formalidade.",
      "revisão informal exige sempre métricas formais.",
      "inspeção dispensa preparação."
    ],
    "explicacao": "Tipos de revisão variam em objetivo, formalidade, papéis, documentação e preparação."
  },
  {
    "id": 155,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.4",
    "assunto": "Tipos de revisão",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual comparação entre tipos de revisão é adequada?",
    "correta": "uma inspeção tende a ser mais formal; uma revisão informal tende a ter menos estrutura.",
    "erradas": [
      "toda revisão tem exatamente a mesma formalidade.",
      "revisão informal exige sempre métricas formais.",
      "inspeção dispensa preparação."
    ],
    "explicacao": "Tipos de revisão variam em objetivo, formalidade, papéis, documentação e preparação."
  },
  {
    "id": 156,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.5",
    "assunto": "Fatores de sucesso em revisões",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual fator contribui para uma revisão bem-sucedida?",
    "correta": "focar o produto de trabalho, preparar-se antes e tratar achados de forma construtiva.",
    "erradas": [
      "usar a reunião para culpar o autor.",
      "não registrar achados importantes.",
      "misturar revisão com disputa pessoal."
    ],
    "explicacao": "Revisões bem-sucedidas dependem de preparação, escopo claro, pessoas certas, clima colaborativo e foco no artefato."
  },
  {
    "id": 157,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.5",
    "assunto": "Fatores de sucesso em revisões",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual fator contribui para uma revisão bem-sucedida?",
    "correta": "focar o produto de trabalho, preparar-se antes e tratar achados de forma construtiva.",
    "erradas": [
      "usar a reunião para culpar o autor.",
      "não registrar achados importantes.",
      "misturar revisão com disputa pessoal."
    ],
    "explicacao": "Revisões bem-sucedidas dependem de preparação, escopo claro, pessoas certas, clima colaborativo e foco no artefato."
  },
  {
    "id": 158,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.5",
    "assunto": "Fatores de sucesso em revisões",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual fator contribui para uma revisão bem-sucedida?",
    "correta": "focar o produto de trabalho, preparar-se antes e tratar achados de forma construtiva.",
    "erradas": [
      "usar a reunião para culpar o autor.",
      "não registrar achados importantes.",
      "misturar revisão com disputa pessoal."
    ],
    "explicacao": "Revisões bem-sucedidas dependem de preparação, escopo claro, pessoas certas, clima colaborativo e foco no artefato."
  },
  {
    "id": 159,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.5",
    "assunto": "Fatores de sucesso em revisões",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual fator contribui para uma revisão bem-sucedida?",
    "correta": "focar o produto de trabalho, preparar-se antes e tratar achados de forma construtiva.",
    "erradas": [
      "usar a reunião para culpar o autor.",
      "não registrar achados importantes.",
      "misturar revisão com disputa pessoal."
    ],
    "explicacao": "Revisões bem-sucedidas dependem de preparação, escopo claro, pessoas certas, clima colaborativo e foco no artefato."
  },
  {
    "id": 160,
    "capitulo": 3,
    "capituloNome": "Teste Estático",
    "lo": "FL-3.2.5",
    "assunto": "Fatores de sucesso em revisões",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual fator contribui para uma revisão bem-sucedida?",
    "correta": "focar o produto de trabalho, preparar-se antes e tratar achados de forma construtiva.",
    "erradas": [
      "usar a reunião para culpar o autor.",
      "não registrar achados importantes.",
      "misturar revisão com disputa pessoal."
    ],
    "explicacao": "Revisões bem-sucedidas dependem de preparação, escopo claro, pessoas certas, clima colaborativo e foco no artefato."
  },
  {
    "id": 161,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.1.1",
    "assunto": "Tipos de técnicas de teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual classificação está correta?",
    "correta": "caixa-preta usa especificações; caixa-branca usa estrutura interna; baseada em experiência usa conhecimento e intuição do testador.",
    "erradas": [
      "caixa-preta exige ler o código-fonte.",
      "caixa-branca ignora estrutura interna.",
      "técnicas baseadas em experiência não usam conhecimento prévio."
    ],
    "explicacao": "As técnicas se diferenciam pela fonte usada para derivar testes: especificação, estrutura interna ou experiência."
  },
  {
    "id": 162,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.1.1",
    "assunto": "Tipos de técnicas de teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual classificação está correta?",
    "correta": "caixa-preta usa especificações; caixa-branca usa estrutura interna; baseada em experiência usa conhecimento e intuição do testador.",
    "erradas": [
      "caixa-preta exige ler o código-fonte.",
      "caixa-branca ignora estrutura interna.",
      "técnicas baseadas em experiência não usam conhecimento prévio."
    ],
    "explicacao": "As técnicas se diferenciam pela fonte usada para derivar testes: especificação, estrutura interna ou experiência."
  },
  {
    "id": 163,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.1.1",
    "assunto": "Tipos de técnicas de teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual classificação está correta?",
    "correta": "caixa-preta usa especificações; caixa-branca usa estrutura interna; baseada em experiência usa conhecimento e intuição do testador.",
    "erradas": [
      "caixa-preta exige ler o código-fonte.",
      "caixa-branca ignora estrutura interna.",
      "técnicas baseadas em experiência não usam conhecimento prévio."
    ],
    "explicacao": "As técnicas se diferenciam pela fonte usada para derivar testes: especificação, estrutura interna ou experiência."
  },
  {
    "id": 164,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.1.1",
    "assunto": "Tipos de técnicas de teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual classificação está correta?",
    "correta": "caixa-preta usa especificações; caixa-branca usa estrutura interna; baseada em experiência usa conhecimento e intuição do testador.",
    "erradas": [
      "caixa-preta exige ler o código-fonte.",
      "caixa-branca ignora estrutura interna.",
      "técnicas baseadas em experiência não usam conhecimento prévio."
    ],
    "explicacao": "As técnicas se diferenciam pela fonte usada para derivar testes: especificação, estrutura interna ou experiência."
  },
  {
    "id": 165,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.1.1",
    "assunto": "Tipos de técnicas de teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual classificação está correta?",
    "correta": "caixa-preta usa especificações; caixa-branca usa estrutura interna; baseada em experiência usa conhecimento e intuição do testador.",
    "erradas": [
      "caixa-preta exige ler o código-fonte.",
      "caixa-branca ignora estrutura interna.",
      "técnicas baseadas em experiência não usam conhecimento prévio."
    ],
    "explicacao": "As técnicas se diferenciam pela fonte usada para derivar testes: especificação, estrutura interna ou experiência."
  },
  {
    "id": 166,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.1",
    "assunto": "Particionamento de equivalência",
    "nivel": "K3",
    "enunciado": "Um campo aceita idade de 18 a 65 anos. Qual conjunto representa classes de equivalência adequadas?",
    "correta": "menor que 18, de 18 a 65, maior que 65.",
    "erradas": [
      "18, 19 e 20 apenas.",
      "todos os valores entre 18 e 65.",
      "somente 0 e 100."
    ],
    "explicacao": "Particionamento de equivalência divide entradas em grupos tratados de forma semelhante: inválido baixo, válido e inválido alto."
  },
  {
    "id": 167,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.1",
    "assunto": "Particionamento de equivalência",
    "nivel": "K3",
    "enunciado": "Um cupom aceita códigos com exatamente 8 caracteres. Qual partição é válida?",
    "correta": "códigos com exatamente 8 caracteres.",
    "erradas": [
      "códigos com 7 caracteres.",
      "códigos com 9 caracteres.",
      "códigos vazios."
    ],
    "explicacao": "A partição válida reúne valores que atendem à regra. Partições inválidas ficam abaixo, acima ou fora do formato."
  },
  {
    "id": 168,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.1",
    "assunto": "Particionamento de equivalência",
    "nivel": "K3",
    "enunciado": "Uma nota deve estar entre 0 e 10. Qual escolha cobre uma partição inválida?",
    "correta": "-1.",
    "erradas": [
      "5.",
      "0.",
      "10."
    ],
    "explicacao": "Valores menores que 0 pertencem à partição inválida abaixo do intervalo."
  },
  {
    "id": 169,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.1",
    "assunto": "Particionamento de equivalência",
    "nivel": "K3",
    "enunciado": "Um sistema permite pagamento por PIX, cartão ou boleto. Qual partição representa entradas válidas?",
    "correta": "PIX, cartão e boleto.",
    "erradas": [
      "dinheiro, cheque e permuta.",
      "somente campo vazio.",
      "qualquer texto digitado pelo usuário."
    ],
    "explicacao": "Cada forma permitida pertence ao conjunto de valores válidos; valores não aceitos formam partições inválidas."
  },
  {
    "id": 170,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.1",
    "assunto": "Particionamento de equivalência",
    "nivel": "K3",
    "enunciado": "Para testar um campo obrigatório “nome”, qual conjunto representa partições úteis?",
    "correta": "vazio e preenchido.",
    "erradas": [
      "azul e verde.",
      "produção e homologação.",
      "segunda e terça."
    ],
    "explicacao": "Para obrigatoriedade, uma divisão simples e efetiva é ausência de valor versus presença de valor."
  },
  {
    "id": 171,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.2",
    "assunto": "Análise de valor limite",
    "nivel": "K3",
    "enunciado": "Um campo aceita quantidade de 1 a 99. Quais valores são mais relevantes para análise de valor limite?",
    "correta": "0, 1, 99 e 100.",
    "erradas": [
      "25, 26, 27 e 28.",
      "1, 50 e 99 apenas.",
      "somente 100 e 101."
    ],
    "explicacao": "A análise de valor limite foca nos limites e valores imediatamente fora deles."
  },
  {
    "id": 172,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.2",
    "assunto": "Análise de valor limite",
    "nivel": "K3",
    "enunciado": "Um sistema aceita senha de 8 a 20 caracteres. Quais valores de tamanho testam melhor os limites?",
    "correta": "7, 8, 20 e 21.",
    "erradas": [
      "10, 11, 12 e 13.",
      "8 e 20 apenas.",
      "0 e 100 apenas."
    ],
    "explicacao": "Para limites inclusivos, teste logo abaixo, no limite inferior, no limite superior e logo acima."
  },
  {
    "id": 173,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.2",
    "assunto": "Análise de valor limite",
    "nivel": "K3",
    "enunciado": "A idade mínima para cadastro é 18 anos, sem limite superior definido. Qual par é mais relevante para o limite?",
    "correta": "17 e 18.",
    "erradas": [
      "20 e 21.",
      "30 e 31.",
      "0 e 100."
    ],
    "explicacao": "Quando há apenas limite inferior, os valores logo abaixo e no limite são fundamentais."
  },
  {
    "id": 174,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.2",
    "assunto": "Análise de valor limite",
    "nivel": "K3",
    "enunciado": "Uma compra exige valor maior ou igual a R$ 100,00 para frete grátis. Quais valores verificam o limite?",
    "correta": "R$ 99,99 e R$ 100,00.",
    "erradas": [
      "R$ 10,00 e R$ 20,00.",
      "R$ 200,00 e R$ 300,00.",
      "R$ 0,00 e R$ 1.000,00 apenas."
    ],
    "explicacao": "A fronteira está em 100; testar imediatamente antes e no limite ajuda a revelar defeitos."
  },
  {
    "id": 175,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.2",
    "assunto": "Análise de valor limite",
    "nivel": "K3",
    "enunciado": "Uma regra aceita até 3 tentativas de login. Quais quantidades são críticas?",
    "correta": "3 e 4 tentativas.",
    "erradas": [
      "1 e 2 tentativas apenas.",
      "10 e 11 tentativas.",
      "0 e 100 tentativas apenas."
    ],
    "explicacao": "O comportamento muda ao ultrapassar o limite de 3 tentativas; por isso 3 e 4 são críticos."
  },
  {
    "id": 176,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.3",
    "assunto": "Tabela de decisão",
    "nivel": "K3",
    "enunciado": "Uma loja dá desconto se o cliente for premium E a compra for maior que R$ 200. Qual caso espera desconto?",
    "correta": "cliente premium com compra de R$ 250.",
    "erradas": [
      "cliente comum com compra de R$ 250.",
      "cliente premium com compra de R$ 150.",
      "cliente comum com compra de R$ 150."
    ],
    "explicacao": "A ação ocorre quando as duas condições são verdadeiras."
  },
  {
    "id": 177,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.3",
    "assunto": "Tabela de decisão",
    "nivel": "K3",
    "enunciado": "Um acesso é liberado se o usuário estiver ativo E tiver permissão. Qual combinação deve liberar o acesso?",
    "correta": "ativo = sim; permissão = sim.",
    "erradas": [
      "ativo = sim; permissão = não.",
      "ativo = não; permissão = sim.",
      "ativo = não; permissão = não."
    ],
    "explicacao": "A tabela de decisão evidencia combinações de condições e ações esperadas."
  },
  {
    "id": 178,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.3",
    "assunto": "Tabela de decisão",
    "nivel": "K3",
    "enunciado": "Uma apólice exige aprovação se idade > 60 OU valor segurado > 500 mil. Qual caso exige aprovação?",
    "correta": "idade 62 e valor 300 mil.",
    "erradas": [
      "idade 40 e valor 300 mil.",
      "idade 30 e valor 200 mil.",
      "idade 60 e valor 500 mil, considerando regra estritamente maior."
    ],
    "explicacao": "Como a regra usa OU, basta uma condição verdadeira. “Maior que” não inclui o próprio limite."
  },
  {
    "id": 179,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.3",
    "assunto": "Tabela de decisão",
    "nivel": "K3",
    "enunciado": "Um pedido é cancelado automaticamente se pagamento não confirmado E prazo expirado. Qual combinação cancela?",
    "correta": "pagamento não confirmado e prazo expirado.",
    "erradas": [
      "pagamento confirmado e prazo expirado.",
      "pagamento não confirmado e prazo dentro.",
      "pagamento confirmado e prazo dentro."
    ],
    "explicacao": "A ação exige a combinação específica das duas condições."
  },
  {
    "id": 180,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.3",
    "assunto": "Tabela de decisão",
    "nivel": "K3",
    "enunciado": "Para uma regra com três condições booleanas independentes, quantas combinações completas existem em uma tabela de decisão sem simplificação?",
    "correta": "8 combinações.",
    "erradas": [
      "3 combinações.",
      "6 combinações.",
      "12 combinações."
    ],
    "explicacao": "Três condições booleanas geram 2³ combinações."
  },
  {
    "id": 181,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.4",
    "assunto": "Transição de estado",
    "nivel": "K3",
    "enunciado": "Um pedido pode passar de “criado” para “pago” e de “pago” para “enviado”. Qual sequência é válida?",
    "correta": "criado → pago → enviado.",
    "erradas": [
      "criado → enviado.",
      "enviado → criado.",
      "cancelado → enviado."
    ],
    "explicacao": "Teste de transição de estado verifica mudanças válidas e inválidas entre estados."
  },
  {
    "id": 182,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.4",
    "assunto": "Transição de estado",
    "nivel": "K3",
    "enunciado": "Uma conta bloqueada só pode ir para “em análise” e depois para “ativa”. Qual transição deve ser bloqueada?",
    "correta": "bloqueada → ativa diretamente.",
    "erradas": [
      "bloqueada → em análise.",
      "em análise → ativa.",
      "ativa → bloqueada."
    ],
    "explicacao": "Se a regra exige análise, ir diretamente de bloqueada para ativa é transição inválida."
  },
  {
    "id": 183,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.4",
    "assunto": "Transição de estado",
    "nivel": "K3",
    "enunciado": "Um chamado pode estar “aberto”, “em atendimento”, “resolvido” e “fechado”. Qual teste exercita uma transição de encerramento válida?",
    "correta": "resolvido → fechado.",
    "erradas": [
      "aberto → fechado sem resolução, se a regra não permitir.",
      "fechado → aberto sem reabertura.",
      "em atendimento → fechado sem resolução."
    ],
    "explicacao": "O teste deve seguir a regra definida para mudança de estado."
  },
  {
    "id": 184,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.4",
    "assunto": "Transição de estado",
    "nivel": "K3",
    "enunciado": "Um cartão vai de “solicitado” para “emitido” e depois “entregue”. Qual sequência mostra falha potencial se aceita?",
    "correta": "solicitado → entregue.",
    "erradas": [
      "solicitado → emitido.",
      "emitido → entregue.",
      "entregue → bloqueado."
    ],
    "explicacao": "Entregar antes de emitir normalmente viola o fluxo esperado."
  },
  {
    "id": 185,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.2.4",
    "assunto": "Transição de estado",
    "nivel": "K3",
    "enunciado": "Em uma máquina de estados, por que testar transições inválidas pode ser importante?",
    "correta": "para verificar se o sistema impede mudanças de estado não permitidas.",
    "erradas": [
      "para garantir que todos os estados sejam removidos.",
      "para evitar teste de regras de negócio.",
      "para substituir a tabela de decisão em qualquer situação."
    ],
    "explicacao": "Transições inválidas podem revelar defeitos de controle de fluxo e regras de negócio."
  },
  {
    "id": 186,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.1",
    "assunto": "Teste de instrução",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, o que o teste de instrução busca medir ou exercitar?",
    "correta": "se as instruções executáveis do código foram executadas pelos testes.",
    "erradas": [
      "se todas as opiniões dos usuários foram coletadas.",
      "se todos os requisitos foram escritos em linguagem natural.",
      "se todos os ambientes físicos foram comprados."
    ],
    "explicacao": "Teste de instrução é uma técnica caixa-branca relacionada à execução de instruções do código."
  },
  {
    "id": 187,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.1",
    "assunto": "Teste de instrução",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, o que o teste de instrução busca medir ou exercitar?",
    "correta": "se as instruções executáveis do código foram executadas pelos testes.",
    "erradas": [
      "se todas as opiniões dos usuários foram coletadas.",
      "se todos os requisitos foram escritos em linguagem natural.",
      "se todos os ambientes físicos foram comprados."
    ],
    "explicacao": "Teste de instrução é uma técnica caixa-branca relacionada à execução de instruções do código."
  },
  {
    "id": 188,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.1",
    "assunto": "Teste de instrução",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, o que o teste de instrução busca medir ou exercitar?",
    "correta": "se as instruções executáveis do código foram executadas pelos testes.",
    "erradas": [
      "se todas as opiniões dos usuários foram coletadas.",
      "se todos os requisitos foram escritos em linguagem natural.",
      "se todos os ambientes físicos foram comprados."
    ],
    "explicacao": "Teste de instrução é uma técnica caixa-branca relacionada à execução de instruções do código."
  },
  {
    "id": 189,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.1",
    "assunto": "Teste de instrução",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, o que o teste de instrução busca medir ou exercitar?",
    "correta": "se as instruções executáveis do código foram executadas pelos testes.",
    "erradas": [
      "se todas as opiniões dos usuários foram coletadas.",
      "se todos os requisitos foram escritos em linguagem natural.",
      "se todos os ambientes físicos foram comprados."
    ],
    "explicacao": "Teste de instrução é uma técnica caixa-branca relacionada à execução de instruções do código."
  },
  {
    "id": 190,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.1",
    "assunto": "Teste de instrução",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, o que o teste de instrução busca medir ou exercitar?",
    "correta": "se as instruções executáveis do código foram executadas pelos testes.",
    "erradas": [
      "se todas as opiniões dos usuários foram coletadas.",
      "se todos os requisitos foram escritos em linguagem natural.",
      "se todos os ambientes físicos foram comprados."
    ],
    "explicacao": "Teste de instrução é uma técnica caixa-branca relacionada à execução de instruções do código."
  },
  {
    "id": 191,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.2",
    "assunto": "Teste de ramificação",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, o que o teste de ramificação busca exercitar?",
    "correta": "os diferentes resultados de pontos de decisão, como verdadeiro e falso em uma condição.",
    "erradas": [
      "somente mensagens visuais da interface.",
      "apenas textos de ajuda ao usuário.",
      "apenas documentos de requisitos sem código."
    ],
    "explicacao": "Teste de ramificação verifica os caminhos decorrentes de decisões no código, como os ramos verdadeiro e falso."
  },
  {
    "id": 192,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.2",
    "assunto": "Teste de ramificação",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, o que o teste de ramificação busca exercitar?",
    "correta": "os diferentes resultados de pontos de decisão, como verdadeiro e falso em uma condição.",
    "erradas": [
      "somente mensagens visuais da interface.",
      "apenas textos de ajuda ao usuário.",
      "apenas documentos de requisitos sem código."
    ],
    "explicacao": "Teste de ramificação verifica os caminhos decorrentes de decisões no código, como os ramos verdadeiro e falso."
  },
  {
    "id": 193,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.2",
    "assunto": "Teste de ramificação",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, o que o teste de ramificação busca exercitar?",
    "correta": "os diferentes resultados de pontos de decisão, como verdadeiro e falso em uma condição.",
    "erradas": [
      "somente mensagens visuais da interface.",
      "apenas textos de ajuda ao usuário.",
      "apenas documentos de requisitos sem código."
    ],
    "explicacao": "Teste de ramificação verifica os caminhos decorrentes de decisões no código, como os ramos verdadeiro e falso."
  },
  {
    "id": 194,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.2",
    "assunto": "Teste de ramificação",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, o que o teste de ramificação busca exercitar?",
    "correta": "os diferentes resultados de pontos de decisão, como verdadeiro e falso em uma condição.",
    "erradas": [
      "somente mensagens visuais da interface.",
      "apenas textos de ajuda ao usuário.",
      "apenas documentos de requisitos sem código."
    ],
    "explicacao": "Teste de ramificação verifica os caminhos decorrentes de decisões no código, como os ramos verdadeiro e falso."
  },
  {
    "id": 195,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.2",
    "assunto": "Teste de ramificação",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, o que o teste de ramificação busca exercitar?",
    "correta": "os diferentes resultados de pontos de decisão, como verdadeiro e falso em uma condição.",
    "erradas": [
      "somente mensagens visuais da interface.",
      "apenas textos de ajuda ao usuário.",
      "apenas documentos de requisitos sem código."
    ],
    "explicacao": "Teste de ramificação verifica os caminhos decorrentes de decisões no código, como os ramos verdadeiro e falso."
  },
  {
    "id": 196,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.3",
    "assunto": "Valor dos testes caixa-branca",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual é um valor dos testes caixa-branca?",
    "correta": "complementar testes baseados em especificação ao revelar partes do código não exercitadas.",
    "erradas": [
      "substituir totalmente testes funcionais e de negócio.",
      "dispensar qualquer análise de requisitos.",
      "garantir ausência de defeitos se a cobertura for 100%."
    ],
    "explicacao": "Cobertura estrutural ajuda a descobrir lacunas, mas cobertura alta não garante que todas as regras de negócio estejam corretas."
  },
  {
    "id": 197,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.3",
    "assunto": "Valor dos testes caixa-branca",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual é um valor dos testes caixa-branca?",
    "correta": "complementar testes baseados em especificação ao revelar partes do código não exercitadas.",
    "erradas": [
      "substituir totalmente testes funcionais e de negócio.",
      "dispensar qualquer análise de requisitos.",
      "garantir ausência de defeitos se a cobertura for 100%."
    ],
    "explicacao": "Cobertura estrutural ajuda a descobrir lacunas, mas cobertura alta não garante que todas as regras de negócio estejam corretas."
  },
  {
    "id": 198,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.3",
    "assunto": "Valor dos testes caixa-branca",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual é um valor dos testes caixa-branca?",
    "correta": "complementar testes baseados em especificação ao revelar partes do código não exercitadas.",
    "erradas": [
      "substituir totalmente testes funcionais e de negócio.",
      "dispensar qualquer análise de requisitos.",
      "garantir ausência de defeitos se a cobertura for 100%."
    ],
    "explicacao": "Cobertura estrutural ajuda a descobrir lacunas, mas cobertura alta não garante que todas as regras de negócio estejam corretas."
  },
  {
    "id": 199,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.3",
    "assunto": "Valor dos testes caixa-branca",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual é um valor dos testes caixa-branca?",
    "correta": "complementar testes baseados em especificação ao revelar partes do código não exercitadas.",
    "erradas": [
      "substituir totalmente testes funcionais e de negócio.",
      "dispensar qualquer análise de requisitos.",
      "garantir ausência de defeitos se a cobertura for 100%."
    ],
    "explicacao": "Cobertura estrutural ajuda a descobrir lacunas, mas cobertura alta não garante que todas as regras de negócio estejam corretas."
  },
  {
    "id": 200,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.3.3",
    "assunto": "Valor dos testes caixa-branca",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual é um valor dos testes caixa-branca?",
    "correta": "complementar testes baseados em especificação ao revelar partes do código não exercitadas.",
    "erradas": [
      "substituir totalmente testes funcionais e de negócio.",
      "dispensar qualquer análise de requisitos.",
      "garantir ausência de defeitos se a cobertura for 100%."
    ],
    "explicacao": "Cobertura estrutural ajuda a descobrir lacunas, mas cobertura alta não garante que todas as regras de negócio estejam corretas."
  },
  {
    "id": 201,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.1",
    "assunto": "Suposição de erros",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, um testador experiente cria casos para nomes com acentos e caracteres especiais porque já viu defeitos semelhantes. Isso é:",
    "correta": "suposição de erros.",
    "erradas": [
      "teste de ramificação.",
      "particionamento de equivalência obrigatório.",
      "teste de instalação."
    ],
    "explicacao": "Suposição de erros usa conhecimento, experiência e padrões históricos para imaginar onde defeitos podem ocorrer."
  },
  {
    "id": 202,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.1",
    "assunto": "Suposição de erros",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, um testador experiente cria casos para nomes com acentos e caracteres especiais porque já viu defeitos semelhantes. Isso é:",
    "correta": "suposição de erros.",
    "erradas": [
      "teste de ramificação.",
      "particionamento de equivalência obrigatório.",
      "teste de instalação."
    ],
    "explicacao": "Suposição de erros usa conhecimento, experiência e padrões históricos para imaginar onde defeitos podem ocorrer."
  },
  {
    "id": 203,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.1",
    "assunto": "Suposição de erros",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, um testador experiente cria casos para nomes com acentos e caracteres especiais porque já viu defeitos semelhantes. Isso é:",
    "correta": "suposição de erros.",
    "erradas": [
      "teste de ramificação.",
      "particionamento de equivalência obrigatório.",
      "teste de instalação."
    ],
    "explicacao": "Suposição de erros usa conhecimento, experiência e padrões históricos para imaginar onde defeitos podem ocorrer."
  },
  {
    "id": 204,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.1",
    "assunto": "Suposição de erros",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, um testador experiente cria casos para nomes com acentos e caracteres especiais porque já viu defeitos semelhantes. Isso é:",
    "correta": "suposição de erros.",
    "erradas": [
      "teste de ramificação.",
      "particionamento de equivalência obrigatório.",
      "teste de instalação."
    ],
    "explicacao": "Suposição de erros usa conhecimento, experiência e padrões históricos para imaginar onde defeitos podem ocorrer."
  },
  {
    "id": 205,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.1",
    "assunto": "Suposição de erros",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, um testador experiente cria casos para nomes com acentos e caracteres especiais porque já viu defeitos semelhantes. Isso é:",
    "correta": "suposição de erros.",
    "erradas": [
      "teste de ramificação.",
      "particionamento de equivalência obrigatório.",
      "teste de instalação."
    ],
    "explicacao": "Suposição de erros usa conhecimento, experiência e padrões históricos para imaginar onde defeitos podem ocorrer."
  },
  {
    "id": 206,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.2",
    "assunto": "Teste exploratório",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual descrição corresponde ao teste exploratório?",
    "correta": "aprendizado, projeto e execução dos testes ocorrem em paralelo, geralmente guiados por uma missão.",
    "erradas": [
      "execução cega de casos antigos sem análise.",
      "revisão de documento sem executar nada.",
      "cálculo de esforço por três pontos."
    ],
    "explicacao": "Teste exploratório é uma técnica baseada em experiência, útil quando há incerteza, pouco tempo ou documentação limitada."
  },
  {
    "id": 207,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.2",
    "assunto": "Teste exploratório",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual descrição corresponde ao teste exploratório?",
    "correta": "aprendizado, projeto e execução dos testes ocorrem em paralelo, geralmente guiados por uma missão.",
    "erradas": [
      "execução cega de casos antigos sem análise.",
      "revisão de documento sem executar nada.",
      "cálculo de esforço por três pontos."
    ],
    "explicacao": "Teste exploratório é uma técnica baseada em experiência, útil quando há incerteza, pouco tempo ou documentação limitada."
  },
  {
    "id": 208,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.2",
    "assunto": "Teste exploratório",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual descrição corresponde ao teste exploratório?",
    "correta": "aprendizado, projeto e execução dos testes ocorrem em paralelo, geralmente guiados por uma missão.",
    "erradas": [
      "execução cega de casos antigos sem análise.",
      "revisão de documento sem executar nada.",
      "cálculo de esforço por três pontos."
    ],
    "explicacao": "Teste exploratório é uma técnica baseada em experiência, útil quando há incerteza, pouco tempo ou documentação limitada."
  },
  {
    "id": 209,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.2",
    "assunto": "Teste exploratório",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual descrição corresponde ao teste exploratório?",
    "correta": "aprendizado, projeto e execução dos testes ocorrem em paralelo, geralmente guiados por uma missão.",
    "erradas": [
      "execução cega de casos antigos sem análise.",
      "revisão de documento sem executar nada.",
      "cálculo de esforço por três pontos."
    ],
    "explicacao": "Teste exploratório é uma técnica baseada em experiência, útil quando há incerteza, pouco tempo ou documentação limitada."
  },
  {
    "id": 210,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.2",
    "assunto": "Teste exploratório",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual descrição corresponde ao teste exploratório?",
    "correta": "aprendizado, projeto e execução dos testes ocorrem em paralelo, geralmente guiados por uma missão.",
    "erradas": [
      "execução cega de casos antigos sem análise.",
      "revisão de documento sem executar nada.",
      "cálculo de esforço por três pontos."
    ],
    "explicacao": "Teste exploratório é uma técnica baseada em experiência, útil quando há incerteza, pouco tempo ou documentação limitada."
  },
  {
    "id": 211,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.3",
    "assunto": "Testes baseados em checklist",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual é a melhor descrição de teste baseado em lista de verificação?",
    "correta": "usar uma lista de pontos a verificar, com liberdade para definir detalhes da execução.",
    "erradas": [
      "executar somente código automatizado gerado pela ferramenta.",
      "usar uma tabela com todas as combinações formais de condições.",
      "calcular cobertura de ramificação."
    ],
    "explicacao": "Checklists ajudam a lembrar aspectos importantes, mas são menos detalhados que casos de teste passo a passo."
  },
  {
    "id": 212,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.3",
    "assunto": "Testes baseados em checklist",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual é a melhor descrição de teste baseado em lista de verificação?",
    "correta": "usar uma lista de pontos a verificar, com liberdade para definir detalhes da execução.",
    "erradas": [
      "executar somente código automatizado gerado pela ferramenta.",
      "usar uma tabela com todas as combinações formais de condições.",
      "calcular cobertura de ramificação."
    ],
    "explicacao": "Checklists ajudam a lembrar aspectos importantes, mas são menos detalhados que casos de teste passo a passo."
  },
  {
    "id": 213,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.3",
    "assunto": "Testes baseados em checklist",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual é a melhor descrição de teste baseado em lista de verificação?",
    "correta": "usar uma lista de pontos a verificar, com liberdade para definir detalhes da execução.",
    "erradas": [
      "executar somente código automatizado gerado pela ferramenta.",
      "usar uma tabela com todas as combinações formais de condições.",
      "calcular cobertura de ramificação."
    ],
    "explicacao": "Checklists ajudam a lembrar aspectos importantes, mas são menos detalhados que casos de teste passo a passo."
  },
  {
    "id": 214,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.3",
    "assunto": "Testes baseados em checklist",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual é a melhor descrição de teste baseado em lista de verificação?",
    "correta": "usar uma lista de pontos a verificar, com liberdade para definir detalhes da execução.",
    "erradas": [
      "executar somente código automatizado gerado pela ferramenta.",
      "usar uma tabela com todas as combinações formais de condições.",
      "calcular cobertura de ramificação."
    ],
    "explicacao": "Checklists ajudam a lembrar aspectos importantes, mas são menos detalhados que casos de teste passo a passo."
  },
  {
    "id": 215,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.4.3",
    "assunto": "Testes baseados em checklist",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual é a melhor descrição de teste baseado em lista de verificação?",
    "correta": "usar uma lista de pontos a verificar, com liberdade para definir detalhes da execução.",
    "erradas": [
      "executar somente código automatizado gerado pela ferramenta.",
      "usar uma tabela com todas as combinações formais de condições.",
      "calcular cobertura de ramificação."
    ],
    "explicacao": "Checklists ajudam a lembrar aspectos importantes, mas são menos detalhados que casos de teste passo a passo."
  },
  {
    "id": 216,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.1",
    "assunto": "Histórias de usuário colaborativas",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, por que histórias de usuário devem ser escritas em colaboração?",
    "correta": "para alinhar valor de negócio, entendimento técnico e testabilidade dos critérios.",
    "erradas": [
      "para retirar o representante de negócio do processo.",
      "para impedir perguntas dos desenvolvedores.",
      "para substituir toda comunicação por código."
    ],
    "explicacao": "Colaboração entre negócio, desenvolvimento e teste reduz ambiguidades e melhora critérios de aceite."
  },
  {
    "id": 217,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.1",
    "assunto": "Histórias de usuário colaborativas",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, por que histórias de usuário devem ser escritas em colaboração?",
    "correta": "para alinhar valor de negócio, entendimento técnico e testabilidade dos critérios.",
    "erradas": [
      "para retirar o representante de negócio do processo.",
      "para impedir perguntas dos desenvolvedores.",
      "para substituir toda comunicação por código."
    ],
    "explicacao": "Colaboração entre negócio, desenvolvimento e teste reduz ambiguidades e melhora critérios de aceite."
  },
  {
    "id": 218,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.1",
    "assunto": "Histórias de usuário colaborativas",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, por que histórias de usuário devem ser escritas em colaboração?",
    "correta": "para alinhar valor de negócio, entendimento técnico e testabilidade dos critérios.",
    "erradas": [
      "para retirar o representante de negócio do processo.",
      "para impedir perguntas dos desenvolvedores.",
      "para substituir toda comunicação por código."
    ],
    "explicacao": "Colaboração entre negócio, desenvolvimento e teste reduz ambiguidades e melhora critérios de aceite."
  },
  {
    "id": 219,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.1",
    "assunto": "Histórias de usuário colaborativas",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, por que histórias de usuário devem ser escritas em colaboração?",
    "correta": "para alinhar valor de negócio, entendimento técnico e testabilidade dos critérios.",
    "erradas": [
      "para retirar o representante de negócio do processo.",
      "para impedir perguntas dos desenvolvedores.",
      "para substituir toda comunicação por código."
    ],
    "explicacao": "Colaboração entre negócio, desenvolvimento e teste reduz ambiguidades e melhora critérios de aceite."
  },
  {
    "id": 220,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.1",
    "assunto": "Histórias de usuário colaborativas",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, por que histórias de usuário devem ser escritas em colaboração?",
    "correta": "para alinhar valor de negócio, entendimento técnico e testabilidade dos critérios.",
    "erradas": [
      "para retirar o representante de negócio do processo.",
      "para impedir perguntas dos desenvolvedores.",
      "para substituir toda comunicação por código."
    ],
    "explicacao": "Colaboração entre negócio, desenvolvimento e teste reduz ambiguidades e melhora critérios de aceite."
  },
  {
    "id": 221,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.2",
    "assunto": "Critérios de aceite",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual opção é um bom critério de aceite?",
    "correta": "Dado um usuário ativo, quando informar senha correta, então o acesso deve ser concedido.",
    "erradas": [
      "o sistema deve ser bom e rápido.",
      "a tela deve agradar a todos.",
      "a aplicação deve funcionar de algum jeito."
    ],
    "explicacao": "Critérios de aceite precisam ser claros, verificáveis e úteis para derivar testes."
  },
  {
    "id": 222,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.2",
    "assunto": "Critérios de aceite",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual opção é um bom critério de aceite?",
    "correta": "Dado um usuário ativo, quando informar senha correta, então o acesso deve ser concedido.",
    "erradas": [
      "o sistema deve ser bom e rápido.",
      "a tela deve agradar a todos.",
      "a aplicação deve funcionar de algum jeito."
    ],
    "explicacao": "Critérios de aceite precisam ser claros, verificáveis e úteis para derivar testes."
  },
  {
    "id": 223,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.2",
    "assunto": "Critérios de aceite",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual opção é um bom critério de aceite?",
    "correta": "Dado um usuário ativo, quando informar senha correta, então o acesso deve ser concedido.",
    "erradas": [
      "o sistema deve ser bom e rápido.",
      "a tela deve agradar a todos.",
      "a aplicação deve funcionar de algum jeito."
    ],
    "explicacao": "Critérios de aceite precisam ser claros, verificáveis e úteis para derivar testes."
  },
  {
    "id": 224,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.2",
    "assunto": "Critérios de aceite",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual opção é um bom critério de aceite?",
    "correta": "Dado um usuário ativo, quando informar senha correta, então o acesso deve ser concedido.",
    "erradas": [
      "o sistema deve ser bom e rápido.",
      "a tela deve agradar a todos.",
      "a aplicação deve funcionar de algum jeito."
    ],
    "explicacao": "Critérios de aceite precisam ser claros, verificáveis e úteis para derivar testes."
  },
  {
    "id": 225,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.2",
    "assunto": "Critérios de aceite",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual opção é um bom critério de aceite?",
    "correta": "Dado um usuário ativo, quando informar senha correta, então o acesso deve ser concedido.",
    "erradas": [
      "o sistema deve ser bom e rápido.",
      "a tela deve agradar a todos.",
      "a aplicação deve funcionar de algum jeito."
    ],
    "explicacao": "Critérios de aceite precisam ser claros, verificáveis e úteis para derivar testes."
  },
  {
    "id": 226,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.3",
    "assunto": "ATDD",
    "nivel": "K3",
    "enunciado": "Em ATDD, uma história diz: “Como aluno, quero emitir comprovante de matrícula”. Qual exemplo ajuda a derivar um teste?",
    "correta": "Dado aluno matriculado, quando solicitar comprovante, então o sistema gera PDF com dados da matrícula.",
    "erradas": [
      "O sistema deve ser moderno.",
      "A equipe deve gostar da interface.",
      "O banco de dados deve ser interessante."
    ],
    "explicacao": "ATDD usa exemplos concretos e critérios de aceite para orientar desenvolvimento e testes."
  },
  {
    "id": 227,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.3",
    "assunto": "ATDD",
    "nivel": "K3",
    "enunciado": "Uma regra diz que frete é grátis para compras acima de R$ 200 de clientes premium. Qual teste ATDD é adequado?",
    "correta": "Dado cliente premium e compra de R$ 250, quando calcular frete, então o frete deve ser R$ 0.",
    "erradas": [
      "Dado qualquer cliente, então tudo deve funcionar.",
      "Quando o sistema for bonito, então venderá mais.",
      "Dado um desenvolvedor, então o código compila."
    ],
    "explicacao": "O teste deve expressar condições, ação e resultado esperado de forma verificável."
  },
  {
    "id": 228,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.3",
    "assunto": "ATDD",
    "nivel": "K3",
    "enunciado": "Para a história “recuperar senha”, qual critério de aceite é mais testável?",
    "correta": "Dado e-mail cadastrado, quando solicitar recuperação, então o sistema envia link válido por 30 minutos.",
    "erradas": [
      "O sistema deve ser amigável.",
      "A recuperação deve ser excelente.",
      "A tela deve ser simples e bonita."
    ],
    "explicacao": "Critérios testáveis deixam claro dado, evento e resultado observável."
  },
  {
    "id": 229,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.3",
    "assunto": "ATDD",
    "nivel": "K3",
    "enunciado": "Em ATDD, quem deve colaborar na definição de exemplos?",
    "correta": "representantes de negócio, desenvolvedores e testadores.",
    "erradas": [
      "somente o compilador.",
      "apenas usuários externos sem equipe técnica.",
      "somente a ferramenta de automação."
    ],
    "explicacao": "ATDD é colaborativo e busca entendimento compartilhado antes ou durante a implementação."
  },
  {
    "id": 230,
    "capitulo": 4,
    "capituloNome": "Análise e Modelagem de Teste",
    "lo": "FL-4.5.3",
    "assunto": "ATDD",
    "nivel": "K3",
    "enunciado": "Uma história tem critérios vagos. Qual ação está mais alinhada ao ATDD?",
    "correta": "transformar expectativas em exemplos concretos com resultados esperados.",
    "erradas": [
      "começar a codificar sem esclarecer dúvidas.",
      "testar apenas depois da produção.",
      "remover os critérios de aceite."
    ],
    "explicacao": "ATDD ajuda a remover ambiguidade por meio de exemplos e testes derivados dos critérios de aceite."
  },
  {
    "id": 231,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.1",
    "assunto": "Plano de teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual conteúdo pertence a um plano de teste?",
    "correta": "objetivos, escopo, abordagem, recursos, cronograma, riscos e critérios de entrada/saída.",
    "erradas": [
      "somente lista de aniversários da equipe.",
      "apenas senha do banco de produção.",
      "apenas opinião subjetiva sobre a interface."
    ],
    "explicacao": "O plano de teste orienta o que será testado, como, por quem, quando, com quais riscos e critérios."
  },
  {
    "id": 232,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.1",
    "assunto": "Plano de teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual conteúdo pertence a um plano de teste?",
    "correta": "objetivos, escopo, abordagem, recursos, cronograma, riscos e critérios de entrada/saída.",
    "erradas": [
      "somente lista de aniversários da equipe.",
      "apenas senha do banco de produção.",
      "apenas opinião subjetiva sobre a interface."
    ],
    "explicacao": "O plano de teste orienta o que será testado, como, por quem, quando, com quais riscos e critérios."
  },
  {
    "id": 233,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.1",
    "assunto": "Plano de teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual conteúdo pertence a um plano de teste?",
    "correta": "objetivos, escopo, abordagem, recursos, cronograma, riscos e critérios de entrada/saída.",
    "erradas": [
      "somente lista de aniversários da equipe.",
      "apenas senha do banco de produção.",
      "apenas opinião subjetiva sobre a interface."
    ],
    "explicacao": "O plano de teste orienta o que será testado, como, por quem, quando, com quais riscos e critérios."
  },
  {
    "id": 234,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.1",
    "assunto": "Plano de teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual conteúdo pertence a um plano de teste?",
    "correta": "objetivos, escopo, abordagem, recursos, cronograma, riscos e critérios de entrada/saída.",
    "erradas": [
      "somente lista de aniversários da equipe.",
      "apenas senha do banco de produção.",
      "apenas opinião subjetiva sobre a interface."
    ],
    "explicacao": "O plano de teste orienta o que será testado, como, por quem, quando, com quais riscos e critérios."
  },
  {
    "id": 235,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.1",
    "assunto": "Plano de teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual conteúdo pertence a um plano de teste?",
    "correta": "objetivos, escopo, abordagem, recursos, cronograma, riscos e critérios de entrada/saída.",
    "erradas": [
      "somente lista de aniversários da equipe.",
      "apenas senha do banco de produção.",
      "apenas opinião subjetiva sobre a interface."
    ],
    "explicacao": "O plano de teste orienta o que será testado, como, por quem, quando, com quais riscos e critérios."
  },
  {
    "id": 236,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.2",
    "assunto": "Valor do testador no planejamento",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, como um testador agrega valor ao planejamento de iteração ou lançamento?",
    "correta": "identificando riscos, dependências, testabilidade, dados necessários e esforço de teste.",
    "erradas": [
      "garantindo sozinho que não haverá defeitos.",
      "impedindo o negócio de priorizar funcionalidades.",
      "substituindo o Product Owner em todas as decisões."
    ],
    "explicacao": "Testadores trazem visão de risco, qualidade, critérios de aceite, ambientes, massa de dados e esforço de validação."
  },
  {
    "id": 237,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.2",
    "assunto": "Valor do testador no planejamento",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, como um testador agrega valor ao planejamento de iteração ou lançamento?",
    "correta": "identificando riscos, dependências, testabilidade, dados necessários e esforço de teste.",
    "erradas": [
      "garantindo sozinho que não haverá defeitos.",
      "impedindo o negócio de priorizar funcionalidades.",
      "substituindo o Product Owner em todas as decisões."
    ],
    "explicacao": "Testadores trazem visão de risco, qualidade, critérios de aceite, ambientes, massa de dados e esforço de validação."
  },
  {
    "id": 238,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.2",
    "assunto": "Valor do testador no planejamento",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, como um testador agrega valor ao planejamento de iteração ou lançamento?",
    "correta": "identificando riscos, dependências, testabilidade, dados necessários e esforço de teste.",
    "erradas": [
      "garantindo sozinho que não haverá defeitos.",
      "impedindo o negócio de priorizar funcionalidades.",
      "substituindo o Product Owner em todas as decisões."
    ],
    "explicacao": "Testadores trazem visão de risco, qualidade, critérios de aceite, ambientes, massa de dados e esforço de validação."
  },
  {
    "id": 239,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.2",
    "assunto": "Valor do testador no planejamento",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, como um testador agrega valor ao planejamento de iteração ou lançamento?",
    "correta": "identificando riscos, dependências, testabilidade, dados necessários e esforço de teste.",
    "erradas": [
      "garantindo sozinho que não haverá defeitos.",
      "impedindo o negócio de priorizar funcionalidades.",
      "substituindo o Product Owner em todas as decisões."
    ],
    "explicacao": "Testadores trazem visão de risco, qualidade, critérios de aceite, ambientes, massa de dados e esforço de validação."
  },
  {
    "id": 240,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.2",
    "assunto": "Valor do testador no planejamento",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, como um testador agrega valor ao planejamento de iteração ou lançamento?",
    "correta": "identificando riscos, dependências, testabilidade, dados necessários e esforço de teste.",
    "erradas": [
      "garantindo sozinho que não haverá defeitos.",
      "impedindo o negócio de priorizar funcionalidades.",
      "substituindo o Product Owner em todas as decisões."
    ],
    "explicacao": "Testadores trazem visão de risco, qualidade, critérios de aceite, ambientes, massa de dados e esforço de validação."
  },
  {
    "id": 241,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.3",
    "assunto": "Critérios de entrada e saída",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual comparação está correta?",
    "correta": "critérios de entrada indicam quando começar; critérios de saída indicam quando encerrar uma atividade de teste.",
    "erradas": [
      "entrada e saída são sempre datas fixas sem relação com qualidade.",
      "critério de saída é a senha do testador.",
      "critério de entrada só existe em produção."
    ],
    "explicacao": "Critérios de entrada e saída tornam a decisão mais objetiva e ajudam a controlar risco e progresso."
  },
  {
    "id": 242,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.3",
    "assunto": "Critérios de entrada e saída",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual comparação está correta?",
    "correta": "critérios de entrada indicam quando começar; critérios de saída indicam quando encerrar uma atividade de teste.",
    "erradas": [
      "entrada e saída são sempre datas fixas sem relação com qualidade.",
      "critério de saída é a senha do testador.",
      "critério de entrada só existe em produção."
    ],
    "explicacao": "Critérios de entrada e saída tornam a decisão mais objetiva e ajudam a controlar risco e progresso."
  },
  {
    "id": 243,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.3",
    "assunto": "Critérios de entrada e saída",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual comparação está correta?",
    "correta": "critérios de entrada indicam quando começar; critérios de saída indicam quando encerrar uma atividade de teste.",
    "erradas": [
      "entrada e saída são sempre datas fixas sem relação com qualidade.",
      "critério de saída é a senha do testador.",
      "critério de entrada só existe em produção."
    ],
    "explicacao": "Critérios de entrada e saída tornam a decisão mais objetiva e ajudam a controlar risco e progresso."
  },
  {
    "id": 244,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.3",
    "assunto": "Critérios de entrada e saída",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual comparação está correta?",
    "correta": "critérios de entrada indicam quando começar; critérios de saída indicam quando encerrar uma atividade de teste.",
    "erradas": [
      "entrada e saída são sempre datas fixas sem relação com qualidade.",
      "critério de saída é a senha do testador.",
      "critério de entrada só existe em produção."
    ],
    "explicacao": "Critérios de entrada e saída tornam a decisão mais objetiva e ajudam a controlar risco e progresso."
  },
  {
    "id": 245,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.3",
    "assunto": "Critérios de entrada e saída",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual comparação está correta?",
    "correta": "critérios de entrada indicam quando começar; critérios de saída indicam quando encerrar uma atividade de teste.",
    "erradas": [
      "entrada e saída são sempre datas fixas sem relação com qualidade.",
      "critério de saída é a senha do testador.",
      "critério de entrada só existe em produção."
    ],
    "explicacao": "Critérios de entrada e saída tornam a decisão mais objetiva e ajudam a controlar risco e progresso."
  },
  {
    "id": 246,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.4",
    "assunto": "Técnicas de estimativa",
    "nivel": "K3",
    "enunciado": "Uma equipe estima um teste com valores otimista 4h, mais provável 6h e pessimista 14h. Usando média de três pontos simples, qual é a estimativa?",
    "correta": "8 horas.",
    "erradas": [
      "6 horas.",
      "14 horas.",
      "24 horas."
    ],
    "explicacao": "Na média simples de três pontos: (4 + 6 + 14) / 3 = 8."
  },
  {
    "id": 247,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.4",
    "assunto": "Técnicas de estimativa",
    "nivel": "K3",
    "enunciado": "Se 10 casos de teste semelhantes levaram 5 horas no projeto anterior, quanto estimar para 20 casos semelhantes usando proporção simples?",
    "correta": "10 horas.",
    "erradas": [
      "5 horas.",
      "15 horas.",
      "20 horas."
    ],
    "explicacao": "Com produtividade semelhante, dobrar a quantidade dobra o esforço estimado."
  },
  {
    "id": 248,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.4",
    "assunto": "Técnicas de estimativa",
    "nivel": "K3",
    "enunciado": "Uma tarefa tem estimativa otimista 2 dias, provável 3 dias e pessimista 7 dias. Qual é a média de três pontos simples?",
    "correta": "4 dias.",
    "erradas": [
      "3 dias.",
      "7 dias.",
      "12 dias."
    ],
    "explicacao": "Cálculo: (2 + 3 + 7) / 3 = 4."
  },
  {
    "id": 249,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.4",
    "assunto": "Técnicas de estimativa",
    "nivel": "K3",
    "enunciado": "Se uma equipe executa 12 casos por dia, quantos dias aproximadamente precisa para 48 casos?",
    "correta": "4 dias.",
    "erradas": [
      "2 dias.",
      "6 dias.",
      "12 dias."
    ],
    "explicacao": "48 casos / 12 casos por dia = 4 dias."
  },
  {
    "id": 250,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.4",
    "assunto": "Técnicas de estimativa",
    "nivel": "K3",
    "enunciado": "Qual situação melhora a estimativa de teste?",
    "correta": "usar histórico, complexidade, riscos, disponibilidade de pessoas e incertezas.",
    "erradas": [
      "considerar apenas vontade de terminar rápido.",
      "ignorar ambiente e massa de dados.",
      "copiar prazo de outro projeto sem comparar contexto."
    ],
    "explicacao": "Estimativas melhores combinam dados históricos, julgamento especializado, riscos, contexto e incertezas."
  },
  {
    "id": 251,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.5",
    "assunto": "Priorização de casos de teste",
    "nivel": "K3",
    "enunciado": "Há pouco tempo antes da liberação. Qual teste deve ser priorizado?",
    "correta": "pagamento usado por todos os clientes e com alto impacto financeiro.",
    "erradas": [
      "alteração visual de baixa visibilidade.",
      "tela administrativa raramente usada e sem risco conhecido.",
      "texto de ajuda sem impacto operacional."
    ],
    "explicacao": "Priorização considera risco, criticidade, frequência de uso, impacto e dependências."
  },
  {
    "id": 252,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.5",
    "assunto": "Priorização de casos de teste",
    "nivel": "K3",
    "enunciado": "Dois testes têm mesmo esforço. Um cobre função crítica com muitos defeitos históricos; outro cobre função rara e estável. Qual priorizar?",
    "correta": "o teste da função crítica com histórico de defeitos.",
    "erradas": [
      "o teste da função rara e estável.",
      "nenhum teste, pois esforço é igual.",
      "sempre o teste mais novo, sem analisar risco."
    ],
    "explicacao": "Maior risco e histórico de defeitos aumentam prioridade."
  },
  {
    "id": 253,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.5",
    "assunto": "Priorização de casos de teste",
    "nivel": "K3",
    "enunciado": "Qual ordem é mais adequada em um smoke test inicial?",
    "correta": "verificar primeiro fluxos básicos que bloqueiam o restante dos testes.",
    "erradas": [
      "começar por cenários raros e cosméticos.",
      "testar somente relatórios de baixa prioridade.",
      "executar primeiro casos que dependem de ambiente indisponível."
    ],
    "explicacao": "Smoke tests devem confirmar que a build está suficientemente estável para testes mais detalhados."
  },
  {
    "id": 254,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.5",
    "assunto": "Priorização de casos de teste",
    "nivel": "K3",
    "enunciado": "Uma funcionalidade exigida por lei tem risco médio e uma melhoria estética tem risco baixo. Qual tende a ter maior prioridade?",
    "correta": "a funcionalidade exigida por lei.",
    "erradas": [
      "a melhoria estética.",
      "a que tiver nome mais curto.",
      "a que foi sugerida por último."
    ],
    "explicacao": "Obrigação legal aumenta impacto e geralmente eleva prioridade."
  },
  {
    "id": 255,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.5",
    "assunto": "Priorização de casos de teste",
    "nivel": "K3",
    "enunciado": "Qual critério NÃO é adequado para priorizar casos de teste?",
    "correta": "ordem alfabética do título do caso, sem relação com risco.",
    "erradas": [
      "impacto de negócio.",
      "probabilidade de falha.",
      "frequência de uso."
    ],
    "explicacao": "Prioridade deve refletir risco, valor e dependências, não critérios arbitrários."
  },
  {
    "id": 256,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.6",
    "assunto": "Pirâmide de teste",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual afirmação resume a pirâmide de teste?",
    "correta": "há muitos testes de baixo nível na base e menos testes amplos e mais lentos no topo.",
    "erradas": [
      "todos os testes devem ser ponta a ponta.",
      "testes de unidade sempre ficam no topo.",
      "a pirâmide elimina testes manuais e exploratórios."
    ],
    "explicacao": "A pirâmide orienta uma combinação equilibrada: base ampla de testes rápidos e isolados, com menos testes integrados e ponta a ponta."
  },
  {
    "id": 257,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.6",
    "assunto": "Pirâmide de teste",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual afirmação resume a pirâmide de teste?",
    "correta": "há muitos testes de baixo nível na base e menos testes amplos e mais lentos no topo.",
    "erradas": [
      "todos os testes devem ser ponta a ponta.",
      "testes de unidade sempre ficam no topo.",
      "a pirâmide elimina testes manuais e exploratórios."
    ],
    "explicacao": "A pirâmide orienta uma combinação equilibrada: base ampla de testes rápidos e isolados, com menos testes integrados e ponta a ponta."
  },
  {
    "id": 258,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.6",
    "assunto": "Pirâmide de teste",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual afirmação resume a pirâmide de teste?",
    "correta": "há muitos testes de baixo nível na base e menos testes amplos e mais lentos no topo.",
    "erradas": [
      "todos os testes devem ser ponta a ponta.",
      "testes de unidade sempre ficam no topo.",
      "a pirâmide elimina testes manuais e exploratórios."
    ],
    "explicacao": "A pirâmide orienta uma combinação equilibrada: base ampla de testes rápidos e isolados, com menos testes integrados e ponta a ponta."
  },
  {
    "id": 259,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.6",
    "assunto": "Pirâmide de teste",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual afirmação resume a pirâmide de teste?",
    "correta": "há muitos testes de baixo nível na base e menos testes amplos e mais lentos no topo.",
    "erradas": [
      "todos os testes devem ser ponta a ponta.",
      "testes de unidade sempre ficam no topo.",
      "a pirâmide elimina testes manuais e exploratórios."
    ],
    "explicacao": "A pirâmide orienta uma combinação equilibrada: base ampla de testes rápidos e isolados, com menos testes integrados e ponta a ponta."
  },
  {
    "id": 260,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.6",
    "assunto": "Pirâmide de teste",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual afirmação resume a pirâmide de teste?",
    "correta": "há muitos testes de baixo nível na base e menos testes amplos e mais lentos no topo.",
    "erradas": [
      "todos os testes devem ser ponta a ponta.",
      "testes de unidade sempre ficam no topo.",
      "a pirâmide elimina testes manuais e exploratórios."
    ],
    "explicacao": "A pirâmide orienta uma combinação equilibrada: base ampla de testes rápidos e isolados, com menos testes integrados e ponta a ponta."
  },
  {
    "id": 261,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.7",
    "assunto": "Quadrantes de teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, para que servem os quadrantes de teste?",
    "correta": "organizar tipos de teste conforme foco técnico/negócio e apoio à equipe/crítica ao produto.",
    "erradas": [
      "substituir todos os níveis de teste.",
      "definir somente quem será demitido.",
      "calcular automaticamente esforço de teste."
    ],
    "explicacao": "Quadrantes ajudam a pensar em diferentes propósitos: apoiar desenvolvimento, criticar produto, orientar negócio e avaliar características técnicas."
  },
  {
    "id": 262,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.7",
    "assunto": "Quadrantes de teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, para que servem os quadrantes de teste?",
    "correta": "organizar tipos de teste conforme foco técnico/negócio e apoio à equipe/crítica ao produto.",
    "erradas": [
      "substituir todos os níveis de teste.",
      "definir somente quem será demitido.",
      "calcular automaticamente esforço de teste."
    ],
    "explicacao": "Quadrantes ajudam a pensar em diferentes propósitos: apoiar desenvolvimento, criticar produto, orientar negócio e avaliar características técnicas."
  },
  {
    "id": 263,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.7",
    "assunto": "Quadrantes de teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, para que servem os quadrantes de teste?",
    "correta": "organizar tipos de teste conforme foco técnico/negócio e apoio à equipe/crítica ao produto.",
    "erradas": [
      "substituir todos os níveis de teste.",
      "definir somente quem será demitido.",
      "calcular automaticamente esforço de teste."
    ],
    "explicacao": "Quadrantes ajudam a pensar em diferentes propósitos: apoiar desenvolvimento, criticar produto, orientar negócio e avaliar características técnicas."
  },
  {
    "id": 264,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.7",
    "assunto": "Quadrantes de teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, para que servem os quadrantes de teste?",
    "correta": "organizar tipos de teste conforme foco técnico/negócio e apoio à equipe/crítica ao produto.",
    "erradas": [
      "substituir todos os níveis de teste.",
      "definir somente quem será demitido.",
      "calcular automaticamente esforço de teste."
    ],
    "explicacao": "Quadrantes ajudam a pensar em diferentes propósitos: apoiar desenvolvimento, criticar produto, orientar negócio e avaliar características técnicas."
  },
  {
    "id": 265,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.1.7",
    "assunto": "Quadrantes de teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, para que servem os quadrantes de teste?",
    "correta": "organizar tipos de teste conforme foco técnico/negócio e apoio à equipe/crítica ao produto.",
    "erradas": [
      "substituir todos os níveis de teste.",
      "definir somente quem será demitido.",
      "calcular automaticamente esforço de teste."
    ],
    "explicacao": "Quadrantes ajudam a pensar em diferentes propósitos: apoiar desenvolvimento, criticar produto, orientar negócio e avaliar características técnicas."
  },
  {
    "id": 266,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.1",
    "assunto": "Nível de risco",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, como o nível de risco é normalmente avaliado?",
    "correta": "pela combinação de probabilidade de ocorrência e impacto caso ocorra.",
    "erradas": [
      "apenas pela quantidade de linhas de código.",
      "somente pela opinião do cliente mais antigo.",
      "pela cor da tela afetada."
    ],
    "explicacao": "Risco relaciona a chance de um evento negativo ocorrer ao impacto de suas consequências."
  },
  {
    "id": 267,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.1",
    "assunto": "Nível de risco",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, como o nível de risco é normalmente avaliado?",
    "correta": "pela combinação de probabilidade de ocorrência e impacto caso ocorra.",
    "erradas": [
      "apenas pela quantidade de linhas de código.",
      "somente pela opinião do cliente mais antigo.",
      "pela cor da tela afetada."
    ],
    "explicacao": "Risco relaciona a chance de um evento negativo ocorrer ao impacto de suas consequências."
  },
  {
    "id": 268,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.1",
    "assunto": "Nível de risco",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, como o nível de risco é normalmente avaliado?",
    "correta": "pela combinação de probabilidade de ocorrência e impacto caso ocorra.",
    "erradas": [
      "apenas pela quantidade de linhas de código.",
      "somente pela opinião do cliente mais antigo.",
      "pela cor da tela afetada."
    ],
    "explicacao": "Risco relaciona a chance de um evento negativo ocorrer ao impacto de suas consequências."
  },
  {
    "id": 269,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.1",
    "assunto": "Nível de risco",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, como o nível de risco é normalmente avaliado?",
    "correta": "pela combinação de probabilidade de ocorrência e impacto caso ocorra.",
    "erradas": [
      "apenas pela quantidade de linhas de código.",
      "somente pela opinião do cliente mais antigo.",
      "pela cor da tela afetada."
    ],
    "explicacao": "Risco relaciona a chance de um evento negativo ocorrer ao impacto de suas consequências."
  },
  {
    "id": 270,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.1",
    "assunto": "Nível de risco",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, como o nível de risco é normalmente avaliado?",
    "correta": "pela combinação de probabilidade de ocorrência e impacto caso ocorra.",
    "erradas": [
      "apenas pela quantidade de linhas de código.",
      "somente pela opinião do cliente mais antigo.",
      "pela cor da tela afetada."
    ],
    "explicacao": "Risco relaciona a chance de um evento negativo ocorrer ao impacto de suas consequências."
  },
  {
    "id": 271,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.2",
    "assunto": "Riscos de projeto e produto",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual alternativa distingue corretamente riscos de projeto e riscos de produto?",
    "correta": "risco de projeto afeta o andamento do trabalho; risco de produto afeta a qualidade do sistema.",
    "erradas": [
      "risco de produto é atraso de férias da equipe.",
      "risco de projeto é cálculo incorreto de imposto no sistema.",
      "ambos significam sempre a mesma coisa."
    ],
    "explicacao": "Riscos de projeto envolvem prazo, equipe, ambiente e processo. Riscos de produto envolvem falhas e impacto do próprio software."
  },
  {
    "id": 272,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.2",
    "assunto": "Riscos de projeto e produto",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual alternativa distingue corretamente riscos de projeto e riscos de produto?",
    "correta": "risco de projeto afeta o andamento do trabalho; risco de produto afeta a qualidade do sistema.",
    "erradas": [
      "risco de produto é atraso de férias da equipe.",
      "risco de projeto é cálculo incorreto de imposto no sistema.",
      "ambos significam sempre a mesma coisa."
    ],
    "explicacao": "Riscos de projeto envolvem prazo, equipe, ambiente e processo. Riscos de produto envolvem falhas e impacto do próprio software."
  },
  {
    "id": 273,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.2",
    "assunto": "Riscos de projeto e produto",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual alternativa distingue corretamente riscos de projeto e riscos de produto?",
    "correta": "risco de projeto afeta o andamento do trabalho; risco de produto afeta a qualidade do sistema.",
    "erradas": [
      "risco de produto é atraso de férias da equipe.",
      "risco de projeto é cálculo incorreto de imposto no sistema.",
      "ambos significam sempre a mesma coisa."
    ],
    "explicacao": "Riscos de projeto envolvem prazo, equipe, ambiente e processo. Riscos de produto envolvem falhas e impacto do próprio software."
  },
  {
    "id": 274,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.2",
    "assunto": "Riscos de projeto e produto",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual alternativa distingue corretamente riscos de projeto e riscos de produto?",
    "correta": "risco de projeto afeta o andamento do trabalho; risco de produto afeta a qualidade do sistema.",
    "erradas": [
      "risco de produto é atraso de férias da equipe.",
      "risco de projeto é cálculo incorreto de imposto no sistema.",
      "ambos significam sempre a mesma coisa."
    ],
    "explicacao": "Riscos de projeto envolvem prazo, equipe, ambiente e processo. Riscos de produto envolvem falhas e impacto do próprio software."
  },
  {
    "id": 275,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.2",
    "assunto": "Riscos de projeto e produto",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual alternativa distingue corretamente riscos de projeto e riscos de produto?",
    "correta": "risco de projeto afeta o andamento do trabalho; risco de produto afeta a qualidade do sistema.",
    "erradas": [
      "risco de produto é atraso de férias da equipe.",
      "risco de projeto é cálculo incorreto de imposto no sistema.",
      "ambos significam sempre a mesma coisa."
    ],
    "explicacao": "Riscos de projeto envolvem prazo, equipe, ambiente e processo. Riscos de produto envolvem falhas e impacto do próprio software."
  },
  {
    "id": 276,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.3",
    "assunto": "Influência da análise de risco",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, como a análise de risco do produto pode influenciar os testes?",
    "correta": "definindo maior rigor, cobertura e prioridade para áreas de maior risco.",
    "erradas": [
      "fazendo a equipe testar primeiro itens sem impacto.",
      "eliminando todos os testes das áreas críticas.",
      "impedindo a comunicação de riscos."
    ],
    "explicacao": "Testes baseados em risco ajustam profundidade, técnica, ordem e esforço conforme probabilidade e impacto."
  },
  {
    "id": 277,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.3",
    "assunto": "Influência da análise de risco",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, como a análise de risco do produto pode influenciar os testes?",
    "correta": "definindo maior rigor, cobertura e prioridade para áreas de maior risco.",
    "erradas": [
      "fazendo a equipe testar primeiro itens sem impacto.",
      "eliminando todos os testes das áreas críticas.",
      "impedindo a comunicação de riscos."
    ],
    "explicacao": "Testes baseados em risco ajustam profundidade, técnica, ordem e esforço conforme probabilidade e impacto."
  },
  {
    "id": 278,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.3",
    "assunto": "Influência da análise de risco",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, como a análise de risco do produto pode influenciar os testes?",
    "correta": "definindo maior rigor, cobertura e prioridade para áreas de maior risco.",
    "erradas": [
      "fazendo a equipe testar primeiro itens sem impacto.",
      "eliminando todos os testes das áreas críticas.",
      "impedindo a comunicação de riscos."
    ],
    "explicacao": "Testes baseados em risco ajustam profundidade, técnica, ordem e esforço conforme probabilidade e impacto."
  },
  {
    "id": 279,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.3",
    "assunto": "Influência da análise de risco",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, como a análise de risco do produto pode influenciar os testes?",
    "correta": "definindo maior rigor, cobertura e prioridade para áreas de maior risco.",
    "erradas": [
      "fazendo a equipe testar primeiro itens sem impacto.",
      "eliminando todos os testes das áreas críticas.",
      "impedindo a comunicação de riscos."
    ],
    "explicacao": "Testes baseados em risco ajustam profundidade, técnica, ordem e esforço conforme probabilidade e impacto."
  },
  {
    "id": 280,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.3",
    "assunto": "Influência da análise de risco",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, como a análise de risco do produto pode influenciar os testes?",
    "correta": "definindo maior rigor, cobertura e prioridade para áreas de maior risco.",
    "erradas": [
      "fazendo a equipe testar primeiro itens sem impacto.",
      "eliminando todos os testes das áreas críticas.",
      "impedindo a comunicação de riscos."
    ],
    "explicacao": "Testes baseados em risco ajustam profundidade, técnica, ordem e esforço conforme probabilidade e impacto."
  },
  {
    "id": 281,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.4",
    "assunto": "Respostas a riscos de produto",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual medida pode responder a um risco de produto alto?",
    "correta": "aumentar cobertura, aplicar técnicas mais rigorosas, revisar requisitos e envolver especialistas.",
    "erradas": [
      "ignorar a área para economizar tempo.",
      "ocultar o risco no relatório.",
      "testar apenas cenários cosméticos."
    ],
    "explicacao": "Riscos podem ser mitigados com mais testes, revisões, protótipos, automação, especialistas ou outras ações proporcionais ao impacto."
  },
  {
    "id": 282,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.4",
    "assunto": "Respostas a riscos de produto",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual medida pode responder a um risco de produto alto?",
    "correta": "aumentar cobertura, aplicar técnicas mais rigorosas, revisar requisitos e envolver especialistas.",
    "erradas": [
      "ignorar a área para economizar tempo.",
      "ocultar o risco no relatório.",
      "testar apenas cenários cosméticos."
    ],
    "explicacao": "Riscos podem ser mitigados com mais testes, revisões, protótipos, automação, especialistas ou outras ações proporcionais ao impacto."
  },
  {
    "id": 283,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.4",
    "assunto": "Respostas a riscos de produto",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual medida pode responder a um risco de produto alto?",
    "correta": "aumentar cobertura, aplicar técnicas mais rigorosas, revisar requisitos e envolver especialistas.",
    "erradas": [
      "ignorar a área para economizar tempo.",
      "ocultar o risco no relatório.",
      "testar apenas cenários cosméticos."
    ],
    "explicacao": "Riscos podem ser mitigados com mais testes, revisões, protótipos, automação, especialistas ou outras ações proporcionais ao impacto."
  },
  {
    "id": 284,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.4",
    "assunto": "Respostas a riscos de produto",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual medida pode responder a um risco de produto alto?",
    "correta": "aumentar cobertura, aplicar técnicas mais rigorosas, revisar requisitos e envolver especialistas.",
    "erradas": [
      "ignorar a área para economizar tempo.",
      "ocultar o risco no relatório.",
      "testar apenas cenários cosméticos."
    ],
    "explicacao": "Riscos podem ser mitigados com mais testes, revisões, protótipos, automação, especialistas ou outras ações proporcionais ao impacto."
  },
  {
    "id": 285,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.2.4",
    "assunto": "Respostas a riscos de produto",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual medida pode responder a um risco de produto alto?",
    "correta": "aumentar cobertura, aplicar técnicas mais rigorosas, revisar requisitos e envolver especialistas.",
    "erradas": [
      "ignorar a área para economizar tempo.",
      "ocultar o risco no relatório.",
      "testar apenas cenários cosméticos."
    ],
    "explicacao": "Riscos podem ser mitigados com mais testes, revisões, protótipos, automação, especialistas ou outras ações proporcionais ao impacto."
  },
  {
    "id": 286,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.1",
    "assunto": "Métricas de teste",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual opção é uma métrica usada em monitoramento de testes?",
    "correta": "quantidade de casos executados, taxa de aprovação, cobertura e defeitos abertos.",
    "erradas": [
      "cor favorita da equipe.",
      "quantidade de cadeiras da sala.",
      "nome do fornecedor de café."
    ],
    "explicacao": "Métricas ajudam a acompanhar progresso, qualidade, cobertura, riscos e defeitos."
  },
  {
    "id": 287,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.1",
    "assunto": "Métricas de teste",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual opção é uma métrica usada em monitoramento de testes?",
    "correta": "quantidade de casos executados, taxa de aprovação, cobertura e defeitos abertos.",
    "erradas": [
      "cor favorita da equipe.",
      "quantidade de cadeiras da sala.",
      "nome do fornecedor de café."
    ],
    "explicacao": "Métricas ajudam a acompanhar progresso, qualidade, cobertura, riscos e defeitos."
  },
  {
    "id": 288,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.1",
    "assunto": "Métricas de teste",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual opção é uma métrica usada em monitoramento de testes?",
    "correta": "quantidade de casos executados, taxa de aprovação, cobertura e defeitos abertos.",
    "erradas": [
      "cor favorita da equipe.",
      "quantidade de cadeiras da sala.",
      "nome do fornecedor de café."
    ],
    "explicacao": "Métricas ajudam a acompanhar progresso, qualidade, cobertura, riscos e defeitos."
  },
  {
    "id": 289,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.1",
    "assunto": "Métricas de teste",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual opção é uma métrica usada em monitoramento de testes?",
    "correta": "quantidade de casos executados, taxa de aprovação, cobertura e defeitos abertos.",
    "erradas": [
      "cor favorita da equipe.",
      "quantidade de cadeiras da sala.",
      "nome do fornecedor de café."
    ],
    "explicacao": "Métricas ajudam a acompanhar progresso, qualidade, cobertura, riscos e defeitos."
  },
  {
    "id": 290,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.1",
    "assunto": "Métricas de teste",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual opção é uma métrica usada em monitoramento de testes?",
    "correta": "quantidade de casos executados, taxa de aprovação, cobertura e defeitos abertos.",
    "erradas": [
      "cor favorita da equipe.",
      "quantidade de cadeiras da sala.",
      "nome do fornecedor de café."
    ],
    "explicacao": "Métricas ajudam a acompanhar progresso, qualidade, cobertura, riscos e defeitos."
  },
  {
    "id": 291,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.2",
    "assunto": "Relatórios de teste",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual é uma finalidade de um relatório de teste?",
    "correta": "comunicar progresso, qualidade, riscos, defeitos e recomendações a um público-alvo.",
    "erradas": [
      "guardar senhas de produção.",
      "substituir todo plano de projeto.",
      "evitar decisões de liberação."
    ],
    "explicacao": "Relatórios variam conforme público e objetivo: equipe técnica, gestão, negócio ou auditoria podem precisar de informações diferentes."
  },
  {
    "id": 292,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.2",
    "assunto": "Relatórios de teste",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual é uma finalidade de um relatório de teste?",
    "correta": "comunicar progresso, qualidade, riscos, defeitos e recomendações a um público-alvo.",
    "erradas": [
      "guardar senhas de produção.",
      "substituir todo plano de projeto.",
      "evitar decisões de liberação."
    ],
    "explicacao": "Relatórios variam conforme público e objetivo: equipe técnica, gestão, negócio ou auditoria podem precisar de informações diferentes."
  },
  {
    "id": 293,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.2",
    "assunto": "Relatórios de teste",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual é uma finalidade de um relatório de teste?",
    "correta": "comunicar progresso, qualidade, riscos, defeitos e recomendações a um público-alvo.",
    "erradas": [
      "guardar senhas de produção.",
      "substituir todo plano de projeto.",
      "evitar decisões de liberação."
    ],
    "explicacao": "Relatórios variam conforme público e objetivo: equipe técnica, gestão, negócio ou auditoria podem precisar de informações diferentes."
  },
  {
    "id": 294,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.2",
    "assunto": "Relatórios de teste",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual é uma finalidade de um relatório de teste?",
    "correta": "comunicar progresso, qualidade, riscos, defeitos e recomendações a um público-alvo.",
    "erradas": [
      "guardar senhas de produção.",
      "substituir todo plano de projeto.",
      "evitar decisões de liberação."
    ],
    "explicacao": "Relatórios variam conforme público e objetivo: equipe técnica, gestão, negócio ou auditoria podem precisar de informações diferentes."
  },
  {
    "id": 295,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.2",
    "assunto": "Relatórios de teste",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual é uma finalidade de um relatório de teste?",
    "correta": "comunicar progresso, qualidade, riscos, defeitos e recomendações a um público-alvo.",
    "erradas": [
      "guardar senhas de produção.",
      "substituir todo plano de projeto.",
      "evitar decisões de liberação."
    ],
    "explicacao": "Relatórios variam conforme público e objetivo: equipe técnica, gestão, negócio ou auditoria podem precisar de informações diferentes."
  },
  {
    "id": 296,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.3",
    "assunto": "Comunicação do status",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual comunicação de status é mais adequada?",
    "correta": "“80% dos testes executados, 6 defeitos abertos, 1 crítico bloqueando liberação e risco alto em pagamento”.",
    "erradas": [
      "“está tudo mais ou menos bom”.",
      "“acho que sim, mas não medi nada”.",
      "“não há problemas”, omitindo defeitos críticos."
    ],
    "explicacao": "Boa comunicação de status é objetiva, baseada em evidências, riscos, progresso e impacto."
  },
  {
    "id": 297,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.3",
    "assunto": "Comunicação do status",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual comunicação de status é mais adequada?",
    "correta": "“80% dos testes executados, 6 defeitos abertos, 1 crítico bloqueando liberação e risco alto em pagamento”.",
    "erradas": [
      "“está tudo mais ou menos bom”.",
      "“acho que sim, mas não medi nada”.",
      "“não há problemas”, omitindo defeitos críticos."
    ],
    "explicacao": "Boa comunicação de status é objetiva, baseada em evidências, riscos, progresso e impacto."
  },
  {
    "id": 298,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.3",
    "assunto": "Comunicação do status",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual comunicação de status é mais adequada?",
    "correta": "“80% dos testes executados, 6 defeitos abertos, 1 crítico bloqueando liberação e risco alto em pagamento”.",
    "erradas": [
      "“está tudo mais ou menos bom”.",
      "“acho que sim, mas não medi nada”.",
      "“não há problemas”, omitindo defeitos críticos."
    ],
    "explicacao": "Boa comunicação de status é objetiva, baseada em evidências, riscos, progresso e impacto."
  },
  {
    "id": 299,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.3",
    "assunto": "Comunicação do status",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual comunicação de status é mais adequada?",
    "correta": "“80% dos testes executados, 6 defeitos abertos, 1 crítico bloqueando liberação e risco alto em pagamento”.",
    "erradas": [
      "“está tudo mais ou menos bom”.",
      "“acho que sim, mas não medi nada”.",
      "“não há problemas”, omitindo defeitos críticos."
    ],
    "explicacao": "Boa comunicação de status é objetiva, baseada em evidências, riscos, progresso e impacto."
  },
  {
    "id": 300,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.3.3",
    "assunto": "Comunicação do status",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual comunicação de status é mais adequada?",
    "correta": "“80% dos testes executados, 6 defeitos abertos, 1 crítico bloqueando liberação e risco alto em pagamento”.",
    "erradas": [
      "“está tudo mais ou menos bom”.",
      "“acho que sim, mas não medi nada”.",
      "“não há problemas”, omitindo defeitos críticos."
    ],
    "explicacao": "Boa comunicação de status é objetiva, baseada em evidências, riscos, progresso e impacto."
  },
  {
    "id": 301,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.4.1",
    "assunto": "Gerenciamento de configuração",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, como o gerenciamento de configuração apoia os testes?",
    "correta": "controlando versões de testware, builds, ambientes e itens usados nos testes.",
    "erradas": [
      "permitindo alterar resultados sem rastreio.",
      "substituindo completamente o gerenciamento de defeitos.",
      "impedindo que dados de teste sejam identificados."
    ],
    "explicacao": "CM garante identificação, controle de versões, rastreabilidade e reprodutibilidade dos testes."
  },
  {
    "id": 302,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.4.1",
    "assunto": "Gerenciamento de configuração",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, como o gerenciamento de configuração apoia os testes?",
    "correta": "controlando versões de testware, builds, ambientes e itens usados nos testes.",
    "erradas": [
      "permitindo alterar resultados sem rastreio.",
      "substituindo completamente o gerenciamento de defeitos.",
      "impedindo que dados de teste sejam identificados."
    ],
    "explicacao": "CM garante identificação, controle de versões, rastreabilidade e reprodutibilidade dos testes."
  },
  {
    "id": 303,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.4.1",
    "assunto": "Gerenciamento de configuração",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, como o gerenciamento de configuração apoia os testes?",
    "correta": "controlando versões de testware, builds, ambientes e itens usados nos testes.",
    "erradas": [
      "permitindo alterar resultados sem rastreio.",
      "substituindo completamente o gerenciamento de defeitos.",
      "impedindo que dados de teste sejam identificados."
    ],
    "explicacao": "CM garante identificação, controle de versões, rastreabilidade e reprodutibilidade dos testes."
  },
  {
    "id": 304,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.4.1",
    "assunto": "Gerenciamento de configuração",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, como o gerenciamento de configuração apoia os testes?",
    "correta": "controlando versões de testware, builds, ambientes e itens usados nos testes.",
    "erradas": [
      "permitindo alterar resultados sem rastreio.",
      "substituindo completamente o gerenciamento de defeitos.",
      "impedindo que dados de teste sejam identificados."
    ],
    "explicacao": "CM garante identificação, controle de versões, rastreabilidade e reprodutibilidade dos testes."
  },
  {
    "id": 305,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.4.1",
    "assunto": "Gerenciamento de configuração",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, como o gerenciamento de configuração apoia os testes?",
    "correta": "controlando versões de testware, builds, ambientes e itens usados nos testes.",
    "erradas": [
      "permitindo alterar resultados sem rastreio.",
      "substituindo completamente o gerenciamento de defeitos.",
      "impedindo que dados de teste sejam identificados."
    ],
    "explicacao": "CM garante identificação, controle de versões, rastreabilidade e reprodutibilidade dos testes."
  },
  {
    "id": 306,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.5.1",
    "assunto": "Relatório de defeitos",
    "nivel": "K3",
    "enunciado": "Qual informação é essencial em um bom relatório de defeito?",
    "correta": "passos para reproduzir, resultado esperado, resultado obtido, ambiente e evidências.",
    "erradas": [
      "opiniões ofensivas sobre o desenvolvedor.",
      "apenas “não funciona” sem contexto.",
      "senha pessoal do testador."
    ],
    "explicacao": "Um relatório de defeito deve permitir entendimento, triagem, reprodução e correção."
  },
  {
    "id": 307,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.5.1",
    "assunto": "Relatório de defeitos",
    "nivel": "K3",
    "enunciado": "Um defeito ocorre somente no navegador X, versão Y. O que deve ser registrado?",
    "correta": "ambiente de teste, incluindo navegador e versão.",
    "erradas": [
      "apenas o nome do testador.",
      "somente o horário do almoço.",
      "nada, pois ambiente não importa."
    ],
    "explicacao": "Ambiente pode ser decisivo para reproduzir e investigar o defeito."
  },
  {
    "id": 308,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.5.1",
    "assunto": "Relatório de defeitos",
    "nivel": "K3",
    "enunciado": "O sistema mostra total R$ 90 quando o esperado é R$ 100. Qual descrição é melhor?",
    "correta": "informar dados usados, passos, total esperado R$ 100 e total obtido R$ 90.",
    "erradas": [
      "dizer apenas “cálculo errado”.",
      "registrar “sistema horrível”.",
      "não informar valores para evitar detalhe."
    ],
    "explicacao": "Defeitos devem ser claros, objetivos e verificáveis."
  },
  {
    "id": 309,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.5.1",
    "assunto": "Relatório de defeitos",
    "nivel": "K3",
    "enunciado": "Qual campo diferencia impacto técnico/negócio da urgência de correção?",
    "correta": "severidade e prioridade.",
    "erradas": [
      "cor e fonte.",
      "autor e revisor somente.",
      "linha e coluna do relatório."
    ],
    "explicacao": "Severidade indica impacto; prioridade indica urgência ou ordem de correção."
  },
  {
    "id": 310,
    "capitulo": 5,
    "capituloNome": "Gerenciamento das Atividades de Teste",
    "lo": "FL-5.5.1",
    "assunto": "Relatório de defeitos",
    "nivel": "K3",
    "enunciado": "Qual atitude melhora a qualidade de um relatório de defeito?",
    "correta": "anexar evidências e escrever em tom colaborativo, com dados reproduzíveis.",
    "erradas": [
      "culpar pessoas pelo erro.",
      "esconder detalhes para economizar tempo.",
      "alterar o resultado esperado para passar."
    ],
    "explicacao": "Relatórios eficazes ajudam a resolver problemas e mantêm o foco no produto, não em culpados."
  },
  {
    "id": 311,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.1.1",
    "assunto": "Suporte de ferramentas",
    "nivel": "K2",
    "enunciado": "Em um projeto de aplicativo bancário, qual associação entre ferramenta e suporte ao teste está correta?",
    "correta": "ferramentas de gestão ajudam a controlar casos, execução, defeitos, rastreabilidade e relatórios.",
    "erradas": [
      "ferramentas de análise estática executam testes de usabilidade com usuários reais.",
      "ferramentas de cobertura servem para contratar equipe.",
      "ferramentas de defeito substituem correção no código."
    ],
    "explicacao": "Diferentes ferramentas apoiam diferentes atividades: gestão, análise estática, execução, cobertura, defeitos, CI/CD, desempenho e relatórios."
  },
  {
    "id": 312,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.1.1",
    "assunto": "Suporte de ferramentas",
    "nivel": "K2",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual associação entre ferramenta e suporte ao teste está correta?",
    "correta": "ferramentas de gestão ajudam a controlar casos, execução, defeitos, rastreabilidade e relatórios.",
    "erradas": [
      "ferramentas de análise estática executam testes de usabilidade com usuários reais.",
      "ferramentas de cobertura servem para contratar equipe.",
      "ferramentas de defeito substituem correção no código."
    ],
    "explicacao": "Diferentes ferramentas apoiam diferentes atividades: gestão, análise estática, execução, cobertura, defeitos, CI/CD, desempenho e relatórios."
  },
  {
    "id": 313,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.1.1",
    "assunto": "Suporte de ferramentas",
    "nivel": "K2",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual associação entre ferramenta e suporte ao teste está correta?",
    "correta": "ferramentas de gestão ajudam a controlar casos, execução, defeitos, rastreabilidade e relatórios.",
    "erradas": [
      "ferramentas de análise estática executam testes de usabilidade com usuários reais.",
      "ferramentas de cobertura servem para contratar equipe.",
      "ferramentas de defeito substituem correção no código."
    ],
    "explicacao": "Diferentes ferramentas apoiam diferentes atividades: gestão, análise estática, execução, cobertura, defeitos, CI/CD, desempenho e relatórios."
  },
  {
    "id": 314,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.1.1",
    "assunto": "Suporte de ferramentas",
    "nivel": "K2",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual associação entre ferramenta e suporte ao teste está correta?",
    "correta": "ferramentas de gestão ajudam a controlar casos, execução, defeitos, rastreabilidade e relatórios.",
    "erradas": [
      "ferramentas de análise estática executam testes de usabilidade com usuários reais.",
      "ferramentas de cobertura servem para contratar equipe.",
      "ferramentas de defeito substituem correção no código."
    ],
    "explicacao": "Diferentes ferramentas apoiam diferentes atividades: gestão, análise estática, execução, cobertura, defeitos, CI/CD, desempenho e relatórios."
  },
  {
    "id": 315,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.1.1",
    "assunto": "Suporte de ferramentas",
    "nivel": "K2",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual associação entre ferramenta e suporte ao teste está correta?",
    "correta": "ferramentas de gestão ajudam a controlar casos, execução, defeitos, rastreabilidade e relatórios.",
    "erradas": [
      "ferramentas de análise estática executam testes de usabilidade com usuários reais.",
      "ferramentas de cobertura servem para contratar equipe.",
      "ferramentas de defeito substituem correção no código."
    ],
    "explicacao": "Diferentes ferramentas apoiam diferentes atividades: gestão, análise estática, execução, cobertura, defeitos, CI/CD, desempenho e relatórios."
  },
  {
    "id": 316,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.2.1",
    "assunto": "Benefícios e riscos da automação",
    "nivel": "K1",
    "enunciado": "Em um projeto de aplicativo bancário, qual opção apresenta benefício e risco da automação de testes?",
    "correta": "benefício: execução rápida e repetível; risco: manutenção alta e falsos resultados se mal implementada.",
    "erradas": [
      "benefício: elimina todos os defeitos; risco: nenhum.",
      "benefício: dispensa estratégia; risco: melhora sempre sem custo.",
      "benefício: corrige código automaticamente; risco: não exige dados."
    ],
    "explicacao": "Automação pode acelerar feedback e reduzir repetição manual, mas exige estratégia, manutenção, dados confiáveis e ambientes estáveis."
  },
  {
    "id": 317,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.2.1",
    "assunto": "Benefícios e riscos da automação",
    "nivel": "K1",
    "enunciado": "Durante a evolução de um sistema de matrículas, qual opção apresenta benefício e risco da automação de testes?",
    "correta": "benefício: execução rápida e repetível; risco: manutenção alta e falsos resultados se mal implementada.",
    "erradas": [
      "benefício: elimina todos os defeitos; risco: nenhum.",
      "benefício: dispensa estratégia; risco: melhora sempre sem custo.",
      "benefício: corrige código automaticamente; risco: não exige dados."
    ],
    "explicacao": "Automação pode acelerar feedback e reduzir repetição manual, mas exige estratégia, manutenção, dados confiáveis e ambientes estáveis."
  },
  {
    "id": 318,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.2.1",
    "assunto": "Benefícios e riscos da automação",
    "nivel": "K1",
    "enunciado": "Em uma equipe ágil responsável por um e-commerce, qual opção apresenta benefício e risco da automação de testes?",
    "correta": "benefício: execução rápida e repetível; risco: manutenção alta e falsos resultados se mal implementada.",
    "erradas": [
      "benefício: elimina todos os defeitos; risco: nenhum.",
      "benefício: dispensa estratégia; risco: melhora sempre sem custo.",
      "benefício: corrige código automaticamente; risco: não exige dados."
    ],
    "explicacao": "Automação pode acelerar feedback e reduzir repetição manual, mas exige estratégia, manutenção, dados confiáveis e ambientes estáveis."
  },
  {
    "id": 319,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.2.1",
    "assunto": "Benefícios e riscos da automação",
    "nivel": "K1",
    "enunciado": "No desenvolvimento de um portal de serviços públicos, qual opção apresenta benefício e risco da automação de testes?",
    "correta": "benefício: execução rápida e repetível; risco: manutenção alta e falsos resultados se mal implementada.",
    "erradas": [
      "benefício: elimina todos os defeitos; risco: nenhum.",
      "benefício: dispensa estratégia; risco: melhora sempre sem custo.",
      "benefício: corrige código automaticamente; risco: não exige dados."
    ],
    "explicacao": "Automação pode acelerar feedback e reduzir repetição manual, mas exige estratégia, manutenção, dados confiáveis e ambientes estáveis."
  },
  {
    "id": 320,
    "capitulo": 6,
    "capituloNome": "Ferramentas de Teste",
    "lo": "FL-6.2.1",
    "assunto": "Benefícios e riscos da automação",
    "nivel": "K1",
    "enunciado": "Em uma manutenção de um sistema de folha de pagamento, qual opção apresenta benefício e risco da automação de testes?",
    "correta": "benefício: execução rápida e repetível; risco: manutenção alta e falsos resultados se mal implementada.",
    "erradas": [
      "benefício: elimina todos os defeitos; risco: nenhum.",
      "benefício: dispensa estratégia; risco: melhora sempre sem custo.",
      "benefício: corrige código automaticamente; risco: não exige dados."
    ],
    "explicacao": "Automação pode acelerar feedback e reduzir repetição manual, mas exige estratégia, manutenção, dados confiáveis e ambientes estáveis."
  }
];

const estado = {
  questoes: [],
  indice: 0,
  pontuacao: 0,
  acertos: 0,
  erros: 0,
  travada: false,
  respostas: [],
  estatisticas: {},
  timerFeedback: null
};

const telaInicial = document.getElementById("telaInicial");
const telaQuiz = document.getElementById("telaQuiz");
const telaResultado = document.getElementById("telaResultado");
const totalBanco = document.getElementById("totalBanco");
const btnIniciar = document.getElementById("btnIniciar");
const btnTodos = document.getElementById("btnTodos");
const btnProxima = document.getElementById("btnProxima");
const btnReiniciar = document.getElementById("btnReiniciar");
const modoQuiz = document.getElementById("modoQuiz");
const capituloAtual = document.getElementById("capituloAtual");
const loAtual = document.getElementById("loAtual");
const nivelAtual = document.getElementById("nivelAtual");
const pontuacaoEl = document.getElementById("pontuacao");
const acertosEl = document.getElementById("acertos");
const errosEl = document.getElementById("erros");
const barraProgresso = document.getElementById("barraProgresso");
const contador = document.getElementById("contador");
const enunciado = document.getElementById("enunciado");
const alternativasEl = document.getElementById("alternativas");
const resultadoGeral = document.getElementById("resultadoGeral");
const resumoCapitulos = document.getElementById("resumoCapitulos");
const listaErros = document.getElementById("listaErros");
const overlayFeedback = document.getElementById("overlayFeedback");
const janelaFeedback = document.getElementById("janelaFeedback");
const seloFeedback = document.getElementById("seloFeedback");
const tituloFeedback = document.getElementById("tituloFeedback");
const textoFeedback = document.getElementById("textoFeedback");
const respostaCorretaTexto = document.getElementById("respostaCorretaTexto");
const btnContinuarFeedback = document.getElementById("btnContinuarFeedback");

totalBanco.textContent = bancoCompleto.length;
btnIniciar.addEventListener("click", iniciarQuiz);
btnProxima.addEventListener("click", proximaQuestao);
btnReiniciar.addEventListener("click", () => location.reload());
btnContinuarFeedback.addEventListener("click", continuarFeedback);
btnTodos.addEventListener("click", alternarTodos);

window.addEventListener("popstate", () => {
  if (!telaQuiz.classList.contains("escondido")) {
    history.pushState(null, "", location.href);
    alert("Durante o quiz, não é possível voltar para questões anteriores.");
  }
});

function bloquearVoltarNavegador() { history.pushState(null, "", location.href); }

function alternarTodos() {
  const boxes = [...document.querySelectorAll(".filtro-capitulo")];
  const todosMarcados = boxes.every(b => b.checked);
  boxes.forEach(b => b.checked = !todosMarcados);
}

function iniciarQuiz() {
  const capitulosMarcados = [...document.querySelectorAll(".filtro-capitulo:checked")].map(item => Number(item.value));
  if (capitulosMarcados.length === 0) { alert("Selecione pelo menos um capítulo para iniciar o quiz."); return; }

  estado.questoes = selecionarQuestoes(capitulosMarcados);
  if (estado.questoes.length === 0) { alert("Não há questões disponíveis para os capítulos selecionados."); return; }

  estado.indice = 0; estado.pontuacao = 0; estado.acertos = 0; estado.erros = 0; estado.travada = false; estado.respostas = []; estado.estatisticas = {};
  estado.questoes.forEach(q => {
    if (!estado.estatisticas[q.capitulo]) estado.estatisticas[q.capitulo] = { nome: `${q.capitulo}. ${q.capituloNome}`, total: 0, acertos: 0, erros: 0 };
    estado.estatisticas[q.capitulo].total++;
  });

  telaInicial.classList.add("escondido"); telaResultado.classList.add("escondido"); telaQuiz.classList.remove("escondido");
  bloquearVoltarNavegador(); atualizarPlacar(); renderizarQuestao();
}

function selecionarQuestoes(capitulosMarcados) {
  const filtradas = bancoCompleto.filter(q => capitulosMarcados.includes(q.capitulo));
  const modo = modoQuiz.value;
  if (modo === "simulado40" && capitulosMarcados.length === 6) {
    return Object.entries(distribuicaoSimulado).flatMap(([capitulo, qtd]) => embaralhar(filtradas.filter(q => q.capitulo === Number(capitulo))).slice(0, qtd));
  }
  if (modo === "simulado40") return selecionarBalanceado(filtradas, capitulosMarcados, 40);
  const qtd = Number(modo);
  return embaralhar(filtradas).slice(0, Math.min(qtd, filtradas.length));
}

function selecionarBalanceado(filtradas, capitulosMarcados, quantidadeDesejada) {
  const resultado = [];
  const porCapitulo = new Map();
  capitulosMarcados.forEach(cap => porCapitulo.set(cap, embaralhar(filtradas.filter(q => q.capitulo === cap))));
  while (resultado.length < quantidadeDesejada) {
    let adicionou = false;
    for (const cap of capitulosMarcados) {
      const lista = porCapitulo.get(cap);
      if (lista && lista.length && resultado.length < quantidadeDesejada) { resultado.push(lista.shift()); adicionou = true; }
    }
    if (!adicionou) break;
  }
  return embaralhar(resultado);
}

function renderizarQuestao() {
  const questao = estado.questoes[estado.indice];
  estado.travada = false; btnProxima.disabled = true; btnProxima.textContent = "Próxima questão"; overlayFeedback.classList.add("escondido");
  capituloAtual.textContent = `${questao.capitulo}. ${questao.capituloNome}`;
  loAtual.textContent = questao.lo;
  nivelAtual.textContent = questao.nivel;
  contador.textContent = `Questão ${estado.indice + 1} de ${estado.questoes.length}`;
  barraProgresso.style.width = `${(estado.indice / estado.questoes.length) * 100}%`;
  enunciado.textContent = questao.enunciado;
  alternativasEl.innerHTML = "";
  montarAlternativas(questao).forEach((alternativa, indice) => {
    const botao = document.createElement("button");
    botao.className = "alternativa"; botao.type = "button";
    botao.innerHTML = `<span class="letra">${letras[indice]}</span><span>${alternativa.texto}</span>`;
    botao.addEventListener("click", () => responder(alternativa, botao));
    alternativasEl.appendChild(botao);
  });
}

function montarAlternativas(questao) {
  if (questao.alternativas) return questao.alternativas;
  questao.alternativas = embaralhar([ { texto: questao.correta, correta: true }, ...questao.erradas.map(texto => ({ texto, correta: false })) ]);
  return questao.alternativas;
}

function responder(alternativaEscolhida, botaoEscolhido) {
  if (estado.travada) return;
  const questao = estado.questoes[estado.indice];
  const acertou = alternativaEscolhida.correta;
  estado.travada = true;
  [...document.querySelectorAll(".alternativa")].forEach((botao, indice) => { botao.disabled = true; if (questao.alternativas[indice].correta) botao.classList.add("correta"); });
  if (acertou) { estado.acertos++; estado.pontuacao++; estado.estatisticas[questao.capitulo].acertos++; botaoEscolhido.classList.add("correta"); abrirFeedback(true, questao); }
  else { estado.erros++; estado.estatisticas[questao.capitulo].erros++; botaoEscolhido.classList.add("errada"); abrirFeedback(false, questao); }
  estado.respostas.push({ id: questao.id, capitulo: `${questao.capitulo}. ${questao.capituloNome}`, lo: questao.lo, assunto: questao.assunto, enunciado: questao.enunciado, escolha: alternativaEscolhida.texto, correta: questao.correta, acertou, explicacao: questao.explicacao });
  atualizarPlacar();
}

function abrirFeedback(acertou, questao) {
  clearInterval(estado.timerFeedback);
  janelaFeedback.className = acertou ? "janela-feedback ok" : "janela-feedback erro";
  seloFeedback.textContent = acertou ? "Resposta correta" : "Resposta incorreta";
  tituloFeedback.textContent = acertou ? "Muito bem!" : "Revise este ponto";
  textoFeedback.textContent = questao.explicacao;
  respostaCorretaTexto.textContent = questao.correta;
  btnContinuarFeedback.textContent = estado.indice === estado.questoes.length - 1 ? "Finalizar quiz" : "Continuar para a próxima questão";
  overlayFeedback.classList.remove("escondido");
}

function continuarFeedback() {
  overlayFeedback.classList.add("escondido");
  btnProxima.disabled = false;
  btnProxima.textContent = estado.indice === estado.questoes.length - 1 ? "Finalizar quiz" : "Próxima questão";
  proximaQuestao();
}

function proximaQuestao() { if (btnProxima.disabled) return; if (estado.indice >= estado.questoes.length - 1) { mostrarResultado(); return; } estado.indice++; renderizarQuestao(); }

function mostrarResultado() {
  clearInterval(estado.timerFeedback); telaQuiz.classList.add("escondido"); telaResultado.classList.remove("escondido"); barraProgresso.style.width = "100%";
  const totalRespondidas = estado.acertos + estado.erros;
  const percentual = totalRespondidas ? Math.round((estado.acertos / totalRespondidas) * 100) : 0;
  const aprovado = totalRespondidas === 40 && estado.acertos >= 26;
  resultadoGeral.innerHTML = `<div class="box"><strong>${estado.pontuacao}</strong><span>pontos</span></div><div class="box"><strong>${estado.acertos}</strong><span>acertos</span></div><div class="box"><strong>${estado.erros}</strong><span>erros</span></div><div class="box"><strong>${percentual}%</strong><span>${totalRespondidas === 40 ? (aprovado ? "aprovado no simulado" : "abaixo da aprovação") : "aproveitamento"}</span></div>`;
  const linhas = Object.values(estado.estatisticas).map(d => { const ap = d.total ? Math.round((d.acertos / d.total) * 100) : 0; return `<tr><td>${d.nome}</td><td>${d.total}</td><td>${d.acertos}</td><td>${d.erros}</td><td>${ap}%</td></tr>`; }).join("");
  resumoCapitulos.innerHTML = `<h2>Resumo por capítulo</h2><table><thead><tr><th>Capítulo</th><th>Questões</th><th>Acertos</th><th>Erros</th><th>Aproveitamento</th></tr></thead><tbody>${linhas}</tbody></table>`;
  const erros = estado.respostas.filter(item => !item.acertou);
  if (erros.length === 0) { listaErros.innerHTML = `<h2>Questões para revisar</h2><p>Excelente! Você não errou nenhuma questão nesta rodada.</p>`; return; }
  listaErros.innerHTML = `<h2>Questões para revisar</h2>${erros.map((item, i) => `<div class="erro-item"><small>${item.lo}</small><h3>${i + 1}. ${item.capitulo} — ${item.assunto}</h3><p><strong>Questão:</strong> ${item.enunciado}</p><p><strong>Sua resposta:</strong> ${item.escolha}</p><p><strong>Resposta correta:</strong> ${item.correta}</p><p><strong>Explicação:</strong> ${item.explicacao}</p></div>`).join("")}`;
}

function atualizarPlacar() { pontuacaoEl.textContent = estado.pontuacao; acertosEl.textContent = estado.acertos; errosEl.textContent = estado.erros; }
function embaralhar(lista) { const copia = [...lista]; for (let i = copia.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copia[i], copia[j]] = [copia[j], copia[i]]; } return copia; }

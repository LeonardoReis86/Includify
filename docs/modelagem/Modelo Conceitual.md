# Modelagem de Dados - Includify

## Modelo Conceitual

### Diagrama de Entidade-Relacionamento (DER)
*(Insira aqui o diagrama de entidades e relacionamentos que representa visualmente as entidades e relacionamentos descritos abaixo)*

### Descrição das Entidades e Relacionamentos

- **Usuário**: Representa todos os usuários da plataforma. Pode atuar como *Empreendedor* (oferecendo serviços) ou *Comprador* (contratando serviços).
  - **Relacionamentos**:
    - Um *Usuário* pode ter um ou mais *Endereços*.
    - Um *Usuário* pode ser um *Empreendedor* ou um *Comprador*.

- **Empreendedor**: Um *Usuário* que oferece *Serviços* na plataforma.
  - **Relacionamentos**:
    - Um *Empreendedor* pode oferecer vários *Serviços*.

- **Comprador**: Um *Usuário* que contrata *Serviços* oferecidos por *Empreendedores*.
  - **Relacionamentos**:
    - Um *Comprador* pode realizar várias *Contratações* de serviços.

- **Serviço**: Representa uma oferta de serviço feita por um *Empreendedor*.
  - **Relacionamentos**:
    - Um *Serviço* é oferecido por um único *Empreendedor*.
    - Um *Serviço* pode ser contratado várias vezes por diferentes *Compradores* através de *Contratações*.

- **Contratação**: Registro de um *Serviço* contratado por um *Comprador*.
  - **Relacionamentos**:
    - Cada *Contratação* está associada a um *Serviço* específico e a um *Comprador*.
    - Uma *Contratação* pode ter um ou mais *Pagamentos*.

- **Pagamento**: Representa um pagamento feito por uma *Contratação*.
  - **Relacionamentos**:
    - Cada *Pagamento* está associado a uma única *Contratação*.

- **Endereço**: Armazena o(s) endereço(s) de um *Usuário*.
  - **Relacionamentos**:
    - Cada *Endereço* pertence a um único *Usuário*, mas um *Usuário* pode ter vários *Endereços*.

### Principais Fluxos e Regras de Negócio

1. **Criação de Serviços**: Um *Empreendedor* pode criar e listar *Serviços* para que *Compradores* possam contratá-los.
2. **Processo de Contratação**: Um *Comprador* escolhe um *Serviço* e cria um registro de *Contratação*.
3. **Pagamentos**: Cada *Contratação* pode ter um ou mais registros de *Pagamento*, representando as transações realizadas entre o *Comprador* e o *Empreendedor*.

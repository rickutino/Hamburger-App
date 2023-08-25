# Sistema de Gerenciamento de Pedidos para Restaurantes

## Descrição do Projeto

O sistema tem como objetivo permitir que os clientes visualizem o cardápio, obtenham informações relevantes sobre o restaurante e enviem pedidos diretamente de suas mesas usando um código QR exclusivo.

## Funcionalidades Principais

- **Visualização do Cardápio:** [ ] Os clientes podem visualizar o cardápio do restaurante com uma variedade de pelo menos 20 produtos distintos.

- **Envio de Pedidos:** [ ] Os clientes podem enviar seus pedidos pelo sistema após escanear o código QR em sua mesa.

- **Priorização de Pedidos:** [ ] Os pedidos são processados com base na ordem de chegada, garantindo uma experiência justa para todos os clientes.

- **Página da Cozinha:** [ ] A equipe da cozinha tem acesso a uma página dedicada onde podem visualizar os pedidos recebidos e todas as informações relevantes, incluindo produtos solicitados, quantidades e número da mesa.

- **Cancelamento de Pedidos:** [ ] Os atendentes têm a capacidade de cancelar pedidos a pedido dos clientes.

## Regras de Negócio

- **Cancelamento de Pedidos:** [ ] Os pedidos podem ser cancelados pelos atendentes conforme solicitado pelos clientes, garantindo a flexibilidade no atendimento.

## Requisitos Não Funcionais

- **Armazenamento de Dados:** [ ] Os dados podem ser armazenados em um banco de dados seguro ou utilizando Local Storage, dependendo da preferência e dos requisitos de segurança.

- **Responsividade:** [ ] As páginas desenvolvidas serão responsivas para proporcionar uma experiência otimizada em diferentes dispositivos, garantindo que os clientes possam usar seus smartphones ou outros dispositivos para fazer pedidos.

- **Cardápio:** [ ] O sistema incluirá pelo menos 20 produtos distintos no cardápio, proporcionando uma variedade de escolhas aos clientes.

## Segurança

Para garantir a segurança e integridade do sistema, implementaremos as seguintes medidas:

- **Autenticação Única:** [ ] Cada pedido gerará um token de acesso único vinculado à mesa e ao pedido do cliente. Esse token ficará indisponível após o pagamento.

- **Validação de Token:** [ ] Um middleware verificará a validade do token sempre que um cliente abrir a aba e ao fazer um pedido, garantindo que apenas pedidos válidos sejam aceitos.

- **Registro de Pedidos:** [ ] O sistema manterá um registro de todos os pedidos com tokens diferentes na mesma mesa e notificará a equipe de atendimento caso haja discrepâncias.

- **Criptografia:** [ ] Todos os dados sensíveis, como informações do cliente e pedidos, serão armazenados e transmitidos de forma segura por meio de criptografia.

Este sistema proporcionará aos clientes uma experiência de pedido conveniente e segura, enquanto garante que o restaurante possa gerenciar os pedidos de forma eficaz.
# Sistema de Gerenciamento de Pedidos para Restaurantes

## Descrição do Projeto

O sistema consiste em permitir que os clientes visualizem o cardápio,
outras informações relevantes sobre o restaurante e enviem seus pedidos.
Ao chegarem ao restaurante, os clientes encontrarão um QRCode em suas mesas,
o qual poderão escanear com seus smartphones para acessar o sistema.
O cardápio deve apresentar pelo menos 20 produtos distintos.

Quando um cliente realiza um pedido, este é adicionado a uma comanda e 
encaminhado para a cozinha em uma fila. 
A prioridade de preparação é dada aos pedidos mais antigos,
garantindo que os pedidos sejam tratados pela ordem de chegada. 

O sistema também inclui uma página destinada à equipe da cozinha.
Nesta página, os pedidos são exibidos juntamente com todas as informações 
necessárias, como o produto solicitado, a quantidade e o número da mesa. 
Esta área é considerada a parte administrativa do restaurante,
onde novos administradores podem ser adicionados. 
Um único usuário é designado para a equipe da cozinha, 
dando-lhe acesso exclusivo à lista de pedidos.

Além disso, os atendentes têm a capacidade de cancelar pedidos a pedido dos clientes.

## Requisitos Funcionais (RFs)

- [ ] Visualização do Cardápio: Os clientes devem poder visualizar o cardápio do restaurante.
- [ ] Envio de Pedidos: Os clientes podem enviar seus pedidos por meio do sistema.
- [ ] Priorização de Pedidos: Os pedidos são processados com base na ordem de chegada.
- [ ] Página da Cozinha: A equipe da cozinha deve ter acesso a uma página para visualizar os pedidos.
- [ ] Cancelamento de Pedidos: Os atendentes têm a capacidade de cancelar pedidos a pedido dos clientes.

## Regras de Negócio (RNs)

- [ ] Cancelamento de Pedidos: Os pedidos podem ser cancelados pelos atendentes conforme solicitado pelos clientes.

## Requisitos Não Funcionais (RNFs)

- [ ] Armazenamento de Dados: Os dados podem ser armazenados em um banco de dados ou utilizando Local Storage.
- [ ] Responsividade: As páginas desenvolvidas devem ser responsivas para proporcionar uma experiência otimizada em diferentes dispositivos.
- [ ] Cardápio: Fazer o cadastro e deixar apresentavel pelo menos 20 produtos distintos.

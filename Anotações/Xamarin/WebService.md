### Anotações Xamarin WebServices
(Anotações feitas com base na sessao 13 do curso de Xamarin.)  
[Saiba Mais](README.md)

# Web Services

Surge quando é necessario a utilização de informações externas à aplicação. Como por exemplo banco de dados de outras empresas.

Atualmente ainda não existe drivers ou aplicações externas que permite que nossa aplicação converse diretamente com o servidor de banco de dados. Mas foi criada uma forma de solucionar isso atraves de serviços ou [WebServices](#WebServices).

## O projeto

### WebServices
Usada na comunicação entre aplicações diferentes. Possibilitando interação de novas aplicações com antigas e que sistemas desenvolvidos em plataformas diferentes sejam compativeis.  
[Saiba Mais](README.md).  <br><br>
#### Possui dois tipos mais populares.:  
### [REST](README.md): "Representational State Transfer":  
- Utiliza o protocolo HTTP
- Usa XML ou JSON para envio ou recebimento dos dados.
- É facilmente chamadado via URL.
- Resultado simples para humanos
- Interatividade com JavaScript
- Melhor performance e implementação.  

### [SOAP](README.md): " Simple Object Access Protocol "
- Troca mensagens com XML
- Usa o [WSDL](#WSDL) para comunicação entre o cliente e o servidos
- Invoca serviços por meio de chamadas de métodos com RPC
- Não é legível a humanos
- Pode ser usado em outros protocolos: HTTP, SMTP,  FTP, etc.
- Pode ser chamado por JavaScript mas tem uma implementação difícil.
- A performance não é muito boa comparada ah REST
  


### [WSDL](README.md) ( Web Services Description Language )
É uma descrição em formato XML de um WEB Service, proposto pela W3C visa padronizas as descrições das funcionalidades oferecidas por WebServices de forma independente da plataforma ou linguagem. Possui duas finalidades .: Expor os métodos que determinado serviço deixa disponível e possibilitar a localização de determinado serviço.

## Metodos utilizados

- ### GetAsync
  Enviar uma solicitação GET para uma URL especificada como uma operação assíncrona.
  Exemplo:
  ```CSharp
  HttpResponseMessage resposta = requisicao.PutAsync(URL, param).GetAwaiter().GetResult();
  ```
  Parâmetros: URL que recebera a solicitação
  Retornos: Um objeto de tarefa que representa a operação assíncrona.
  No caso acima retornaria um [HttpResponseMessage](https://docs.microsoft.com/pt-br/dotnet/api/system.net.http.httpresponsemessage?view=netframework-4.8) que nos permite ver o [Status](https://docs.microsoft.com/pt-br/dotnet/api/system.net.http.httpresponsemessage.statuscode?view=netframework-4.8#System_Net_Http_HttpResponseMessage_StatusCode) da solicitação, usando 
  ```CSharp
  resposta.StatusCode
  ```
  [Saiba Mais](README.md)


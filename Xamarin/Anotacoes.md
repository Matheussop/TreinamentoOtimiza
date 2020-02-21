# Xamarin

Uma linguagem de programção para criar uma unica aplicação que executara em 3 dispositivos diferentes.(apple,android,windows).

Trazendo a possibilidade de construir uma aplicação com menos codigo e com mais compartilhamento de codigo.

### Possui dua abordagens, na hora de construir uma aplicação

- UI Nativa: Usando a linguagem c# e a plataforma xamarin sem o uso do xamrin form. Tratando toda a construção com c# e xamrin deixando a parte visual separada sendo necessário desenvolver 3 history board para a aplicação.
- UI Xamarin Forms : controle visual das 3 plataformas , mas não podendo diferenciar muito as aplicações. Dificuldade de utilizar recurso visual de uma plataforma em especifico. Interresante em aplicativos que a funcionalidade é mais interresante do que a parte visual.0

## Shared Project

Comportamento diferenciado na hora da compilação.
Vantagem do projeto acessar as APIs do projeto android(recurso diferenciado)
Desvantagem como é um único código havera uma preucupação que quando estiermos usando as Apis do android ocorrera um error na compilação para IOS

```C#
    #if __ANDROID__
    // codigo que roda só no android
    #endif

    #if__IOS__
    // codigo que roda só no android
    #endif
```

Diretivas usadas para mostrar que uma parte do codigo sera utilizda apenas em um dispositivo especifico.


## .Net Standard

Parecido com o antigo PCL. A compilação do projeto sera feita de maneira separada no android, ios e windowns, gerando uma dll.
O projeto android atraves de uma referencia consegue acessar as classes criadas.




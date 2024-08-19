1) iniciar o git na pasta do projeto.
    Digitar no cmd: git init

2) Abir o VsCode
    a) criar um arquivo
    b) digitar: git add .
    c) digitar: git commit -m "<Sua mensagem>"

3) No github
    a) create 'New repository'
    b) copiar o caminho :
        git remote add origin https://github.com/felipcb/atividade-js.git

4) No cmd, digitar o comando:
    a) git remote add origin https://github.com/felipcb/atividade-js.git
    b) Em seguida, digitar:
        git push -u origin master

        ---------------------------
        Atividade
        1. Calcule o MDC (máximo divisor comum) entre dois números. 
        
        2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor. 
        
        3. Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

        Functions
        1-
        function ola(param){
            return param
        }
        console.log(ola('mundo'));

        2-
        function ola2(param){
            return `Olá ${param}`
        }
        console.log(ola2('mundo!'));

        3- Função anônima
        (
            function (param){
                console.log(param)
            }
        )('Hello World 3') //precisa colocar um atributo já que decidi informar o parâmetro

        4- Função com variável //precisa informar parâmetro, senão retorna a function completa
        var imprimeSaudacao = function(ola){
            return `Hello World Variável`
        }
        console.log(imprimeSaudacao)
        ------------------

        5- Arrow Functions(1)
        let dobro = ()=>{
            return 2
        }

        6- Arrow functions(2)
        var dobro2 = valor=> valor*2

        7- Arrow functions(3)
        let hello = ()=>console.log('Saudacao 4')

        8- Arrow functions(4)
        var hello2=_=>console.log('Saudacao 5')
        ------------------

        9-Deixar pré-parametrizado
        const preParametrizado = (a, b, c) => a+b+c;
        console.log(preParametrizado(1,2,3));

        10-
        const preParametrizado2 = (a=1, b=2, c=3) => a+b+c;
        console.log(preParametrizado2(10)); 
        //já que só informei o "a", ele utiliza os valores parametrizados em "b" e "c".
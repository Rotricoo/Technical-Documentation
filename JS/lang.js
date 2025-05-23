const langData = {
  en: {
    "nav-header": "JS Documentation",
    "nav-intro": "Introduction",
    "nav-already": "What you should already know",
    "nav-jsjava": "JavaScript and Java",
    "nav-hello": "Hello world",
    "nav-var": "Variables",
    "nav-decl": "Declaring Variables",
    "nav-scope": "Variable scope",
    "nav-global": "Global variables",
    "nav-const": "Constants",
    "nav-data": "Data types",
    "nav-if": "if...else statement",
    "nav-while": "while statement",
    "nav-func": "Function declarations",
    "nav-ref": "Reference",
    // Introduction section
    "intro-title": "Introduction",
    "intro-text-1":
      "JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.",
    "intro-text-2":
      "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; <strong>for example:</strong>",
    "intro-li-1":
      "Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.",
    "intro-li-2":
      "Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.",

    // What you should already know
    "already-title": "What you should already know",
    "already-text-1": "This guide assumes you have the following basic background:",
    "already-li-1": "A general understanding of the Internet and the World Wide Web (WWW).",
    "already-li-2": "Good working knowledge of HyperText Markup Language (HTML).",
    "already-li-3":
      "Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.",

    // JavaScript and Java
    "jsjava-title": "JavaScript and Java",
    "jsjava-text-1":
      "JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.",
    "jsjava-text-2":
      "In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.",
    "jsjava-text-3":
      "JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.",

    // Hello world
    "hello-title": "Hello world",
    "hello-text-1":
      'To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:',
    "hello-text-2": "Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!",

    // Variables
    "var-title": "Variables",
    "var-text-1":
      "You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.",
    "var-text-2":
      'A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).',
    "var-text-3":
      "You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name.",

    // Declaring Variables
    "decl-title": "Declaring Variables",
    "decl-text-1": "You can declare a variable in three ways:",
    "decl-text-2": "With the keyword var. <strong>For example:</strong>",
    "decl-text-3": "This syntax can be used to declare both local and global variables.",
    "decl-text-4": "By simply assigning it a value. <strong>For example:</strong>",
    "decl-text-5":
      "This always declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.",
    "decl-text-6": "With the keyword let. <strong>For example:</strong>",
    "decl-text-7": "This syntax can be used to declare a block scope local variable. See Variable scope below.",

    // Variable scope
    "scope-title": "Variable scope",
    "scope-text-1":
      "When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.",
    "scope-text-2":
      "JavaScript before ECMAScript 2015 does not have block statement scope; rather, a variable declared within a block is local to the function (or global scope) that the block resides within. For example the following code will log 5, because the scope of x is the function (or global context) within which x is declared, not the block, which in this case is an if statement.",
    "scope-text-3": "This behavior changes, when using the let declaration introduced in <strong>ECMAScript 2015.</strong>",

    // Global variables
    "global-title": "Global variables",
    "global-text-1":
      "Global variables are in fact properties of the global object. In web pages the global object is window, so you can set and access global variables using the window.variable syntax.",
    "global-text-2":
      "Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber.",

    // Constants
    "const-title": "Constants",
    "const-text-1":
      "You can create a read-only, named constant with the const keyword. The syntax of a constant identifier is the same as for a variable identifier: it must start with a letter, underscore or dollar sign and can contain alphabetic, numeric, or underscore characters.",
    "const-text-2":
      "A constant cannot change value through assignment or be re-declared while the script is running. It has to be initialized to a value.",
    "const-text-3":
      "The scope rules for constants are the same as those for let block scope variables. If the const keyword is omitted, the identifier is assumed to represent a variable.",
    "const-text-4":
      "You cannot declare a constant with the same name as a function or variable in the same scope. <strong>For example:</strong>",
    "const-text-5": "However, object attributes are not protected, so the following statement is executed without problems.",

    // Data types
    "data-title": "Data types",
    "data-text-1": "The latest ECMAScript standard defines seven data types:",
    "data-li-1": "Boolean. true and false.",
    "data-li-2":
      "null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.",
    "data-li-3": "undefined. A top-level property whose value is undefined.",
    "data-li-4": "Number. 42 or 3.14159.",
    "data-li-5": 'String. "Howdy"',
    "data-li-6": "Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.",
    "data-li-7": "and Object",
    "data-text-2":
      "Although these data types are a relatively small amount, they enable you to perform useful functions with your applications. Objects and functions are the other fundamental elements in the language. You can think of objects as named containers for values, and functions as procedures that your application can perform.",

    // if...else statement
    "if-title": "if...else statement",
    "if-text-1":
      "Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false. An if statement looks as follows:",
    "if-text-2":
      "condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.",
    "if-text-3": "You may also compound the statements using else if to have multiple conditions tested in sequence, as follows:",
    "if-text-4":
      "In the case of multiple conditions only the first logical condition which evaluates to true will be executed. To execute multiple statements, group them within a block statement ({ ... }) . In general, it's good practice to always use block statements, especially when nesting if statements:",
    "if-text-5":
      "It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. <strong>For example:</strong>",
    "if-text-6":
      "If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. <strong>For example:</strong>",

    // while statement
    "while-title": "while statement",
    "while-text-1":
      "A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:",
    "while-text-2":
      "If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.",
    "while-text-3":
      "The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops and control is passed to the statement following while.",
    "while-text-4": "To execute multiple statements, use a block statement ({ ... }) to group those statements.",
    "while-text-5": "The following while loop iterates as long as n is less than three:",
    "while-text-6":
      "With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:",
    "while-li-1": "After the first pass: n = 1 and x = 1",
    "while-li-2": "After the second pass: n = 2 and x = 3",
    "while-li-3": "After the third pass: n = 3 and x = 6",
    "while-text-7": "After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.",

    // Function declarations
    "func-title": "Function declarations",
    "func-text-1":
      "A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:",
    "func-li-1": "The name of the function.",
    "func-li-2": "A list of arguments to the function, enclosed in parentheses and separated by commas.",
    "func-li-3": "The JavaScript statements that define the function, enclosed in curly brackets, { }.",
    "func-text-2": "For example, the following code defines a simple function named square:",
    "func-text-3":
      "The function square takes one argument, called number. The function consists of one statement that says to return the argument of the function (that is, number) multiplied by itself. The return statement specifies the value returned by the function.",
    "func-text-4":
      "Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.",

    // Reference
    "ref-title": "Reference",
    "ref-text-1":
      'All the documentation in this page is taken from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">MDN</a>',
  },
  pt: {
    "nav-header": "Documentação JS",
    "nav-intro": "Introdução",
    "nav-already": "O que você já deve saber",
    "nav-jsjava": "JavaScript e Java",
    "nav-hello": "Olá mundo",
    "nav-var": "Variáveis",
    "nav-decl": "Declarando Variáveis",
    "nav-scope": "Escopo de variáveis",
    "nav-global": "Variáveis globais",
    "nav-const": "Constantes",
    "nav-data": "Tipos de dados",
    "nav-if": "if...else",
    "nav-while": "while",
    "nav-func": "Declaração de função",
    "nav-ref": "Referência",
    // Introdução
    "intro-title": "Introdução",
    "intro-text-1":
      "JavaScript é uma linguagem de script orientada a objetos e multiplataforma. É uma linguagem pequena e leve. Em um ambiente hospedeiro (por exemplo, um navegador web), o JavaScript pode ser conectado aos objetos desse ambiente para fornecer controle programático sobre eles.",
    "intro-text-2":
      "JavaScript contém uma biblioteca padrão de objetos como Array, Date e Math, e um conjunto principal de elementos como operadores, estruturas de controle e instruções. O JavaScript pode ser estendido para diversos propósitos suplementando-o com objetos adicionais; <strong>por exemplo:</strong>",
    "intro-li-1":
      "O JavaScript do lado do cliente estende a linguagem principal fornecendo objetos para controlar um navegador e seu Modelo de Objeto de Documento (DOM). Por exemplo, extensões do lado do cliente permitem que um aplicativo coloque elementos em um formulário HTML e responda a eventos do usuário, como cliques do mouse, entrada em formulários e navegação na página.",
    "intro-li-2":
      "O JavaScript do lado do servidor estende a linguagem principal fornecendo objetos relevantes para executar JavaScript em um servidor. Por exemplo, extensões do lado do servidor permitem que um aplicativo se comunique com um banco de dados, forneça continuidade de informações de uma execução para outra do aplicativo ou realize manipulações de arquivos em um servidor.",

    // O que você já deve saber
    "already-title": "O que você já deve saber",
    "already-text-1": "Este guia assume que você tem o seguinte conhecimento básico:",
    "already-li-1": "Uma compreensão geral da Internet e da World Wide Web (WWW).",
    "already-li-2": "Bom conhecimento prático de HyperText Markup Language (HTML).",
    "already-li-3":
      "Alguma experiência em programação. Se você é novo em programação, tente um dos tutoriais indicados na página principal sobre JavaScript.",

    // JavaScript e Java
    "jsjava-title": "JavaScript e Java",
    "jsjava-text-1":
      "JavaScript e Java são semelhantes em alguns aspectos, mas fundamentalmente diferentes em outros. A linguagem JavaScript se assemelha ao Java, mas não possui a tipagem estática e a verificação de tipos rigorosa do Java. O JavaScript segue a maior parte da sintaxe de expressões, convenções de nomenclatura e estruturas de controle de fluxo do Java, motivo pelo qual foi renomeado de LiveScript para JavaScript.",
    "jsjava-text-2":
      "Em contraste com o sistema de classes em tempo de compilação do Java, construído por declarações, o JavaScript suporta um sistema em tempo de execução baseado em poucos tipos de dados que representam valores numéricos, booleanos e de string. O JavaScript possui um modelo de objetos baseado em protótipos, em vez do modelo mais comum baseado em classes. O modelo baseado em protótipos fornece herança dinâmica; ou seja, o que é herdado pode variar para objetos individuais. O JavaScript também suporta funções sem requisitos declarativos especiais. Funções podem ser propriedades de objetos, executando como métodos fracamente tipados.",
    "jsjava-text-3":
      "JavaScript é uma linguagem muito flexível em comparação ao Java. Você não precisa declarar todas as variáveis, classes e métodos. Não precisa se preocupar se métodos são públicos, privados ou protegidos, e não precisa implementar interfaces. Variáveis, parâmetros e tipos de retorno de funções não são explicitamente tipados.",

    // Hello world
    "hello-title": "Olá mundo",
    "hello-text-1": 'Para começar a escrever JavaScript, abra o Scratchpad e escreva seu primeiro código JavaScript "Olá mundo":',
    "hello-text-2": "Selecione o código no bloco e pressione Ctrl+R para ver o resultado no seu navegador!",

    // Variáveis
    "var-title": "Variáveis",
    "var-text-1":
      "Você usa variáveis como nomes simbólicos para valores em sua aplicação. Os nomes das variáveis, chamados identificadores, seguem certas regras.",
    "var-text-2":
      'Um identificador JavaScript deve começar com uma letra, sublinhado (_) ou cifrão ($); os caracteres subsequentes também podem ser dígitos (0-9). Como JavaScript diferencia maiúsculas de minúsculas, as letras incluem os caracteres "A" a "Z" (maiúsculas) e "a" a "z" (minúsculas).',
    "var-text-3":
      "Você pode usar letras ISO 8859-1 ou Unicode, como å e ü, em identificadores. Também pode usar sequências de escape Unicode como caracteres em identificadores. Alguns exemplos de nomes legais são Number_hits, temp99 e _name.",

    // Declarando Variáveis
    "decl-title": "Declarando Variáveis",
    "decl-text-1": "Você pode declarar uma variável de três maneiras:",
    "decl-text-2": "Com a palavra-chave var. <strong>Por exemplo:</strong>",
    "decl-text-3": "Essa sintaxe pode ser usada para declarar variáveis locais e globais.",
    "decl-text-4": "Apenas atribuindo um valor. <strong>Por exemplo:</strong>",
    "decl-text-5":
      "Isso sempre declara uma variável global. Gera um aviso estrito do JavaScript. Você não deve usar essa variante.",
    "decl-text-6": "Com a palavra-chave let. <strong>Por exemplo:</strong>",
    "decl-text-7":
      "Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco. Veja Escopo de Variáveis abaixo.",

    // Escopo de Variáveis
    "scope-title": "Escopo de variáveis",
    "scope-text-1":
      "Quando você declara uma variável fora de qualquer função, ela é chamada de variável global, pois está disponível para qualquer outro código no documento atual. Quando você declara uma variável dentro de uma função, ela é chamada de variável local, pois está disponível apenas dentro dessa função.",
    "scope-text-2":
      "O JavaScript antes do ECMAScript 2015 não possui escopo de bloco; uma variável declarada dentro de um bloco é local para a função (ou escopo global) em que o bloco reside. Por exemplo, o código a seguir exibirá 5, pois o escopo de x é a função (ou contexto global) em que x é declarado, não o bloco, que neste caso é uma instrução if.",
    "scope-text-3": "Esse comportamento muda ao usar a declaração let introduzida no <strong>ECMAScript 2015.</strong>",

    // Variáveis globais
    "global-title": "Variáveis globais",
    "global-text-1":
      "Variáveis globais são, na verdade, propriedades do objeto global. Em páginas web, o objeto global é window, então você pode definir e acessar variáveis globais usando a sintaxe window.variavel.",
    "global-text-2":
      "Consequentemente, você pode acessar variáveis globais declaradas em uma janela ou frame a partir de outra janela ou frame especificando o nome da janela ou frame. Por exemplo, se uma variável chamada phoneNumber for declarada em um documento, você pode se referir a essa variável de um iframe como parent.phoneNumber.",

    // Constantes
    "const-title": "Constantes",
    "const-text-1":
      "Você pode criar uma constante nomeada e somente leitura com a palavra-chave const. A sintaxe de um identificador de constante é a mesma de um identificador de variável: deve começar com uma letra, sublinhado ou cifrão e pode conter caracteres alfabéticos, numéricos ou sublinhado.",
    "const-text-2":
      "Uma constante não pode mudar de valor por atribuição ou ser redeclarada enquanto o script estiver em execução. Ela deve ser inicializada com um valor.",
    "const-text-3":
      "As regras de escopo para constantes são as mesmas das variáveis de escopo de bloco let. Se a palavra-chave const for omitida, o identificador será considerado uma variável.",
    "const-text-4":
      "Você não pode declarar uma constante com o mesmo nome de uma função ou variável no mesmo escopo. <strong>Por exemplo:</strong>",
    "const-text-5": "No entanto, atributos de objetos não são protegidos, então a seguinte instrução é executada sem problemas.",

    // Tipos de dados
    "data-title": "Tipos de dados",
    "data-text-1": "O padrão mais recente do ECMAScript define sete tipos de dados:",
    "data-li-1": "Booleano. true e false.",
    "data-li-2":
      "null. Uma palavra-chave especial que denota um valor nulo. Como JavaScript diferencia maiúsculas de minúsculas, null não é o mesmo que Null, NULL ou qualquer outra variante.",
    "data-li-3": "undefined. Uma propriedade de nível superior cujo valor é undefined.",
    "data-li-4": "Number. 42 ou 3.14159.",
    "data-li-5": 'String. "Howdy"',
    "data-li-6": "Symbol (novo no ECMAScript 2015). Um tipo de dado cujas instâncias são únicas e imutáveis.",
    "data-li-7": "e Object",
    "data-text-2":
      "Embora esses tipos de dados sejam relativamente poucos, eles permitem que você execute funções úteis em suas aplicações. Objetos e funções são os outros elementos fundamentais da linguagem. Você pode pensar em objetos como contêineres nomeados para valores e funções como procedimentos que sua aplicação pode executar.",

    // if...else
    "if-title": "if...else",
    "if-text-1":
      "Use a instrução if para executar uma instrução se uma condição lógica for verdadeira. Use o else opcional para executar uma instrução se a condição for falsa. Uma instrução if se parece com isto:",
    "if-text-2":
      "A condição pode ser qualquer expressão que avalie para true ou false. Veja Boolean para uma explicação do que avalia como verdadeiro ou falso. Se a condição for verdadeira, statement_1 é executada; caso contrário, statement_2 é executada. statement_1 e statement_2 podem ser qualquer instrução, incluindo outras instruções if aninhadas.",
    "if-text-3": "Você também pode compor as instruções usando else if para testar várias condições em sequência, assim:",
    "if-text-4":
      "No caso de múltiplas condições, apenas a primeira condição lógica que for verdadeira será executada. Para executar várias instruções, agrupe-as em um bloco ({ ... }). Em geral, é uma boa prática sempre usar blocos, especialmente ao aninhar ifs:",
    "if-text-5":
      "É aconselhável não usar atribuições simples em uma expressão condicional, pois a atribuição pode ser confundida com igualdade ao analisar o código. <strong>Por exemplo:</strong>",
    "if-text-6":
      "Se você precisar usar uma atribuição em uma expressão condicional, uma prática comum é colocar parênteses adicionais ao redor da atribuição. <strong>Por exemplo:</strong>",

    // while
    "while-title": "while",
    "while-text-1":
      "Uma instrução while executa suas instruções enquanto uma condição especificada for verdadeira. Uma instrução while se parece com isto:",
    "while-text-2":
      "Se a condição se tornar falsa, a instrução dentro do loop para de executar e o controle passa para a instrução seguinte ao loop.",
    "while-text-3":
      "O teste da condição ocorre antes da execução da instrução no loop. Se a condição retornar true, a instrução é executada e a condição é testada novamente. Se retornar false, a execução para e o controle passa para a instrução seguinte ao while.",
    "while-text-4": "Para executar várias instruções, use um bloco ({ ... }) para agrupá-las.",
    "while-text-5": "O seguinte loop while itera enquanto n for menor que três:",
    "while-text-6":
      "A cada iteração, o loop incrementa n e adiciona esse valor a x. Portanto, x e n assumem os seguintes valores:",
    "while-li-1": "Após a primeira passagem: n = 1 e x = 1",
    "while-li-2": "Após a segunda passagem: n = 2 e x = 3",
    "while-li-3": "Após a terceira passagem: n = 3 e x = 6",
    "while-text-7": "Após completar a terceira passagem, a condição n < 3 não é mais verdadeira, então o loop termina.",

    // Declaração de função
    "func-title": "Declaração de função",
    "func-text-1":
      "Uma definição de função (também chamada de declaração de função ou instrução de função) consiste na palavra-chave function, seguida de:",
    "func-li-1": "O nome da função.",
    "func-li-2": "Uma lista de argumentos para a função, entre parênteses e separados por vírgulas.",
    "func-li-3": "As instruções JavaScript que definem a função, entre chaves { }.",
    "func-text-2": "Por exemplo, o código a seguir define uma função simples chamada square:",
    "func-text-3":
      "A função square recebe um argumento chamado number. A função consiste em uma instrução que retorna o argumento da função (ou seja, number) multiplicado por ele mesmo. A instrução return especifica o valor retornado pela função.",
    "func-text-4":
      "Parâmetros primitivos (como um número) são passados para funções por valor; o valor é passado para a função, mas se a função alterar o valor do parâmetro, essa alteração não é refletida globalmente ou na função chamadora.",

    // Referência
    "ref-title": "Referência",
    "ref-text-1":
      'Toda a documentação desta página foi retirada da <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide">MDN</a>',
  },
};

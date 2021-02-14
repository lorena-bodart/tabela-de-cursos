# Tabela de Cursos e Carga horária

Resolução do exercício abaixo, aplicado na terceira aula de JavaScript, na Mentoria de Front End.

1. No HTML, crie uma tabela, que haverá três colunas: **Nome do curso**, **Carga Horária**, **Se increver**. Também crie um botão Matricular-se
2. Uma terá os nomes do cursos, um em cada linha da tabela, a carga horária e um checkbox para o usuário selecionar se ele se desejar fazer a inscrição
3. No checkbox, não se esqueça de colocar o *value=a carga horária do respectivo curso* e chamar uma função **adicionaCurso()**
4. No Javacript crie duas variáveis globais: totalHoras e totalCursos. Também crie uma variável para pegar o botão de Matricular-se com querySelector
5. Use o adicionaCurso() para incrementar a carga horária e quantidade e cursos
6. Para você saber se esse checkbox foi checado, use checkbox.checked
7. Para você conseguir pegar esse valor do checkbox, use checkbox.value
8. Quando o usuário clicar no botão Matricular-se, depois dessa tabela, chame uma função no JS, que pegue o total de horas e total de cursos matriculados e mostre a mensagem:

Matriculado com sucesso!
Carga horária total: 00h
Quantidade de cursos: 0

Você também pode fazer um else, que se caso o usuário clicar em matricular-se e não selecionar nenhum curso, apareça a mensagem:

Nenhum curso selecionado!

## Para iniciar, basta abrir o arquivo index.html no navegador.

 
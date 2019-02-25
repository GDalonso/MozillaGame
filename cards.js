// You can add new scenarios, but make sure that there is exactly...
// * 1 teacherCard per scenario
// * 3 playerCards per scenario

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var url = 'http://127.0.0.1:5000/getcards'
var scenarios = JSON.parse(httpGet(url))

// var scenarios = [
  // {teacherCard: {description: '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Parabel-py.svg/220px-Parabel-py.svg.png"</img>', power: 4},
  // playerCards: [{description: 'Parábola Crescente', power: 5},
  //               {description: 'Parábola Decrescente', power: 3},
  //               {description: 'Reta', power: 1}]},
  //
  // {'teacherCard': {'description': '<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Parabel-py.svg/220px-Parabel-py.svg.png"</img>', 'power': 4},
  // 'playerCards': [{'description': 'Parábola Crescente', 'power': 5},
  //               {'description': 'Parábola Decrescente', 'power': 3},
  //               {'description': 'Reta', 'power': 1}]},
  //
  // {"teacherCard": {"description": "batata", "power": 4}, "playerCards": [{"description": "sempre", "power": 5}, {"description": "não obrigado", "power": 3}, {"description": "nunca", "power": 1}]}

  // {teacherCard : {description: '<img src = "http://amsi.org.au/teacher_modules/F7/F7g14.png"</img>', power: 4},
  // playerCards: [{description: 'Parábola Decrescente', power: 5},
  //               {description: 'Parábola Crescente', power: 3},
  //               {description: 'Reta', power: 1}]},
  //
  // {teacherCard: {description: 'Uma Parábola Crescente é definida quando ...', power: 4},
  // playerCards: [{description: 'A > 0', power: 5},
  //               {description: 'A < 0', power: 3},
  //               {description: 'A = 0', power: 1}]},
  //
  // {teacherCard: {description: 'Uma Parábola Decrescente é definida quando ...', power: 4},
  // playerCards: [{description: 'A < 0', power: 5},
  //               {description: 'A > 0', power: 3},
  //               {description: 'A = 0', power: 1}]},
  //
  // {teacherCard: {description: 'Uma função é sobrejetora quando ...', power: 4},
  // playerCards: [{description: 'Imagem = Contra Domínio', power: 5},
  //               {description: 'Imagem = Domínio', power: 3},
  //               {description: 'Imagem = Reais', power: 1}]},
  //
  // {teacherCard: {description: 'Uma função é injetora/ injetiva quando ...', power: 4},
  // playerCards: [{description: 'Cada elemento do domínio tem uma imagem diferente', power: 5},
  //               {description: 'Todos elementos do domínio tem a mesma imagem', power: 3},
  //               {description: 'Todos os elementos da imagem tem o mesmo domínio', power: 1}]},
  //
  //
  // {teacherCard: {description: 'Uma função é bijetora quando ...', power: 4},
  // playerCards: [{description: 'Ela é injetora e sobrejetora', power: 5},
  //               {description: 'Ela é injetora mas não é sobrejetora', power: 3},
  //               {description: 'Ela é sobrejetora mas não é injetora', power: 1}]},
  //
  // {teacherCard: {description: 'A reta é Crescente quando ...', power: 4},
  // playerCards: [{description: 'Coeficiente angular > 0', power: 5},
  //               {description: 'Coeficiente angular = 0', power: 3},
  //               {description: 'Coeficiente angular < 0', power: 1}]},
  //
  // {teacherCard: {description: 'A reta é Decrescente quando ...', power: 4},
  // playerCards: [{description: 'Coeficiente angular < 0', power: 5},
  //               {description: 'Coeficiente angular = 0', power: 3},
  //               {description: 'Coeficiente angular > 0', power: 1}]},
  //
  //
  // {teacherCard: {description: 'O Coeficiente linear altera ...', power: 4},
  // playerCards: [{description: 'A posição da reta no plano', power: 5},
  //               {description: 'O Ângulo da reta', power: 3},
  //               {description: 'A direção da reta', power: 1}]},
  //
  // {teacherCard: {description: 'O Coeficiente angular altera ...', power: 4},
  // playerCards: [{description: 'A inclinação da reta', power: 5},
  //               {description: 'A posição da reta no plano', power: 3},
  //               {description: 'A direção da reta', power: 1}]},
  //
  // // {teacherCard: {description: 'Função constante é a função que ...', power: 4},
  // // playerCards: [{description: 'Todos os valores apontam pro mesmo elemento da imagem (F(x) = 5)', power: 5},
  // //               {description: 'Todos os valores apontam para si mesmos na imagem (F(x) = x)', power: 3},
  // //               {description: 'Todos os valores apontam para um valor direrente na imagem (F(x) = x)', power: 1}]},
  //
  // {teacherCard: {description: 'Um exemplo de Função constante é ...', power: 4},
  // playerCards: [{description: 'F(x) = 5', power: 5},
  //               {description: 'F(x) = x', power: 3},
  //               {description: 'F(x) = 3x', power: 1}]},
  //
  // {teacherCard: {description: 'Um exemplo de Função identidade é ...', power: 4},
  // playerCards: [{description: 'F(x) = x', power: 5},
  //               {description: 'F(x) = 5', power: 3},
  //               {description: 'F(x) = 3x', power: 1}]},
  //
  // {teacherCard: {description: 'Um exemplo de Função linear é ...', power: 4},
  // playerCards: [{description: 'F(x) = 3x', power: 5},
  //               {description: 'F(x) = 5', power: 3},
  //               {description: 'F(x) = x', power: 1}]},
  //
  // {teacherCard: {description: 'A reta identidade é ...', power: 4},
  // playerCards: [{description: 'A reta que corta o 1º e 4º quadrantes ao meio', power: 5},
  //               {description: 'A reta perpendicular ao eixo x', power: 3},
  //               {description: 'A reta paralela ao eixo x', power: 1}]},
  //
  // {teacherCard: {description: 'A Coeficiente angular da reta é calculado de que forma?', power: 4},
  // playerCards: [{description: 'Cat. Oposto/ Cat. Adjacente', power: 5},
  //               {description: 'x = −b ± √(b2 − 4ac) 2a', power: 3},
  //               {description: 'R/380', power: 1}]},
  //
  // {teacherCard: {description: 'O conjunto { Ø } conjunto é?', power: 4},
  // playerCards: [{description: 'Um conjunto unitário', power: 5},
  //               {description: 'Um conjunto infinito', power: 3},
  //               {description: 'Um conjunto vazio', power: 1}]},
  //
  // {teacherCard: {description: 'Em um par ordenado X é o eixo das ...', power: 4},
  // playerCards: [{description: 'Abscissas', power: 5},
  //               {description: 'Oposto', power: 3},
  //               {description: 'Ordenadas', power: 1}]},
  //
  // {teacherCard: {description: 'Em um par ordenado Y é o eixo das ...', power: 4},
  // playerCards: [{description: 'Ordenadas', power: 5},
  //               {description: 'Oposto', power: 3},
  //               {description: 'Abscissas', power: 1}]},
  //
  // {teacherCard: {description: 'Quando um ponto pertence ao eixo X ele tem ...', power: 4},
  // playerCards: [{description: 'Y = 0', power: 5},
  //               {description: 'X = 1', power: 3},
  //               {description: 'X = 0', power: 1}]},
  //
  // {teacherCard: {description: 'Quando um ponto pertence ao eixo Y ele tem ...', power: 4},
  // playerCards: [{description: 'X = 0', power: 5},
  //               {description: 'Y = 1', power: 3},
  //               {description: 'Y = 0', power: 1}]},
  //
  // {teacherCard: {description: 'Uma função só é definida quando cada valor do domínio se relaciona ... ', power: 4},
  // playerCards: [{description: 'Apenas a um valor do contra domínio', power: 5},
  //               {description: 'Pelo menos um valor do contra domínio', power: 3},
  //               {description: 'A dois ou mais valores do contra domínio', power: 1}]},
// ];

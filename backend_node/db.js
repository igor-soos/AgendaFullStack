// Incorpora o módulo mysql ao nosso código; associando o módulo a mysql, que será utilizada para criar a conexão com o banco de dados
// host indica o IP do servidor de banco de dados, neste caso, 
// localhost faz uma referência ao IP local: 127.0.0.1
// user indica o usuário utiliza para autenticar a conexão com o banco de dados
// passwd indica a senha do usuário de conexão, neste caso, o usuário não possui senha
// database indica o nome do banco de dados utilizado pela aplicação
import mysql from "mysql";
export const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "bd_agenda",
});
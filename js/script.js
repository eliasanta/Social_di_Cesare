/**
 * Supponiamo di voler gestire un social per utenti. 
Questo social tiene molto alla privacy dei propri utenti, pertanto ha deciso che nella lista di utenti il loro nome deve essere sostituito 
utilizzando il cifrario di cesare con chiave = 3. Questo significa ad esempio che il nome alfio sarebbe DOINR, perché spostando di 3 lettere A ottengo D; ATTENZIONE, per questo metodo deve essere utilizzata la FUNZIONE MAP.

Per ogni utente possiamo vedere: 1) tutti i suoi post; 2) i commenti relativi ad un determinato post; 3) tutti gli album pubblicati; 4) per ogni album tutte le foto; 5) la lista di cose da fare. Solo le cose già fatte devono essere colorate di verde. 6) inoltre ogni utente può inserire un nuovo post.

La lista di API per effettuare l'esercizio è la seguente:
    - https://jsonplaceholder.typicode.com/users (GET) : lista di tutti gli utenti
    - https://jsonplaceholder.typicode.com/posts?userId=1 (GET) : Lista di tutti i post di un utente con id = 1
    - https://jsonplaceholder.typicode.com/comments?postId=1 (GET): lista dei commenti di un post con id = 1
    - https://jsonplaceholder.typicode.com/albums?userId=1 (GET): Lista di tutti gli album di un utente con id= 1
    - https://jsonplaceholder.typicode.com/photos?albumId=1 (GET): Lista di foto di un album con id=1
    - https://jsonplaceholder.typicode.com/posts (POST): inserimento di un nuovo post. L'oggetto da passare in alla post è il seguente:
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
 */
     
//variabili const. Queste sono le URL delle API e non devono essere modificate
const URL_USERS = "https://jsonplaceholder.typicode.com/users";
const URL_PHOTOS = "https://jsonplaceholder.typicode.com/photos";
const URL_TODOS = "https://jsonplaceholder.typicode.com/todos";
const URL_ALBUMS = "https://jsonplaceholder.typicode.com/albums";
const URL_POST = "https://jsonplaceholder.typicode.com/posts";
const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments";

var api = new Request();
var post = new Posts();
var albums = new Albums();
var todos = new Todo();



window.addEventListener("load", function(){
    recuperaUtenti();
})
/**
 * mostra il messaggio di errore nell'HTML
 * @param {string} message 
 */
 function showMessageError(message) {
    document.getElementById("errorTxt").textContent = message;
    document.getElementById("errorTxt").style.display = "block";
}
/**
 * nasconde il messaggio di errore nell'HTML
 */
function hideMessageError() {
    document.getElementById("errorTxt").style.display = none;
}
async function recuperaUtenti(){
    document.getElementsByClassName("spinner-border")[0].style.display = "block"; // visualizza lo spinner che viene disattivato alla conclusione della chiamata. Riga 44
    try{
        let users = await api.get(URL_USERS);
        stampaUtenti(users);
    }
    catch(e){
        console.log(e);
    }
    finally{
        document.getElementsByClassName("spinner-border")[0].style.display = "none";
    }
}
function stampaUtenti(listaUtenti){ 
    let str = "";
    listaUtenti.forEach(element => {
        str += "<tr>";
        str += recuperoInfoUser(element);
        str+= "</tr>";
    });
    document.getElementById('userList').innerHTML = str;
}
function recuperoInfoUser(element){
    console.log(element);
    let str = "";
    str += "<td>"+ Cesare.cifrario(element.name)+"</td>";
    str += "<td>"+ Cesare.cifrario(element.address.street +"  "+element.address.city) + "</td>";
    str += "<td>"+ buttonUser(element.id) + "</td>";
    return str;
}
function buttonUser(id){
    let str = "";    
    str += "<button class='btn btn-success' onclick='showPosts("+id+")'>POSTS</button>";
    str += "<button class='btn btn-secondary' onclick='showAlbums("+id+")'>ALBUMS</button>";
    str += "<button class='btn btn-info' onclick='showTodoList("+id+")'>TODO LIST</button>";
    str += "<button class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#addPostModal' onclick='addPost("+id+")'>ADD POST</button>";
    return str;
} 
/**
 * mostra tutti gli album di un determinato utente
 * @param {number} userId 
 */
 function showTodoList(userId) {
    document.getElementsByClassName("spinner-border")[0].style.display = "block";
    document.getElementById("postDiv").style.display = "none";
    document.getElementById("albumDiv").style.display = "none"; 
    todos.showTodoList(userId);
}
function showAlbums(userId) {
    document.getElementsByClassName("spinner-border")[0].style.display = "block";
    document.getElementById("postDiv").style.display = "none";
    document.getElementById("todoListDiv").style.display = "none"; 
    albums.showAlbumsByUserId(userId);
}

function showPosts(userId) {
    document.getElementsByClassName("spinner-border")[0].style.display = "block";
    document.getElementById("albumDiv").style.display = "none";
    document.getElementById("todoListDiv").style.display = "none"; 
    post.showPostByUser(userId);
}
function addPost(userId){
    document.getElementById("userID").value = userId;
}
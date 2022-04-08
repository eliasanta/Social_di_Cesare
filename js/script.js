/**
 * Supponiamo di voler gestire un social per utenti. 
Questo social tiene molto alla privacy dei propri utenti, pertanto ha deciso che nella lista di utenti il loro nome deve essere sostituito 
     
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

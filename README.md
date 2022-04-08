# Social_di_Cesare
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
     

class Posts{
    constructor(){
        this.posts = new Array();
        this.comments = new Comments();
    }
    async showPostByUser(id){ 
        document.getElementsByClassName("spinner-border")[0].style.display = "block";
        try{
            this.posts = await api.get(URL_POST + "?userId=" + id);
            this.showListPost();
        }
        catch(e){
            console.log("errore posts: "+e);
        }
        finally{
            document.getElementsByClassName("spinner-border")[0].style.display = "none";     
        }
    }
    showListPost(){
        let str = "";
        this.posts.forEach(
            post =>{
                str += "<tr>";
                str += "<td>";
                str += post.title;
                str += "</td>";
                str += "<td>";
                str += post.body;
                str += "</td>";
                str += "<td>";
                str += "<button class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#viewComments' onclick='post.getCommenti("+post.id+")'>VEDI COMMENTI</button>";
                str += "</td>";
                str +="</tr>"; 
            }
        )
       document.getElementById("postList").innerHTML = str; 
       document.getElementById("postDiv").style.display = "block";
    }
    getCommenti(postID){
        this.comments.showListCommenti(postID);
    }
    async addPost(){
        document.getElementsByClassName("spinner-border")[0].style.display = "block";
        let userID = document.getElementById("userID").value;
        let title = document.getElementById("name").value;
        let body = document.getElementById("description").value;
        let obj = {
            'title' : title,
            'body':body,
            'userID': userID
        }
        try{
            await api.postFetch(URL_POST, obj);
        }
        catch(e){
            console.log("aggiunta post fallita: " + e);
        }
        finally{
            document.getElementsByClassName("spinner-border")[0].style.display = "none";
        }
    }
}
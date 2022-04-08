class Comments{
    constructor(){
        this.comments = new Array(); 
    }
    async showListCommenti(id){
        document.getElementsByClassName("spinner-border")[0].style.display = "block"; 
        try{
            let comments = await api.get(URL_COMMENTS + "?postId=" + id);
            this.showCommenti(comments);
        }
        catch(e){
            console.log("errore commenti dall'id" + e);
        }
        finally{
            document.getElementsByClassName("spinner-border")[0].style.display = "none"; 
        }
    }
    showCommenti(comments){
        let str = "";
        comments.forEach(element => {
            str += "<tr>";
            str += "<td>"+element.email+"</td>";
            str += "<td>"+element.name+"</td>";
            str += "<td>"+element.body+"</td>";
            str += "</tr>";  
        });
        document.getElementById("comments").innerHTML = str;
    }    
}
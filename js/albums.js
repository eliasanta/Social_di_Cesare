class Albums {
    constructor() {
        this.albums = new Array();
        this.photos = new Photo();
    }
    /**
     * stampa la lista di album per utente
     * @param {number} userId 
     */
    async showAlbumsByUserId(userId) {
        document.getElementsByClassName("spinner-border")[0].style.display = "block"; 
        try {
            this.albums = await api.get(URL_ALBUMS + "?userId=" + userId);
            this.showAlbums();
        } catch(e) {
            showMessageError(e);
        } finally {
            document.getElementsByClassName("spinner-border")[0].style.display = "none";         }
    }
    /**
     * stampa la lista di album per un utente 
     */
    showAlbums() {
        var str = "";
        this.albums.forEach(album => {
            str += "<tr>";
            str += "<td>" + album.title + "</td>";
            str += "<td><button class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#viewImage' onclick=albums.showImg(" + album.id + ")>Mostra immagini</button></td>";
            str += "</tr>";
        });
        document.getElementById("albumList").innerHTML = str;
        document.getElementById("albumDiv").style.display = "block";
    }
    async showImg(albumId) {
        this.photos.showImagesByAlbum(albumId);
    }
}
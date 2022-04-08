class Photo {
    async showImagesByAlbum(albumId) {
        document.getElementsByClassName("spinner-border")[0].style.display = "block";
        try { 
            this.photos = await api.get(URL_PHOTOS + "?albumId=" + albumId);
            this.showPhoto();
            
        } catch(e) {
            showMessageError(e);
        } finally {
            document.getElementsByClassName("spinner-border")[0].style.display = "none";
        }
    }
    showPhoto() {
        var str = "";
        this.photos.forEach(photo => {
            str += "<div class='col-md-2 col-sm-12'>"
            str += "<img src='" + photo.url + "' style='width:100%;' />";
            str += "</div>";
        });
        console.log(str);
        document.getElementById("detailAlbumList").innerHTML = str;
    }
}
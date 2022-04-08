class Request{

    get(url){
        return new Promise(function(resolve, reject){
            let httpReq = new XMLHttpRequest();
            httpReq.open("GET",url,true);
            httpReq.send();
            httpReq.onreadystatechange = function(){
                let data;
                if(httpReq.readyState == 4){
                    if(httpReq.status == 200){
                        data = JSON.parse(httpReq.responseText);
                        resolve(data);
                    }
                    else{
                        reject(new Error(httpReq.statusText));
                    }
                } 
            }
        })
    }
    async getFetch(url){
        let response = await fetch(url); // la fetch restituisce una promise di conseguenza non è necessario scrivere la promise esplicitamente
        return await response.json();
    }
    post(url,dataPOST){
        return new Promise(function(resolve, reject){
            let httpReq = new XMLHttpRequest();
            httpReq.open("POST",url,true);
            httpReq.setRequestHeader("Content-type","application/json");
            httpReq.send(JSON.stringify(dataPOST));
            httpReq.onreadystatechange = function(){
                let data;
                if(httpReq.readyState == 4){
                    if(httpReq.status == 201){
                        data = JSON.parse(httpReq.responseText);
                        resolve(data);
                    }
                    else{
                        reject(new Error(httpReq.statusText));
                    }
                } 
            }
        })
    }
    async postFetch(url, dataPost){
        let response = await fetch(
            url,
            {
                method : "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(dataPost)
            })
        return await response.json();
    }
}
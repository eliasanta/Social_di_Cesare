class Cesare{
    static cifrario(stringa){
        let stringaCifrata = stringa.toLowerCase().split("").map(lettera =>{
            if(lettera == " ")
                return lettera;
            let index = lettera.charCodeAt(lettera) + 3; 
            if(index > 122){
                index = 96 + (index -122);
            } 
            return String.fromCharCode(index);
        })
        return stringaCifrata.join("");
    }
}
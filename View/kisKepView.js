import Model from "../Model/model.js";

class KisKepView{
    #kepURL;
    constructor(szuloELEM,kepURL){
        const MODEL = new Model();
        this.#kepURL = MODEL.getKepLista();
        this.szuloELEM = szuloELEM; 
        this.#kisKepLetrehozasa();
        this.kisImgElem = $(".kisIMG");
        this.kisImgElem.on("click", () =>{
            this.#esemenyTrigger("katt");
        });
    }

    #esemenyTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev);
        window.dispatchEvent(esemenyem);
    }

    #kisKepLetrehozasa(){
        let txt = "";
        for (let i = 0; i < Object.keys(this.#kepURL).length; i++) {
            txt += `<img class="kisIMG" id="${i}" src="${this.#kepURL[i]}" alt="${this.#kepURL}">`
        }
        this.szuloELEM.html(txt);
    }
}

export default KisKepView;
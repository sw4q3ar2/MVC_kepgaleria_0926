class NagyKepView{
    #kepURL;
    constructor(szuloELEM,kepURL){
        this.#kepURL = kepURL;
        this.szuloELEM = szuloELEM; 
        this.#htmlLetrehozasa();
        this.balGombElem = $("#balGomb");
        this.jobbGombElem = $("#jobbGomb");
        this.nagyImgElem = $("#nagyIMG");
        this.balGombElem.on("click", () =>{
            this.#esemenyTrigger("bal");
        });
        this.jobbGombElem.on("click", () =>{
            this.#esemenyTrigger("jobb");
        });
    }

    nagyKepElemBeallit(kepeleres){
        this.nagyImgElem.attr({"src":kepeleres, "alt":kepeleres},);
    }

    #esemenyTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev);
        window.dispatchEvent(esemenyem);
    }

    #htmlLetrehozasa(){
        let txt = "<button id='balGomb'> BAL </button>";
        txt += `<div class="fokeptarolo"> <img id="nagyIMG" src="${this.#kepURL}" alt="${this.#kepURL}"> </div>`
        txt += "<button id='jobbGomb'> JOBB </button>";
        this.szuloELEM.html(txt);
    }
}   
export default NagyKepView;
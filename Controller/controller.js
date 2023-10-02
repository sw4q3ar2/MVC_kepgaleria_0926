import Model from "../Model/model.js";
import NagyKepView from "../View/nagyKepView.js";
import KisKepView from "../View/kisKepView.js";

class Controller{

    constructor(){
        // példányositsa a view-t és a modell-t
        const MODEL = new Model();
        const NAGYKEP = new NagyKepView($(".nagykep"), MODEL.getAktKep());
        const KISKEP = new KisKepView($(".kiskep"));
        $(window).on("bal", () => {
            // feliratkozunk az eseményre
            // előállitjuk a program állapotát
            MODEL.bal();
            let aktKep = MODEL.getAktKep();
            // be kellene tolteni az uj kepet a taroloba
            NAGYKEP.nagyKepElemBeallit(aktKep); 
        });

        $(window).on("jobb", () => {
            // feliratkozunk az eseményre
            // előállitjuk a program állapotát
            MODEL.jobb();
            let aktKep = MODEL.getAktKep();
            // be kellene tolteni az uj kepet a taroloba
            NAGYKEP.nagyKepElemBeallit(aktKep); 
        });

        $(window).on("katt", () => {
            console.log("kattintottttam");
            let aktKep = MODEL.getAktKep();
            NAGYKEP.nagyKepElemBeallit(aktKep); 
        });
    }
}
export default Controller;
import Model from "../Model/model.js";
import NagyKepView from "../View/nagyKepView.js";

class Controller{

    constructor(){
        // példányositsa a view-t és a modell-t
        const MODEL = new Model();
        const NAGYKEP = new NagyKepView($(".nagykep"), MODEL.getAktKep());
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
    }
}
export default Controller;
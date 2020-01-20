export default class Coffee {

    constructor(name){
        this.name = name
        this.color = {
            "Vigoroso": "#8b4c39",
            "Intenso": "#daa520",
            "Vellutato": "#990000",
            "Decaffeinato": "#4ca3dd"
        }
    }

    getColor() {
        return this.color[this.name]
    }
}
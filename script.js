/*Documento script.js*/ 
let shoppingList = new Vue({
    el: "#Shopping-list",
    data(){
        return{
            state: "default",
            header:"Aplicacion de lista de compras",
            newItem : "",
            highPriority: false,
            /*Agregando lista de elementos*/
           items: [
              {
                   label: '10 gorros de fiesta',
                   purchased: false,
                   highPriority: true
               }
               ,
               {
                    label: '2 mesas de juego',
                    purchased: false,
                    highPriority: false
                }
                ,
                {
                    label: '20 tasas',
                    purchased: true,
                    highPriority: false
                } 
            ] 
        }
    },

    methods: {
        saveItem(){
            this.items.push({
                label: this.newItem,
                purchased: false,
                highPriority: this.highPriority
            })
            this.newItem="";
            this.changeState('default');
            this.highPriority=false;
        },
        changeState(newState){
            this.state=newState;
            this.newItem="";
        },
        togglePurchased(item){
            item.purchased = !item.purchased;
        }
    },
    computed: {
        characterCount(){
            return this.newItem.length;
        },
        reversedItems(){
            return this.items.slice(0).reverse();
        }
    }
})  

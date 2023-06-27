export class ShoppingCart {
    constructor() {
        this.ShowTotalPriceBtn = '.css-n1d5pa > .chakra-button'
       

    }
    verificarProducto(producto){
        cy.contains(`${producto}`).should('exist');
    }
    verificarPrecioProducto(producto, precio){
        cy.contains(`${precio}`).siblings(`[name="${producto}"]`);
    }
    clickEnShowTotalPrice()  {
        cy.get(this.ShowTotalPriceBtn).click();
    }
    verificarTotal(precio1,precio2){
        const total = precio1 + precio2;
        
        cy.contains(total).should('exist');



    }

    

};
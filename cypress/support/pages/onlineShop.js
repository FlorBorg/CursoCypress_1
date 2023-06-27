export class OnlineShop {
    constructor() {
        this.OnlineShopBtn = 'Online Shop'

    }

    AgregarProductoACarrito(producto) {
        cy.get(`[value="${producto}"]`).click();
       
        
        };

    CerrarVentanaEmergente(){
            cy.get('#closeModal').click();
    
        }
    ConsultarCarrito(){
       cy.get('#goShoppingCart').click();
    }
};
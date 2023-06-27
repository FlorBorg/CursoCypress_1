import { HomePage } from "../support/pages/homePage";
import { LoginPage } from "../support/pages/LoginPage";
import { OnlineShop } from "../support/pages/onlineShop";
import { ShoppingCart } from "../support/pages/shoppingCart";

describe('preEntrega 1', () => {

   let datos;
   const loginPage = new LoginPage();
   const homePage = new HomePage();
   const onLineShop = new OnlineShop();
   const shoppingCart = new ShoppingCart();
  
   


  before('Before', () => {
  cy.fixture('preEntrega2').then(dato => {
    datos = dato;
         });
  })
  beforeEach('Before Each', () => {
    cy.visit('')
    cy.get('#registertoggle').dblclick();
    loginPage.escribirUsuario(datos.datosLogin.usuario);
    loginPage.escribirContraseña(datos.datosLogin.contraseña);
    loginPage.clickLoginBtn();
    homePage.clickOnlineShopButton();

})

    it('PreEntrega 1 desafio ', () => {
      onLineShop.AgregarProductoACarrito(`${datos.datosProducto.producto1}`);
      onLineShop.CerrarVentanaEmergente();
      onLineShop.AgregarProductoACarrito(`${datos.datosProducto.producto2}`);
      onLineShop.CerrarVentanaEmergente();
      onLineShop.ConsultarCarrito();
      shoppingCart.verificarProducto(`${datos.datosProducto.producto1}`);
      shoppingCart.verificarProducto(`${datos.datosProducto.producto2}`);
      shoppingCart.verificarPrecioProducto(`${datos.datosProducto.producto1}`,`${datos.datosProducto.precioProducto1}`);
      shoppingCart.verificarPrecioProducto(`${datos.datosProducto.producto2}`,`${datos.datosProducto.precioProducto2}`)
      shoppingCart.clickEnShowTotalPrice();
      shoppingCart.verificarTotal(datos.datosProducto.precioProducto1,datos.datosProducto.precioProducto2);
    })

  });


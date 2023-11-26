class PreciosAPI {
  constructor() {
    this.descuento = 0.8;
  }
  cargaPrecioDeServidor() {
    // setTimeout(
    //   function () {
    //     const precio = 2;
    //     console.log(precio * this.descuento);
    //   }.bind(this) //le decimos que el this es el del constructor y no el de windows
    // );

    const self = this;

    setTimeout(() => { // con la funcion flecha no necesitamos el bind
        const precio = 2;
        console.log(precio * self.descuento);
      }, 1000 
    );
  }
}
const preciosAPI = new PreciosAPI();
preciosAPI.cargaPrecioDeServidor();

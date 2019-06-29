class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
class UI {
    addProduct(product) {
      const productList=  document.getElementById('product-list');
      const element = document.createElement ('div');
      element.innerHTML = `
        <div class = "card text-center mb-4 bg-light">
            <div class = "card-body" >
                <strong>Nombre del Producto</strong> :${product.name}
                <strong>Precio del Producto</strong> : ${product.price}
                <strong>Año del Producto</strong> : ${product.year}
                <a href="#" class="btn btn-danger" name="delete"> Eliminar</a>
            </div>
        </div>
      
      `;
      productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto Elimnado de la lista', 'danger');
        }

    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //mostrando en el DOM
        const container = document.querySelector('.container');
        const App= document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// Eventos del DOM
document.getElementById('product-form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name,price,year);
    const ui = new UI();
    if (name ==='' || price ===''){
        return ui.ShowMessage ('Por favor completa todos los campos', 'warning');
    }

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Producto Agregado', 'success');
    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
const ui = new UI();
ui.deleteProduct(e.target);
});
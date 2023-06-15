const dataShop = [
  {
    imagen: "obra-01",
    nombre: "Naturaleza muerta",
    descripcion: "Mónica Heller",
    precio: 500,
  },
  {
    imagen: "obra-02",
    nombre: "Esperando en la noche",
    descripcion: "Santiago García Sáenz",
    precio: 500,
  },
  {
    imagen: "obra-03",
    nombre: "Mental",
    descripcion: "Fernanda Laguna",
    precio: 500,
  },
  {
    imagen: "obra-04",
    nombre: "Conversación con estructura",
    descripcion: "Carla Grunauer",
    precio: 500,
  },
  {
    imagen: "obra-05",
    nombre: "Inmolación I (Estudio I)",
    descripcion: "Federico Klemm",
    precio: 500,
  },
  {
    imagen: "obra-06",
    nombre: "Peñas",
    descripcion: "Xul Solar",
    precio: 500,
  },
  {
    imagen: "obra-07",
    nombre: "Oscura flor circular",
    descripcion: "Carolina Antoniadis",
    precio: 500,
  },
  {
    imagen: "obra-08",
    nombre: "Sainte Affligée",
    descripcion: "Pierre et Gilles",
    precio: 500,
  },
  {
    imagen: "obra-09",
    nombre: "¿A que distancia hay que estar de la tierra?",
    descripcion: "Ananké Asseff",
    precio: 500,
  },
  {
    imagen: "obra-10",
    nombre: "Los replicantes de David",
    descripcion: "Federico Klemm",
    precio: 500,
  },
];

// appends product cards
dataShop.forEach((e, i) => {
  $("#productosShop").append(`
  <div class="col-12 col-lg-3 pb-4" >
    <div class="card scrollme animateme" data-from="0.5" data-to="0" data-crop="false" data-opacity="0" data-scale="1.5">
      <div class="card-body sc-product-item">
        <a class="magnific-popup" href="img/${e.imagen}-big.jpg"><img src="img/${e.imagen}-small.jpg" class="card-img-top" alt="Foto de la obra"></a>
          <p data-name="product_name" class="card-text">${e.nombre}</p>
          <p data-name="product_desc" class="card-text text-muted">${e.descripcion}</p>
          <input name="product_price" value="${e.precio}" type="hidden" />
          <input name="product_id" value="${i}" type="hidden" />
          <button class="sc-add-to-cart btn btn-outline-secondary btn-sm">Agregar al carrito</button>
      </div>
    </div>
</div >`);
});

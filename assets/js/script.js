const falseSmook = 'No se permite fumar';
const trueSmook = 'Permitido fumar';
const falsePets = 'No se permite mascotas';
const truePets = 'Mascotas permitidas';
const html = '';

const getCard = (item) => {

    let smokeData;
    let petsData;

    if (item.smoke) {
        smokeData = `<p class="text-success">  <i class="fas fa-smoking"></i> ${trueSmook}</p>`;
    } else { 
        smokeData = `<p class="text-danger"> <i class="fas fa-smoking-ban"></i>  ${falseSmook}</p>`;
    };
    if (item.pets) {
        petsData = `<p class="text-success"> <i class="fas fa-paw"></i> ${truePets}</p>`;
    } else {
        petsData = `<p class="text-danger"> <i class="fas fa-ban"></i>  ${falsePets}</p>`;
    }


    return `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src="${item.src}"
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${item.nombre}
                </h5>
                <p class="card-text">
                ${item.descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                Prestige Suburb, CA 45678
                </p>
                <p>
                <i class="fas fa-bed"></i>  ${item.habitaciones} |
                <i class="fas fa-bath"></i> ${item.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${item.costo}</p>
                ${smokeData}
                ${petsData}
            </div>
        </div>
    </div>`;
};


/**
 * ventas es un array de objetos que siguen esta forma:
 *  { nomnbre, src, descripcion, ubicacion, habitaciones, costo, smoke, pets }
 */
const renderizarPropiedades = (ventas) => {
    let html = '';
    for (let venta of ventas) { 
        let cardHtml = getCard(venta);
        html = html + cardHtml;
    }
    return html;
}




const propiedadesVenta = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: ' 123 Main Street, Anytown, CA 91234',
        habitaciones: ' 2 Habitaciones',
        banos: '2 Baños',
        costo: '2.000',
        smoke: false,
        pets: true,

    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '  456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '  3 Habitaciones',
        banos: ' 3 Baños',
        costo: '2.500',
        smoke: true,
        pets: true,

    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '  123 Main Street, Anytown, CA 91234',
        habitaciones: ' 2 Habitaciones',
        banos: '2 Baños',
        costo: '2.200',
        smoke: false,
        pets: false,

    }, {
        nombre: 'Condominio moderno en la playa',
        src: 'https://cdn.bioguia.com/embed/2026e865db7287ec4b6c0ab4ec3b81a31730471589/Grecia.jpg?imagick=1&size=1200',
        descripcion: 'piso fotolaminado diseño madera y ventanas termopanel. Cocina equipada con cubierta de cuarzo blanco, horno eléctrico',
        ubicacion: '  Suecia 440, Los Leones, Providencia, RM',
        habitaciones: ' 3 Habitaciones',
        banos: '2 Baños',
        costo: '4.200',
        smoke: false,
        pets: false,

    }
    , {
        nombre: 'Las Acasias',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_610794-MLC74344811908_022024-F.webp',
        descripcion: 'cocina abierta o tradicional. Dormitorio principal con walk-in closet. Baño principal con shower door y lavamanos con cajoneras.',
        ubicacion: 'Av. La Florida 9423, La Florida, RM',
        habitaciones: ' 3 Habitaciones',
        banos: '2 Baños',
        costo: '3.200',
        smoke: false,
        pets: true,

    }, {
        nombre: 'Paratepuy',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_917281-MLC54154469620_032023-F.webp',
        descripcion: ' ventanas termopanel con marco de aluminio. Cocinas integradas con horno, campana y encimera eléctrica. ',
        ubicacion: ' Av. Vicuña Mackenna 10811, Los Quillayes, La Florida, RM ',
        habitaciones: ' 3 Habitaciones',
        banos: '3 Baños',
        costo: '5.200',
        smoke: true,
        pets: true,

    }
    , {
        nombre: 'Villa de limache',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_852540-MLC54154469640_032023-F.webp',
        descripcion: 'ventanas termopanel con marco de aluminio. Cocinas integradas con horno, campana y encimera eléctrica. ',
        ubicacion: 'Siena Parque Vicuña Mackenna 10811 ',
        habitaciones: ' 2 Habitaciones',
        banos: '1 Baños',
        costo: '1.500',
        smoke: true,
        pets: false,

    }
    , {
        nombre: 'El guamo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_781679-MLC77026911024_062024-F.webp',
        descripcion: 'dormitorio principal en suite con walk-in closet, cocina equipada y cubierta de cuarzo, pisos vinílicos SPC y porcelanato en baños, terrazas con barandas de cristal y termopanel.        ',
        ubicacion: 'Alonso De Ercilla 7698, Vicente Valdés, La Florida, RM ',
        habitaciones: ' 2 Habitaciones',
        banos: '2 Baños',
        costo: '3.800',
        smoke: true,
        pets: true,

    }, {
        nombre: 'Roraima',
        src: ' https://http2.mlstatic.com/D_NQ_NP_2X_718901-MLC73689068431_122023-F.webp ',
        descripcion: '  piso fotolaminado hidrófugo continuo. Cocina equipada con encimera vitrocerámica, horno eléctrico y campana.',
        ubicacion: 'Vicuña Mackenna 7197, Plaza Vespucio, La Florida, RM',
        habitaciones: ' 2 Habitaciones',
        banos: '1 Baños',
        costo: '4.200',
        smoke: false,
        pets: false,

    }

];

const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street,Anytown, CA 91234',
        habitaciones: ' 3 Habitaciones',
        banos: '2 Baños',
        costo: '2.000',
        smoke: false,
        pets: true
    }, {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue,Seaside Town, CA 56789',
        habitaciones: ' 3 Habitaciones',
        banos: '3 Baños',
        costo: '2.500',
        smoke: true,
        pets: true
    }, {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_749366-MLC45739966811_042021-F.webp',
        descripcion: ' Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: ' 3 Habitaciones',
        banos: '3 Baños',
        costo: '2.500',
        smoke: false,
        pets: false
    }, {
        nombre: 'NeoFlorida 3',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_879107-MLC77238244875_062024-F.webp',
        descripcion: 'dormitorio principal en suite con walk-in closet, cocina equipada y cubierta de cuarzo,',
        ubicacion: 'Alonso De Ercilla 7698, Vicente Valdés, La Florida, RM ',
        habitaciones: ' 3 Habitaciones',
        banos: '1 Baños',
        costo: '2.400',
        smoke: true,
        pets: true
    },{
        nombre: 'Vicuña Mackenna',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_701315-MLC72443559276_102023-F.webp',
        descripcion: 'piso foto laminado en sala de estar, dormitorio y cocina, piso cerámica en baños y terraza, cocina equipada, horno eléctrico. ',
        ubicacion: 'Av. Vicuña Mackenna Ote. 11508, La Florida, Puente Alto, Región Metropolitana, Chile, Los Quillayes, La Florida, RM ',
        habitaciones: ' 3 Habitaciones',
        banos: '1 Baños',
        costo: '3.200',
        smoke: true,
        pets: false
    },{
        nombre: 'Eco Florida',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_960095-MLC50960563372_082022-F.webp',
        descripcion: 'puertas de acceso y puertas interiores pintadas. Piso fotolaminado en estar-comedor y dormitorios.',
        ubicacion: 'Froilán Roa 1201, La Florida, RM ',
        habitaciones: ' 2 Habitaciones',
        banos: '1 Baños',
        costo: '2.800',
        smoke: true,
        pets: false
    },

];



const init = () => {
    const pathname = window.location.pathname;
    if (pathname === "/propiedades_venta.html") {
        document.getElementById('cards-container').innerHTML = renderizarPropiedades(propiedadesVenta);
    } else if (pathname === "/propiedades_alquiler.html") { 
        document.getElementById('cards-container').innerHTML =renderizarPropiedades(propiedadesAlquiler);
    } else if (pathname === "/index.html") { 
        console.log('este es un ejemplo')
        document.getElementById('cards-container-ventas').innerHTML = renderizarPropiedades(propiedadesVenta.slice(0, 3));
        document.getElementById('cards-container-alquiler').innerHTML = renderizarPropiedades(propiedadesAlquiler.slice(0, 3));
    }
}
    
init();
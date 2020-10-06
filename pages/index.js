import Head from 'next/head'
import React, { useState } from 'react';

function Home({products}) {
  const productoEjemplo =  {
    "row_id": 2,
    "Segmento": "Quick Detail",
    "Producto": "Cherry Quick",
    "Presentacion": "Gatillo c/600",
    "Precio": "$ 600 ",
    "Stock ": "Stock",
    "Descripcion": "ES UN QUCIK DETAIL FORMULADO PARA OTORGAR UN BRILLO UNICO, PUEDE SER UTILIZADO EN HUMEDO O SECO Y TAMBIEN PARA REMOVER POLVILLO O MARCAS DE MANOS EN LA PINTURA, AROMA A CHERRY"
  };
  const [categoriaFiltro, setCategoriaFiltro] = useState('')
  var categorias = []

  products.data.map(product => {
    var existe = categorias.find(cat => cat == product.Segmento)
    if(!existe){
      categorias.push(product.Segmento)
    }
  })

  const handleFiltroCategoria = (filtro) => {
    setCategoriaFiltro(filtro)
  }

  return (
    <React.Fragment>
      <title>Detailing shop</title>
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">DETAILING SHOP
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">Toxic Shine Products</p>
            <div class="flex justify-center">
              <a href="https://wa.link/jqoyo5" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Whatsapp</a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Categorías</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Elige una categoría de nuestros productos.</p>
            </div>
            <div class="flex flex-wrap -m-2">
              {
                categorias.map(categoria => {
                  if(categoria.length > 0){
                    //border-indigo-500
                    var bordes = categoria === categoriaFiltro ? ' border-indigo-500' : ''
                    return(
                      <a onClick={() => handleFiltroCategoria(categoria)} href="#listado" class={`p-2 lg:w-1/3 md:w-1/2 w-full`} style={{cursor: 'pointer'}}>
                      <div class={`h-full flex items-center border-gray-200 border p-4 rounded-lg  ${bordes}`}>
                        <div class="flex-grow">
                          <h2 class="text-gray-900 title-font font-medium">{categoria}</h2>
                          <p class="text-gray-500">Ver</p>
                        </div>
                      </div>
                    </a>
                    )
                  }
                })
              }
              
          </div>
          </div>
          <div class="container py-1 mx-auto text-center">
            <button onClick={() => handleFiltroCategoria('')} className="text-purple-600">Ver todo</button>
          </div>
        </section>
    <section id="listado" class="text-gray-700 body-font overflow-hidden">

    {/* <div class="flex flex-col text-center w-full mb-0 mt-5">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Listado</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Elige una categoría de nuestros productos.</p>
    </div> */}
    <div class="container px-5 py-10 mx-auto">
      {
      products.data.map(product => {
        if(categoriaFiltro === '' || (product.Segmento == categoriaFiltro)){
          return(
            <div class="-my-8">
              <div class="py-8 flex flex-wrap md:flex-no-wrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="tracking-widest font-medium title-font text-gray-900">{product.Segmento}</span>
                  <span class="mt-1 text-gray-500 text-sm"> {product.Presentacion} </span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{product.Producto}</h2>
                  <p class="leading-relaxed" style={{textTransform: 'capitalize'}}> {product.Descripcion} </p>
                  <p class=" leading-relaxed text-indigo-500 ">{product.Precio}
                  </p>
                  
                  <a href="https://wa.link/jqoyo5" className=" inline-flex items-center mt-4 text-black">
                    Comprar
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <hr class="py-3" />
            </div>
        )
    }
    })
  }
    </div>
  </section>
  </React.Fragment>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://v1.nocodeapi.com/lucasmarioni/google_sheets/wDhJqsRZqCDYWwNZ?tabId=api-database')
  const products = await res.json()
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  }
}

export default Home
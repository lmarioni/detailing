import Head from 'next/head'
import Link from "next/link";

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
  return (
    <React.Fragment>
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">DETAILING SHOP
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">Toxic Shine Products</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Whatsapp</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>

    <section class="text-gray-700 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      {
      products.data.map(product => (
          <div class="-my-8">
            <div class="py-8 flex flex-wrap md:flex-no-wrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="tracking-widest font-medium title-font text-gray-900">{product.Segmento}</span>
                <span class="mt-1 text-gray-500 text-sm"> {product.Presentacion} </span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{product.Producto}</h2>
                <p class="leading-relaxed" style={{textTransform: 'capitalize'}}> {product.Descripcion} </p>
                <a class="text-indigo-500 inline-flex items-center mt-4">{product.Precio}
                  {/* <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg> */}
                </a>
              </div>
            </div>
          </div>
      ))
      }
    </div>
  </section>
  </React.Fragment>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  console.log('asdasdasd')
  const res = await fetch('https://v1.nocodeapi.com/lucasmarioni/google_sheets/wDhJqsRZqCDYWwNZ?tabId=api-database')
  const products = await res.json()
  console.log('products', products)
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  }
}

export default Home
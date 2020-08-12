import React from 'react'
import ProductCard from './ProductCard'
import Loader from '../components/Loader'
import useRequestGet from '../Hooks/HttpRequests'

function ProductList() {
    //Create your own mock api: https://mockapi.io/
    const url = `https://secret.mockapi.io/api/products?page=1&limit=10`

    let products = useRequestGet(url)

    let content = null

    if (products.error) {
        content =
            <div>
                <div className="bg-blue-300 mb-2 p-3">
                    <p>If you see this error, Please remember to connect your api. Change the url.</p>

                </div>
                <div className="bg-red-300  p-3">
                    <p>There was an error. Please refresh adn try again later.</p>

                </div>
            </div>

    }

    if (products.loading) {
        content = <Loader />
    }

    if (products.data) {
        content =
            products.data.map((product, key) =>
                <div key={product.id}>
                    <ProductCard product={product} />
                </div>

            )
    }


    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            {content}
        </div>
    )


}

export default ProductList
import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import useRequestGet from '../Hooks/HttpRequests'
function Product() {
    const { id } = useParams()
    const url = `https://5f30d85a373bc7001635eecd.mockapi.io/api/products/${id}`

    let content = null

    let product = useRequestGet(url)

    if (product.error) {
        content = <p>There was an error. Please refresh adn try again later.</p>
    }



    if (product.loading) {
        content = <Loader />
    }





    if (product.data) {
        content =
            <div>
                <h1 className="font-bold text-2xl mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.productImage[0].imageUrl}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}

                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }
    return (
        <div>
            {content}
        </div>
    )

}
export default Product
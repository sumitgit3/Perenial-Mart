import { React } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import { useGetProductsQuery } from '../redux/features/products/productApiSlice'
import { Spinner } from 'react-bootstrap'
const HomeScreen = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery();
    return (
        <>
            {isLoading ? (<Spinner />) : isError ? (<div>{isError?.data?.message || isError.error}</div>) : (<>
                <h1>Latest products</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>

            </>)}

        </>
    )
}

export default HomeScreen

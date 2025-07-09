import {lazy, Suspense} from "react";
import {Box, Flex, Heading, Link} from "@chakra-ui/react";
import {SlideShowSkeleton} from "../skeletons/SlideShowSkeleton.tsx"
import {ProductCardSkeleton} from "../skeletons/ProductCardSkeleton.tsx"
import {type ProductCardProps} from "../components/productCard/ProductCard.tsx";
import {Link as RouteLink} from "react-router";

const SlideShow = lazy(() => import('../components/slideshow/SlideShow.tsx'))
const ProductCard = lazy(() => import("../components/productCard/ProductCard.tsx"))

interface BestFromCategory {
    category: string
    products: ProductCardProps[]
}

const products: BestFromCategory[] = [
    {
        category: "test",
        products:[
            {
                image: "/product.jpg",
                tags: ["new", "bestseller"],
                price: 10.99,
                rate: 4,
                title: "ProductCard",
                id: 1
            },
            {
                image: "/heavy.jpg",
                tags: ["new"],
                price: 12.99,
                rate: 3,
                title: "Some item",
                id: 1
            }
        ]
    }

]

export function Home(){
    const images = ["/product.jpg", '/heavy.jpg', "/product.jpg"]

    return (
        <Box >
            <Suspense fallback={<SlideShowSkeleton/>}>
                <SlideShow images={images}/>
            </Suspense>
                {products.map((product, i) => (
                    <Box padding={10}>
                        <Heading>Best from <RouteLink to={"category/" + product.category}>
                            <Link>
                                {product.category}
                            </Link>
                        </RouteLink></Heading>
                        <Flex justifyContent={"start"} gap={10} flexDirection={"row"} paddingY={3}>

                        {product.products.map((p, i) => (
                            <Suspense fallback={<ProductCardSkeleton/>}>
                                <ProductCard
                                    key={i}
                                    id={p.id}
                                    title={p.title}
                                    image={p.image}
                                    price={p.price}
                                    rate={p.rate}
                                    tags={p.tags} />
                            </Suspense>
                        ))}
                        </Flex>
                    </Box>
                ))}
        </Box>
    );
}
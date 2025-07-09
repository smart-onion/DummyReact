import {Card, Flex, Text, Link, Tag, Image} from "@chakra-ui/react"
import {Rating} from "../rating/Rating.tsx"
import {Link as RouteLInk} from "react-router";

export interface ProductCardProps {
    id: string | number
    title: string
    rate: number
    image: string
    price: number
    tags?: string[]
}


export default function ProductCard({ title, rate, image, price, id, tags }: ProductCardProps) {
    return (
        <Card.Root width={"xs"} overflow="hidden" shadow={"lg"} rounded={"lg"}>
            <Image src={image} height={"20vh"} />
            <Card.Body gap="2">
                <Flex justify={"space-between"} align={"center"}>
                    <RouteLInk to={"products/" + id} >
                        <Link asChild>
                            <Card.Title textStyle={"2xl"}>{title}</Card.Title>
                        </Link>
                    </RouteLInk>
                    <Rating value={rate} size={"md"}/>
                </Flex>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2" textAlign={"end"}>${price}</Text>
            </Card.Body >
            <Card.Footer gap="2">
                {tags && tags.length > 0 && (
                    tags.map((tag, i) => (
                        <RouteLInk key={i} to={"products/" + tag}>
                        <Tag.Root size="sm" variant={"surface"} colorPalette={"green"}>
                            <Tag.Label>{tag}</Tag.Label>
                        </Tag.Root>
                        </RouteLInk>
                    ))
                )}
            </Card.Footer>
        </Card.Root>
    );
}
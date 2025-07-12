import {Flex, Stack} from "@chakra-ui/react";
import {Outlet} from "react-router";
import {PriceRange} from "../components/priceRange/PriceRange.tsx";
import {RatingList} from "../components/ratingList/RatingList.tsx";
export function Category() {

    return (<>
        <Flex direction="row">
            <Stack>
                <PriceRange/>
                <RatingList/>
            </Stack>
            <Outlet/>
        </Flex>
    </>)
}
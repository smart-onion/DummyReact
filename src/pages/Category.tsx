import {Flex, Stack} from "@chakra-ui/react";
import {Outlet} from "react-router";
import {PriceRange} from "../components/PriceRange.tsx";
export function Category() {

    return (<>
        <Flex direction="row">
            <Stack>

                <PriceRange/>
            </Stack>
            <Outlet/>
        </Flex>
    </>)
}
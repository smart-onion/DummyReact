import {SectionMenu, type SectionMenuProps} from "../sectionMenu/SectionMenu.tsx"
import {Flex, Box, Heading} from "@chakra-ui/react"
import {Search} from "../search/Search.tsx";
import {HeaderButton} from "../HeaderButton/HeaderButton.tsx";
import { IoCartOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import {Link} from "react-router";
import { ColorModeButton } from "../ui/color-mode"

export function Header() {
    // useEffect taking data from server for categories
    const sections: SectionMenuProps[] = [
        {name: "TVs", categories: ["samsung"]},
        {name: "Smartphones", categories: ["Apple"]},
        {name: "Computers", categories: []},]
    return (
        <Box padding={3} borderBottom={"1px solid"} margin={1} position={"static"}>
            <Flex justify="space-evenly" align="center">
                <Link to={"/"}><Heading>DummyReact</Heading></Link>
                <Flex direction="row" gap={"5"}>
                    {sections.map((section, index: number) => (
                        <SectionMenu key={index} name={section.name} categories={section.categories} />
                    ))}
                </Flex>
                <Search />
                <Flex gap={5}>
                  <Link to={"/favorites"}><HeaderButton icon={<AiOutlineLike/>} tooltipString={"Favorites"} /></Link>
                  <Link to={"/login"}><HeaderButton icon={<IoIosLogIn/>} tooltipString={"Login"} /></Link>
                  <Link to={"/cart"}><HeaderButton icon={<IoCartOutline/>} tooltipString={"Cart"} /></Link>
                    <ColorModeButton backgroundColor={"blackAlpha.100"} rounded={"full"} padding={2}/>
                </Flex>

            </Flex>

        </Box>
    )
}
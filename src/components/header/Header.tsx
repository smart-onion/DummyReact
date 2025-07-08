import {SectionMenu, type SectionMenuProps} from "../sectionMenu/SectionMenu.tsx"
import {Flex, Box, Heading} from "@chakra-ui/react"

export function Header() {
    // useEffect taking data from server for categories
    const sections: SectionMenuProps[] = [
        {name: "TVs", categories: ["samsung"]},
        {name: "Smartphones", categories: ["Apple"]},
        {name: "Computers", categories: []},]
    return (
        <Box className={"bg-green-200"}>
            <Flex justify="space-evenly">
                <Heading>DummyReact</Heading>
                <Flex direction="row" gap={"5"}>
                    {sections.map((section, index: number) => (
                        <SectionMenu key={index} name={section.name} categories={section.categories} />
                    ))}
                </Flex>

            </Flex>
        </Box>
    )
}
import {SectionMenu} from "../sectionMenu/SectionMenu.tsx"


export function Header() {
    // useEffect taking data from server for categories
    return (
        <>
            <SectionMenu name={"Seaction"} categories={["1"]}/>
        </>
    )
}
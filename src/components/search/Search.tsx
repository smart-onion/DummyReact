import {Input, InputGroup} from "@chakra-ui/react";
import {LuSearch} from "react-icons/lu";

export function Search(){
    return (
        <InputGroup  startElement={<LuSearch />} className={"!w-100"}>
            <Input placeholder="Search contacts" />
        </InputGroup>
    )
}
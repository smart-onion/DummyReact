import type {IconType} from "react-icons";
import type { ReactElement} from "react";
import {IconButton} from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip.tsx"

interface HeaderButtonProps{
    icon: ReactElement<IconType>,
    tooltipString: Required<string>
}

export function HeaderButton({icon, tooltipString}: HeaderButtonProps) {
    return (
        <Tooltip content={tooltipString} openDelay={100} closeDelay={100}>
            <IconButton  rounded="full" variant={"surface"}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}
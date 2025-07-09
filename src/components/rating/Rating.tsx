import { RatingGroup } from "@chakra-ui/react"

export function Rating({value, size}: {value: number, size: "sm" | "md" | "lg" | "xs" | undefined}) {
    return(
    <RatingGroup.Root readOnly count={5} defaultValue={value} size={size}>
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
    </RatingGroup.Root>
)}
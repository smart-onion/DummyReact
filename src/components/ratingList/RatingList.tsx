import {For, Heading, HStack, RadioGroup, Stack} from "@chakra-ui/react";
import {Rating} from "../rating/Rating.tsx";
import {useRef} from "react"

export function RatingList(){
    const selectedRating = useRef<number>(0);

    return(
        <Stack>
            <Heading>Ratings</Heading>
                <RadioGroup.Root padding={1}
                                 onValueChange={(v) => {
                                    selectedRating.current = (v.value ? +v.value : 5)
                                 }}
                                 size={"sm"}
                >
                <For each={[5,4,3,2,1]} >
                    {(item, index) => {
                        return (
                        <HStack key={index}>
                            <RadioGroup.Item value={`${item}`} paddingY={1}>
                                <RadioGroup.ItemHiddenInput />
                                <RadioGroup.ItemIndicator />
                                <RadioGroup.ItemText />
                            </RadioGroup.Item>
                            <Rating value={item} size="sm" />
                        </HStack>)
                    }}

                </For>
        </RadioGroup.Root>
        </Stack>
    )
}
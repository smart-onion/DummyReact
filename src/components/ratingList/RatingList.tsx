import {For, Heading, HStack, RadioGroup, Stack} from "@chakra-ui/react";
import {Rating} from "../rating/Rating.tsx";

export function RatingList(){
    return(
        <Stack>
            <Heading>Ratings</Heading>
                <RadioGroup.Root>
                <For each={["string"]} >
                <HStack key={1}>
                        <RadioGroup.Item value={"1"}>
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText />
                        </RadioGroup.Item>
                    <Rating value={5} size="md" />
                </HStack>
                </For>
        </RadioGroup.Root>
        </Stack>
    )
}
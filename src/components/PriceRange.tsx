import {Field, Flex, Input, InputGroup, Slider} from "@chakra-ui/react";
import {useRef, useState} from "react";

export function PriceRange() {
    const [priceRange, setPriceRange] = useState({min: 0, max: 100});
    const minStepBetween = useRef(8);
    const {currency, currencySign} = {currency: 'USD', currencySign: '$'}

    const onPriceRangeChanged = (e){

    }
    return (

        <Slider.Root onValueChange={(d) => setPriceRange({min: d.value[0], max: d.value[1]})}
                     width="xs"
                      defaultValue={[priceRange.min,priceRange.max]}
                      minStepsBetweenThumbs={minStepBetween.current}
        >
            <Slider.Control >
                <Slider.Track >
                    <Slider.Range />
                </Slider.Track>
                <Slider.Thumbs />
            </Slider.Control>
            <Flex direction="row" justify="space-between">
                <Field.Root>
                <Field.Label>Min</Field.Label>
                <InputGroup startElement={currencySign} width={"5em"}>
                    <Input placeholder={`${priceRange.min}`} onChange={}/>
                </InputGroup>
                </Field.Root>

             </Flex>
        </Slider.Root>
    )
}
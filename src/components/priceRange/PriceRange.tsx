import {Field, Flex, Input, InputGroup, Slider} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {type RootState} from "../../redux/app/store.ts"
import {setMin, setMax, type PriceRangeType} from "../../redux/slices/priceRangeSlice.ts";

export function PriceRange() {
    const {currencySign} = {currencySign: '$'}
    const priceRange = useSelector<RootState,PriceRangeType>((state) => state.priceRange.value);
    const dispatch = useDispatch();
    return (

        <Slider.Root onValueChange={(d) => {
            dispatch(setMin(d.value[0]));
            dispatch(setMax(d.value[1]));
        }}
                      value={[priceRange.min, priceRange.max]}
                      width="xs"
                      defaultValue={[priceRange.min,priceRange.max]}
                      minStepsBetweenThumbs={priceRange.minStep}
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
                <InputGroup startElement={currencySign}>
                    <Input placeholder={`${priceRange.min}`}
                           value={priceRange.min}
                           onChange={(e) =>
                               dispatch(setMin(+e.target.value))} />
                </InputGroup>
                </Field.Root>
                <Field.Root>
                <Field.Label>Min</Field.Label>
                <InputGroup startElement={currencySign} >
                    <Input placeholder={`${priceRange.max}`}
                           value={priceRange.max}
                           onChange={(e) =>
                               dispatch(setMax(+e.target.value))} />
                </InputGroup>
                </Field.Root>

             </Flex>
        </Slider.Root>
    )
}
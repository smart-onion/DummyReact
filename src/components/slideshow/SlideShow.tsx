import {useReducer, useEffect} from "react";
import {Box, IconButton, Flex } from "@chakra-ui/react";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import changeSlideReducer from "../../reducers/slideShowReducer.ts";
interface SlideShowProps {
    images: string[];

}


export default function SlideShow({ images }: SlideShowProps) {
    const [currentSlide, dispatch] = useReducer(changeSlideReducer, 0);

    useEffect(() => {
        const interval = setInterval(() => dispatch({type: "right", payload: images}), 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box bgImage={`url(${images[currentSlide]})`}
             bgSize="cover"
             bgPos={"center"}
             width="80%"
             margin={"auto"}
             height={"30vh"}
             alignContent={"center"}
             >
        <Flex direction={"row"} justify={"space-between"} >
            <IconButton variant={"ghost"} onClick={() => dispatch({type: "left", payload: images})}>
                <RiArrowLeftWideLine/>
            </IconButton>
            <IconButton variant={"ghost"} onClick={() => dispatch({type: "right", payload: images})}>
                <RiArrowRightWideLine/>
            </IconButton>
        </Flex>
        </Box>
    );
}


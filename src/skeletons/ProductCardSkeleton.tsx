import {HStack, Skeleton, SkeletonText, Stack} from "@chakra-ui/react";

export function ProductCardSkeleton() {
    return (
        <>
            <Stack width="20em">
                <Skeleton height="200px" />
                <HStack width="full">
                    <SkeletonText noOfLines={2} />
                </HStack>
            </Stack>
        </>
    )
}
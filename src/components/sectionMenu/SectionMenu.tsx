import {Menu, Button, EmptyState, For} from "@chakra-ui/react"
import type {ReactElement} from "react";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import {Link} from "react-router";

export interface SectionMenuProps {
   name: string;
   categories: string[];
}

export function SectionMenu({name, categories}: SectionMenuProps): ReactElement {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="surface">{name} <IoIosArrowDown/></Button>
            </Menu.Trigger>
                <Menu.Positioner>
                    <Menu.Content>
                        {
                            categories?.length > 0 ? (
                                <For each={categories}>
                                    {(item: string, index: number) => (
                                        <Link key={index} to={"categories/" + item.toLowerCase()}>
                                            <Menu.Item  value="new-txt">{item}</Menu.Item>
                                        </Link>
                                    )}
                                </For>)
                                :
                                (<EmptyState.Root>
                                    <EmptyState.Indicator>
                                        <TbShoppingCartQuestion/>
                                    </EmptyState.Indicator>
                                    <EmptyState.Title>
                                        Hmm..  :(
                                    </EmptyState.Title>
                                </EmptyState.Root>)
                        }
                    </Menu.Content>
                </Menu.Positioner>
        </Menu.Root>
    )
}
import { ReactElement } from "react";

type ChildrenType = {
    children: ReactElement
}

export interface BasicPageType extends ChildrenType {}

export interface ContentType extends ChildrenType {}

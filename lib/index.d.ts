export declare type WalkMap<Node> = {
    [deep: number]: {
        currentIndex: number;
        parentsChildren?: Node[];
    };
};
export declare type IterationHandler<Node> = (node: Node, currentIndex: number, parentsChildren: Node[] | undefined, currentDeep: number, walkMap: WalkMap<Node>) => boolean | void | Promise<boolean | void>;
/** skips root */
export declare function walk<ChildrenField extends string = 'children', Node = {
    [k in ChildrenField]: Node[];
}>(node: Node, 
/** return `false` to stop walking */
onNode: IterationHandler<Node>, childrenField?: ChildrenField): Promise<void>;

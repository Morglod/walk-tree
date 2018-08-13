export declare type WalkMap<Node> = {
    [deep: number]: {
        currentIndex: number;
        parentsChildren?: Node[];
    };
};
/** skips root */
export declare function walk<ChildrenField extends string = 'children', Node = {
    [k in ChildrenField]: Node[];
}>(node: Node, 
/** return `false` to stop walking */
onNode: (node: Node, currentDeep: number, walkMap: WalkMap<Node>) => boolean | void | Promise<boolean | void>, childrenField?: ChildrenField): Promise<void>;

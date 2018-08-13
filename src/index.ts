export type WalkMap<Node> = {
    [deep: number]: {
        currentIndex: number,
        parentsChildren?: Node[],
    },
};

/** skips root */
export async function walk<
    ChildrenField extends string = 'children',
    Node = { [k in ChildrenField]: Node[] },
>(
    node: Node,
    /** return `false` to stop walking */
    onNode: (node: Node, currentDeep: number, walkMap: WalkMap<Node>) => boolean|void|Promise<boolean|void>,
    childrenField: ChildrenField = ('children' as any),
) {
    const walkMap: WalkMap<Node> = {
        0: {
            currentIndex: -1,
            parentsChildren: undefined,
        },
    };

    let currentDeep = 0;
    let children: Node[] = (node as any)[childrenField];
    let iterate = true;

    if (!children) return;
    
    while (iterate) {
        const caret = walkMap[currentDeep];
        if (children.length <= caret.currentIndex + 1) {
            currentDeep--;
            if (currentDeep <= -1 || !caret.parentsChildren) return;
            children = caret.parentsChildren;
            continue;
        }

        caret.currentIndex++;
        const currentNode = children[caret.currentIndex];
        const onNodeResult = onNode(currentNode, currentDeep, walkMap);
        let result;
        if (onNodeResult instanceof Promise) result = await onNodeResult;
        else result = onNodeResult;

        if (result === false) return;

        // walking strategy - deep first
        if ((currentNode as any)[childrenField] !== undefined) {
            currentDeep++;
            walkMap[currentDeep] = {
                currentIndex: -1,
                parentsChildren: children,
            };
            children = (currentNode as any)[childrenField];
        }
    }
}
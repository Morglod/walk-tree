# walk-tree

Tree utils for efficent tree-walk tasks.

## API

```ts
async function walk(
    node: Node,
    /** return `false` to stop walking */
    onNode: (node: Node, currentDeep: number, walkCache: WalkMap<Node>) => boolean|void|Promise<boolean|void>,
    childrenField: ChildrenField = ('children' as any),
);
```

This method skips root `node` and dont call `onNode` for it.  
Deep-first strategy.  
No recursion.

* `node` - Root node with children.
* `onNode(node)` - Called for each node. If return `false`, stops walking.
* `childrenField` - Field name for children. ('children' by default).
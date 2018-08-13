import { walk } from './index';

const tree0 = {};

const tree1 = {
    a: 10,
    b: 20,
    c: 30,
};

const tree2 = {
    children: [{
        x: 'hello',
        y: 'world',
    }],
};

const tree3 = {
    children: [{
        xx: 'hello',
        yx: 'world',
        children: [{
            words: [ 'a', 'b' ],
            children: [tree2],
        }],
    }],
};

const tree4 = {
    children: [ tree1, tree2, tree3, {}, { children: [] } ],
};

(function() {
    walk(tree4, (node, deep, map) => {
        console.log(deep, JSON.stringify(node), JSON.stringify(map));
    });
})();
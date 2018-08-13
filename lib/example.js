"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var tree0 = {};
var tree1 = {
    a: 10,
    b: 20,
    c: 30,
};
var tree2 = {
    children: [{
            x: 'hello',
            y: 'world',
        }],
};
var tree3 = {
    children: [{
            xx: 'hello',
            yx: 'world',
            children: [{
                    words: ['a', 'b'],
                    children: [tree2],
                }],
        }],
};
var tree4 = {
    children: [tree1, tree2, tree3, {}, { children: [] }],
};
(function () {
    index_1.walk(tree4, function (node, deep, map) {
        console.log(deep, JSON.stringify(node), JSON.stringify(map));
    });
})();
//# sourceMappingURL=example.js.map
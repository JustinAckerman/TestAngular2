"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NameList = (function () {
    function NameList() {
        this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
    }
    NameList.prototype.get = function () {
        return this.names;
    };
    NameList.prototype.add = function (value) {
        console.log(value);
        this.names.push(value);
    };
    NameList.prototype.remove = function (index) {
        this.names.splice(index, 1);
    };
    return NameList;
}());
exports.NameList = NameList;
//# sourceMappingURL=name_list.service.js.map
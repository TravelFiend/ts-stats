"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (a) { return +a; });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

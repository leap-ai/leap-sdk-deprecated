"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeapHook = void 0;
const react_1 = require("react");
function LeapHook() {
    (0, react_1.useEffect)(() => {
        console.log("LeapHook");
    }, []);
    return "leapHookResponse";
}
exports.LeapHook = LeapHook;

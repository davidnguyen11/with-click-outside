"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;
function contains(parent, child) {
  if (parent.contains(child)) return true;
  return false;
}
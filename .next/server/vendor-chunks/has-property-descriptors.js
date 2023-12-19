"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-property-descriptors";
exports.ids = ["vendor-chunks/has-property-descriptors"];
exports.modules = {

/***/ "(ssr)/./app/node_modules/has-property-descriptors/index.js":
/*!************************************************************!*\
  !*** ./app/node_modules/has-property-descriptors/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./app/node_modules/get-intrinsic/index.js\");\nvar $defineProperty = GetIntrinsic(\"%Object.defineProperty%\", true);\nvar hasPropertyDescriptors = function hasPropertyDescriptors() {\n    if ($defineProperty) {\n        try {\n            $defineProperty({}, \"a\", {\n                value: 1\n            });\n            return true;\n        } catch (e) {\n            // IE 8 has a broken defineProperty\n            return false;\n        }\n    }\n    return false;\n};\nhasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {\n    // node v0.6 has a bug where array lengths can be Set but not Defined\n    if (!hasPropertyDescriptors()) {\n        return null;\n    }\n    try {\n        return $defineProperty([], \"length\", {\n            value: 1\n        }).length !== 1;\n    } catch (e) {\n        // In Firefox 4-22, defining length on an array throws an exception.\n        return true;\n    }\n};\nmodule.exports = hasPropertyDescriptors;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9hcHAvbm9kZV9tb2R1bGVzL2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLGVBQWVDLG1CQUFPQSxDQUFDO0FBRTNCLElBQUlDLGtCQUFrQkYsYUFBYSwyQkFBMkI7QUFFOUQsSUFBSUcseUJBQXlCLFNBQVNBO0lBQ3JDLElBQUlELGlCQUFpQjtRQUNwQixJQUFJO1lBQ0hBLGdCQUFnQixDQUFDLEdBQUcsS0FBSztnQkFBRUUsT0FBTztZQUFFO1lBQ3BDLE9BQU87UUFDUixFQUFFLE9BQU9DLEdBQUc7WUFDWCxtQ0FBbUM7WUFDbkMsT0FBTztRQUNSO0lBQ0Q7SUFDQSxPQUFPO0FBQ1I7QUFFQUYsdUJBQXVCRyx1QkFBdUIsR0FBRyxTQUFTQTtJQUN6RCxxRUFBcUU7SUFDckUsSUFBSSxDQUFDSCwwQkFBMEI7UUFDOUIsT0FBTztJQUNSO0lBQ0EsSUFBSTtRQUNILE9BQU9ELGdCQUFnQixFQUFFLEVBQUUsVUFBVTtZQUFFRSxPQUFPO1FBQUUsR0FBR0csTUFBTSxLQUFLO0lBQy9ELEVBQUUsT0FBT0YsR0FBRztRQUNYLG9FQUFvRTtRQUNwRSxPQUFPO0lBQ1I7QUFDRDtBQUVBRyxPQUFPQyxPQUFPLEdBQUdOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWkvLi9hcHAvbm9kZV9tb2R1bGVzL2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycy9pbmRleC5qcz81NTlmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcblxudmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnMgPSBmdW5jdGlvbiBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzKCkge1xuXHRpZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdCRkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IHZhbHVlOiAxIH0pO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gSUUgOCBoYXMgYSBicm9rZW4gZGVmaW5lUHJvcGVydHlcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuaGFzUHJvcGVydHlEZXNjcmlwdG9ycy5oYXNBcnJheUxlbmd0aERlZmluZUJ1ZyA9IGZ1bmN0aW9uIGhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnKCkge1xuXHQvLyBub2RlIHYwLjYgaGFzIGEgYnVnIHdoZXJlIGFycmF5IGxlbmd0aHMgY2FuIGJlIFNldCBidXQgbm90IERlZmluZWRcblx0aWYgKCFoYXNQcm9wZXJ0eURlc2NyaXB0b3JzKCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiAkZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHZhbHVlOiAxIH0pLmxlbmd0aCAhPT0gMTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIEluIEZpcmVmb3ggNC0yMiwgZGVmaW5pbmcgbGVuZ3RoIG9uIGFuIGFycmF5IHRocm93cyBhbiBleGNlcHRpb24uXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUHJvcGVydHlEZXNjcmlwdG9ycztcbiJdLCJuYW1lcyI6WyJHZXRJbnRyaW5zaWMiLCJyZXF1aXJlIiwiJGRlZmluZVByb3BlcnR5IiwiaGFzUHJvcGVydHlEZXNjcmlwdG9ycyIsInZhbHVlIiwiZSIsImhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnIiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./app/node_modules/has-property-descriptors/index.js\n");

/***/ })

};
;
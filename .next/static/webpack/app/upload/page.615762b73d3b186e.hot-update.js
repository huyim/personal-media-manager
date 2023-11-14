'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('app/upload/page', {
  /***/ '(app-pages-browser)/./components/FileUpload.tsx':
    /*!***********************************!*\
  !*** ./components/FileUpload.tsx ***!
  \***********************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "(app-pages-browser)/./node_modules/next/image.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SingleFileUploadForm = ()=>{\n    _s();\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [previewUrl, setPreviewUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    //const [videoFile, setVideoFile] = useState();\n    const onCancelFile = async ()=>{\n        if (!previewUrl && !file) {\n            return;\n        }\n        setFile(null);\n        setPreviewUrl(null);\n    };\n    const handleUpload = async ()=>{\n        setUploading(true);\n        try {\n            if (!file) {\n                return;\n            }\n            const formData = new FormData();\n            formData.append("media", file);\n            fetch("http://localhost:8080/add/file", {\n                method: "POST",\n                body: formData\n            }).then((response)=>response.json());\n            console.log("File was uploaded successfully:", file["name"]);\n        } catch (error) {\n            console.error(error);\n            alert("File upload failed.");\n        }\n        setUploading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {\n        className: "w-full border border-dashed border-gray-500 p-3",\n        onSubmit: (e)=>e.preventDefault(),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "flex flex-col gap-1.5 md:flex-row md:py-4",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "flex-grow",\n                    children: previewUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                        className: "mx-auto w-80",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            alt: "file uploader preview",\n                            style: {\n                                objectFit: "cover"\n                            },\n                            src: previewUrl,\n                            width: 320,\n                            height: 218,\n                            layout: "fixed"\n                        }, void 0, false, {\n                            fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {\n                        className: "flex h-full cursor-pointer flex-col items-center justify-center py-3 transition-colors duration-150 hover:text-gray-600",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {\n                                xmlns: "http://www.w3.org/2000/svg",\n                                width: "24",\n                                height: "24",\n                                viewBox: "0 0 24 24",\n                                fill: "none",\n                                stroke: "#000000",\n                                strokeWidth: "2",\n                                strokeLinecap: "round",\n                                strokeLinejoin: "round",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                                    transform: "translate(2 3)",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {\n                                            d: "M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"\n                                        }, void 0, false, {\n                                            fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                            cx: "10",\n                                            cy: "10",\n                                            r: "4"\n                                        }, void 0, false, {\n                                            fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {\n                                className: "text-sm font-medium text-black",\n                                children: "Select an image or a video"\n                            }, void 0, false, {\n                                fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {\n                                className: "block h-0 w-0",\n                                name: "file",\n                                type: "file",\n                                onChange: (param)=>{\n                                    let { target } = param;\n                                    if (target.files) {\n                                        const file = target.files[0];\n                                        /** Setting file state */ setFile(file); // we will use the file state, to send it later to the server\n                                        setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image}\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "mt-4 flex justify-center gap-1.5 md:mt-0 md:flex-col",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                        disabled: !previewUrl,\n                        onClick: onCancelFile,\n                        className: "w-1/2 rounded-sm bg-gray-700 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-400 disabled:bg-gray-200 md:w-auto md:text-base",\n                        children: "Cancel file"\n                    }, void 0, false, {\n                        fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                        disabled: !previewUrl,\n                        onClick: handleUpload,\n                        className: "w-1/2 rounded-sm bg-gray-700 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-800 disabled:bg-gray-200 md:w-auto md:text-base",\n                        children: "Save & Upload"\n                    }, void 0, false, {\n                        fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SingleFileUploadForm, "gATqRNDUde5wlpRama3TYEWJ6VY=");\n_c = SingleFileUploadForm;\n/* harmony default export */ __webpack_exports__["default"] = (SingleFileUploadForm);\nvar _c;\n$RefreshReg$(_c, "SingleFileUploadForm");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmlsZVVwbG9hZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHK0I7QUFDRTtBQUtqQyxNQUFNRSx1QkFBd0M7O0lBQzVDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFnQjtJQUM1RCwrQ0FBK0M7SUFFL0MsTUFBTVEsZUFBZTtRQUNuQixJQUFJLENBQUNGLGNBQWMsQ0FBQ0YsTUFBTTtZQUN4QjtRQUNGO1FBQ0FDLFFBQVE7UUFDUkUsY0FBYztJQUNoQjtJQUVBLE1BQU1FLGVBQWU7UUFDbkJOLGFBQWE7UUFDYixJQUFJO1lBQ0YsSUFBSSxDQUFDQyxNQUFNO2dCQUNUO1lBQ0Y7WUFFQSxNQUFNTSxXQUFXLElBQUlDO1lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU1I7WUFFekJTLE1BQU0sa0NBQWtDO2dCQUN0Q0MsUUFBUTtnQkFDUkMsTUFBTUw7WUFDUixHQUFHTSxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSTtZQUVuQ0MsUUFBUUMsR0FBRyxDQUFDLG1DQUFtQ2hCLElBQUksQ0FBQyxPQUFPO1FBQzdELEVBQUUsT0FBT2lCLE9BQVk7WUFDbkJGLFFBQVFFLEtBQUssQ0FBQ0E7WUFDZEMsTUFBTTtRQUNSO1FBQ0FuQixhQUFhO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ29CO1FBQ0NDLFdBQVU7UUFDVkMsVUFBVSxDQUFDQyxJQUFNQSxFQUFFQyxjQUFjOzswQkFFakMsOERBQUNDO2dCQUFJSixXQUFVOzBCQUNiLDRFQUFDSTtvQkFBSUosV0FBVTs4QkFDWmxCLDJCQUNDLDhEQUFDc0I7d0JBQUlKLFdBQVU7a0NBQ2IsNEVBQUN6QixtREFBS0E7NEJBQ0o4QixLQUFJOzRCQUNKQyxPQUFPO2dDQUFFQyxXQUFXOzRCQUFROzRCQUM1QkMsS0FBSzFCOzRCQUNMMkIsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsUUFBTzs7Ozs7Ozs7OztrREFJWCw4REFBQ0M7d0JBQU1aLFdBQVU7OzBDQUNmLDhEQUFDYTtnQ0FDQ0MsT0FBTTtnQ0FDTkwsT0FBTTtnQ0FDTkMsUUFBTztnQ0FDUEssU0FBUTtnQ0FDUkMsTUFBSztnQ0FDTEMsUUFBTztnQ0FDUEMsYUFBWTtnQ0FDWkMsZUFBYztnQ0FDZEMsZ0JBQWU7MENBRWYsNEVBQUNDO29DQUFFQyxXQUFVOztzREFDWCw4REFBQ0M7NENBQUtDLEdBQUU7Ozs7OztzREFDUiw4REFBQ0M7NENBQU9DLElBQUc7NENBQUtDLElBQUc7NENBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUc5Qiw4REFBQ0M7Z0NBQU83QixXQUFVOzBDQUFpQzs7Ozs7OzBDQUduRCw4REFBQzhCO2dDQUNDOUIsV0FBVTtnQ0FDVitCLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xDLFVBQVU7d0NBQUMsRUFBRUMsTUFBTSxFQUFFO29DQUNuQixJQUFJQSxPQUFPQyxLQUFLLEVBQUU7d0NBQ2hCLE1BQU12RCxPQUFPc0QsT0FBT0MsS0FBSyxDQUFDLEVBQUU7d0NBQzVCLHVCQUF1QixHQUN2QnRELFFBQVFELE9BQU8sNkRBQTZEO3dDQUU1RUcsY0FBY3FELElBQUlDLGVBQWUsQ0FBQ3pELFFBQVEscURBQXFEO29DQUNqRztnQ0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNViw4REFBQ3dCO2dCQUFJSixXQUFVOztrQ0FDYiw4REFBQ3NDO3dCQUNDQyxVQUFVLENBQUN6RDt3QkFDWDBELFNBQVN4RDt3QkFDVGdCLFdBQVU7a0NBQ1g7Ozs7OztrQ0FJRCw4REFBQ3NDO3dCQUNDQyxVQUFVLENBQUN6RDt3QkFDWDBELFNBQVN2RDt3QkFDVGUsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1Q7R0FsSE12QjtLQUFBQTtBQW9ITiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmlsZVVwbG9hZC50c3g/Y2VlYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5jb25zdCBTaW5nbGVGaWxlVXBsb2FkRm9ybTogTmV4dFBhZ2U8UHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCBbdXBsb2FkaW5nLCBzZXRVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwcmV2aWV3VXJsLCBzZXRQcmV2aWV3VXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAvL2NvbnN0IFt2aWRlb0ZpbGUsIHNldFZpZGVvRmlsZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uQ2FuY2VsRmlsZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXByZXZpZXdVcmwgJiYgIWZpbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0RmlsZShudWxsKTtcbiAgICBzZXRQcmV2aWV3VXJsKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghZmlsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ21lZGlhJywgZmlsZSk7XG5cbiAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYWRkL2ZpbGUnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgICBjb25zb2xlLmxvZygnRmlsZSB3YXMgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5OicsIGZpbGVbJ25hbWUnXSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBhbGVydCgnRmlsZSB1cGxvYWQgZmFpbGVkLicpO1xuICAgIH1cbiAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItZ3JheS01MDAgcC0zXCJcbiAgICAgIG9uU3VibWl0PXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMS41IG1kOmZsZXgtcm93IG1kOnB5LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cbiAgICAgICAgICB7cHJldmlld1VybCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LTgwXCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGFsdD1cImZpbGUgdXBsb2FkZXIgcHJldmlld1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiAnY292ZXInIH19XG4gICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3VXJsfVxuICAgICAgICAgICAgICAgIHdpZHRoPXszMjB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMTh9XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBjdXJzb3ItcG9pbnRlciBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMiAzKVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMCAxNmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY1YzAtMS4xLjktMiAyLTJoM2wyLTNoNmwyIDNoM2EyIDIgMCAwIDEgMiAydjExelwiIC8+XG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgU2VsZWN0IGFuIGltYWdlIG9yIGEgdmlkZW9cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGgtMCB3LTBcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgICAgIC8qKiBTZXR0aW5nIGZpbGUgc3RhdGUgKi9cbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsZShmaWxlKTsgLy8gd2Ugd2lsbCB1c2UgdGhlIGZpbGUgc3RhdGUsIHRvIHNlbmQgaXQgbGF0ZXIgdG8gdGhlIHNlcnZlclxuXG4gICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXdVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7IC8vIHdlIHdpbGwgdXNlIHRoaXMgdG8gc2hvdyB0aGUgcHJldmlldyBvZiB0aGUgaW1hZ2V9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGp1c3RpZnktY2VudGVyIGdhcC0xLjUgbWQ6bXQtMCBtZDpmbGV4LWNvbFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyFwcmV2aWV3VXJsfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2FuY2VsRmlsZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMiByb3VuZGVkLXNtIGJnLWdyYXktNzAwIHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOmJnLXJlZC00MDAgZGlzYWJsZWQ6YmctZ3JheS0yMDAgbWQ6dy1hdXRvIG1kOnRleHQtYmFzZVwiXG4gICAgICAgID5cbiAgICAgICAgICBDYW5jZWwgZmlsZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvJHsnZXhwbG9yYXRpb24nfWB9PiAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXshcHJldmlld1VybH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgcm91bmRlZC1zbSBiZy1ncmF5LTcwMCBweC00IHB5LTMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1ibHVlLTgwMCBkaXNhYmxlZDpiZy1ncmF5LTIwMCBtZDp3LWF1dG8gbWQ6dGV4dC1iYXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIFNhdmUgJiBVcGxvYWRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHsvKiA8L0xpbms+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlRmlsZVVwbG9hZEZvcm07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlNpbmdsZUZpbGVVcGxvYWRGb3JtIiwidXBsb2FkaW5nIiwic2V0VXBsb2FkaW5nIiwiZmlsZSIsInNldEZpbGUiLCJwcmV2aWV3VXJsIiwic2V0UHJldmlld1VybCIsIm9uQ2FuY2VsRmlsZSIsImhhbmRsZVVwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJhbHQiLCJzdHlsZSIsIm9iamVjdEZpdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwibGFiZWwiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJnIiwidHJhbnNmb3JtIiwicGF0aCIsImQiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInN0cm9uZyIsImlucHV0IiwibmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FileUpload.tsx\n',
        ),
      );

      /***/
    },
});

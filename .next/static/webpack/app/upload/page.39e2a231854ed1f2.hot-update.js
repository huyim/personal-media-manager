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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "(app-pages-browser)/./node_modules/next/image.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SingleFileUploadForm = ()=>{\n    _s();\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [previewUrl, setPreviewUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    //const [videoFile, setVideoFile] = useState();\n    const onCancelFile = async ()=>{\n        if (!previewUrl && !file) {\n            return;\n        }\n        setFile(null);\n        setPreviewUrl(null);\n    };\n    const handleUpload = async ()=>{\n        setUploading(true);\n        try {\n            if (!file) {\n                return;\n            }\n            const formData = new FormData();\n            formData.append("media", file);\n            fetch("http://localhost:8080/add/file", {\n                method: "POST",\n                body: formData\n            }).then((response)=>response.json());\n            console.log("File was uploaded successfully:", file["name"]);\n        } catch (error) {\n            console.error(error);\n            alert("File upload failed.");\n        }\n        setUploading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {\n        className: "w-full border-gray-500 p-3",\n        onSubmit: (e)=>e.preventDefault(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            className: "flex flex-col gap-1.5 md:flex-row md:py-4",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "justify-bottom mt-4 flex gap-1.5 md:mt-0 md:flex-col",\n                    children: "fileinfo"\n                }, void 0, false, {\n                    fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "flex-grow",\n                    children: previewUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                        className: "mx-auto w-80",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            alt: "file uploader preview",\n                            style: {\n                                objectFit: "cover"\n                            },\n                            src: previewUrl,\n                            width: 320,\n                            height: 218,\n                            layout: "fixed"\n                        }, void 0, false, {\n                            fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {\n                        className: "flex h-full cursor-pointer flex-col items-center justify-center py-3 transition-colors duration-150 hover:text-gray-600",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {\n                                xmlns: "http://www.w3.org/2000/svg",\n                                width: "24",\n                                height: "24",\n                                viewBox: "0 0 24 24",\n                                fill: "none",\n                                stroke: "#000000",\n                                strokeWidth: "2",\n                                strokeLinecap: "round",\n                                strokeLinejoin: "round",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                                    transform: "translate(2 3)",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {\n                                            d: "M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"\n                                        }, void 0, false, {\n                                            fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                            cx: "10",\n                                            cy: "10",\n                                            r: "4"\n                                        }, void 0, false, {\n                                            fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                            lineNumber: 83,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {\n                                className: "text-sm font-medium text-black",\n                                children: "Select an image or a video"\n                            }, void 0, false, {\n                                fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {\n                                className: "block h-0 w-0",\n                                name: "file",\n                                type: "file",\n                                onChange: (param)=>{\n                                    let { target } = param;\n                                    if (target.files) {\n                                        const file = target.files[0];\n                                        /** Setting file state */ setFile(file); // we will use the file state, to send it later to the server\n                                        setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image}\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "justify-top mt-4 flex gap-1.5 md:mt-0 md:flex-col",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                            disabled: !previewUrl,\n                            onClick: handleUpload,\n                            className: "w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-800 disabled:bg-gray-200 md:w-auto md:text-base",\n                            children: "Save & Upload"\n                        }, void 0, false, {\n                            fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                            disabled: !previewUrl,\n                            onClick: onCancelFile,\n                            className: "w-1/2 rounded-sm bg-gray-700 px-2 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-400 disabled:bg-gray-200 md:w-auto md:text-base",\n                            children: "Cancel file"\n                        }, void 0, false, {\n                            fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: "/Users/hu/personal-media-manager/components/FileUpload.tsx",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SingleFileUploadForm, "gATqRNDUde5wlpRama3TYEWJ6VY=");\n_c = SingleFileUploadForm;\n/* harmony default export */ __webpack_exports__["default"] = (SingleFileUploadForm);\nvar _c;\n$RefreshReg$(_c, "SingleFileUploadForm");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmlsZVVwbG9hZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHK0I7QUFDRTtBQUtqQyxNQUFNRSx1QkFBd0M7O0lBQzVDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFnQjtJQUM1RCwrQ0FBK0M7SUFFL0MsTUFBTVEsZUFBZTtRQUNuQixJQUFJLENBQUNGLGNBQWMsQ0FBQ0YsTUFBTTtZQUN4QjtRQUNGO1FBQ0FDLFFBQVE7UUFDUkUsY0FBYztJQUNoQjtJQUVBLE1BQU1FLGVBQWU7UUFDbkJOLGFBQWE7UUFDYixJQUFJO1lBQ0YsSUFBSSxDQUFDQyxNQUFNO2dCQUNUO1lBQ0Y7WUFFQSxNQUFNTSxXQUFXLElBQUlDO1lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU1I7WUFFekJTLE1BQU0sa0NBQWtDO2dCQUN0Q0MsUUFBUTtnQkFDUkMsTUFBTUw7WUFDUixHQUFHTSxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSTtZQUVuQ0MsUUFBUUMsR0FBRyxDQUFDLG1DQUFtQ2hCLElBQUksQ0FBQyxPQUFPO1FBQzdELEVBQUUsT0FBT2lCLE9BQVk7WUFDbkJGLFFBQVFFLEtBQUssQ0FBQ0E7WUFDZEMsTUFBTTtRQUNSO1FBQ0FuQixhQUFhO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ29CO1FBQ0NDLFdBQVU7UUFDVkMsVUFBVSxDQUFDQyxJQUFNQSxFQUFFQyxjQUFjO2tCQUVqQyw0RUFBQ0M7WUFBSUosV0FBVTs7OEJBQ2IsOERBQUNJO29CQUFJSixXQUFVOzhCQUF1RDs7Ozs7OzhCQUd0RSw4REFBQ0k7b0JBQUlKLFdBQVU7OEJBQ1psQiwyQkFDQyw4REFBQ3NCO3dCQUFJSixXQUFVO2tDQUNiLDRFQUFDekIsbURBQUtBOzRCQUNKOEIsS0FBSTs0QkFDSkMsT0FBTztnQ0FBRUMsV0FBVzs0QkFBUTs0QkFDNUJDLEtBQUsxQjs0QkFDTDJCLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFFBQU87Ozs7Ozs7Ozs7a0RBSVgsOERBQUNDO3dCQUFNWixXQUFVOzswQ0FDZiw4REFBQ2E7Z0NBQ0NDLE9BQU07Z0NBQ05MLE9BQU07Z0NBQ05DLFFBQU87Z0NBQ1BLLFNBQVE7Z0NBQ1JDLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BDLGFBQVk7Z0NBQ1pDLGVBQWM7Z0NBQ2RDLGdCQUFlOzBDQUVmLDRFQUFDQztvQ0FBRUMsV0FBVTs7c0RBQ1gsOERBQUNDOzRDQUFLQyxHQUFFOzs7Ozs7c0RBQ1IsOERBQUNDOzRDQUFPQyxJQUFHOzRDQUFLQyxJQUFHOzRDQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHOUIsOERBQUNDO2dDQUFPN0IsV0FBVTswQ0FBaUM7Ozs7OzswQ0FHbkQsOERBQUM4QjtnQ0FDQzlCLFdBQVU7Z0NBQ1YrQixNQUFLO2dDQUNMQyxNQUFLO2dDQUNMQyxVQUFVO3dDQUFDLEVBQUVDLE1BQU0sRUFBRTtvQ0FDbkIsSUFBSUEsT0FBT0MsS0FBSyxFQUFFO3dDQUNoQixNQUFNdkQsT0FBT3NELE9BQU9DLEtBQUssQ0FBQyxFQUFFO3dDQUM1Qix1QkFBdUIsR0FDdkJ0RCxRQUFRRCxPQUFPLDZEQUE2RDt3Q0FFNUVHLGNBQWNxRCxJQUFJQyxlQUFlLENBQUN6RCxRQUFRLHFEQUFxRDtvQ0FDakc7Z0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtSLDhEQUFDd0I7b0JBQUlKLFdBQVU7O3NDQUNiLDhEQUFDc0M7NEJBQ0NDLFVBQVUsQ0FBQ3pEOzRCQUNYMEQsU0FBU3ZEOzRCQUNUZSxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNzQzs0QkFDQ0MsVUFBVSxDQUFDekQ7NEJBQ1gwRCxTQUFTeEQ7NEJBQ1RnQixXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBbkhNdkI7S0FBQUE7QUFxSE4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQudHN4P2NlZWMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuY29uc3QgU2luZ2xlRmlsZVVwbG9hZEZvcm06IE5leHRQYWdlPFByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgW3VwbG9hZGluZywgc2V0VXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcHJldmlld1VybCwgc2V0UHJldmlld1VybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgLy9jb25zdCBbdmlkZW9GaWxlLCBzZXRWaWRlb0ZpbGVdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvbkNhbmNlbEZpbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFwcmV2aWV3VXJsICYmICFmaWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEZpbGUobnVsbCk7XG4gICAgc2V0UHJldmlld1VybChudWxsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0VXBsb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdtZWRpYScsIGZpbGUpO1xuXG4gICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FkZC9maWxlJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuICAgICAgY29uc29sZS5sb2coJ0ZpbGUgd2FzIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseTonLCBmaWxlWyduYW1lJ10pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgYWxlcnQoJ0ZpbGUgdXBsb2FkIGZhaWxlZC4nKTtcbiAgICB9XG4gICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWdyYXktNTAwIHAtM1wiXG4gICAgICBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEuNSBtZDpmbGV4LXJvdyBtZDpweS00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1ib3R0b20gbXQtNCBmbGV4IGdhcC0xLjUgbWQ6bXQtMCBtZDpmbGV4LWNvbFwiPlxuICAgICAgICAgIGZpbGVpbmZvXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIHtwcmV2aWV3VXJsID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctODBcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgYWx0PVwiZmlsZSB1cGxvYWRlciBwcmV2aWV3XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicgfX1cbiAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdVcmx9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIxOH1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGN1cnNvci1wb2ludGVyIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0zIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBob3Zlcjp0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyIDMpXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDE2YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjVjMC0xLjEuOS0yIDItMmgzbDItM2g2bDIgM2gzYTIgMiAwIDAgMSAyIDJ2MTF6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiNFwiIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgICBTZWxlY3QgYW4gaW1hZ2Ugb3IgYSB2aWRlb1xuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaC0wIHctMFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgLyoqIFNldHRpbmcgZmlsZSBzdGF0ZSAqL1xuICAgICAgICAgICAgICAgICAgICBzZXRGaWxlKGZpbGUpOyAvLyB3ZSB3aWxsIHVzZSB0aGUgZmlsZSBzdGF0ZSwgdG8gc2VuZCBpdCBsYXRlciB0byB0aGUgc2VydmVyXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0UHJldmlld1VybChVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTsgLy8gd2Ugd2lsbCB1c2UgdGhpcyB0byBzaG93IHRoZSBwcmV2aWV3IG9mIHRoZSBpbWFnZX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LXRvcCBtdC00IGZsZXggZ2FwLTEuNSBtZDptdC0wIG1kOmZsZXgtY29sXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcmV2aWV3VXJsfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBsb2FkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgcm91bmRlZC1zbSBiZy1ncmF5LTcwMCBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1ibHVlLTgwMCBkaXNhYmxlZDpiZy1ncmF5LTIwMCBtZDp3LWF1dG8gbWQ6dGV4dC1iYXNlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYXZlICYgVXBsb2FkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcmV2aWV3VXJsfVxuICAgICAgICAgICAgb25DbGljaz17b25DYW5jZWxGaWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgcm91bmRlZC1zbSBiZy1ncmF5LTcwMCBweC0yIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1yZWQtNDAwIGRpc2FibGVkOmJnLWdyYXktMjAwIG1kOnctYXV0byBtZDp0ZXh0LWJhc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbmNlbCBmaWxlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlRmlsZVVwbG9hZEZvcm07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlNpbmdsZUZpbGVVcGxvYWRGb3JtIiwidXBsb2FkaW5nIiwic2V0VXBsb2FkaW5nIiwiZmlsZSIsInNldEZpbGUiLCJwcmV2aWV3VXJsIiwic2V0UHJldmlld1VybCIsIm9uQ2FuY2VsRmlsZSIsImhhbmRsZVVwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJhbHQiLCJzdHlsZSIsIm9iamVjdEZpdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwibGFiZWwiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJnIiwidHJhbnNmb3JtIiwicGF0aCIsImQiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInN0cm9uZyIsImlucHV0IiwibmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FileUpload.tsx\n',
        ),
      );

      /***/
    },
});

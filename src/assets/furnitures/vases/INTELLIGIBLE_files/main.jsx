import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=89f98125"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=89f98125"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=89f98125"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/components/Landing.jsx";
import Landing from "/src/components/Landing.jsx";
import NotFound from "/src/components/NotFound.jsx";
import Canvas from "/src/components/Canvas.jsx";
import "/src/index.css";
import { createBrowserRouter, RouterProvider, useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=89f98125";
import AR from "/src/components/AR.jsx";
const router = createBrowserRouter([
    {
        path: '',
        element: /*#__PURE__*/ _jsxDEV(Landing, {}, void 0, false, {
            fileName: "D:/OneDrive-CMU/Desktop_Dell/jwc13-cny/src/main.jsx",
            lineNumber: 17,
            columnNumber: 14
        }, this),
        errorElement: /*#__PURE__*/ _jsxDEV(NotFound, {}, void 0, false, {
            fileName: "D:/OneDrive-CMU/Desktop_Dell/jwc13-cny/src/main.jsx",
            lineNumber: 18,
            columnNumber: 19
        }, this)
    },
    {
        path: '/canvas',
        element: /*#__PURE__*/ _jsxDEV(Canvas, {}, void 0, false, {
            fileName: "D:/OneDrive-CMU/Desktop_Dell/jwc13-cny/src/main.jsx",
            lineNumber: 22,
            columnNumber: 14
        }, this),
        errorElement: /*#__PURE__*/ _jsxDEV(NotFound, {}, void 0, false, {
            fileName: "D:/OneDrive-CMU/Desktop_Dell/jwc13-cny/src/main.jsx",
            lineNumber: 23,
            columnNumber: 19
        }, this)
    },
    {
        path: '/AR',
        element: /*#__PURE__*/ _jsxDEV(AR, {}, void 0, false, {
            fileName: "D:/OneDrive-CMU/Desktop_Dell/jwc13-cny/src/main.jsx",
            lineNumber: 27,
            columnNumber: 14
        }, this),
        errorElement: /*#__PURE__*/ _jsxDEV(NotFound, {}, void 0, false, {
            fileName: "D:/OneDrive-CMU/Desktop_Dell/jwc13-cny/src/main.jsx",
            lineNumber: 28,
            columnNumber: 19
        }, this)
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/ _jsxDEV(React.StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(RouterProvider, {
        router: router
    }, void 0, false, {
        fileName: "D:/OneDrive-CMU/Desktop_Dell/jwc13-cny/src/main.jsx",
        lineNumber: 35,
        columnNumber: 6
    }, this)
}, void 0, false, {
    fileName: "D:/OneDrive-CMU/Desktop_Dell/jwc13-cny/src/main.jsx",
    lineNumber: 34,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0xhbmRpbmcnXHJcblxyXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2NvbXBvbmVudHMvTGFuZGluZy5qc3gnXHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQuanN4J1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vY29tcG9uZW50cy9DYW52YXMuanN4J1xyXG5cclxuaW1wb3J0ICcuL2luZGV4LmNzcydcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJSb3V0ZXIsIFJvdXRlclByb3ZpZGVyLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFSIGZyb20gJy4vY29tcG9uZW50cy9BUi5qc3gnXHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGVsZW1lbnQ6IDxMYW5kaW5nIC8+LFxyXG4gICAgZXJyb3JFbGVtZW50OiA8Tm90Rm91bmQgLz5cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvY2FudmFzJyxcclxuICAgIGVsZW1lbnQ6IDxDYW52YXMgLz4sXHJcbiAgICBlcnJvckVsZW1lbnQ6IDxOb3RGb3VuZCAvPlxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9BUicsXHJcbiAgICBlbGVtZW50OiA8QVIgLz4sXHJcbiAgICBlcnJvckVsZW1lbnQ6IDxOb3RGb3VuZCAvPlxyXG4gIH1cclxuXSk7XHJcblxyXG5cclxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXHJcbiAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxyXG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXHJcbilcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJMYW5kaW5nIiwiTm90Rm91bmQiLCJDYW52YXMiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJ1c2VQYXJhbXMiLCJBUiIsInJvdXRlciIsInBhdGgiLCJlbGVtZW50IiwiZXJyb3JFbGVtZW50IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIl0sIm1hcHBpbmdzIjoiO0FBQUEsT0FBT0EsV0FBVyxRQUFPO0FBQ3pCLE9BQU9DLGNBQWMsbUJBQWtCO0FBQ3ZDLE9BQU9DLFNBQVMsdUJBQXNCO0FBRXRDLE9BQU9DLGFBQWEsMkJBQTBCO0FBQzlDLE9BQU9DLGNBQWMsNEJBQTJCO0FBQ2hELE9BQU9DLFlBQVksMEJBQXlCO0FBRTVDLE9BQU8sY0FBYTtBQUVwQixTQUFTQyxtQkFBbUIsRUFBRUMsY0FBYyxFQUFFQyxTQUFTLFFBQVEsbUJBQW1CO0FBQ2xGLE9BQU9DLFFBQVEsc0JBQXFCO0FBRXBDLE1BQU1DLFNBQVNKLG9CQUFvQjtJQUNqQztRQUNFSyxNQUFNO1FBQ05DLHVCQUFTLFFBQUNUOzs7OztRQUNWVSw0QkFBYyxRQUFDVDs7Ozs7SUFDakI7SUFDQTtRQUNFTyxNQUFNO1FBQ05DLHVCQUFTLFFBQUNQOzs7OztRQUNWUSw0QkFBYyxRQUFDVDs7Ozs7SUFDakI7SUFDQTtRQUNFTyxNQUFNO1FBQ05DLHVCQUFTLFFBQUNIOzs7OztRQUNWSSw0QkFBYyxRQUFDVDs7Ozs7SUFDakI7Q0FDRDtBQUdESCxTQUFTYSxVQUFVLENBQUNDLFNBQVNDLGNBQWMsQ0FBQyxTQUFTQyxNQUFNLGVBQ3pELFFBQUNqQixNQUFNa0IsVUFBVTtjQUNkLGNBQUEsUUFBQ1g7UUFBZUcsUUFBUUEifQ==
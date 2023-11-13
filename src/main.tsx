/*
 * @Author: Edison Tg:@web_tgg02
 * @LastEditors: Edison Tg:@web_tgg02
 * @Date: 2023-10-25 21:20:26
 * @LastEditTime: 2023-10-26 15:27:31
 * @FilePath: /Edison/src/main.tsx
 * Copyright (c) 2023 by Edison, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);

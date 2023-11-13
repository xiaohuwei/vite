/*
 * @Author: Edison Tg:@web_tgg02
 * @LastEditors: Edison Tg:@web_tgg02
 * @Date: 2023-10-25 21:20:26
 * @LastEditTime: 2023-10-26 12:33:44
 * @FilePath: /Edison/vite.config.ts
 * Copyright (c) 2023 by Edison, All Rights Reserved.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

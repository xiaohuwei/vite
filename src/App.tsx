/*
 * @Author: Edison Tg:@web_tgg02
 * @LastEditors: Edison Tg:@web_tgg02
 * @Date: 2023-10-25 21:20:26
 * @LastEditTime: 2023-10-26 15:13:45
 * @FilePath: /Edison/src/App.tsx
 * Copyright (c) 2023 by Edison, All Rights Reserved.
 */

import { router } from "@/routes";
import { RouterGurad } from "@/routes/middware";
import { Suspense } from "react";
import Header from "./components/Header";

// console.log(router);
function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Header />
      {RouterGurad(router)}
      <h1 className="text-cyan-700 text-5xl">Footer</h1>
    </Suspense>
  );
}

export default App;

/*
 * @Author: Edison Tg:@web_tgg02
 * @LastEditors: Edison Tg:@web_tgg02
 * @Date: 2023-10-26 12:27:27
 * @LastEditTime: 2023-10-26 14:14:24
 * @FilePath: /Edison/src/routes/index.tsx
 * Copyright (c) 2023 by Edison, All Rights Reserved.
 */
import { lazy } from "react";

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  auth?: boolean;
  component?: React.LazyExoticComponent<() => JSX.Element>;
}
const Home = lazy(() => import("@/page/home"));
const About = lazy(() => import("@/page/about"));
const NotFound = lazy(() => import("@/page/NotFound"));

export const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/ts",
        auth: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    auth: true,
    element: <About />,
  },
  {
    path: "*",
    auth: false,
    element: <NotFound />,
  },
];

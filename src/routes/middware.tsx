/* eslint-disable @typescript-eslint/ban-ts-comment */
/*
 * @Author: Edison Tg:@web_tgg02
 * @LastEditors: Edison Tg:@web_tgg02
 * @Date: 2023-10-26 11:54:22
 * @LastEditTime: 2023-10-26 14:45:06
 * @FilePath: /Edison/src/routes/middware.tsx
 * Copyright (c) 2023 by Edison, All Rights Reserved.
 */
import { useEffect } from "react";
import {
  useLocation,
  useRoutes,
  Location,
  useNavigate,
  NavigateFunction,
} from "react-router-dom";
// import { message } from "antd";

interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  auth?: boolean;
}

let isNavigated = false;

//递归查询对应的路由
export function Searchroutedetail(
  path: string,
  routes: RouteObject[]
): RouteObject | null {
  for (const item of routes) {
    if (item.path === path) {
      return item; // 找到匹配的路由，返回它
    }

    if (item.children) {
      const nestedMatch = Searchroutedetail(path, item.children);
      if (nestedMatch) {
        return nestedMatch; // 在子路由中找到匹配的路由，返回它
      }
    }
  }

  return null; // 没有找到匹配的路由
}

//全局路由守卫
function guard(
  location: Location,
  navigate: NavigateFunction,
  routes: RouteObject[]
) {
  const { pathname } = location;

  //找到对应的路由信息
  const routedetail = Searchroutedetail(pathname, routes);
  // console.log(routedetail);
  //没有找到路由，跳转404
  if (!routedetail) {
    // navigate("/404");
    return false;
  }

  //如果需要权限验证
  if (routedetail.auth && !isNavigated) {
    const token = localStorage.getItem("jiang_blog_token");
    if (!token) {
      if (!isNavigated) {
        console.error("未授权的路由，请先登录...");
        navigate("/");
        isNavigated = true; // 设置标志，以防止短时间内多次触发 navigate
        setTimeout(() => {
          isNavigated = false; // 重置标志，允许再次触发 navigate
        }, 100); // 1秒后重置标志
      }
      return false;
    }
  }
  return true;
}

export const RouterGurad = (routes: RouteObject[]) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(location);
    guard(location, navigate, routes);
  }, [location, navigate, routes]);

  // document.documentElement.scrollTo(0, 0);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const Route = useRoutes(routes);
  return Route;
};

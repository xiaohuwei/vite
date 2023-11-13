import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

/*
 * @Author: Edison Tg:@web_tgg02
 * @LastEditors: Edison Tg:@web_tgg02
 * @Date: 2023-10-26 11:56:09
 * @LastEditTime: 2023-10-26 13:56:01
 * @FilePath: /Edison/src/page/about/index.tsx
 * Copyright (c) 2023 by Edison, All Rights Reserved.
 */
const Abojut = () => {
  const navigate = useNavigate();
  return (
    <h1>
      Abojut
      <Button onClick={() => navigate("/")} color="primary">
        Home
      </Button>
      <Button onClick={() => navigate("/ts")} color="primary">
        ts
      </Button>
    </h1>
  );
};

export default Abojut;

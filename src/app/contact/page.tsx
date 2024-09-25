import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>ContactPage 입니다.</div>
      <Link href={"/about"}>about 페이지로 이동</Link>
    </div>
  );
};

export default page;

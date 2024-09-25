import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>AboutPage 입니다.</div>
      <Link href={"/contact"}>contact 페이지로 이동</Link>
    </div>
  );
};

export default page;

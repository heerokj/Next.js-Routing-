import React from "react";

type Props = {
  params: {
    id: number;
  };
};

const BlogDetailPage = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default BlogDetailPage;

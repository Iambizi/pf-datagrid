import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import MultiSelectionTable from "../components/MultiSelectionTable";


const MultiSelection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=110')
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
      console.log(posts);
  }, []);

  return (
    <>
      <Layout>
        <MultiSelectionTable posts={posts} />
      </Layout>
    </>
  );
};

export default MultiSelection;

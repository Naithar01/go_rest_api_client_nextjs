import React, { createRef, useRef, useState } from "react";
import SearchLayout from "../../components/Layouts/Search";
import { Container_body } from "../../components/Layouts/styled/Container";
import { PageHeader } from "../../components/Layouts/styled/PageContent";

const SearchPostPage = () => {
  const [searchContent, setSearchContent] = useState<string>("");

  const ChangeSearchContentHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;

    setSearchContent(value);
  };

  return (
    <Container_body>
      <PageHeader>Search Post</PageHeader>
      <SearchLayout
        onChange={ChangeSearchContentHandler}
        placeholder={"Enter Content"}
      />
    </Container_body>
  );
};

export default SearchPostPage;

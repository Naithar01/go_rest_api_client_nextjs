import React, { createRef, useRef, useState } from "react";
import SearchLayout from "../../components/Layouts/Search";
import { Container_body } from "../../components/Layouts/styled/Container.styled";
import { PageHeader } from "../../components/Layouts/styled/PageContent.styled";
import { SubmitSearchButton } from "../../components/Layouts/styled/Search";

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
      <SubmitSearchButton
        onClick={() => {
          console.log(searchContent);
        }}
      >
        Search
      </SubmitSearchButton>
    </Container_body>
  );
};

export default SearchPostPage;

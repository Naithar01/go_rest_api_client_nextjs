import { useRouter } from "next/router";
import React, { useState } from "react";
import SearchLayout from "../../components/Layouts/Search";
import { Container_body } from "../../components/Layouts/styled/Container.styled";
import { PageHeader } from "../../components/Layouts/styled/PageContent.styled";
import {
  SearchForm,
  SubmitSearchButton,
} from "../../components/Layouts/styled/Search";

const SearchPostPage = () => {
  const rotuer = useRouter();
  const [searchContent, setSearchContent] = useState<string>("");

  const ChangeSearchContentHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;

    setSearchContent(value);
  };

  const SubmitSearchHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    rotuer.push(`/search/post?s_data=${searchContent}`);
  };

  return (
    <Container_body>
      <PageHeader>Search Post</PageHeader>
      <SearchForm onSubmit={SubmitSearchHandler}>
        <SearchLayout
          onChange={ChangeSearchContentHandler}
          placeholder={"Enter Content"}
        />
        <SubmitSearchButton type="submit">Search</SubmitSearchButton>
      </SearchForm>
    </Container_body>
  );
};

export default SearchPostPage;

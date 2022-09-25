import Link from "next/link";
import { Fragment } from "react";
import { ResponseCategory } from "../../Lib/Category";
import {
  Category_a_tag,
  Category_content,
  Category_header,
  Category_write_post,
} from "./styled/Category-styled";

type Props = {
  category: ResponseCategory;
};

const CategoryList = ({ category }: Props) => {
  return (
    <Fragment>
      <Category_header>
        <Link href={`/post?category_id=${category.id}`}>
          <Category_a_tag>{category.title}</Category_a_tag>
        </Link>
      </Category_header>
      <Category_content>
        <Category_write_post>
          Written Post: <b>{category.posts}</b>
        </Category_write_post>
      </Category_content>
    </Fragment>
  );
};

export default CategoryList;

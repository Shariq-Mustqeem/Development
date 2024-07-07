import React, { memo } from "react";
import { Link } from "react-router-dom";
import { UNAUTHENTICATED_ROUTES } from "../../utils/constants";

function FirstTenCategory({ firstTenCategoryData, categoryLoader }) {
  return (
    <div>
      {firstTenCategoryData?.length > 0
        ? firstTenCategoryData?.map((singleCategory) => {
            return (
              <li key={singleCategory.cat_id}>
                <Link
                  to={UNAUTHENTICATED_ROUTES.CATEGORY.replace(
                    ":catId",
                    singleCategory.cat_id
                  )}
                >
                  {singleCategory.cat_title}
                </Link>
              </li>
            );
          })
        : !categoryLoader && <h1>Not Found Category</h1>}
    </div>
  );
}

export default memo(FirstTenCategory);

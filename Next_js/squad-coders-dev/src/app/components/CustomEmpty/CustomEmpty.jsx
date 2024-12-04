"use client";

import { Empty } from "antd";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomParagraph from "components/CustomParagraph/CustomParagraph";
import React, { memo } from "react";

function CustomEmpty({ title = "", description = "", image }) {
  return (
    <Empty
      className="custom-empty"
      image={image}
      description={
        <>
          {title && <CustomHeading className="text-xl">{title}</CustomHeading>}
          {description && (
            <CustomParagraph className="text-sm">{description}</CustomParagraph>
          )}
        </>
      }
    />
  );
}

export default memo(CustomEmpty);

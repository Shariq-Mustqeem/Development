"use client";

import { Dropdown } from "antd";
import { useAuthenticatedContext } from "src/app/context-api/ContextApi";
import React, { memo } from "react";
// import { IMAGES_URLS } from "src/svgicons/ImagesConstant";
// import { SVG_ICONS } from "src/svgicons/SvgIcons";

function BreadCrumb({ icon, linkNames = [] }) {
  const { logout = () => {} } = useAuthenticatedContext();
  return (
    <div className="flex justify-between border-b border-bgColor1 pb-3 mb-3">
      <div className="flex gap-2 items-center ">
        {icon && icon}/
        {linkNames?.length > 0 &&
          linkNames?.map((singleLinkName, index) => (
            <>
              <span
                className={`${
                  linkNames?.length === index + 1 && "bg-bgColor1"
                } px-2 py-1 rounded-lg text-paragraphColor3 font-medium`}
              >
                {singleLinkName}
              </span>
              {linkNames?.length !== index + 1 && "/"}
            </>
          ))}
      </div>

      <Dropdown
        trigger={["click"]}
        menu={{
          items: [
            {
              key: "1",
              label: "Logout",
              onClick: () => {
                logout();
              },
            },
          ],
        }}
      >
        <div className="flex justify-between items-center user-profile-clicked-container hover:cursor-pointer">
          <div className="leading-4	ml-[30px] relative">
            <div className="text-gray5 user-profile-clicked-container flex gap-4 items-center select-none">
              <img src={IMAGES_URLS.profileIcon} className="rounded-full" />
              Musab Ibrahim
              {SVG_ICONS.ChevronDown}
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

export default memo(BreadCrumb);

"use client";

import dayjs from "dayjs";

const formatIncome = (income) => {
  if (income >= 1000) return `${(income / 1000).toFixed(0)}K`;
  else return income;
};

const convertedDate = (date) => {
  if (!date) return null;
  dayjs(date).format("MMMM D Y YY");
};

export const helperFunction = {
  formatIncome,
  convertedDate,
};

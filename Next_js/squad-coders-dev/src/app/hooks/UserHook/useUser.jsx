"use client";

import React from "react";
import { useMutation, useQuery } from "react-query";
import userService from "services/user.service";

const useUser = () => {
  const {
    data: getUserData,
    isLoading: userLoader,
    isFetching: userFetching,
  } = useQuery("userKey", () => userService.getUser);

  const { data: dataUserById, isLoading: UserByIdLoader } = useQuery(
    "userByIdKey",
    userService.getUserById
  );

  const { mutateAsync: addUser, isLoading: addUserLoader } = useMutation(
    "addUserKey",
    () => userService.addUser
  );

  const { mutateAsync: editUser, isLoading: editUserLoader } = useMutation(
    "editUserKey",
    () => userService.editUser
  );

  const { mutateAsync: editPartialUserData, isLoading: editPartialUserLoader } =
    useMutation("editUserKey", () => userService.editPartialUser);

  const { mutateAsync: deleteUser, isLoading: deleteUserLoader } = useMutation(
    "editUserKey",
    () => userService.delete
  );

  return {
    getUserData,
    userLoader,
    userFetching,
    dataUserById,
    UserByIdLoader,
    addUser,
    addUserLoader,
    editUser,
    editUserLoader,
    editPartialUserData,
    editPartialUserLoader,
    deleteUser,
    deleteUserLoader,
  };
};

export default useUser;

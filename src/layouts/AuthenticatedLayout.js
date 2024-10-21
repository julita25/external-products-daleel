import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import {
  currentAuthenticatedUser,
} from "store/actions/user";
import { setAuthUser } from "store/reducers/user";
import { getIsLoadingCMSUserSelector, getUserByIdSelector } from "store/selectors/user";
import { internalRoutes as InternalRoutes, externalRoutes as ExternalRoutes } from "routes/routes";

const AuthenticatedLayout = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const cmsUser = useSelector(getUserByIdSelector);
  const isLoadingCMSUser = useSelector(getIsLoadingCMSUserSelector);


  const currentAuthenticatedUser = async () => {
    try {
      const data = await Auth.currentAuthenticatedUser();
      return data;
    } catch (err) {
      return null;
    }
  };

  const auth = async () => {
    const currentUser = await currentAuthenticatedUser();
    dispatch(setAuthUser({ authUser: currentUser }));
    setLoading(false);
  };

  useEffect(() => {
    auth();
  }, []);

  if (loading || isLoadingCMSUser) return <span>Loading...</span>;

  return (
    cmsUser && cmsUser?.userType === "EXTERNAL" ? <ExternalRoutes /> : <InternalRoutes />
  );
};

export default AuthenticatedLayout;

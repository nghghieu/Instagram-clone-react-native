import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../auth/auth.slice";
import AccountNavigator from "./accountNavigator.routes";
import Router from "./routerNavigator.routes";

const MainRouter = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {
    _loadInitialState().done();
  }, []);

  const _loadInitialState = async () => {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      dispatch(authActions.checkLogin());
    }
  };

  return <>{isLogin ? <Router /> : <AccountNavigator />}</>;
};

export default MainRouter;

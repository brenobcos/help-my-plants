import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { ComponentType } from "react";
import { useAuth } from "../providers/auth";
interface Props extends RouteProps {
  component: ComponentType;
  isPrivate?: boolean;
}

function Route({ component: Component, isPrivate = false, ...rest }: Props) {
  const { accessToken } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    ></ReactRoute>
  );
}

export default Route;

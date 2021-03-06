import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { ComponentType } from "react";
import { useAuth } from "../providers/Auth";
interface Props extends RouteProps {
  component: ComponentType;
  isPrivate?: boolean;
  isPublic?: boolean;
}

export function Route({
  component: Component,
  isPrivate = false,
  isPublic = false,
  ...rest
}: Props) {
  const { accessToken } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : isPublic ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    ></ReactRoute>
  );
}


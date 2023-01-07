import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      Not found 404
      <i>{error.statusText || error.message}</i>
    </div>
  );
};

export default ErrorPage;

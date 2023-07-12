/** @jsxImportSource @emotion/react */
import { Button, Stack } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import { errorBoundaryLayout } from "./styles";

const ErrorBoundary = () => {
  const error = useRouteError() as { message: string };
  const navigate = useNavigate()

  return (
    <Stack css={errorBoundaryLayout} gap={3}>
      <h1>Error Boundary</h1>
      <small>{error?.message}</small>
      <Button variant="contained" size="large" onClick={() => navigate('/')}>Try again</Button>
    </Stack>
  );
};

export default ErrorBoundary;

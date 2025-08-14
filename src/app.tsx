import { HashRouter } from "@solidjs/router";
import { Suspense } from "solid-js";
import "./app.css";
import { lazy } from "solid-js";

export const ROUTES = [
  {
    path: "/",
    component: lazy(() => import("@/routes/index.js")),
  },
  {
    path: "/nens",
    children: [
      {
        path: "/:mbti",
        component: lazy(() => import("@/routes/nens/[mbti].js")),
      },
    ],
  },
];

export default function App() {
  return (
    <HashRouter
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      {ROUTES}
    </HashRouter>
  );
}

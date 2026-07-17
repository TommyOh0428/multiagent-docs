import type { ReactNode } from "react";
import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home(): ReactNode {
  const destination = useBaseUrl("/docs/version2/project-design");

  return <Redirect to={destination} />;
}

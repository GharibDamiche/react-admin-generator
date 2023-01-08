import React from "react";
import { AdminGuesser } from "@api-platform/admin";
import { Layout } from "react-admin";

import { createDataProvider } from "./data-provider";

const schemaAnalyzer = {
  getFieldNameFromSchema: () => "name",
  getOrderParametersFromSchema: () => Promise.resolve([]),
  getFiltersParametersFromSchema: () => Promise.resolve([]),
  getFieldType: () => "text"
};

export const SwaggerAdmin = ({
  entryPoint,
  dataProvider = createDataProvider(entryPoint),
  ...props
}) => (
  <AdminGuesser
    dataProvider={dataProvider}
    schemaAnalyzer={schemaAnalyzer}
    layout={Layout}
    {...props}
  />
);

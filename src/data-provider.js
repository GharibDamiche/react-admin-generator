import SwaggerClient from "swagger-client";

import { introspect } from "./introspect";
import { invokeOperation } from "./invoke-operation";

export const createDataProvider = (entrypoint) => {
  const resolveClient = SwaggerClient({ url: entrypoint });

  return {
    getList: (resource, parameters) =>
      invokeOperation({
        operationId: `get_list_${resource}`,
        parameters,
        resolveClient
      }).then(({ data }) => {
        return { data, total: data.length };
      }),
    getOne: (resource, parameters) =>
      invokeOperation({
        operationId: `get_one_${resource}`,
        parameters,
        resolveClient
      }),
    introspect: introspect.bind(undefined, entrypoint),

    // create and update operations don't exist in our server, so we mock them in the code
    create: (resource, { data }) => Promise.resolve({ data }),
    update: (resource, { data }) => Promise.resolve({ data })
  };
};

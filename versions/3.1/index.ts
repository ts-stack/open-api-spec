/**
 * This string is the [version number][1] of the [OpenAPI Specification version][1]
 * that the OpenAPI document uses. The `openapi` field SHOULD be used by tooling specifications and
 * clients to interpret the OpenAPI document. This is _not_ related to the API [info.version][3]
 * string.
 *
 * [1]: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#versions
 * [3]: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#infoVersion
 */
export const openapi = '3.1.0';
export * from './src/origin/base-parameter-object';
export * from './src/origin/callback-object';
export * from './src/origin/components-object';
export * from './src/origin/contact-object';
export * from './src/origin/discriminator-object';
export * from './src/origin/encoding-object';
export * from './src/origin/example-object';
export * from './src/origin/external-documentation-object';
export * from './src/origin/header-object';
export * from './src/origin/http-status-code';
export * from './src/origin/info-object';
export * from './src/origin/license-object';
export * from './src/origin/link-object';
export * from './src/origin/media-type-object';
export * from './src/origin/o-auth-flow-object';
export * from './src/origin/o-auth-flows-object';
export * from './src/origin/oas-explode';
export * from './src/origin/oas-object';
export * from './src/origin/oas-style';
export * from './src/origin/operation-object';
export * from './src/origin/parameter-object';
export * from './src/origin/path-item-object';
export * from './src/origin/paths-object';
export * from './src/origin/reference-object';
export * from './src/origin/request-body-object';
export * from './src/origin/response-object';
export * from './src/origin/responses-object';
export * from './src/origin/schema-object';
export * from './src/origin/security-requirement-object';
export * from './src/origin/security-scheme-object';
export * from './src/origin/server-object';
export * from './src/origin/server-variable-object';
export * from './src/origin/specification-extension';
export * from './src/origin/tag-object';
export * from './src/origin/xml-object';

export * from './src/extended/callback-object';
export * from './src/extended/components-object';
export * from './src/extended/discriminator-object';
export * from './src/extended/encoding-object';
export * from './src/extended/example-object';
export * from './src/extended/external-documentation-object';
export * from './src/extended/header-object';
export * from './src/extended/info-object';
export * from './src/extended/link-object';
export * from './src/extended/media-type-object';
export * from './src/extended/o-auth-flow-object';
export * from './src/extended/o-auth-flows-object';
export * from './src/extended/oas-object';
export * from './src/extended/operation-object';
export * from './src/extended/parameter-object';
export * from './src/extended/path-item-object';
export * from './src/extended/request-body-object';
export * from './src/extended/response-object';
export * from './src/extended/responses-object';
export * from './src/extended/security-requirement-object';
export * from './src/extended/security-scheme-object';
export * from './src/extended/server-object';
export * from './src/extended/server-variable-object';
export * from './src/extended/tag-object';
export * from './src/extended/contact-object';
export * from './src/extended/license-object';
export * from './src/extended/xml-object';
export { XSchemaObject } from './src/extended/schema-object';
export { XPathsObject } from './src/extended/paths-object';

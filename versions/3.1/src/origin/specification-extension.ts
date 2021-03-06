/**
 * While the OpenAPI Specification tries to accommodate most use cases, additional data can be
 * added to extend the specification at certain points.
 * 
 * The extensions properties are implemented as patterned fields that are always prefixed by `x-`.
 * 
 * The extensions may or may not be supported by the available tooling, but those may be extended
 * as well to add requested support (if tools are internal or open-sourced).
 */
export type SpecificationExtension<T extends SpecExtFieldPattern> = {
  /**
   * Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example,
   * `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by
   * the [OpenAPI Initiative][1]. The value can be `null`, a primitive, an array or an object.
   * 
   * [1]: https://www.openapis.org/
   */
  [P in T]: any;
}

/**
 * Specification extensions field pattern.
 *
 * @todo Trek github:
 * - https://github.com/microsoft/TypeScript/issues/42192
 * - https://github.com/microsoft/TypeScript/pull/26797
 */
export type SpecExtFieldPattern = `x-${any}`;

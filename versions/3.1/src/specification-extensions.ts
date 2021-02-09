/**
 * While the OpenAPI Specification tries to accommodate most use cases, additional data can be
 * added to extend the specification at certain points.
 * 
 * The extensions properties are implemented as patterned fields that are always prefixed by "x-".
 * 
 * The extensions may or may not be supported by the available tooling, but those may be extended
 * as well to add requested support (if tools are internal or open-sourced).
 */
export type SpecificationExtensions = {
  /**
   * Allows extensions to the OpenAPI Schema. The field name MUST begin with x-, for example,
   * x-internal-id. The value can be null, a primitive, an array or an object. Can have any valid
   * JSON format value.
   */
  [extension: string]: any;
}

/**
 * @todo Trek github:
 * - https://github.com/microsoft/TypeScript/issues/42192
 * - https://github.com/microsoft/TypeScript/pull/26797
 */
type FieldPattern = `x-${any}`;
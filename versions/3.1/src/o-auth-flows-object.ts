import { OAuthFlowObject } from './o-auth-flow-object';

/**
 * Allows configuration of the supported OAuth Flows.
 * 
 * This object MAY be extended with [Specification Extensions][1].
 * 
 * [1]: https://swagger.io/specification/#specificationExtensions
 */
export class OAuthFlowsObject {
  /**
   * Configuration for the OAuth Implicit flow.
   */
  implicit?: OAuthFlowObject;
  /**
   * Configuration for the OAuth Resource Owner Password flow.
   */
  password?: OAuthFlowObject;
  /**
   * Configuration for the OAuth Client Credentials flow.
   * Previously called `application` in OpenAPI 2.0.
   */
  clientCredentials?: OAuthFlowObject;
  /**
   * Configuration for the OAuth Authorization Code flow.
   * Previously called `accessCode` in OpenAPI 2.0.
   */
  authorizationCode?: OAuthFlowObject;
}
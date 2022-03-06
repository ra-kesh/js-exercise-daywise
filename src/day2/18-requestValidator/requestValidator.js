/** 3 (*)
 * Write a JS function that validates an HTTP request object.
 * The object has the properties method, uri, version and message.
 * Your function must receive the object as a parameter and verify
 * that each property meets the following requirements:
 * method – can be GET, POST or DELETE
 * uri – must be a valid resource address or an asterisk (*); a resource address is a
 * combination of alphanumeric characters and periods(.); the URI cannot be an empty string
 * version – can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
 * message – may contain any number of non-special characters;
 * special characters are <, >, \, &, ', "
 * If a request is valid, return it unchanged. If any part fails the check,
 * throw an Error with message "Invalid request header: Invalid {Method/URI/Version/Message}".
 * Replace the part in curly braces with the relevant word. Note that some of the properties may
 * be missing, in which case the request is invalid. Check the properties in the order in which they
 * are listed here. If more than one property is invalid, throw an error for the first encountered.
 * Check the requestValidator test cases for further information.
 */
const PROPERTIES = ["method", "uri", "version", "message"];
const METHODS = ["GET", "POST", "DELETE", "PUT", "PATCH"];
const VERSIONS = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
const URIRegex =
  /^(https?:\/\/)?([a-z\d]([a-z\d-.]?[a-z\d])*\.[a-z]([a-z.]?[a-z])*){2,255}(\/[\w-.~!$&'()*+,;=:@%]*)*$/i;
const SpecialCharRegex = /[<>&'"\\]/;
const ErrorMsgCodeForProps = {
  method: "Method",
  uri: "URI",
  version: "Version",
  message: "Message",
};

const errorWithMessage = (error) =>
  new Error(`Invalid request header: Invalid ${ErrorMsgCodeForProps[error]}`);

const getMissingProperties = (httpRequest) =>
  PROPERTIES.filter(
    (prop) => !Object.prototype.hasOwnProperty.call(httpRequest, prop)
  );

const isValidMethod = (method) => METHODS.includes(method);
const isValidURI = (uri) => URIRegex.test(uri);
const isValidVersion = (version) => VERSIONS.includes(version);
const isValidMessage = (msg) => !SpecialCharRegex.test(msg);

function requestValidator(httpRequest) {
  const missingProperties = getMissingProperties(httpRequest);

  if (missingProperties.length > 0) {
    const firstMissingProp = missingProperties[0];
    throw errorWithMessage(firstMissingProp);
  }

  const { method, uri, version, message } = httpRequest;

  if (!isValidMethod(method)) throw errorWithMessage("method");
  if (!isValidURI(uri)) throw errorWithMessage("uri");
  if (!isValidVersion(version)) throw errorWithMessage("version");
  if (!isValidMessage(message)) throw errorWithMessage("message");
  return httpRequest;
}

module.exports = requestValidator;

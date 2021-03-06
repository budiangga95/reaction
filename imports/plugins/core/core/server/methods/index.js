import updatePackage from "./updatePackage";
import updateRegistry from "./updateRegistry";
import shopMethods from "./shop";

/**
 * @file Methods for Registry
 *
 *
 * @namespace Registry/Methods
*/

/**
 * @file Methods for Packages.
 *
 *
 * @namespace Package/Methods
*/

export default {
  ...shopMethods,
  "package/update": updatePackage,
  "registry/update": updateRegistry
};

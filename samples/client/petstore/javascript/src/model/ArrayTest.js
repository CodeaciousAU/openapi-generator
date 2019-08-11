/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.1.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ReadOnlyFirst'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReadOnlyFirst'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.ArrayTest = factory(root.OpenApiPetstore.ApiClient, root.OpenApiPetstore.ReadOnlyFirst);
  }
}(this, function(ApiClient, ReadOnlyFirst) {
  'use strict';



  /**
   * The ArrayTest model module.
   * @module model/ArrayTest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ArrayTest</code>.
   * @alias module:model/ArrayTest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ArrayTest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArrayTest} obj Optional instance to populate.
   * @return {module:model/ArrayTest} The populated <code>ArrayTest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('array_of_string')) {
        obj['array_of_string'] = ApiClient.convertToType(data['array_of_string'], ['String']);
      }
      if (data.hasOwnProperty('array_array_of_integer')) {
        obj['array_array_of_integer'] = ApiClient.convertToType(data['array_array_of_integer'], [['Number']]);
      }
      if (data.hasOwnProperty('array_array_of_model')) {
        obj['array_array_of_model'] = ApiClient.convertToType(data['array_array_of_model'], [[ReadOnlyFirst]]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} array_of_string
   */
  exports.prototype['array_of_string'] = undefined;
  /**
   * @member {Array.<Array.<Number>>} array_array_of_integer
   */
  exports.prototype['array_array_of_integer'] = undefined;
  /**
   * @member {Array.<Array.<module:model/ReadOnlyFirst>>} array_array_of_model
   */
  exports.prototype['array_array_of_model'] = undefined;



  return exports;
}));



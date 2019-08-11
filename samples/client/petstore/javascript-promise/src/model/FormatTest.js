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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.FormatTest = factory(root.OpenApiPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FormatTest model module.
   * @module model/FormatTest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FormatTest</code>.
   * @alias module:model/FormatTest
   * @class
   * @param _number {Number} 
   * @param _byte {Blob} 
   * @param _date {Date} 
   * @param password {String} 
   */
  var exports = function(_number, _byte, _date, password) {
    var _this = this;

    _this['number'] = _number;
    _this['byte'] = _byte;
    _this['date'] = _date;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>FormatTest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormatTest} obj Optional instance to populate.
   * @return {module:model/FormatTest} The populated <code>FormatTest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('integer')) {
        obj['integer'] = ApiClient.convertToType(data['integer'], 'Number');
      }
      if (data.hasOwnProperty('int32')) {
        obj['int32'] = ApiClient.convertToType(data['int32'], 'Number');
      }
      if (data.hasOwnProperty('int64')) {
        obj['int64'] = ApiClient.convertToType(data['int64'], 'Number');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Number');
      }
      if (data.hasOwnProperty('float')) {
        obj['float'] = ApiClient.convertToType(data['float'], 'Number');
      }
      if (data.hasOwnProperty('double')) {
        obj['double'] = ApiClient.convertToType(data['double'], 'Number');
      }
      if (data.hasOwnProperty('string')) {
        obj['string'] = ApiClient.convertToType(data['string'], 'String');
      }
      if (data.hasOwnProperty('byte')) {
        obj['byte'] = ApiClient.convertToType(data['byte'], 'Blob');
      }
      if (data.hasOwnProperty('binary')) {
        obj['binary'] = ApiClient.convertToType(data['binary'], File);
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('dateTime')) {
        obj['dateTime'] = ApiClient.convertToType(data['dateTime'], 'Date');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} integer
   */
  exports.prototype['integer'] = undefined;
  /**
   * @member {Number} int32
   */
  exports.prototype['int32'] = undefined;
  /**
   * @member {Number} int64
   */
  exports.prototype['int64'] = undefined;
  /**
   * @member {Number} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {Number} float
   */
  exports.prototype['float'] = undefined;
  /**
   * @member {Number} double
   */
  exports.prototype['double'] = undefined;
  /**
   * @member {String} string
   */
  exports.prototype['string'] = undefined;
  /**
   * @member {Blob} byte
   */
  exports.prototype['byte'] = undefined;
  /**
   * @member {File} binary
   */
  exports.prototype['binary'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Date} dateTime
   */
  exports.prototype['dateTime'] = undefined;
  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));



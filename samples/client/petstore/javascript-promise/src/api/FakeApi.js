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
    define(['ApiClient', 'model/Client', 'model/FileSchemaTestClass', 'model/OuterComposite', 'model/User', 'model/XmlItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Client'), require('../model/FileSchemaTestClass'), require('../model/OuterComposite'), require('../model/User'), require('../model/XmlItem'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.FakeApi = factory(root.OpenApiPetstore.ApiClient, root.OpenApiPetstore.Client, root.OpenApiPetstore.FileSchemaTestClass, root.OpenApiPetstore.OuterComposite, root.OpenApiPetstore.User, root.OpenApiPetstore.XmlItem);
  }
}(this, function(ApiClient, Client, FileSchemaTestClass, OuterComposite, User, XmlItem) {
  'use strict';

  /**
   * Fake service.
   * @module api/FakeApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FakeApi. 
   * @alias module:api/FakeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * creates an XmlItem
     * this route creates an XmlItem
     * @param {module:model/XmlItem} xmlItem XmlItem Body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.createXmlItemWithHttpInfo = function(xmlItem) {
      var postBody = xmlItem;
      // verify the required parameter 'xmlItem' is set
      if (xmlItem === undefined || xmlItem === null) {
        throw new Error("Missing the required parameter 'xmlItem' when calling createXmlItem");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/xml; charset=utf-8', 'application/xml; charset=utf-16', 'text/xml', 'text/xml; charset=utf-8', 'text/xml; charset=utf-16'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/fake/create_xml_item', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * creates an XmlItem
     * this route creates an XmlItem
     * @param {module:model/XmlItem} xmlItem XmlItem Body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.createXmlItem = function(xmlItem) {
      return this.createXmlItemWithHttpInfo(xmlItem)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.body Input boolean as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    this.fakeOuterBooleanSerializeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = 'Boolean';
      return this.apiClient.callApi(
        '/fake/outer/boolean', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.body Input boolean as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    this.fakeOuterBooleanSerialize = function(opts) {
      return this.fakeOuterBooleanSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterComposite} opts.body Input composite as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OuterComposite} and HTTP response
     */
    this.fakeOuterCompositeSerializeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = OuterComposite;
      return this.apiClient.callApi(
        '/fake/outer/composite', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterComposite} opts.body Input composite as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OuterComposite}
     */
    this.fakeOuterCompositeSerialize = function(opts) {
      return this.fakeOuterCompositeSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.body Input number as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    this.fakeOuterNumberSerializeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = 'Number';
      return this.apiClient.callApi(
        '/fake/outer/number', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.body Input number as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    this.fakeOuterNumberSerialize = function(opts) {
      return this.fakeOuterNumberSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Input string as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    this.fakeOuterStringSerializeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = 'String';
      return this.apiClient.callApi(
        '/fake/outer/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Input string as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    this.fakeOuterStringSerialize = function(opts) {
      return this.fakeOuterStringSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * For this test, the body for this request much reference a schema named `File`.
     * @param {module:model/FileSchemaTestClass} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testBodyWithFileSchemaWithHttpInfo = function(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testBodyWithFileSchema");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/fake/body-with-file-schema', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * For this test, the body for this request much reference a schema named `File`.
     * @param {module:model/FileSchemaTestClass} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testBodyWithFileSchema = function(body) {
      return this.testBodyWithFileSchemaWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} query 
     * @param {module:model/User} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testBodyWithQueryParamsWithHttpInfo = function(query, body) {
      var postBody = body;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling testBodyWithQueryParams");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testBodyWithQueryParams");
      }

      var pathParams = {
      };
      var queryParams = {
        'query': query,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/fake/body-with-query-params', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} query 
     * @param {module:model/User} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testBodyWithQueryParams = function(query, body) {
      return this.testBodyWithQueryParamsWithHttpInfo(query, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test \"client\" model
     * To test \"client\" model
     * @param {module:model/Client} body client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Client} and HTTP response
     */
    this.testClientModelWithHttpInfo = function(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testClientModel");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Client;
      return this.apiClient.callApi(
        '/fake', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test \"client\" model
     * To test \"client\" model
     * @param {module:model/Client} body client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Client}
     */
    this.testClientModel = function(body) {
      return this.testClientModelWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * @param {Number} _number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts._string None
     * @param {File} opts.binary None
     * @param {Date} opts._date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testEndpointParametersWithHttpInfo = function(_number, _double, patternWithoutDelimiter, _byte, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling testEndpointParameters");
      }
      // verify the required parameter '_double' is set
      if (_double === undefined || _double === null) {
        throw new Error("Missing the required parameter '_double' when calling testEndpointParameters");
      }
      // verify the required parameter 'patternWithoutDelimiter' is set
      if (patternWithoutDelimiter === undefined || patternWithoutDelimiter === null) {
        throw new Error("Missing the required parameter 'patternWithoutDelimiter' when calling testEndpointParameters");
      }
      // verify the required parameter '_byte' is set
      if (_byte === undefined || _byte === null) {
        throw new Error("Missing the required parameter '_byte' when calling testEndpointParameters");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'integer': opts['integer'],
        'int32': opts['int32'],
        'int64': opts['int64'],
        'number': _number,
        'float': opts['_float'],
        'double': _double,
        'string': opts['_string'],
        'pattern_without_delimiter': patternWithoutDelimiter,
        'byte': _byte,
        'binary': opts['binary'],
        'date': opts['_date'],
        'dateTime': opts['dateTime'],
        'password': opts['password'],
        'callback': opts['callback']
      };

      var authNames = ['http_basic_test'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/fake', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * @param {Number} _number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts._string None
     * @param {File} opts.binary None
     * @param {Date} opts._date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testEndpointParameters = function(_number, _double, patternWithoutDelimiter, _byte, opts) {
      return this.testEndpointParametersWithHttpInfo(_number, _double, patternWithoutDelimiter, _byte, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to '-efg')
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to '-efg')
     * @param {module:model/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:model/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @param {Array.<module:model/String>} opts.enumFormStringArray Form parameter enum test (string array) (default to '$')
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string) (default to '-efg')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testEnumParametersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'enum_query_string': opts['enumQueryString'],
        'enum_query_integer': opts['enumQueryInteger'],
        'enum_query_double': opts['enumQueryDouble'],
      };
      var collectionQueryParams = {
        'enum_query_string_array': {
          value: opts['enumQueryStringArray'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
        'enum_header_string_array': opts['enumHeaderStringArray'],
        'enum_header_string': opts['enumHeaderString']
      };
      var formParams = {
        'enum_form_string_array': this.apiClient.buildCollectionParam(opts['enumFormStringArray'], 'csv'),
        'enum_form_string': opts['enumFormString']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/fake', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to '-efg')
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to '-efg')
     * @param {module:model/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:model/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @param {Array.<module:model/String>} opts.enumFormStringArray Form parameter enum test (string array) (default to '$')
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string) (default to '-efg')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testEnumParameters = function(opts) {
      return this.testEnumParametersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fake endpoint to test group parameters (optional)
     * Fake endpoint to test group parameters (optional)
     * @param {Number} requiredStringGroup Required String in group parameters
     * @param {Boolean} requiredBooleanGroup Required Boolean in group parameters
     * @param {Number} requiredInt64Group Required Integer in group parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.stringGroup String in group parameters
     * @param {Boolean} opts.booleanGroup Boolean in group parameters
     * @param {Number} opts.int64Group Integer in group parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testGroupParametersWithHttpInfo = function(requiredStringGroup, requiredBooleanGroup, requiredInt64Group, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'requiredStringGroup' is set
      if (requiredStringGroup === undefined || requiredStringGroup === null) {
        throw new Error("Missing the required parameter 'requiredStringGroup' when calling testGroupParameters");
      }
      // verify the required parameter 'requiredBooleanGroup' is set
      if (requiredBooleanGroup === undefined || requiredBooleanGroup === null) {
        throw new Error("Missing the required parameter 'requiredBooleanGroup' when calling testGroupParameters");
      }
      // verify the required parameter 'requiredInt64Group' is set
      if (requiredInt64Group === undefined || requiredInt64Group === null) {
        throw new Error("Missing the required parameter 'requiredInt64Group' when calling testGroupParameters");
      }

      var pathParams = {
      };
      var queryParams = {
        'required_string_group': requiredStringGroup,
        'required_int64_group': requiredInt64Group,
        'string_group': opts['stringGroup'],
        'int64_group': opts['int64Group'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'required_boolean_group': requiredBooleanGroup,
        'boolean_group': opts['booleanGroup']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/fake', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fake endpoint to test group parameters (optional)
     * Fake endpoint to test group parameters (optional)
     * @param {Number} requiredStringGroup Required String in group parameters
     * @param {Boolean} requiredBooleanGroup Required Boolean in group parameters
     * @param {Number} requiredInt64Group Required Integer in group parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.stringGroup String in group parameters
     * @param {Boolean} opts.booleanGroup Boolean in group parameters
     * @param {Number} opts.int64Group Integer in group parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testGroupParameters = function(requiredStringGroup, requiredBooleanGroup, requiredInt64Group, opts) {
      return this.testGroupParametersWithHttpInfo(requiredStringGroup, requiredBooleanGroup, requiredInt64Group, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * test inline additionalProperties
     * @param {Object.<String, {String: String}>} param request body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testInlineAdditionalPropertiesWithHttpInfo = function(param) {
      var postBody = param;
      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testInlineAdditionalProperties");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/fake/inline-additionalProperties', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * test inline additionalProperties
     * @param {Object.<String, {String: String}>} param request body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testInlineAdditionalProperties = function(param) {
      return this.testInlineAdditionalPropertiesWithHttpInfo(param)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * test json serialization of form data
     * @param {String} param field1
     * @param {String} param2 field2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.testJsonFormDataWithHttpInfo = function(param, param2) {
      var postBody = null;
      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testJsonFormData");
      }
      // verify the required parameter 'param2' is set
      if (param2 === undefined || param2 === null) {
        throw new Error("Missing the required parameter 'param2' when calling testJsonFormData");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'param': param,
        'param2': param2
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/fake/jsonFormData', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * test json serialization of form data
     * @param {String} param field1
     * @param {String} param2 field2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.testJsonFormData = function(param, param2) {
      return this.testJsonFormDataWithHttpInfo(param, param2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));

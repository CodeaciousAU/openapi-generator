// tslint:disable
/// <reference path="../../../custom.d.ts" />
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../../../configuration';
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../../../base';

import { ApiResponse } from '../../../model/some/levels/deep';
import { Pet } from '../../../model/some/levels/deep';
/**
 * PetApi - axios parameter creator
 * @export
 */
export const PetApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new pet to the store
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPet(body: Pet, options: any = {}): RequestArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addPet.');
            }
            const localVarPath = `/pet`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (<any>"Pet" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes a pet
         * @param {number} petId Pet id to delete
         * @param {string} [apiKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePet(petId: number, apiKey?: string, options: any = {}): RequestArgs {
            // verify required parameter 'petId' is not null or undefined
            if (petId === null || petId === undefined) {
                throw new RequiredError('petId','Required parameter petId was null or undefined when calling deletePet.');
            }
            const localVarPath = `/pet/{petId}`
                .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (apiKey !== undefined && apiKey !== null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Multiple status values can be provided with comma separated strings
         * @summary Finds Pets by status
         * @param {Array<'available' | 'pending' | 'sold'>} status Status values that need to be considered for filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, options: any = {}): RequestArgs {
            // verify required parameter 'status' is not null or undefined
            if (status === null || status === undefined) {
                throw new RequiredError('status','Required parameter status was null or undefined when calling findPetsByStatus.');
            }
            const localVarPath = `/pet/findByStatus`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (status) {
                localVarQueryParameter['status'] = status.join(COLLECTION_FORMATS.csv);
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
         * @summary Finds Pets by tags
         * @param {Array<string>} tags Tags to filter by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByTags(tags: Array<string>, options: any = {}): RequestArgs {
            // verify required parameter 'tags' is not null or undefined
            if (tags === null || tags === undefined) {
                throw new RequiredError('tags','Required parameter tags was null or undefined when calling findPetsByTags.');
            }
            const localVarPath = `/pet/findByTags`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (tags) {
                localVarQueryParameter['tags'] = tags.join(COLLECTION_FORMATS.csv);
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single pet
         * @summary Find pet by ID
         * @param {number} petId ID of pet to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPetById(petId: number, options: any = {}): RequestArgs {
            // verify required parameter 'petId' is not null or undefined
            if (petId === null || petId === undefined) {
                throw new RequiredError('petId','Required parameter petId was null or undefined when calling getPetById.');
            }
            const localVarPath = `/pet/{petId}`
                .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("api_key")
                    : configuration.apiKey;
                localVarHeaderParameter["api_key"] = localVarApiKeyValue;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing pet
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePet(body: Pet, options: any = {}): RequestArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updatePet.');
            }
            const localVarPath = `/pet`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (<any>"Pet" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates a pet in the store with form data
         * @param {number} petId ID of pet that needs to be updated
         * @param {string} [name] Updated name of the pet
         * @param {string} [status] Updated status of the pet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePetWithForm(petId: number, name?: string, status?: string, options: any = {}): RequestArgs {
            // verify required parameter 'petId' is not null or undefined
            if (petId === null || petId === undefined) {
                throw new RequiredError('petId','Required parameter petId was null or undefined when calling updatePetWithForm.');
            }
            const localVarPath = `/pet/{petId}`
                .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            if (name !== undefined) { 
                localVarFormParams.set('name', name as any);
            }
    
            if (status !== undefined) { 
                localVarFormParams.set('status', status as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary uploads an image
         * @param {number} petId ID of pet to update
         * @param {string} [additionalMetadata] Additional data to pass to server
         * @param {any} [file] file to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile(petId: number, additionalMetadata?: string, file?: any, options: any = {}): RequestArgs {
            // verify required parameter 'petId' is not null or undefined
            if (petId === null || petId === undefined) {
                throw new RequiredError('petId','Required parameter petId was null or undefined when calling uploadFile.');
            }
            const localVarPath = `/pet/{petId}/uploadImage`
                .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            if (additionalMetadata !== undefined) { 
                localVarFormParams.append('additionalMetadata', additionalMetadata as any);
            }
    
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PetApi - functional programming interface
 * @export
 */
export const PetApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new pet to the store
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPet(body: Pet, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response> {
            const localVarAxiosArgs = PetApiAxiosParamCreator(configuration).addPet(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes a pet
         * @param {number} petId Pet id to delete
         * @param {string} [apiKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePet(petId: number, apiKey?: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response> {
            const localVarAxiosArgs = PetApiAxiosParamCreator(configuration).deletePet(petId, apiKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Multiple status values can be provided with comma separated strings
         * @summary Finds Pets by status
         * @param {Array<'available' | 'pending' | 'sold'>} status Status values that need to be considered for filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Pet>> {
            const localVarAxiosArgs = PetApiAxiosParamCreator(configuration).findPetsByStatus(status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
         * @summary Finds Pets by tags
         * @param {Array<string>} tags Tags to filter by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByTags(tags: Array<string>, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Pet>> {
            const localVarAxiosArgs = PetApiAxiosParamCreator(configuration).findPetsByTags(tags, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a single pet
         * @summary Find pet by ID
         * @param {number} petId ID of pet to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPetById(petId: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Pet> {
            const localVarAxiosArgs = PetApiAxiosParamCreator(configuration).getPetById(petId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update an existing pet
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePet(body: Pet, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response> {
            const localVarAxiosArgs = PetApiAxiosParamCreator(configuration).updatePet(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates a pet in the store with form data
         * @param {number} petId ID of pet that needs to be updated
         * @param {string} [name] Updated name of the pet
         * @param {string} [status] Updated status of the pet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePetWithForm(petId: number, name?: string, status?: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response> {
            const localVarAxiosArgs = PetApiAxiosParamCreator(configuration).updatePetWithForm(petId, name, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary uploads an image
         * @param {number} petId ID of pet to update
         * @param {string} [additionalMetadata] Additional data to pass to server
         * @param {any} [file] file to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile(petId: number, additionalMetadata?: string, file?: any, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponse> {
            const localVarAxiosArgs = PetApiAxiosParamCreator(configuration).uploadFile(petId, additionalMetadata, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PetApi - factory interface
 * @export
 */
export const PetApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Add a new pet to the store
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPet(body: Pet, options?: any) {
            return PetApiFp(configuration).addPet(body, options)(axios, basePath);
        },
        /**
         * 
         * @summary Deletes a pet
         * @param {number} petId Pet id to delete
         * @param {string} [apiKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePet(petId: number, apiKey?: string, options?: any) {
            return PetApiFp(configuration).deletePet(petId, apiKey, options)(axios, basePath);
        },
        /**
         * Multiple status values can be provided with comma separated strings
         * @summary Finds Pets by status
         * @param {Array<'available' | 'pending' | 'sold'>} status Status values that need to be considered for filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, options?: any) {
            return PetApiFp(configuration).findPetsByStatus(status, options)(axios, basePath);
        },
        /**
         * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
         * @summary Finds Pets by tags
         * @param {Array<string>} tags Tags to filter by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByTags(tags: Array<string>, options?: any) {
            return PetApiFp(configuration).findPetsByTags(tags, options)(axios, basePath);
        },
        /**
         * Returns a single pet
         * @summary Find pet by ID
         * @param {number} petId ID of pet to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPetById(petId: number, options?: any) {
            return PetApiFp(configuration).getPetById(petId, options)(axios, basePath);
        },
        /**
         * 
         * @summary Update an existing pet
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePet(body: Pet, options?: any) {
            return PetApiFp(configuration).updatePet(body, options)(axios, basePath);
        },
        /**
         * 
         * @summary Updates a pet in the store with form data
         * @param {number} petId ID of pet that needs to be updated
         * @param {string} [name] Updated name of the pet
         * @param {string} [status] Updated status of the pet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePetWithForm(petId: number, name?: string, status?: string, options?: any) {
            return PetApiFp(configuration).updatePetWithForm(petId, name, status, options)(axios, basePath);
        },
        /**
         * 
         * @summary uploads an image
         * @param {number} petId ID of pet to update
         * @param {string} [additionalMetadata] Additional data to pass to server
         * @param {any} [file] file to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile(petId: number, additionalMetadata?: string, file?: any, options?: any) {
            return PetApiFp(configuration).uploadFile(petId, additionalMetadata, file, options)(axios, basePath);
        },
    };
};

/**
 * PetApi - object-oriented interface
 * @export
 * @class PetApi
 * @extends {BaseAPI}
 */
export class PetApi extends BaseAPI {
    /**
     * 
     * @summary Add a new pet to the store
     * @param {Pet} body Pet object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public addPet(body: Pet, options?: any) {
        return PetApiFp(this.configuration).addPet(body, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Deletes a pet
     * @param {number} petId Pet id to delete
     * @param {string} [apiKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public deletePet(petId: number, apiKey?: string, options?: any) {
        return PetApiFp(this.configuration).deletePet(petId, apiKey, options)(this.axios, this.basePath);
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * @summary Finds Pets by status
     * @param {Array<'available' | 'pending' | 'sold'>} status Status values that need to be considered for filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, options?: any) {
        return PetApiFp(this.configuration).findPetsByStatus(status, options)(this.axios, this.basePath);
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @summary Finds Pets by tags
     * @param {Array<string>} tags Tags to filter by
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public findPetsByTags(tags: Array<string>, options?: any) {
        return PetApiFp(this.configuration).findPetsByTags(tags, options)(this.axios, this.basePath);
    }

    /**
     * Returns a single pet
     * @summary Find pet by ID
     * @param {number} petId ID of pet to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public getPetById(petId: number, options?: any) {
        return PetApiFp(this.configuration).getPetById(petId, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Update an existing pet
     * @param {Pet} body Pet object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public updatePet(body: Pet, options?: any) {
        return PetApiFp(this.configuration).updatePet(body, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Updates a pet in the store with form data
     * @param {number} petId ID of pet that needs to be updated
     * @param {string} [name] Updated name of the pet
     * @param {string} [status] Updated status of the pet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public updatePetWithForm(petId: number, name?: string, status?: string, options?: any) {
        return PetApiFp(this.configuration).updatePetWithForm(petId, name, status, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary uploads an image
     * @param {number} petId ID of pet to update
     * @param {string} [additionalMetadata] Additional data to pass to server
     * @param {any} [file] file to upload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public uploadFile(petId: number, additionalMetadata?: string, file?: any, options?: any) {
        return PetApiFp(this.configuration).uploadFile(petId, additionalMetadata, file, options)(this.axios, this.basePath);
    }

}

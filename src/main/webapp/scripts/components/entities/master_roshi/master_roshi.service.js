'use strict';

angular.module('jhipsterApp')
    .factory('Master_roshi', function ($resource, DateUtils) {
        return $resource('api/master_roshis/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.creationTime = DateUtils.convertDateTimeFromServer(data.creationTime);
                    data.handoverTime = DateUtils.convertDateTimeFromServer(data.handoverTime);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });

/**
 * Created by J on 4/2/2017.
 */
(function () {
            'use strict';

            angular.module('scrumboard.demo', [])
                .controller('ScrumboardController',
                    [ '$scope', '$http', ScrumboardController]);

            function ScrumboardController($scope, $http) {
                $scope.add = function (list, title) {
                    var card = {
                        list_id: list.id,
                        title: title
                    };
                    $http.post('/scrumboard/cards/',card)
                        .then(function(response){
                            list.cards.push(response.data);
                        },
                        function (){
                            alert('Could not create card');
                        });
                };

                $scope.data = [];
                $http.get('/scrumboard/lists/').then(
                    function(response){
                    $scope.data = response.data;
                }

            );

        }

    }());
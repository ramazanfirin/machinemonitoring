'use strict';

describe('Controller Tests', function() {

    describe('VibrationProMessage Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockVibrationProMessage, MockLorawanMessage;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockVibrationProMessage = jasmine.createSpy('MockVibrationProMessage');
            MockLorawanMessage = jasmine.createSpy('MockLorawanMessage');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'VibrationProMessage': MockVibrationProMessage,
                'LorawanMessage': MockLorawanMessage
            };
            createController = function() {
                $injector.get('$controller')("VibrationProMessageDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'smartmeterApp:vibrationProMessageUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});

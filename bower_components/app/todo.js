/**
 * Created by VIVEK on 9/18/2016.
 */
var app = angular.module('todo', []);
app.controller('cntr', function ($scope) {
    $scope.todos = [];
    var todo = {};
    var c = 1;
    $scope.add = function () {
        if ($scope.task.length > 10) {
            if ($scope.task) {
                todo.sno = c;
                todo.taskname = $scope.task;
                todo.isCompleted = false;
                $scope.todos.push(todo);
                todo = {};
                $scope.task = "";
                c++;
            }
        }
        else {
            alert("must be greater than 10 character");
        }
    };
    $scope.delete = function (index) {
        $scope.todos.splice(index, 1);
    }
    $scope.update = function (index) {
        var todo = $scope.todos[index];
        $scope.todos.splice(index, 1);
        $scope.task = todo.taskname;
        $("#inp").focus();
    }
    $scope.$watch("task", function (newValue, oldValue) {
        if (newValue !== oldValue) {
            if (newValue.length < 10) {
                $scope.enableButton = true;
            } else {
                $scope.enableButton = false;
            }
        }
    })
});

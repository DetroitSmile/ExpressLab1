"use strict";
const cartItems = {
    templateUrl: "app.component.html",
    controller: ["CartService", function (CartService) {
        const vm = this;
        function updateList(result) {
            vm.listOfItems = result.data;
        };

        CartService.getAllItems().then(updateList);

        vm.addItem = function(newItem) {
            CartService.addItem(newItem).then(updateList);
        };

        vm.deleteItem = function(item) {
            CartService.deleteItem(item).then(updateList);
        };

        vm.updateItem = function(editedItem) {
            CartService.updateItem(editedItem).then(updateList);
        };
    }]
}

angular.module("App").component("cartItems", cartItems);
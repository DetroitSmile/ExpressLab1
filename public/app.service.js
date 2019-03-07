"use strict";
function CartService($http) {
  const self = this;
  self.getAllItems = function() {
    return $http({
      method: "GET",
      url: "/cart-items"
    });
  };

  self.addItem = function(newItem) {
    return $http({
      method: "POST",
      url: `/cart-items`,
      data: newItem
    });
  };

  self.deleteItem = function(id) {
    return $http({
      method: "DELETE",
      url: `/cart-items/${id}`,
    });
  };

  self.updateItem = function(editedItem) {
    return $http({
      url: `/cart-items/${editedItem.id}`,
      method: "PUT",
      data: editedItem
    });
  };

}

angular.module("App").service("CartService", CartService);
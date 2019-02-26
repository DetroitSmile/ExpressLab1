"use strict";

function CartService($http) {
  const self = this;
  self.getAllItems = function() {
    return $http({
      method: "GET",
      url: "/cart-items"
    })
  }

  self.addItem = function(newItem) {
    return $http({
      method: "POST",
      data: newItem
    })
  }

  self.deleteItem = function(id) {
    return $http({
      url: `/cart-items/${id}`,
      method: "DELETE"
    })
  }
  self.updateItem = function(editedItem) {
    return $http({
      url: `/cart-items/${editedItem.id}`,
      method: "PUT",
      data: editedItem
    })
  }


}

angular.module("App").service("CartService", CartService)
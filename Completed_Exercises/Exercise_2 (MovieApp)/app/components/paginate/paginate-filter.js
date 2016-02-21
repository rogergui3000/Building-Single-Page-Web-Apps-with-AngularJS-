'use strict';

angular.module('movieDB.paginate-filter', [])
	.filter('paginate', function() {
		return function(arr, currentPage, pageSize){
			try{
				return arr.slice((currentPage-1)*pageSize, currentPage*pageSize);
			}catch(err){
				return arr;
			}
		};
	})
	.filter('revertWords', function(){
		return function(input){
			return input.split(" ").reverse().join(" ");
		};
	});
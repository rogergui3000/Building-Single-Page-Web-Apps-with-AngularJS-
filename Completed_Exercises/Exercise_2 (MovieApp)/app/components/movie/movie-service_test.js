'use strict';

describe('Unit tests: movie-service', function () {
	
	beforeEach(module('movieDB.movie-service'));

	var movieFactory, httpMock;

	beforeEach(inject(function($httpBackend, movieAPIservice) {

		httpMock = $httpBackend;

		httpMock.when('GET', 'json/movies.json')
		.respond([{
			"title": "Movie Title",
			"id": 1,
			"poster_path": "/img_name.jpg"
		}]);

		httpMock.when('GET', 'json/genres.json')
		.respond([{
			"id": 1,
			"name": "Action",
			"total": 20
		}]);

		movieFactory = movieAPIservice;

	}));

	var movieList, genreList;

	it('should retrieve the movie list', function(){
		movieFactory.getMovies().success(function(data){ movieList = data; });
		httpMock.flush();
		expect(movieList[0].title).toBe("Movie Title");
	});

	it('should retrieve the genre list', function(){
		movieFactory.getGenres().success(function(data){ genreList = data; });
		httpMock.flush();
		expect(genreList[0].name).toBe("Action");
	});

});
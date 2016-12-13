/*
    Makes HTTP requests to server,
    passes data back to controllers
*/

app.factory("blogFactory", ["$http", function ($http) {

    var factory = {};
    factory.index = function (retreivedBlogs)
    {
        $http.get("/blogs").then(function (response) {
            retreivedBlogs(response.data.blogs);
        });
    };

    factory.create = function (newBlog, finishedCreatingBlog)
    {
        $http.post("/blogs", newBlog).then(function (response) {
            finishedCreatingBlog(response.data.blog);
        });
    };

    return factory;

}]);

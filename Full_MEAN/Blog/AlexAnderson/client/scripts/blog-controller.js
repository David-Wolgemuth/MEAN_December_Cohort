/*
    "Brains" of the app
    Asks factory to make requests,
    uses data to update scope
*/

app.controller("blogController", ["$scope", "blogFactory", function ($scope, blogFactory) {
    $scope.blogs = [];

    blogFactory.index(function (blogs) {
        $scope.blogs = blogs;
    });

    $scope.submitForm = function (newBlog)
    {
        blogFactory.create(newBlog, function (createdBlog) {
            $scope.blogs.push(createdBlog);

            //Reset Form
            newBlog.title = "";
            newBlog.author = "";
            newBlog.description = "";
        });
    };
}]);

/*
    "Brains" of the app
    Asks factory to make requests,
    uses data to update scope
*/

app.controller("blogController", ["$scope", "blogFactory", "$routeParams", function ($scope, blogFactory, $routeParams) {
    $scope.blogs = [];

    blogFactory.index(function (blogs) {
        $scope.blogs = blogs;
    });

    $scope.submitForm = function (newBlog)
    {
        blogFactory.create(newBlog, function (createdBlog) {
            $scope.blogs.push(createdBlog);
            console.log(createdBlog);

            //Reset Form
            newBlog.title = "";
            newBlog.author = "";
            newBlog.description = "";
        });
    };
    $scope.id = $routeParams.id;
    $scope.vote = $routeParams.vote;
    blogFactory.voteBlog = ($scope.id, $scope.vote, function (blog){
      $scope.blog = blog;
    });
}]);

app.controller("showblogController", ["$scope", "blogFactory", "$routeParams", function ($scope, blogFactory, $routeParams) {

    // $scope.blog = {title:"test"};
    $scope.id = $routeParams.id;
    console.log("Hitting the showblogController!");
    console.log("The $routeParams",$scope.id);
    blogFactory.showBlog($scope.id, function (blog) {
        $scope.blog = blog;
    });

}]);

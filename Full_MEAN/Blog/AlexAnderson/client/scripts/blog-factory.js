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
    factory.showBlog = function (id,retreivedBlog)
    {
        console.log("Show Blog function started!");
        console.log ("This is the id parameter value:",id);
        // console.log("The output should be /snowblog/",Id);
        $http.get("/showblog/" + id).then(function (response){
          retreivedBlog(response.data.blog);
        })
    };
    factory.voteBlog = function (id, vote, retrivedBlog)
    {
      console.log("Vote Blog function started!");
      console.log("These are the paramater values:", id, vote);
      $http.get("/voteblog/"+id+"/"+vote).then(function (response){
        retreivedBlog(response.data.blog);
      })
    }

    return factory;

}]);

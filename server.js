const JFacile = require("jfacile");

JFacile.routeGet("/", "Get Route", "home");
JFacile.routePost("/post", "Post Route", "Hello");
JFacile.run(3000);

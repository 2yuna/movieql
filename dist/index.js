"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var server = new graphql_yoga_1.GraphQLServer({});
server.start(function () { return console.log("Graphql Server Running"); });
//# sourceMappingURL=index.js.map
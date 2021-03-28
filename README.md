# ApaTechAufgabe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.


# Solution

Data: 
added a service to retrieve data from local json files in order to simulate data coming from fetched from a database.

Routing:
I have implemented a routing strategy based routerlink with the id of the objects. As the view are syblings of each other, this was for me the best matching solution.
In the views of persons and tasks, a click on an object will navigate to a relative route using the id of the clicked object. Once there, the id of the route will be use as reference to get the needed objects for the details.

Methods that I discarded:
- Another option would have been using the routerlink and passing the object through the state. This would spare retrieving the object but would lose the state data if a page refresh is triggered which is not user friendly. 

-No child routes
If you want to have a different view (component load) when you go to persons to persons/:id/details you need to go with defining a second route with full path. Otherwise you should be working with children components
# ExpressAPI
quick exemple of an RestAPI with express for a workshop
# Getting started
##install packages
First you need to install the packages
```
  npm i 
```
Second, you have to add the env variables in your .env file
* PORT
* DB_URL
* JWT_SECRET
##Run the server
you should use 
```
  npm run dev
```
# how to use
## Product
the route is 
```
  /product
```
* GET request
* POST request with a body: title,description
* Delete request as params: id
* Put request with params: id, and body: title,description
## Auth
the route is 
```
  /user
```
we hvae two sub-routes:
```
  /user/login
```
* POST request with ebody: email, password
```
  /user/register
```
* POST request with boyd: name, email, password

### Workflow ###
1. Install Ionic 6 using following cli or follow this [Ionic Installation](https://pages.github.com/) for detail
  ```
  npm install -g @ionic/cli
  ```
2. Install packages
  ```
   npm ci
  ```
3. Run app
  ```
   ionic serve
  ```
4. Deault localhost
    > http://localhost:8100!
    


### API server
1. To run Json placeholder API server run the below command (will start at 3004 port)
  ```
  npm run server
  ```
  2. After that below API url get ready to serve. Availabel method ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']

  ```
  http://localhost:3004/lunch
  http://localhost:3004/settings
  http://localhost:3004/users
  ```

For More detail about json placeholder [click here](https://jsonplaceholder.typicode.com/)
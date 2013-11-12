# fang

**Full Stack Angular** inspired by [meteor](http://www.meteor.com/) and compatible with existing [angularjs](http://angularjs.org) apps.

## Warning: Vaporware!

Currently this is just a concept.

## Install

```
npm install fang -g
```

## Hello World

Changing the "name" input will update the `<h1>` as well as the name value
for the first user in the database. Opening another window and editing the
name updates both windows.

```html
<!doctype html>
<html fng-app>
  <head>
    <!-- all the js is included for you... -->
  </head>
  <body>
    <div ng-db-model="$db.collection('users').first()">
      <label>Name:</label>
      <input type="text" ng-model="name" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{name}}!</h1>
    </div>
  </body>
</html>
```

**Save it!**

Save the above example as `index.html` in a new directory. This is the only file required for
a **fang** app to run.

**Run it!**

**Fang** comes with a CLI for creating boilerplate and running **fang** apps.
The following command will run a dev instance of the app in the current directory.

```
fang
```

**Test it!**

**Fang** integrates with [karma](http://karma-runner.github.io/0.10/index.html). Test your
client and server with a single command.

```
fang test e2e
```

**Bundle it!**

The bundle command creates a binary that can run your **fang** app on most Unix systems.
If you run an app on an unsupported system it will print a warning and exit.

**NOTE: All HTML, CSS, and JavaScript is minified and included in the bundle.**

```
fang bundle $name
```

**Deploy it (almost) anywhere!**

The following will work without any dependencies on the target system.

```
fang bundle my-app
scp me@foo.com:my-app .
ssh me@foo.com
./my-app
> Fang running @ http://foo.com:80
```

## Example

[Here is a more complex example](https://github.com/ritch/fang/tree/master/example/hello-world)

## Features

### Reactive

**No More Refresh to See Changes**

Automatic compilation of CSS / JavaScript without CPU intensive file watching! **Fang**'s dev runtime compiles your code as you _use_ the browser.
**Fang** ensures you are running the latest code as you test your app.

**Auto Test Running**

Once you start **fang**, your tests run constantly. If a tests fails, **fang** stops your app and notifies you.

### Omni Binding

Bind to models anywhere in the stack. When a user makes a change, they see it immediately (using vanilla angular).
Any other user looking at the same bound model will also see the change. No need to write the glue to propigate changes
between clients and servers.

Bind elements and `$scopes` to:

 - browser based storage 
  - blackberry-persistent-store
  - localStorage
  - gears-sqlite
  - ie-userdata
  - webkit-sqlite
  - indexed-db
 - database tables or collections
  - oracle
  - mysql
  - mongodb
  - couchdb
  - redis
  - postgres
  - more TDB
 - data from REST or SOAP services

### Server Side Rendering

 - Render templates on the server and browser.
 - Use the same directives and `ng-` syntax you're already using.
 - Port existing angular templates to **fang** with little or no changes.

## Contributing

**NOTE: In Development. If you would like to use this sooner, fork it and hack away!**

If you would like this become a real project please star it on GitHub. It
lets us know that people want something like this.

You can also help by adding issues to the project that include suggestions / comments.

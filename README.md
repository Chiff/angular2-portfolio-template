# Portfolio Template

Angular 2 responsive portfolio template

* demo at <https://martinfilo.me>

## Table of contents
* [Guide](#guide)
* [Backend requirements](#backend)

## Guide

* Fork this project
* Open root and run `npm install` OR `yarn`
* Goto `~src/app.component.ts`
  * edit `USER_LINK` and `PORTFOLIO_LINK` to your own REST API,FireBase, etc..
* Run `ng build`
* Serve `~dist` files on your server
* Have a nice template ^_^


<span style="font-size: 8px; color: grey">Note: It's better to use only icons you need not all font-pack so you will have better performance on slow networks</span>

## Backend

#### User
Method
* GET

Url
* `USER_LINK`

Response expecting
````
  name: string;
  job: string;
  skills?: string[];
  links?: {
    class: string; //check https://fontawesome.com/
    url: string;
  }[];
````

#### Portfolio
Method
* GET

Url
* `PORTFOLIO_LINK`

Response expecting
````
  {
    title: string;
    description?: string;
    tags?: string[];
    links?: {
      class: string; //check https://fontawesome.com/
      url: string;
    }[];
  }[]
````


## Built With

* [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Martin Filo** - *Initial work* - [Chiff](https://github.com/Chiff)

See also the list of [contributors](https://github.com/Chiff/angular2-portfolio-template/contributors)
 who participated in this project. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# Slush Express Generator

What's included:

* Gulp (obviously)
* Browserify
* Express
* Stylus (with Nib, Jeet & Rupture)
* Jade
* Jshint
* Font Awesome

## Installation

Make sure you already have Slush installed, then:j

```
npm install -g slush-express-isinn
```

## Generate a project base

```
mkdir my-project
cd my-project
slush express-iansinnott
```

After you go through the prompts and everything has been installed simply run gulp to fire things up:

```
gulp
```

This starts a server running on `localhost:3000`. Stylus, Jade and JavaScript files will all be watched and their respective gulp tasks will be run when they're changed.

## Project Structure

Write this...

## Gulp tasks

The gulp structure for this project may be different than what you're used to. It's built in a modular fashion to avoid one large, unmaintainable Gulpfile. For more information on this specific implementation see [this great blogpost][blogpost].

[blogpost]: http://viget.com/extend/gulp-browserify-starter-faq

## TODO

* **Logging:** Borrow from the official express generator to implement a logging solution.
* **Production Server:** Write `bin/www`, which is currently blank.
* **Express Middleware:** Add common express modules such as body parser, favicon, method override, etc.
* **Testing**

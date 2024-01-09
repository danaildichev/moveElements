# moveElements

![Static Badge](https://img.shields.io/badge/version-1-blue)

Change or restore the location of a content block.

Use the class in `translate.js` to control how much and how fast an element is moved. The class can be used in a such a way that a single instance can move any element to any location, or an instance can responsible for a single element.

## Live Demo

[https://danaildichev.net/portfolio/code-samples/move-elements](https://danaildichev.net/portfolio/code-samples/move-elements)

## Install

Get a copy of `translate.js` and initialize an instance

```javascript
<script src="/path/to/translate.js"></script>

<script>

    // create an instance that you can use to move any element
    // or create an instance that handles something in particular
    // in either case you would end up calling translate() to move an element
    

    // example 1
    const moveElement = new Translate();

    // example 2
    /**
    * @param {string} [elID] The id of the element to move. Default null.
    * @param {string} [direction] The direction to move the element. Default null.
    * @param {string} [value] The amount to move, e.g. 100px. Used with el.style.transform. Default null.
    */
    const moveElement = new Translate(elementID, direction, value);
     

</script>
```

## Usage

Javascript

```javascript
    // if you instantiate using example 1 you'd have to specify those three arguments every time you use translate()
    moveElement.translate('panel1', 'left', '100px');

    // if you instantiate using example 2, you would not use any arguments
    moveElement.translate();
```

HTML

The following code comes from my site where I am using Tailwind, Daisy UI, Font Awesome.

```html
<!-- button: move left -->
<button id="btn-moveLeft" class="btn btn-primary" onclick="movePanel1.translate('panel1', 'left', '100px')">
    <i class="fa-solid fa-left-long"></i>
</button>


<!-- panel(s) container -->
<div class="overflow-hidden">

    <!-- target panel -->
    <div id="panel1" class="transition-all duration-1000">

        <!-- panel contents -->
        <div class="my-6 p-3">
            <p class="text-xl">Panel 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
        <!-- end panel contents -->

    </div>
    <!-- end target panel -->

</div>
<!-- end panel(s) container -->
```

## API

The `Translate` class does not expose any functions or options other than the three arguments passed in at the time of construction or use with the `translate()` function.

## Issues

Open an issue or hit me up.

## Contributing

PRs accepted.

## License

GPL-3.0

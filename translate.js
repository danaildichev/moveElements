class Translate
{
    constructor(elID = null, direction = null, value = null)
    {
        if (elID != null) { this.elToMove = document.getElementById(elID); }
        else this.elToMove = elID;

        if (this.isValidDirection(direction)) { this.direction = direction; }
        else { this.direction = null; }

        if (value != null) { this.spot = value; }
    }


    isValidDirection(direction)
    {
        let isValid = false;
        const validDirections = ['left', 'right', 'origin', 'up', 'down', 'fromOrigin', null]
        for (const validDirection of validDirections)
        {
            if (direction === validDirection) { isValid = true; }
        }
        return isValid;
    }


    /**
     * translate the element along an axis
     *
     * @param {string} [elID] opt: which element to swipe
     * @param {string} [direction] opt: "left" or "right"
     * @param {string} [value] opt: the value for translateX() or translateY()
     *
     */
    translate(elID = null, direction = null, value = null)
    {
        // get or determine element to translate along its X axis
        const el = (elID != null) ? document.getElementById(elID) : this.elToMove;

        // get or determine direction to translate along its X axis
        let dirTo;
        if (direction != null && this.isValidDirection(direction)) { dirTo = direction }
        else { dirTo = this.direction }

        // get or determine value to translate
        const spot = (value != null) ? value : this.spot;

        switch (dirTo)
        {
            case 'left':
                this.moveLeft(el, spot);
                //this.moveLeft(el, `${this.getBounds(el).right}px`);
                break;

            case 'right':
                //this.moveRight(el, `${(this.getBounds(el).left + this.getBounds(el).width)}px`);
                this.moveRight(el, spot);
                break;

            case 'origin':
                this.moveToOrigin(el);
                break;

            case 'up':
                this.moveUp(el, spot);
                break;

            case 'down':
                this.moveDown(el, spot);
                break;

            case 'fromOrigin':
                this.moveFromOrigin(el, spot);
                break;

            default:
                break;
        }
    }


    moveLeft(el, x) { el.style.transform = `translateX(-${x})`; }


    moveRight(el, x) { el.style.transform = `translateX(${x})`; }

    moveToOrigin(el) { el.style.transform = 'translate(0%)'; }

    moveUp(el, y) { el.style.transform = `translateY(-${y})`; }

    moveDown(el, y) { el.style.transform = `translateY(${y})`; }

    moveFromOrigin(el, spot) { el.style.transform = `translate(${spot})`; }



    /**
     * get bounding box
     */
    getBounds(el) { return el.getBoundingClientRect(); }

}

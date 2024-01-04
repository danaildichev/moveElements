class Slide
{
    /**
     * toggle a sled & checkbox based on checked state.
     * handles up/down animation as a whole or in steps.
     * handles sled height by css max-h class name
     *
     * @param {string} checkID checkbox for toggling
     * @param {string} slideID the sled to be toggled
     * @param {string} animationType "scale", "fade", or "both"
     * @param {number} durationUp time for slide up animation
     * @param {boolean} staggerUp if display/height animation are in sync
     * @param {number} durationDown time for slide down animation
     * @param {boolean} staggerDown if height/display animation are in sync
     * @param {string} heightClass css for sled max height
     * @param {string} iconID the icon to be toggled after sliding
     * @param {number} iconDelayUp time offset for icon animation
     * @param {number} iconDelayDown time offset for icon animation
     */
    constructor(checkID, slideID, animationType, durationUp, staggerUp, durationDown, staggerDown, heightClass, iconID, iconDelayUp, iconDelayDown)
    {
        this.check = document.getElementById(checkID);
        this.sled = document.getElementById(slideID);
        this.animationType = animationType;
        this.durationUp = durationUp;
        this.staggerUp = staggerUp;
        this.durationDown = durationDown;
        this.staggerDown = staggerDown;
        this.heightClass = heightClass;
        this.icon = document.getElementById(iconID);
        this.iconDelayUp = iconDelayUp;
        this.iconDelayDown = iconDelayDown;
    }


    /**
     * determine status of checkbox
     *
     * @return {boolean}
     */
    isChecked() { return this.check.checked; }


    /**
     * toggle status of checkbox
     *
     * @return {void}
     */
    toggleCheck() { this.check.checked = !this.isChecked(); }


    /**
     * perform swapping of css display classes for sliding up
     *
     * @return {void}
     */
    slideUpAnimation()
    {
        if (this.animationType === 'scale') { this.sled.classList.replace('scale-y-100', 'scale-y-0'); }
        else if (this.animationType === 'fade') { this.sled.classList.replace('faded-in', 'faded-out'); }
        else if (this.animationType === 'both')
        {
            this.sled.classList.replace('scale-y-100', 'scale-y-0');
            this.sled.classList.replace('faded-in', 'faded-out');
        }
    }
    // end slideUpAnimation()


    /**
     * handle display and height animations for slide up
     *
     * @param {number} duration time for slide animation
     *
     * @return {void}
     */
    slideUp(duration)
    {
        // -----------------------------
        // handle sled display animation
        this.slideUpAnimation();

        // ----------------------------
        // handle sled height animation
        // or wait for animationType then handle animation
        if (!this.staggerUp) { this.sled.classList.replace(this.heightClass, 'max-h-0'); }
        else { setTimeout(() => { this.sled.classList.replace(this.heightClass, 'max-h-0'); }, duration); }
    }
    // end slideUp()


    /**
     * perform swapping of css display classes for sliding down
     *
     * @return {void}
     */
    slideDownAnimation()
    {
        if (this.animationType === 'scale') { this.sled.classList.replace('scale-y-0', 'scale-y-100'); }
        else if (this.animationType === 'fade') { this.sled.classList.replace('faded-out', 'faded-in'); }
        else if (this.animationType === 'both')
        {
            this.sled.classList.replace('scale-y-0', 'scale-y-100');
            this.sled.classList.replace('faded-out', 'faded-in');
        }
    }
    // end slideDownAnimation()


    /**
     * handle height and display animations for sliding down
     *
     * @param {number} duration time for slide animation
     *
     * @return {void}
     */
    slideDown(duration)
    {
        // ----------------------------
        // handle sled height animation
        this.sled.classList.replace('max-h-0', this.heightClass);

        // -----------------------------
        // handle sled display animation
        // or wait for height animation then handle animation
        if (!this.staggerDown) { this.slideDownAnimation(); }
        else { setTimeout(() => { this.slideDownAnimation(); }, duration); }

    }
    // end slideDown()


    /**
     * handle slide animations
     *
     * @return {void}
     */
    toggleSlide()
    {
        // if sled contents are showing
        if (this.isChecked())
        {
            // slide them up then toggle check and button icon
            this.slideUp(this.durationUp);
            this.toggleCheck();
            setTimeout(() => { this.icon.classList.toggle('rotate-180'); }, this.iconDelayUp);
        }

        // else sled contents are not showing
        else
        {
            // slide them down then toggle check and button icon
            this.slideDown(this.durationDown);
            this.toggleCheck();
            setTimeout(() => { this.icon.classList.toggle('rotate-180'); }, this.iconDelayDown);
        }

    }
    // end toggleSlide()

}

'use strict';
import { EventEmitter } from 'events';
import VirtualScroll from 'virtual-scroll';
import raf from 'raf';

export default class HorizontalScroll extends EventEmitter {

	constructor(opts) {
		super();

		this._bind();

		// Set default options
		this.options = Object.assign({
			container: opts.container,
			blocks: opts.blocks,
			spring: opts.spring
		}, opts);

		this.vars = {
			scrollValue: 0,
			scrollTarget: 0,
			scrollLeft: 0,
			scrollRight: 0,
			spring: this.options.spring || 0.9,
			direction: 0
		};

		this.vs = new VirtualScroll();

		this.raf = raf;

		this._setUI();
		this._addEvents();

	}

	// PRIVATE

	/**
	 * Biding methods
	 *
	 */
	_bind() {
		this._update = this._update.bind(this);
	}

	/**
	 * Add all events
	 *
	 */
	_addEvents() {
		this.vs.on(this._onScroll, this);
		this.raf(this._update);
		window.addEventListener('resize', this.onResize);
	}

	/**
	 * Remove all events
	 *
	 */
	_removeEvents() {

	}

	/**
	 * Set the UI
	 *
	 */
	_setUI() {
		this.options.container[0].style.whiteSpace = 'nowrap';
		this.options.container[0].style.overflow = 'hidden';

		let subContainer = document.createElement('div');
		this.options.container[0].appendChild(subContainer);
		subContainer.setAttribute('class', 'horizontal-scroll');

		for(let block of this.options.blocks){
			block.style.display = 'inline-block';
			subContainer.appendChild(block);
			block.remove();
		}


	}

	/**
	 * Trigger when user scroll
	 *
	 */
	_onScroll(e) {

		if (e.deltaY > 0){
            this.vars.direction = 1;
        } else {
            this.vars.direction = -1;
        }

        this.vars.scrollTarget += (e.deltaY * this.vars.spring) * -1;
        this.vars.scrollTarget = Math.round(Math.max(this.vars.scrollLeft, Math.min(this.vars.scrollLeft, this.vars.scrollRight)))

	}

	_update(){
		this.raf(this._update);
	}

	// PUBLIC

	/**
	 * Destroy variables and bind events
	 *
	 */

	onResize() {

	}

	destroy() {
		this.raf.cancel(this._update);
	}

}

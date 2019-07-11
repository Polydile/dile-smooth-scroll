import { LitElement } from 'lit-element';
import { DileSmoothScrollMixin } from './DileSmoothScrollMixin';
import { DileSmoothScrollElementMixin } from './DileSmoothScrollElementMixin';

export class DileSmoothScroll extends DileSmoothScrollMixin(DileSmoothScrollElementMixin(LitElement)) { }

window.customElements.define('dile-smooth-scroll', DileSmoothScroll);

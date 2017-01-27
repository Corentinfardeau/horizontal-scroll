'use strict';

/**
 * Return a new value linearly interpolate between a new min and max,
 * depending on his old range
 * @param  {Number} val    The value we want to interpolate
 * @param  {Number} oldMin The old lowest value
 * @param  {Number} oldMax The old higher value
 * @param  {Number} newMin The new lowest value
 * @param  {Number} newMax The new higher value
 * @return {Number}        The new interpolated value
 */
export default function changeRange(val, oldMin, oldMax, newMin, newMax) {
	return (val - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
}

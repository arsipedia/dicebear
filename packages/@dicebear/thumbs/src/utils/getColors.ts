/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/sNI8OuD41VSfu5Gfl3eprv/%40dicebear%2Fthumbs
 */

import type { Prng } from '@dicebear/core';
import type { Options, ColorPickCollection } from '../types.js';
import { convertColor } from './convertColor.js';

type Props = {
  prng: Prng,
  options: Options
}

export function getColors({ prng, options }: Props): ColorPickCollection {
  return {
    'shape': convertColor(prng.pick(options.shapeColor ?? [], 'transparent')),
    'mouth': convertColor(prng.pick(options.mouthColor ?? [], 'transparent')),
    'eyes': convertColor(prng.pick(options.eyesColor ?? [], 'transparent')),
  }
};

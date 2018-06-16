import 'core.css';

import './code';
import './typography';
import './grid';
import './quote';
import './list';
import './graphic';
import './figure';
import './arrows';
import './data-table';
import './content';

import 'highlight.js/styles/docco.css';
import { initHighlighting } from 'highlight.js';

import { Slides } from './slides';

initHighlighting();
new Slides();

export * from './examples';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @format
 * @flow strict
 * @emails oncall+draft_js
 */

'use strict';

/**
 * The list of default valid block types.
 */
export type CoreDraftBlockType =
  | 'unstyled'
  | 'paragraph'
  | 'header-one'
  | 'header-two'
  | 'header-three'
  | 'header-four'
  | 'header-five'
  | 'header-six'
  | 'unordered-list-item'
  | 'ordered-list-item'
  | 'checkbox-list-item'
  | 'blockquote'
  | 'code-block'
  | 'atomic';

/**
 * User defined types can be of any valid string.
 */
export type CustomBlockType = string;

export type DraftBlockType = CoreDraftBlockType | CustomBlockType;

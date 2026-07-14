// Copyright 2025 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import classNames from 'classnames';
import type { LocalizerType } from '../types/Util.std.js';

export type PropsType = {
  conversationId: string;
  i18n: LocalizerType;
  isViewOnce: boolean;
  onSelectViewOnce: (conversationId: string, isViewOnce: boolean) => unknown;
};

export function ViewOnceSelector({
  conversationId,
  i18n,
  isViewOnce,
  onSelectViewOnce,
}: PropsType): React.JSX.Element {
  const handleClick = () => {
    onSelectViewOnce(conversationId, !isViewOnce);
  };

  return (
    <button
      aria-label={i18n('icu:ViewOnceSelector--button')}
      aria-pressed={isViewOnce}
      className={classNames({
        ViewOnceSelector__button: true,
        'ViewOnceSelector__button--active': isViewOnce,
      })}
      onClick={handleClick}
      title={
        isViewOnce
          ? i18n('icu:ViewOnceSelector--tooltip-enabled')
          : i18n('icu:ViewOnceSelector--tooltip-disabled')
      }
      type="button"
    />
  );
}

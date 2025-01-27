// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React, { CSSProperties, MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';

import { AvatarColorType } from '../types/Colors';
import { LocalizerType } from '../types/Util';

export type PropsType = {
  children?: ReactNode;
  color?: AvatarColorType;
  i18n: LocalizerType;
  isSelected?: boolean;
  onDelete?: (ev: MouseEvent) => unknown;
  onSelect: () => unknown;
  style?: CSSProperties;
};

export const BetterAvatarBubble = ({
  children,
  color,
  i18n,
  isSelected,
  onDelete,
  onSelect,
  style,
}: PropsType): JSX.Element => {
  return (
    <div
      className={classNames(
        {
          BetterAvatarBubble: true,
          'BetterAvatarBubble--selected': isSelected,
        },
        color && `BetterAvatarBubble--${color}`
      )}
      onKeyDown={ev => {
        if (ev.key === 'Enter') {
          onSelect();
        }
      }}
      onClick={onSelect}
      role="button"
      style={style}
      tabIndex={0}
    >
      {onDelete && (
        <button
          aria-label={i18n('delete')}
          className="BetterAvatarBubble__delete"
          onClick={onDelete}
          tabIndex={-1}
          type="button"
        />
      )}
      {children}
    </div>
  );
};

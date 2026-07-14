// Copyright 2025 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setupI18n } from '../util/setupI18n.dom.js';
import enMessages from '../../_locales/en/messages.json';
import type { PropsType } from './ViewOnceSelector.dom.js';
import { ViewOnceSelector } from './ViewOnceSelector.dom.js';

const i18n = setupI18n('en', enMessages);

export default {
    title: 'Components/ViewOnceSelector',
    component: ViewOnceSelector,
    argTypes: {
        isViewOnce: { control: 'boolean' },
    },
} satisfies Meta<PropsType>;

const Template: StoryFn<PropsType> = args => <ViewOnceSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    conversationId: '123',
    i18n,
    isViewOnce: false,
    onSelectViewOnce: action('onSelectViewOnce'),
};

export const Active = Template.bind({});
Active.args = {
    conversationId: '123',
    i18n,
    isViewOnce: true,
    onSelectViewOnce: action('onSelectViewOnce'),
};

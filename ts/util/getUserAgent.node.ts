// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import os from 'node:os';

import { getOwn } from './getOwn.std.js';

const PLATFORM_STRINGS: { [platform: string]: string } = {
  win32: 'Windows',
  darwin: 'macOS',
  linux: 'Linux',
};

// Fork override: report this version to remote services instead of our own
// internal version. Set to the upstream version this fork is tracking. Leave
// empty to report the actual appVersion (upstream behavior).
const REPORTED_VERSION_OVERRIDE =
  process.env.SIGNAL_REPORTED_VERSION ?? '';

export function getUserAgent(
  appVersion: string,
  release = os.release()
): string {
  // `process.platform` could be missing if someone figures out how to compile Signal on
  //   an unsupported OS and forgets to update this file. We'd rather send nothing than
  //   crash.
  const platformString = getOwn(PLATFORM_STRINGS, process.platform);

  const reportedVersion = REPORTED_VERSION_OVERRIDE || appVersion;

  let result = `Signal-Desktop/${reportedVersion}`;
  if (platformString) {
    result += ` ${platformString} ${release}`;
  }

  return result;
}

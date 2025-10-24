import { ExtensionRunner } from '../../types';
import { createWslRunner } from './wsl';
import { createWebExtRunner } from './web-ext';
import { createSafariRunner } from './safari';
import { createManualRunner } from './manual';

import { wxt } from '../wxt';
import isWsl from 'is-wsl';

export async function createExtensionRunner(): Promise<ExtensionRunner> {
  if (wxt.config.browser === 'safari') return createSafariRunner();

  if (isWsl) return createWslRunner();
  if (wxt.config.runnerConfig.config?.disabled) return createManualRunner();

  return createWebExtRunner();
}

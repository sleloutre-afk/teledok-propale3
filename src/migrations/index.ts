import * as migration_20261011_184625_initial_schema from './20261011_184625_initial_schema';
import * as migration_20261102_120000_remove_theme_these from './20261102_120000_remove_theme_these';

export const migrations = [
  {
    up: migration_20261011_184625_initial_schema.up,
    down: migration_20261011_184625_initial_schema.down,
    name: '20261011_184625_initial_schema'
  },
  {
    up: migration_20261102_120000_remove_theme_these.up,
    down: migration_20261102_120000_remove_theme_these.down,
    name: '20261102_120000_remove_theme_these'
  },
];

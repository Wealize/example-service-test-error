import { pathsToModuleNameMapper } from 'ts-jest';
import { Config } from '@jest/types';
import { compilerOptions } from './tsconfig.json';

export default async (): Promise<Config.InitialOptions> => {
  
  return {
    preset: 'ts-jest',
    coverageReporters: ['text', 'lcov'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/src'}),
    modulePathIgnorePatterns: ["dist"],
    testEnvironment: 'node',
    testTimeout: 30000,
    verbose: true,
  }
}

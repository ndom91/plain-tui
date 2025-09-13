import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['src/**/*.{ts,tsx}', '!src/types/generated/**/*'],
  generates: {
    './src/types/generated/': {
      preset: 'client',
      plugins: [],
      config: {
        useTypeImports: true,
        strictScalars: true,
        addRelativeImportExtension: true,
        scalars: {
          DateTime: 'string',
          JSON: 'unknown',
        },
      },
    },
    './src/types/generated/schema.ts': {
      plugins: ['typescript'],
      config: {
        useTypeImports: true,
        strictScalars: true,
        addRelativeImportExtension: true,
        scalars: {
          DateTime: 'string',
          JSON: 'unknown',
        },
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
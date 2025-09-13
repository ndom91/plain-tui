import { Box, Text, useFocus, useInput } from 'ink'
import { useEffect } from 'react'
import TextInput from 'ink-text-input'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onCancel: () => void
  onSubmit: () => void
  placeholder?: string
}

export function SearchInput({
  value,
  onChange,
  onCancel,
  onSubmit,
  placeholder,
}: SearchInputProps) {
  const { isFocused } = useFocus({ autoFocus: true })

  useInput(
    (input, key) => {
      if (key.escape) {
        onCancel()
      } else if (key.ctrl && input === 'u') {
        onChange('')
      }
    },
    { isActive: isFocused }
  )

  return (
    <Box>
      <Text color="gray">Search: </Text>
      <TextInput
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder={placeholder || 'Type to search...'}
        focus={isFocused}
      />
    </Box>
  )
}

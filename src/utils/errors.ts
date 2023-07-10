export const reportError = ({message}: {message: string}) => {
  throw new Error(message)
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}
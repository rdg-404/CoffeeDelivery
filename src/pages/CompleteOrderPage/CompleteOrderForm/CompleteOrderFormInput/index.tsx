import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function CompleteOrderFormInput({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="h-10 rounded-md border border-base-border bg-base-input focus:border-none outline-timer-button text-base-text text-base p-3 placeholder:text-base-label"
    />
  )
}

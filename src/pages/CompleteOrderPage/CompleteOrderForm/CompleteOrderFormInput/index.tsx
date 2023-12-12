import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function CompleteOrderFormInput({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className={twMerge(
        'col-span-2 h-10 rounded-md border border-base-border bg-base-input focus:border-none outline-timer-button text-base-text text-base p-3 placeholder:text-base-label',
        props.className,
      )}
    />
  )
}


export function Header({ label }: { label: string }) {
  return (
    <h1 className="text-3xl text-neutral-900 dark:text-neutral-200">{label}</h1>
  )
}
export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full flex items-start justify-start pt-10 pb-20">
      {children}
    </div>
  )
}
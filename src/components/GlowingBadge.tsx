import { FaCircle } from "react-icons/fa"

type Props = {
  label: string
  className?: string
}

const GlowingBadge = ({
  label,
  className
}: Props) => {
  return (
  <span className={`glowing-badge ${className}`}>
    {/* <FaCircle size={6} className="animate-pulse"/> */}
    {label}
  </span>
  )
}

export default GlowingBadge
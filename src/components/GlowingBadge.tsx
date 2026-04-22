import { FaCircle } from "react-icons/fa"

type Props = {
    label: string
}

const GlowingBadge = ({
    label
}: Props) => {
  return (
    <span className="glowing-badge">
        <FaCircle size={7} className="animate-pulse"/>
        {label}
    </span>
  )
}

export default GlowingBadge
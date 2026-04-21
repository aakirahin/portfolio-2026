import { FaCircle } from "react-icons/fa"

type Props = {
    label: string
}

const GlowingBadge = ({
    label
}: Props) => {
  return (
    <span className="flex gap-2 items-center uppercase text-sm bg-[#00ff3525] px-3 py-2 rounded-full backdrop-blur-xs border border-[#00ff3550] text-[#00dd2c]">
        <FaCircle size={7} className="animate-pulse"/>
        {label}
    </span>
  )
}

export default GlowingBadge
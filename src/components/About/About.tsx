import ProfileCard from "../ProfileCard/ProfileCard"
import me from "../../assets/me.jpeg"
import { Link } from "react-router"

const About = () => {
    return (
        <div className="flex flex-col gap-6 items-center md:w-1/2">
            <ProfileCard
                name="Niharika"
                title="Full-Stack Engineer"
                avatarUrl={me}
                enableTilt={true}
                showUserInfo={false}
                enableMobileTilt
                behindGlowColor="rgba(125, 190, 255, 0.5)"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#37aa4f 0%,#71C4FF 100%)"
                className="justify-self-center"
            />
            <Link 
                to="https://www.linkedin.com/in/niharika-sunwar-65537b2a2/"
                className="btn btn-secondary w-fit"
            >
                View on LinkedIn
            </Link>
        </div>
    )
}

export default About
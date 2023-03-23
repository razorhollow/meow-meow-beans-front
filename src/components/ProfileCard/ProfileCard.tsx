// assets
import defaultPic from '../../assets/icons/profile.png'

// types
import { Profile } from '../../types/models'

interface ProfileCardProps {
    profile: Profile;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
    const { profile } = props

    const profilePic = profile.photo ? profile.photo : defaultPic
    return (
        <article>
            <img src={profilePic} alt={`}${ProfileCard.name}'s avatar'`} />
            <h1>{profile.name}</h1>
        </article>
    )
}

export default ProfileCard
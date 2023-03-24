// assets
import defaultPic from '../../assets/icons/profile.png'

// components
import VoteManager from '../VoteManager/VoteManager';

// types
import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms';

interface ProfileCardProps {
    profile: Profile;
    handleVote: (formData: VoteManagerFormData) => void;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
    const { profile } = props

    const profilePic = profile.photo ? profile.photo : defaultPic
    return (
        <article>
            <img src={profilePic} alt={`}${ProfileCard.name}'s avatar'`} />
            <h1>{profile.name}</h1>
            <VoteManager { ...props } />
        </article>
    )
}

export default ProfileCard
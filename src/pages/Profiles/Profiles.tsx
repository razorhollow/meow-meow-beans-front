// npm packages

// components
import ProfileCard from '../../components/ProfileCard/ProfileCard';

// services

// types
import { Profile } from '../../types/models'
interface ProfilesProps {
  profiles: Profile[];
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <main className='list'>
      {profiles.map((profile: Profile) =>
        <ProfileCard key={profile.id} profile={profile} />
      )}
    </main>
  )
}
 
export default Profiles

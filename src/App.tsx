// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as voteService from './services/voteService'

// stylesheets
import './App.css'

// types
import { User, Profile } from './types/models'
import { VoteManagerFormData } from './types/forms'


function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])

useEffect((): void => {
  const fetchProfiles = async(): Promise<void> => {
    try {
      const profileData: Profile[] = await profileService.getAllProfiles()
      setProfiles(profileData)
    } catch (error) {
      console.log(error)
    }
  }
  if (user) fetchProfiles()
}, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleVote = async(formData: VoteManagerFormData): Promise<void> => {
    try {
      const updatedProfile = await voteService.castVote(formData)

      setProfiles(profiles.map((profile) => (
        profile.id === updatedProfile.id ? updatedProfile : profile
      )))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} handleLogout={handleLogout} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles profiles={profiles} handleVote={handleVote} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App

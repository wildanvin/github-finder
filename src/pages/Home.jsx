import React from "react"
import UserResults from "../components/users/UserResults"
import UserSerch from "../components/users/UserSerch"

function Home() {
  return (
    <>
      <UserSerch></UserSerch>
      <UserResults></UserResults>
    </>
  )
}

export default Home

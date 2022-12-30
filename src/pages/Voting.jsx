import React from 'react'
import PageHeader from '../components/PageHeader'
import bgImage from '../assets/voting.jpg'

const Voting = () => {
  return (
    <main id="voting">
        <PageHeader pageTitle={'Voting'} bgImage={bgImage}/>
    </main>
  )
}

export default Voting
import React from 'react'
import { ScrollView } from 'react-native'
import { TrackSection, TrackResult } from './common'

const WelcomeList = () =>
  <ScrollView>
    <TrackSection iconName="new-releases" title="Nouveaux parcours">
      <TrackResult
         title="Randonnée des templiers 2017"
         distance="34"
         place="Moselle 57"
         date="03/2017"
         description="Tour autour de Metz"
         done
      />
      <TrackResult
         title="Randonnée des templiers 2017"
         distance="34"
         place="Moselle 57"
         date="03/2017"
         description="Tour autour de Metz"
         done={false}
      />
      <TrackResult
         title="Randonnée des templiers 2017"
         distance="34"
         place="Moselle 57"
         date="03/2017"
         description="Tour autour de Metz"
         done={false}
      />
    </TrackSection>
    <TrackSection iconName="star" title="Parcours populaires">
      <TrackResult
         title="Randonnée des templiers 2017"
         distance="34"
         place="Moselle 57"
         date="03/2017"
         description="Tour autour de Metz"
         done
      />
      <TrackResult
         title="Randonnée des templiers 2017"
         distance="34"
         place="Moselle 57"
         date="03/2017"
         description="Tour autour de Metz"
         done={false}
      />
      <TrackResult
         title="Randonnée des templiers 2017"
         distance="34"
         place="Moselle 57"
         date="03/2017"
         description="Tour autour de Metz"
         done={false}
      />
    </TrackSection>
  </ScrollView>

export default WelcomeList

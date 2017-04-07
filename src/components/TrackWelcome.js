import React, { Component } from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { connect } from 'react-redux'
import { gql, graphql } from 'react-apollo'
import { Spinner, TrackWelcomeList } from './common'

class TrackWelcome extends Component {
  render() {
    const { tabBarTextStyle } = styles
    const { categories, loading } = this.props.data
    if (loading || !categories) {
      return (
        <Spinner size="large" />
      )
    }
    return (
      <ScrollableTabView
        style={{ paddingTop: 55 }}
        tabBarTextStyle={tabBarTextStyle}
        tabBarBackgroundColor="#F5F5F5"
      >
        { categories.map((category) => (
          <TrackWelcomeList
            tabLabel={category.name}
            categoryId={category.id}
            key={category.id}
          />
          )
        )}
      </ScrollableTabView>
    )
  }
}

const styles = {
  tabBarTextStyle: {
    color: '#000000',
    opacity: 0.87
  }
}

const categoriesQuery = gql`
  query categoriesQuery {
    categories {
      id
      code
      name
    }
  }
`

export default connect(
  null,
  null
)(graphql(categoriesQuery)(TrackWelcome))

import React from 'react'
import { Picker } from 'react-native'
import { connect } from 'react-redux'
import { gql, graphql } from 'react-apollo'
import { Spinner } from '../common'
import { categoryChanged } from '../../redux/actions'

const CurrentCategoryPickerUnlinked = (props) => {
  if (props.data.loading) {
    return (
      <Spinner size="small" />
    )
  }
  return (
    <Picker
      mode="dropdown"
      selectedValue={props.currentCategory}
      onValueChange={(category) => props.categoryChanged(category)}
    >
      {props.data.categories.map((category) => {
        return (
          <Picker.Item label={category.name} key={category.id} value={category.id} />
        )
      })}
    </Picker>
  )
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

const mapStateToProps = (state) => ({
  currentCategory: state.global.category
})

const CurrentCategoryPicker = connect(
  mapStateToProps,
  { categoryChanged }
)(graphql(categoriesQuery)(CurrentCategoryPickerUnlinked))

export { CurrentCategoryPicker }

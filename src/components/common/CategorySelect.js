import React from 'react'
import { Select, Option } from 'react-native-chooser'
import { gql, graphql } from 'react-apollo'

const CategorySelectUnlinked = (props) => {
  const options = props.data.categories.map((category) => {
    return <Option key={category.code} value={category.code}>{category.name}</Option>
  })
  return (
    <Select
      onSelect={props.onSelect}
      defaultText="Catégorie"
      transparent
      indicator="down"
      indicatorColor="#000"
      indicatorStyle={{ opacity: 0.38 }}
      textStyle={styles.textStl}
      style={styles.selectStl}
      optionListStyle={styles.selectionBoxStl}
      selectedStyle={styles.selectStl}
      selected={props.selected}
    >
      {options}
    </Select>
  )
}

const styles = {
  selectStl: {
    width: 295,
    marginLeft: 0,
    paddingLeft: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb'
  },
  selectionBoxStl: {
    backgroundColor: '#fff'
  },
  selectedStl: {
    backgroundColor: '#E0E0E0'
  },
  textStl: {

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

const CategorySelect = graphql(categoriesQuery)(CategorySelectUnlinked)

export { CategorySelect }

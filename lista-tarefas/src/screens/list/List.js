import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, IconButton, TextInput } from 'react-native-paper'
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent'

export default function List() {

    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [edit, setEdit] = useState(false)
    const [itemEdit, setItemEdit] = useState(null)

    function adicionarItem() {
        console.log('ADICIONAR ITEM')
        let novoItem = items
        novoItem.push(inputValue)
        setItems(novoItem)
        setItemEdit(null)
        setInputValue('')
    }

    function editarItem() {
        console.log('EDITAR ITEM')
        console.log('itemSendoEditado: ', itemEdit)
        console.log('itemASerEditado inputvalue: ', inputValue)

        let index = items.indexOf(itemEdit)
        let novoItem = items

        novoItem.splice(index, 1, inputValue)

        setItems(novoItem)
        setEdit(false)
        setInputValue('')
    }

    function excluirItem(itens) {
      let novoItem = items.filter(item => item !== itens)
    }

    function handleEditarItem(itens) {
      setItemEdit(itens)
      setInputValue(itens)
      setEdit(true)
    }

    function handleButton() {
      console.log('HANDLE BUTTON -> editando: ', edit)
      if (edit) {
        editarItem()
      } else {
        adicionarItem()
      }
    }

  return (
    <View style={styles.container}>

      <View>
        <TextInput
          style={{ flex: 4 }}
          mode='outlined'
          label='Tarefa'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />

        <Button
          style={styles.button}
          mode='contained'
          onPress={handleButton}
        >

          {edit ? 'Edit' : 'Add'}
        
        </Button>

      </View>

      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            mode='outlined'
          >
            <CardContent style={styles.cardContent}>
              <Text variant='titleMedium' style={{ flex: 1}}>{item}</Text>
              <IconButton icon='pen' onPress={() => {
                handleEditarItem(item)
              }}/>
              <IconButton icon='trash-can-outline' onPress={() => {
                excluirItem(item)
              }}></IconButton>
            </CardContent>

          </Card>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    width: '95%',
    paddingTop: 10,
    gap: 5
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    width: '95%',
    marginTop: 10
  },
  card: {
    margin: 5
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export const state = () => ({
  categories: [
    {
      id: 1,
      category: 'Casa'
    },
    {
      id: 2,
      category: 'Diversão'
    },
    {
      id: 3,
      category: 'Saúde'
    },
    {
      id: 4,
      category: 'Transporte'
    },
    {
      id: 5,
      category: 'Outros'
    },
    {
      id: 6,
      category: 'Alimentação'
    },
    {
      id: 7,
      category: 'Educação'
    },
    {
      id: 8,
      category: 'Lazer'
    },
    {
      id: 9,
      category: 'Salário'
    },
    {
      id: 10,
      category: 'Bonus'
    }
  ],
  transactions: [
    {
      id: 1,
      category: 'Casa',
      description: 'Aluguel',
      value: '-100',
      date: '2020-01-01'
    },
    {
      id: 2,
      category: 'Casa',
      description: 'Condomínio',
      value: '-150',
      date: '2020-01-01'
    },
    {
      id: 3,
      category: 'Diversão',
      description: 'Cinema',
      value: '-50',
      date: '2020-01-01'
    },
    {
      id: 4,
      category: 'Salário',
      description: 'Salário',
      value: '1000',
      date: '2020-01-01'
    }
  ]
})

export const mutations = {
  addTransaction (state, transaction) {
    state.transactions.push(transaction)
  },
  removeTransaction (state, transaction) {
    const index = state.transactions.find(t => t.id === transaction.id)
    state.transactions.splice(state.transactions.indexOf(index), 1)
  },
  updateTransaction (state, transaction) {
    const index = state.transactions.find(t => t.id === transaction.id)
    state.transactions.splice(state.transactions.indexOf(index), 1, transaction)
  }
}

export const actions = {
   addTransaction(state, transaction) {
     let category = this.state.categories.find(category => category.id === Number(transaction.category))

     let transactionToAdd = {
      id: this.state.transactions.length + 1,
      category: category.category,
      description: transaction.description,
      value: transaction.value,
      date: transaction.date
    }

    this.commit('addTransaction', transactionToAdd)
  },
  removeTransaction(state, transaction) {
    this.commit('removeTransaction', transaction)
  },
  updateTransaction(state, transaction) {

    let category = this.state.categories.find(category => category.id === Number(transaction.category))

    let transactionToRemove = {
      id: transaction.id,
      category: category.category,
      description: transaction.description,
      value: transaction.value,
      date: transaction.date
    }

    this.commit('updateTransaction', transactionToRemove)
  }
}


export const getters = {
  categories(state) {
    return state.categories
  },
  transactions(state) {
    return state.transactions.map(transaction => {
      return {
        ...transaction,
        valueMoney: Number(transaction.value).toLocaleString('pt-BR',
          { style: 'currency', currency: 'BRL',
            signDisplay: 'never'
          }),
        categoryId: state.categories.find(category => category.category === transaction.category).id
      }
    })
  },
  totalDespenses(state) {
    let totalCalculate = state.transactions.reduce((total, transaction) => {
      if (Number(transaction.value) > 0) {
        return total
      } else {
        return total + Number(transaction.value)
      }
    },0)

    return Number(totalCalculate).toLocaleString('pt-BR',
      { style: 'currency', currency: 'BRL',
        signDisplay: 'never'
      })
  },
  totalReceived(state) {
    let totalCalculate = state.transactions.reduce((total, transaction) => {
      if (Number(transaction.value) > 0) {
        return total + Number(transaction.value)
      } else {
        return total
      }
    },0)

    return Number(totalCalculate).toLocaleString('pt-BR',
      { style: 'currency', currency: 'BRL',
        signDisplay: 'never'
      })
  },

  totalFinal(state) {
    let totalCalculate = state.transactions.reduce((total, transaction) => {
      return total + Number(transaction.value)
    },0)

    return Number(totalCalculate).toLocaleString('pt-BR',
      { style: 'currency', currency: 'BRL',
        signDisplay: 'never'
      })
  },
}


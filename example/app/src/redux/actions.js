export const TODO_SOMETHING = 'TODO_SOMETHING'

export const todoSomething = (text) => {
  return {
    type: TODO_SOMETHING,
    payload: text
  }
}

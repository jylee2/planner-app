export type HeaderPropsType = {
  title?: string
}

export type AddItemPropsType = {
  addItem?: (text:string) => void
}

export type ItemsType = {
  id?: string
  text?: string
}

export type ListItemPropsType = {
  item?: ItemsType
  deleteItem?: (id:string) => void
}


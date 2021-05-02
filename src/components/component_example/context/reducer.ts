export const state = {
    items:{} as Record<string, ItemProps>,
}

type StoreProps = typeof state;

type Action = {type:string,payload:any}

type ItemProps = {
    id: string;
    value: string;
    isDone: boolean;
}


const strategies: Partial<Record<string, (store:StoreProps,item:any)=>StoreProps>> = {
    'ADD_ITEM': (store: StoreProps, item: ItemProps) => store,
    'REMOVE_ITEMS': (store: StoreProps, item: ItemProps) => store,
    'CHANGE_ITEM': (store: StoreProps, item: ItemProps) => store,
    'SET_ITEMS':(store: StoreProps, item: ItemProps) => store,
}

export const reducer = (state: StoreProps, { type, payload }: Action) => strategies[type]?.(state, payload) ?? state


export default reducer;
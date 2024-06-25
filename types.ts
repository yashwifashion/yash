export interface Products {
    _id: number,
    title: string,
    image: string,
    rating: number,
    isNew: boolean,
    category: string,
    description: string,
}

export interface ItemProps {
    item: Products,
}

export interface StateProps {
    shopping: {
        productData: [],
        userInfo: {},
        orderData: {
			order: unknown
            orderData: {
                order: Products[]
            }
        }
    }
}
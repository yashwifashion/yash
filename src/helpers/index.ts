import { productData } from "@/constants/data";

export const getProducts = async () => {
	return productData;
};

export const getSingleProduct = (_id: number) => {
	const item = productData.find((product) => product._id === _id);
	return item;
};

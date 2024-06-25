import Container from "@/components/Container";
import { getSingleProduct } from "@/helpers";
import { Products } from "../../../types";
import ProductsData from "@/components/ProductsData";
import SingleProduct from "@/components/SingleProduct";

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ searchParams }: Props) => {
	const _idString = searchParams?._id;
	const id = Number(_idString);
	const product = getSingleProduct(id);

	return (
		<Container>
			<SingleProduct product={product} />
		</Container>
	);
};

export default ProductPage;

import { Skeleton } from "@mui/material";
import "./LoadingProduct.css";

export interface ProductType {
	id?: string;
	imageUrl?: string;
	name?: string;
	description?: string;
	sizes?: string[];
}

export default function LoadingProduct() {
	return (
		<div className="container page-wrapper">
			<div className="page-inner">
				<div className="row">
					<div className="el-wrapper">
						<div className="box-up">
							<Skeleton
								variant="rounded"
								style={{
									height: "100%",
									minWidth: "200px",
								}}
							/>
						</div>

						<div className="box-down">
							<Skeleton
								style={{
									height: "100%",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

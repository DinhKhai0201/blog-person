import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../styles/post.css';

export default class Post extends Component {

	componentDidMount(){
		let id = this.props.match.params.id;
	    let post = this.props.getPostId(id);
	    console.log(post);
	}
	render() {
		const { isLoading } = this.props;
		
		return (
			<Fragment>
				<div className ="content-post">
					<div className="hero">
						<h1><span>I'm a cool</span><br />Navigation</h1>
						<div className="mouse">
							<span />
						</div>
					</div>
					<div className="row content content-row">
						<h1 className="sec01">Section 01</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, recusandae, at, labore velit eligendi amet nobis repellat natus sequi sint consectetur excepturi doloribus vero provident consequuntur accusamus quisquam nesciunt cupiditate soluta alias illo et deleniti voluptates facilis repudiandae similique dolore quaerat architecto perspiciatis officiis dolor ullam expedita suscipit neque minima rem praesentium inventore ab officia quos dignissimos esse quam placeat iste porro eius! Minus, aspernatur nesciunt consectetur. Sit, eius, itaque, porro, beatae impedit officia tenetur reiciendis autem vitae a quae ipsam repudiandae odio dolorum quaerat asperiores possimus corporis optio animi quisquam laboriosam nihil quam voluptatum quidem veritatis iste culpa iure modi perspiciatis recusandae ipsa libero officiis aliquam doloremque similique id quasi atque distinctio enim sapiente ratione in quia eum perferendis earum blanditiis. Nobis, architecto, veniam molestias minus iste necessitatibus est ab in earum ratione eveniet soluta molestiae sed illo nostrum nemo debitis. Minus, quod totam aliquam ea asperiores fugit quaerat excepturi dolores ratione numquam consequatur id unde alias provident vero incidunt exercitationem similique consequuntur hic possimus? Fuga, eveniet quaerat inventore corporis laborum eligendi enim soluta obcaecati aliquid veritatis provident amet laudantium est quisquam dolore exercitationem modi? Distinctio, pariatur, ab velit praesentium vitae quidem consequatur deleniti recusandae odit officiis. Quidem, cupiditate.</p>
						<h1 className="sec02">Section 02</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, recusandae, at, labore velit eligendi amet nobis repellat natus sequi sint consectetur excepturi doloribus vero provident consequuntur accusamus quisquam nesciunt cupiditate soluta alias illo et deleniti voluptates facilis repudiandae similique dolore quaerat architecto perspiciatis officiis dolor ullam expedita suscipit neque minima rem praesentium inventore ab officia quos dignissimos esse quam placeat iste porro eius! Minus, aspernatur nesciunt consectetur. Sit, eius, itaque, porro, beatae impedit officia tenetur reiciendis autem vitae a quae ipsam repudiandae odio dolorum quaerat asperiores possimus corporis optio animi quisquam laboriosam nihil quam voluptatum quidem veritatis iste culpa iure modi perspiciatis recusandae ipsa libero officiis aliquam doloremque similique id quasi atque distinctio enim sapiente ratione in quia eum perferendis earum blanditiis. Nobis, architecto, veniam molestias minus iste necessitatibus est ab in earum ratione eveniet soluta molestiae sed illo nostrum nemo debitis. Minus, quod totam aliquam ea asperiores fugit quaerat excepturi dolores ratione numquam consequatur id unde alias provident vero incidunt exercitationem similique consequuntur hic possimus? Fuga, eveniet quaerat inventore corporis laborum eligendi enim soluta obcaecati aliquid veritatis provident amet laudantium est quisquam dolore exercitationem modi? Distinctio, pariatur, ab velit praesentium vitae quidem consequatur deleniti recusandae odit officiis. Quidem, cupiditate.</p>
						<h1 className="sec03">Section 03</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, recusandae, at, labore velit eligendi amet nobis repellat natus sequi sint consectetur excepturi doloribus vero provident consequuntur accusamus quisquam nesciunt cupiditate soluta alias illo et deleniti voluptates facilis repudiandae similique dolore quaerat architecto perspiciatis officiis dolor ullam expedita suscipit neque minima rem praesentium inventore ab officia quos dignissimos esse quam placeat iste porro eius! Minus, aspernatur nesciunt consectetur. Sit, eius, itaque, porro, beatae impedit officia tenetur reiciendis autem vitae a quae ipsam repudiandae odio dolorum quaerat asperiores possimus corporis optio animi quisquam laboriosam nihil quam voluptatum quidem veritatis iste culpa iure modi perspiciatis recusandae ipsa libero officiis aliquam doloremque similique id quasi atque distinctio enim sapiente ratione in quia eum perferendis earum blanditiis. Nobis, architecto, veniam molestias minus iste necessitatibus est ab in earum ratione eveniet soluta molestiae sed illo nostrum nemo debitis. Minus, quod totam aliquam ea asperiores fugit quaerat excepturi dolores ratione numquam consequatur id unde alias provident vero incidunt exercitationem similique consequuntur hic possimus? Fuga, eveniet quaerat inventore corporis laborum eligendi enim soluta obcaecati aliquid veritatis provident amet laudantium est quisquam dolore exercitationem modi? Distinctio, pariatur, ab velit praesentium vitae quidem consequatur deleniti recusandae odit officiis. Quidem, cupiditate.</p>
						<h1 className="sec04">Section 04</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, recusandae, at, labore velit eligendi amet nobis repellat natus sequi sint consectetur excepturi doloribus vero provident consequuntur accusamus quisquam nesciunt cupiditate soluta alias illo et deleniti voluptates facilis repudiandae similique dolore quaerat architecto perspiciatis officiis dolor ullam expedita suscipit neque minima rem praesentium inventore ab officia quos dignissimos esse quam placeat iste porro eius! Minus, aspernatur nesciunt consectetur. Sit, eius, itaque, porro, beatae impedit officia tenetur reiciendis autem vitae a quae ipsam repudiandae odio dolorum quaerat asperiores possimus corporis optio animi quisquam laboriosam nihil quam voluptatum quidem veritatis iste culpa iure modi perspiciatis recusandae ipsa libero officiis aliquam doloremque similique id quasi atque distinctio enim sapiente ratione in quia eum perferendis earum blanditiis. Nobis, architecto, veniam molestias minus iste necessitatibus est ab in earum ratione eveniet soluta molestiae sed illo nostrum nemo debitis. Minus, quod totam aliquam ea asperiores fugit quaerat excepturi dolores ratione numquam consequatur id unde alias provident vero incidunt exercitationem similique consequuntur hic possimus? Fuga, eveniet quaerat inventore corporis laborum eligendi enim soluta obcaecati aliquid veritatis provident amet laudantium est quisquam dolore exercitationem modi? Distinctio, pariatur, ab velit praesentium vitae quidem consequatur deleniti recusandae odit officiis. Quidem, cupiditate.</p>
					</div>
				</div>
			</Fragment>
		)
	}
}

Post.propTypes = {
	getPostId: PropTypes.func,
	isLoading: PropTypes.bool
};
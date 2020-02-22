
import React from 'react';

import { HomeContainer } from './components/home/homeContainer';
import { PostContainer } from './components/post/postContainer';
import { CategoryContainer } from './components/category/categoryContainer';
import { AccountContainer } from './components/account/accountContainer';
import { ContactContainer } from './components/contact/contactContainer';
import { BlogContainer } from './components/blog/blogContainer';
import  NotFoundPage from './common/component/NotFound';

const routes =[
	{
		path: "/",
		exact: true,
		main: ()=> <HomeContainer />
	},
	{
		path: "/post/:id",
		exact: false,
		main: ()=> <PostContainer />
	},
	{
		path: "/category/:slug",
		exact: false,
		main: ()=> <CategoryContainer />
	},
	{
		path: "/contact",
		exact: false,
		main: ()=> <ContactContainer />
	},
	{
		path: "/login",
		exact: false,
		main: ()=> <AccountContainer />
	},
	{
		path: "/compose",
		exact: false,
		main: ()=> <BlogContainer />
	},
	{
		path: "*",
		exact: false,
		main: ()=> <NotFoundPage />
	},

];
export  default  routes;
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Layout } from './layout/Menu/Layout';
import { Product } from './pages/Product/Product';
import axios from 'axios';
import { PREFIX } from './helpers/API';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { AuthLayout } from './layout/Auth/AuthLayout';
import { RequireAuth } from './helpers/RequireAuth';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Success } from './pages/Success/Success';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/online_store/',
		element: (
			
			<RequireAuth>
				<Layout />
			</RequireAuth>
		),
		children: [
			{
				path: '',
				element: (
					<Suspense fallback={<>Загрузка...</>}>
						<Menu />
					</Suspense>
				)
			},
			{
				path: 'success',
				element: (
					<Success/>
				)
			},
			{
				path: 'cart',
				element: <Cart />
			},
			{
				path: 'product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return defer({
						data: new Promise<void>((resolve, reject) => {
							setTimeout(() => {
								axios
									.get(`${PREFIX}/products/${params.id}`)
									.then((response) => resolve(response.data))
									.catch((e) => reject(e));
							}, 2000);
						})
					});
				}
			}
		]
	},
	{
		path: '/online_store/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	},

	{
		path: '*',
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

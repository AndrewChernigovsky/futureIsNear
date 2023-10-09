'use client'

import { FC } from 'react'
import type { NextPage } from 'next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Layout from '@/components/globals/Layout/Layout'
import styles from './Register.module.scss'

const schema = Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string().required().email(),
	password: Yup.string().required().min(7),
})

const authPage: NextPage = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},

		validationSchema: schema,

		onSubmit: async ({ name, email, password }) => {},
	})
	const { errors, touched, values, handleChange, handleSubmit } = formik

	return (
		<Layout>
			<h1>Регистрация</h1>
			<div className={styles.wrapper}>
				<form
					onSubmit={handleSubmit}
					method="POST"
					className={styles.formAuth}
					action="/api/register"
				>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={values.name}
						onChange={handleChange}
						id="name"
					/>
					{errors.name && touched.name && <span>{errors.name}</span>}

					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						value={values.email}
						onChange={handleChange}
						id="email"
					/>
					{errors.email && touched.email && (
						<span>{errors.email}</span>
					)}

					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={values.password}
						onChange={handleChange}
						id="password"
					/>
					{errors.password && touched.password && (
						<span>{errors.password}</span>
					)}

					<button type="submit">Submit</button>
				</form>
			</div>
		</Layout>
	)
}

export default authPage

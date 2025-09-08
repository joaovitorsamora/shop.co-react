import React from 'react'
import { render, screen } from '@testing-library/react';
import { HeaderTopPromo } from "../../HeaderTopPromo";
import { HeaderMenu } from "../../HeaderMenu";
import { HeaderSearch } from "../../HeaderSearch";
import { HeaderIcons } from "../../HeaderIcons";
import userEvent from '@testing-library/user-event';
import { Header } from '../Header';

describe('Header', () => {
    const user = userEvent
    const handleChange = jest.fn()
    it('render Header top promo compnent with the given label', () => {
        render(<Header
            logoText='SHOP.CO'
            menuLinks={[{ text: 'Shop', href: '#' }, { text: 'On Sale', href: '#' }, { text: 'New Arrivals', href: '#' }, { text: 'Brands', href: '#' }]}
            icons={[{ icon: <img src={'./assets/pesquisa-icon.png'} alt="Logo" />, href: '#' }, { icon: <img src={'./assets/shop-icon.png'} alt="Logo" />, href: '#' }, { icon: <img src={'./assets/profile-icon.png'} alt="Logo" />, href: '#' }]}
            textSignUp='Sign Up Now'
            textPromo='Sign up and get 20% off to your first order.'
            onChange={handleChange}
            placeholder='Search for products'
            renderIcon={() => <img src={'./assets/menu-icon.png'} alt="Logo" />}
        />)
        render(<HeaderTopPromo textPromo='Sign up and get 20% off to your first order.' textSignUp='Sign Up Now'/>)
        expect(screen.getByText('Sign up and get 20% off to your first order.')).toBeInTheDocument()
        expect(screen.getByText('Sign Up Now')).toBeInTheDocument()
         expect(screen.getByText('SHOP.CO')).toBeInTheDocument()
        expect(screen.getByText('Shop')).toBeInTheDocument()
        expect(screen.getByText('On Sale')).toBeInTheDocument()
        expect(screen.getByAltText('Logo1')).toBeInTheDocument()
        expect(screen.getByAltText('Logo2')).toBeInTheDocument()
    })

    it('render Header Menu component', () => {
        render(<HeaderMenu logoText='SHOP.CO' menuLinks={[{ text: 'Shop', href: '#' }, { text: 'On Sale', href: '#' }, { text: 'New Arrivals', href: '#' }, { text: 'Brands', href: '#' }]} renderIcon={() => <img src={'./assets/menu-icon.png'} alt="Logo" />}/>)
       
        render(<HeaderIcons icons={[{ icon: <img src={'./assets/pesquisa-icon.png'} alt="Logo2" />, href: '#' }]} />)
        expect(screen.getByText('SHOP.CO')).toBeInTheDocument()
        expect(screen.getByText('Shop')).toBeInTheDocument()
        expect(screen.getByAltText('Logo1')).toBeInTheDocument()
        expect(screen.getByAltText('Logo2')).toBeInTheDocument()

        const user = userEvent
        const handleChange = jest.fn()
        render(<HeaderSearch onChange={handleChange} placeholder='Search for products' />)
        const input = screen.getByPlaceholderText('Search for products')
        user.type(input, 'Camisa')

        expect(handleChange).toHaveBeenCalled()

    })
})
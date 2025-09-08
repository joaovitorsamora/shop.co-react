import { render, screen } from "@testing-library/react"
import { ProductCard } from "../ProductCard"

jest.mock("../../../hooks/useFetchProductsImage", () => ({
  useFetchProductsImage: () => ({
    image: "fake-image.png",
    starsImage: "fake-stars.png"
  })
}));

describe("ProductCard", () => {

    render(<ProductCard
        id={1}
        image="fake-image.png"
        price="99.99"
        reviews={10}
        starsReview="5"
        title="Produto Teste"
        discount="20%"
        oldPrice="129.99"
    />)

    expect(screen.getByAltText('Produto Teste')).toHaveAttribute('src', 'fake-image.png')
    expect(screen.getByText('Produto Teste')).toBeInTheDocument();
    expect(screen.getByText('99.99', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('129.99', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('20%', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('10/5')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Avaliação: 10 de 5 estrelas/i })).toBeInTheDocument();
  
})
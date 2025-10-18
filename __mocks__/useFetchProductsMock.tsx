export const useFetchProducts = jest.fn().mockReturnValue({
  products: [{ id: 1, name: 'Produto Fake', image: '/fake.png', starsReview: '/stars.png' }],
  testimonials: [
    { id: 1, name: 'Usuário Fake', verificationImage: '/check.png', starsReview: '/stars.png' },
  ],
  error: null,
});

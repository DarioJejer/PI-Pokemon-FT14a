import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// const pokemons = [
//   {
//     name: "Pikachu"
//   },
//   {
//     name: "Raichu"
//   }
// ]

// describe('<Pokemons />', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<Pokemons pokemons={pokemons}/>);
//   });
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//   it('It should have 2 elements PokeCard on display', () => {
//     const pcs = wrapper.findAll(Pokecard);
//     expect(pcs.toHaveLength(2));
//   });
//   it('The PokeCards should have recive the corresponding data', () => {
//     const pcs = wrapper.findAll('Pokecard');
//     expect(pcs[0].prop('props')).toEqual({name:"Pikachu"});
//     expect(pcs[1].prop('props')).toEqual({name:"Raichu"});
//   });
//   it('The PokeCards should have recive the corresponding data', () => {
//     const pbs = wrapper.findAll('PaginationBar');
//     expect(pbs.toHaveLength(1));
//   });
// });



// describe('LandingPage', () => {
//   let store;
//   const wrapper;
//   beforeEach(() => {
//     store = mockStore([]);
//     wrapper= mount(
//         <Provider store={store}>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </Provider>
//     );
//   });
//   describe('The component Landing Page should be render on the route "/"', () => {
//   it('Should appear on "/"', () => {
//       expect(wrapper.find(LandingPage)).toHaveLength(1);
//   })
//   it('The component pokemons must not be render on the route "/"', () => {
//       expect(wrapper.find(Pokemons)).toHaveLength(0);
//     });
//   })
// });
import { render } from "@testing-library/react";
import { FirstApp } from '../../src/components/FirstApp';

describe('test in the fist component <FistApp/> ', () => { 
    // test('return snapshot of component', () => {
    //     const title = 'My FirstApp'
    //     const name = 'Bryan Muñoz';
    //     const { container } = render(<FirstApp title={ title }/>)
    //     expect ( container ).toMatchSnapshot();


    // })

    test(' debe mostrar el titulo de un h1', ()=> {
        const title = "hola soy goku";
        const { container, getByText ,getByTestId} = render(<FirstApp title={ title   } />);
        expect ( getByText(title) ).toBeTruthy();

        expect ( getByTestId('test-title').innerHTML).toContain(title);

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
    })

    test('debe mostrar el subtitle mostrado por props', () => {
        const subtitle = "subtitulo jaja";
        const { getAllByText } = render(<FirstApp title={'Hola soy goku'} subTitle={ subtitle } />);
        expect( getAllByText(subtitle).length ).toBe(2);
    })

 })
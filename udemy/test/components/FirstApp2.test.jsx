import { render, screen } from "@testing-library/react";
import { FirstApp } from '../../src/components/FirstApp';

describe('test in the fist component <FistApp/> ', () => { 

    const title = 'Hola Mundo'
    const subTitle = 'Este es el subtitulo.'

    test('debe hacer mach con el snapshot', () => {
        const { container } = render(<FirstApp title={ title }/>);
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el mensaje "Hola Mundo"', ()=> {
        render(<FirstApp title={ title }/>);
        // screen.debug();u
        expect(screen.getByText(title)).toBeTruthy();
    })

    test('debe de mostrar el titulo de un h1', ()=> {
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })

    test('debe mostrar el subtitulo enviado por las props', ()=>{
        render(<FirstApp title={title} subTitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(2);
    })

 })
import { render, screen,fireEvent } from "@testing-library/react";
import CounterApp from './../../src/components/CounterApp';

describe('test en el componente <CounterApp/>', ()=> {
    
    const value = 10;

    test('debe hacer mach con el snapshot', ()=> {
        const {container} = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={value}/>);
        expect(screen.getByText(value)).toBeTruthy();
    })

    test('test con boton: debe incrementar con el boton +1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText("+1"))
        expect( screen.getByText("11")).toBeTruthy();
    })

    test('test con boton: debe decrementar con el boton -1', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText("-1"))
        expect( screen.getByText("9")).toBeTruthy();
    })

    test('test con boton: debe volver al valor:' + value, () => {
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText("+1"))
        fireEvent.click( screen.getByText("+1"))
        fireEvent.click( screen.getByText("+1"))
        fireEvent.click( screen.getByText("reset"))
        expect( screen.getByText("10")).toBeTruthy();
    })
})
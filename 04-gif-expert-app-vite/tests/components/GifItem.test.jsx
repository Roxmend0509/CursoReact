import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe(' Pruebas en <GifItem />',() => {

    test('Debe hacer match con el snapshot', () => { 
        const title = 'Hardy'
        const url = 'https://media4.giphy.com/media/KDQ25pahVfwGRvvT9X/giphy.gif?cid=77f5f3b1aa2bpja40g7trcb4hnxhhp33h0tx4jy0mufyaulp&rid=giphy.gif&ct=g'
        
        const {container} = render(<GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot();
     })

})
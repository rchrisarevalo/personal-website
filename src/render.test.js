import { render, screen } from '@testing-library/react'
import Intro from './components/Intro.jsx';

it ('renders website', () => {
    render(<Intro />);
});
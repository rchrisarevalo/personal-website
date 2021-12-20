import { render } from '@testing-library/react';

// Components that will be tested to check if they are rendered correctly
import Nav from "./Nav.jsx";
import CurrentPosts from './components/CurrentPosts.jsx';
import RecentPosts from "./components/RecentPosts.jsx";
import Load from "./components/Load.jsx";
import Notification from "./components/Notification.jsx";
import Posts from "./components/Posts.jsx";
import Intro from "./components/Intro.jsx";
import Update from './components/Update.jsx';
import Works from './Works.jsx';
import Archives from "./components/Archives.jsx";
import NewFooter from "./NewFooter.jsx";

test('renders Load Screen components correctly', () => {
  render(<Load />);
});

test('render Nav component correctly', () => {
  render(<Nav />);
});

test('renders Intro component correctly', () => {
  render(<Intro />);
});

test('renders Works component correctly', () => {
  render(<Works />);
})

test('renders Posts component correctly', () => {
  render(<Posts />);
});

test('renders CurrentPosts component correctly', () => {
  render(<CurrentPosts />);
});

test('renders RecentPosts component correctly', () => {
  render(<RecentPosts />);
});

test('renders Archives component correctly', () => {
  render(<Archives />);
});

test('renders Notification component correctly', () => {
  render(<Notification />);
});

test('renders Update component correctly', () => {
  render(<Update />);
})

test('renders NewFooter component correctly', () => {
  render(<NewFooter />);
})
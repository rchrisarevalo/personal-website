import { render } from '@testing-library/react';

// Components that will be tested to check if they are rendered correctly
import Nav from "./Nav.jsx";
import CurrentPosts from './components/CurrentPosts.jsx';
import RecentPosts from "./components/RecentPosts.jsx";
import Load from "./components/Load.jsx";
import Notification from "./components/Notification.jsx";
import Posts from "./components/Posts.jsx";
import August2021Posts from './components/2021 Posts Components/August2021Posts.jsx';
import September2021Posts from './components/2021 Posts Components/September2021Posts.jsx';
import October2021Posts from './components/2021 Posts Components/October2021Posts.jsx';
import November2021Posts from './components/2021 Posts Components/November2021Posts.jsx';
import December2021Posts from './components/2021 Posts Components/December2021Posts.jsx';
import January2022Posts from './components/2022 Posts Components/January2022Posts.jsx';
import Intro from "./components/Intro.jsx";
import Update from './components/Update.jsx';
import Works from './Works.jsx';
import Archives from "./components/Archives.jsx";
import WebsiteOperation from './components/policies/WebsiteOperation.jsx';
import ArchivePolicy from './components/policies/ArchivePolicy.jsx';
import NewFooter from "./NewFooter.jsx";
import Error404 from "./components/Error404.jsx";

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
});

test('renders Posts component correctly', () => {
  render(<Posts />);
});

test('renders CurrentPosts component correctly', () => {
  render(<CurrentPosts />);
});

test('renders RecentPosts component correctly', () => {
  render(<RecentPosts />);
});

test('renders archives 2021 posts components correctly', () => {
  render(<August2021Posts />);
  render(<September2021Posts />);
  render(<October2021Posts />);
  render(<November2021Posts />);
  render(<December2021Posts />);
});

test('renders archives 2022 posts components correctly', () => {
  render(<January2022Posts />);
});

test('renders Archives component correctly', () => {
  render(<Archives />);
});

test('renders WebsiteOperation component correctly', () => {
  render(<WebsiteOperation />);
});

test('renders ArchivePolicy component correctly', () => {
  render(<ArchivePolicy />);
});

test('renders Notification component correctly', () => {
  render(<Notification />);
});

test('renders Update component correctly', () => {
  render(<Update />);
});

test('renders NewFooter component correctly', () => {
  render(<NewFooter />);
});

test('renders Error404 component correctly', () => {
  render(<Error404 />);
});
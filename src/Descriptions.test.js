import { render, screen } from '@testing-library/react';
import Nav from './Nav.jsx';
import NewFooter from './NewFooter.jsx';
import Intro from './components/Intro.jsx';
import CurrentPosts from './components/CurrentPosts.jsx';
import Archives from './components/Archives.jsx';
import WebsiteOperation from "./components/policies/WebsiteOperation.jsx";
import Archival from "./components/policies/ArchivePolicy.jsx";

test('checks that Nav has logo', () => {
    render(<Nav />);
    const logo = screen.getByText("Ruben C. Arevalo");
    expect(logo).toBeInTheDocument();
});

test('checks that navigation bar has descriptions', () => {
    render(<Nav/>);
    const link1 = screen.getByText("About Me");
    const link2 = screen.getByText("Announcements");
    const link3 = screen.getByText("Archives");
    const contactLink = screen.getByText("Contact Me");

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
});

test('checks that NewFooter has logo', () => {
    render(<NewFooter/>);
    const footer_logo = screen.getByText("Ruben C. Arevalo");
    expect(footer_logo).toBeInTheDocument();
});

test('checks that NewFooter has correct links', () => {
    render(<NewFooter />);
    const footer_link_1 = screen.getByText("GitHub");
    const footer_link_2 = screen.getByText("LinkedIn");
    const footer_link_3 = screen.getByText("Site Operation");
    const footer_link_4 = screen.getByText("Archival");

    expect(footer_link_1).toBeInTheDocument();
    expect(footer_link_2).toBeInTheDocument();
    expect(footer_link_3).toBeInTheDocument();
    expect(footer_link_4).toBeInTheDocument();
});

test('checks that NewFooter has correct and current copyright year', () => {
    render(<NewFooter/>);

    const copyright_year = screen.getByText("© 2022 Ruben Christopher Arevalo. This page will not be copied, modified, reproduced, or distributed through unauthorized means.");
    expect(copyright_year).toBeInTheDocument();
});

test('checks that the About Me page has the correct header titles', () => {
    render(<Intro />);

    const header_intro_1 = screen.getByText("About the Author");
    const header_intro_2 = screen.getByText("Recent Announcements");
    const header_intro_3 = screen.getByText("Portfolio");

    expect(header_intro_1).toBeInTheDocument();
    expect(header_intro_2).toBeInTheDocument();
    expect(header_intro_3).toBeInTheDocument();
});

test('checks that the Announcements page has the right header title', () => {
    render(<CurrentPosts />);

    const header_announcements = screen.getByText("Announcements");
    expect(header_announcements).toBeInTheDocument();
});

test('checks that the Archives page has the right header title', () => {
    render(<Archives />);

    const archives_header = screen.getByText("Archives Log");
    expect(archives_header).toBeInTheDocument();
});

test('checks that the Archives page has the first five months of announcements since Site launched', () => {
    render(<Archives />);

    const year_1 = screen.getByText("2021:");
    const aug_2021 = screen.getByText("August");
    const sep_2021 = screen.getByText("September");
    const oct_2021 = screen.getByText("October");
    const nov_2021 = screen.getByText("November");
    const dec_2021 = screen.getByText("December");

    expect(year_1).toBeInTheDocument();
    expect(aug_2021).toBeInTheDocument();
    expect(sep_2021).toBeInTheDocument();
    expect(oct_2021).toBeInTheDocument();
    expect(nov_2021).toBeInTheDocument();
    expect(dec_2021).toBeInTheDocument();
});

test('checks that the Website Operation Policy page has the right headers', () => {
    render(<WebsiteOperation />);

    const title_header = screen.getByText("Website Operation Policy");
    const sub_header_1 = screen.getByText("Holidays");
    const sub_header_2 = screen.getByText("Updates");
    const sub_header_3 = screen.getByText("Natural Disasters");
    const sub_header_4 = screen.getByText("Personal Affairs");

    expect(title_header).toBeInTheDocument();
    expect(sub_header_1).toBeInTheDocument();
    expect(sub_header_2).toBeInTheDocument();
    expect(sub_header_3).toBeInTheDocument();
    expect(sub_header_4).toBeInTheDocument();
});

test('checks that the Archival Policy page has the right headers', () => {
    render(<Archival />);

    const title_header = screen.getByText("Archival Policy");
    const sub_header_1 = screen.getByText("Archival Time Period");
    const sub_header_2 = screen.getByText("Storage of Old Announcements");
    const sub_header_3 = screen.getByText("Archive Availability Period");

    expect(title_header).toBeInTheDocument();
    expect(sub_header_1).toBeInTheDocument();
    expect(sub_header_2).toBeInTheDocument();
    expect(sub_header_3).toBeInTheDocument();
});
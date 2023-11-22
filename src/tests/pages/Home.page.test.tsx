import { render, screen } from '@test-utils';
import { HomePage } from '@/pages/Home.page';

describe('Home page', () => {
  it('has correct information', () => {
    render(<HomePage />);

    expect(screen.getByText('PerforPadel App')).toBeInTheDocument();
    expect(screen.getByText('PerforPadel App')).toBeVisible();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { GeneralInformationHeader } from './GeneralInformationHeader';
import { GeneralInformation } from '../../../cv/types';

describe('GeneralInformationHeader', () => {
  test('should render', () => {
    render(<GeneralInformationHeader generalInformation={{} as GeneralInformation} />);

    expect(screen.getByText('GeneralInformationHeader')).toBeInTheDocument();
  });
});

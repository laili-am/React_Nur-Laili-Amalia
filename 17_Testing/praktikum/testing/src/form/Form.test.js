import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import {NameForm} from './FormCoding';
import '@testing-library/jest-dom/extend-expect'

describe("NameForm", () => {
it("should handle fields", () => {
    render(<NameForm />);
    const addButton = screen.getByRole("button", { name: /add name/i });
    
    fireEvent.click(addButton);
    expect(screen.getAllByRole("text", { name: /name/i })).toHaveLength(2);
    expect(screen.getAllByRole("text", { name: /amount/i })).toHaveLength(1);
  
    fireEvent.click(addButton);
    expect(screen.getAllByRole("text", { name: /name/i })).toHaveLength(3);
    expect(screen.getAllByRole("text", { name: /amount/i })).toHaveLength(2);
  
    fireEvent.click(
      screen.getByRole("button", { name: /reset/i })
    );
    expect(screen.getAllByRole("text", { name: /name/i })).toHaveLength(2);
    expect(screen.getAllByRole("text", { name: /amount/i })).toHaveLength(1);
  });
});
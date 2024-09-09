// components/NavigationButton.js
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface FormInputProps {
    href: string;
    text: string;
}

const NavigationButton: React.FC<FormInputProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <Button className="bg-purple-800 w-full">{text}</Button>
    </Link>
  );
};

export default NavigationButton;

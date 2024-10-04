// components/NavigationButton.js
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

// Definindo os tipos de props do botão de navegação
type ButtonType = "submit" | "reset" | "button";

interface NavigationButtonProps {
    href: string;
    text: string;
    type?: ButtonType; // O tipo é opcional e restringido
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ href, text, type = "button" }) => {
  return (
    <Link href={href} passHref>
      <Button type={type} className="bg-purple-800 w-full">
        {text}
      </Button>
    </Link>
  );
};

export default NavigationButton;
